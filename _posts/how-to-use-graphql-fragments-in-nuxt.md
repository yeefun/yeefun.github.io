---
title: 在 Nuxt.js 共用 GraphQL fragments
description: GraphQL fragments 是什麼？要怎麼在 Nuxt.js 不同檔案間共用？
date: 2020-10-01
tags: [nuxt, graphql, fragments]
---

最近公司打 API 的方式換成 [GraphQL](https://graphql.org/)，這邊紀錄一下怎麼在 [Nuxt.js](https://nuxtjs.org/) 用 GraphQL 的 [fragments](https://graphql.org/learn/queries/#fragments) 特性，來達到重複使用程式碼查詢（query）的效果。

## fragments 是什麼

fragments 是什麼？簡單來說，就是一個可重用的欄位（fields）片段，你可以在裡頭放好幾個查詢欄位，接著就可以拿這個片段放到不同的查詢物件中。

最簡單的範例長這樣：

```graphql
query posts {
  rightPosts: allPosts {
    ...postFields
  }
  
  leftPosts: allPosts {
    ...postFields
  }
}

fragment postFields on Post {
  id
  title
  heroImage {
    title
    urlMobileSized
  }
}
```

以 JavaScript 來類比，你可以想像 `postFields` 就是物件，而 `...postFields` 就像是把[物件展開（spread）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)一樣，能將 `postFields` 內聯到 `rightPosts` 和 `leftPosts` 物件中，所以最後 `rightPosts` 實際上是長這樣：

```graphql
query posts {
  rightPosts: allPosts {
    id
    title
    heroImage {
      title
      urlMobileSized
    }
  }
}
```

## 情境闡述

這是我在專案碰到的情況：我需要在網站的不同頁面去取得最新文章，它們的查詢欄位大致相同，但仍有些欄位不是每個查詢都需要的。

最簡單的做法當然就是每個查詢都寫好自己的欄位。這個方法很快，但缺點就是重複，之後修改共同欄位需要一次改好幾個地方。

另一個方法是使用指令（[directives](https://graphql.org/learn/queries/#directives)），藉由變數（[variables](https://graphql.org/learn/queries/#variables)）來動態地更改欄位，比如這樣：

```graphql
query posts($shouldQueryTitle: Boolean!) {
  allPosts {
    id
    title @include(if: $shouldQueryTitle)
  }
}
```

若 `shouldQueryTitle` 為 `true`，就會查詢 `title` 這個欄位，反之則不會。這個方法可行，但若需要客製化的欄位不少，實作起來會相當麻煩。

fragments 能怎麼解決這個問題呢？很簡單，看共用欄位有哪些，把它們抽取成 fragment，再用 `...` 內聯。

這個方法還有一個好處，就是它能**內聯嵌套查詢**，而非在第一層就整個覆蓋。比方說，下面這塊程式碼，`allPosts` 有兩個 `heroImage` 欄位，但裡頭查詢的欄位並不同：

```graphql
query posts {
  allPosts {
    ...postFields
    // highlight-next-line
    heroImage {
      urlTabletSized
    }
  }
}

fragment postFields on Post {
  id
  title
  // highlight-next-line
  heroImage {
    title
    urlMobileSized
  }
}
```

最後，`heroImage` 實際上是長這樣：

```graphql
heroImage {
  title
  urlMobileSized
  urlTabletSized
}
```

這可以讓我們在享受共用欄位的同時，還能客製化出不同的查詢內容。很方便吧！

## 在多個檔案間共用 fragments

如果你是在 Nuxt 中使用 GraphQL，可以參考 [@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module) 這個套件，它裡頭包著 [vue-apollo](https://github.com/vuejs/vue-apollo)。

要創建一個查詢，可以[利用 `gql` 標籤直接寫在 `apollo` 物件裡](https://apollo.vuejs.org/guide/apollo/queries.html#simple-query)，也可以[另開一個 `.graphql` 或 `.gql` 檔](https://github.com/apollographql/graphql-tag#importing-graphql-files)。我偏好後者，因為比較好管理。

回到 fragments。若是用檔案管理的方法，fragments 一般來說會放在使用它的檔案中。但如果我要在多個檔案間共用一個 fragment，那該怎麼做？

具體情境是這樣的：我有好幾個不同的查詢物件，它們都會去查詢 `heroImage` 和 `ogImage`，而這兩個欄位也都是物件，會去查詢 tiny、mobile、tablet、desktop、original 這五種尺寸的圖片。每次查詢都要寫這 5 * 2 個欄位，實在是有點麻煩——有沒有辦法把它們抽取成一個 fragment 呢？

在單一檔案中很簡單，就直接放在下面：

```graphql
query latestPosts {
  latestPosts: allPosts {
    id
    title
    heroImage {
      ...urls
    }
    ogImage {
      ...urls
    }
  }
}

fragment urls on Image {
  urlTinySized
  urlMobileSized
  urlTabletSized
  urlDesktopSized
  urlOriginal
}
```

但若要在多個檔案間共用，可以把這個 fragment 移入一個獨立的檔案。假設檔案結構長這樣：

```
apollo
├─fragments
   └─image-urls.gql <-- `urls` fragment is here!
└─queries
   ├─editor-choices.gql
   ├─collaborations.gql
   └─posts.gql
```

要怎麼把 `image-urls.gql` 導入到查詢檔案中使用呢？你可能會想說直接 `import`，但電腦會噴錯，因為 `import` 是 JS 語法，GraphQL 無法辨識。

那該怎麼辦？經過我一番搜索，其實你可以這麼做：

```graphql
# highlight-next-line
#import '../fragments/image-urls.gql'

query latestPosts {
  latestPosts: allPosts {
    id
    title
    heroImage {
      ...urls
    }
    ogImage {
      ...urls
    }
  }
}
```

只要在 `import` 前加上 `#` 變成註解，就能成功把 fragments 導進來囉（我猜這應該是 [graphql-loader](https://github.com/creditkarma/graphql-loader) 的功勞，但詳細怎麼做的就不清楚了）。

---
title: 初學者學 KMP 演算法
description: 一個初學者看得懂的 KMP 演算法。
date: 2020-12-22
tags: [algorithm, string, kmp]
update: 2020-12-27 21:52:00
---

第一次碰 KMP，被搞得暈頭轉向，花了兩天才搞定。只好趕緊寫下來，以免半小時後就忘記。

---

要怎麼在主串裡找到某個子串（模式）呢？

比如 `abcabcabe` 是主串，要怎麼找到 `abcabe` 這個子串？

最簡單的想法，就是從主串的第一個字跟子串的第一個字開始比，如果第一個字相同，再接著比第二個字，若第二個字也相同，再接著比第三個字⋯⋯如果不同，則主串回到第二個字、子串回到第一個字，接著主串的第二個字跟子串的第一個字比，如果相同，則主串的第三個字跟子串的第二個字比；如果不同，則主串回到第三個字，子串回到第一個字⋯⋯以此類推。

用程式碼表示就是這樣：

```javascript
function indexOfByBf(s, p) {
  let sI = 0;
  let pI = 0;

  while (sI < s.length && pI < p.length) {
    if (s[sI] === p[pI]) {
      sI += 1;
      pI += 1;
    } else {
      sI = sI - pI + 1;
      pI = 0;
    }
  }

  if (pI >= p.length) {
    return sI - p.length;
  } else {
    return -1;
  }
}
```

這個算法直觀，又叫暴力（Brute Force）算法。暴力儘管好用，但當主串一長，便顯得沒效率。它的時間複雜度最好和最壞分別是 `O(n + m)` 和 `O(n * m)`（假設主串的長度為 `n`，子串的長度為 `m`）。

## KMP 算法

要怎麼提高效率呢？首先，我們可以把匹配的時間複雜度分成兩個部分，一個是比較的趟（次）數，另一個是比較的字數。在暴力算法中，前者在最壞情況下為主串的長度，後者則為子串的長度。我們無法降低比較的字數（要找 `abc`，就只能 `abc` 一一比對，不然呢？），但可以減少比較的趟數。

要怎麼減少呢？這要看我們手上握有什麼資訊。當我們知道這一次比較找不到子串、準備回頭的那一刻，我們究竟獲得了什麼？這些資訊有辦法降低我們接下來比較的趟數嗎？

讓我們看看一個範例，主串是 `abcabcabcabe`、子串是 `abcabe`。第一次比較：

```
✔✔✔✔✔✗
abcabcabcabe
abcabe
✔✔✔✔✔✗
```

我們可以看到子串的第六個字 `e` 比較失敗了，這時暴力算法的第二次比較會這麼做：

```
 ↓
abcabcabcabe
 abcabe
 ↑
```

將子串向右移一格，也就是從主串的第**二**個字開始跟子串的第**一**個字比。不用一秒，你就知道這次比較不會成功（`b` 跟 `a` 不一樣）；再將子串向右移（從主串的第**三**個字開始跟子串的第**一**個字比），也不會成功⋯⋯我們有沒有辦法直接移到**可能**會成功的位置？

回到第一次比較失敗的那刻，滿足「可能成功」的主串位置的條件是什麼？至少那個位置開始的第一個字要與子串的第一個字相同吧！當然，第二個字相同也很好，第三個字相同更好⋯⋯依此邏輯，我們可以把我們要找的東西描述為：主串中的某個位置，這個位置開始的字符能**最多地**與子串的字符相同。

不過，還未比較的主串字符（即主串的倒數六個字符 `abcabe`），由於我們不知道它們的長相，因此也無從得知它們哪個位置能最多地與子串的字符相同。我們只能從已比較過且確認相符的字符去尋找正確的位置，即主串的前五個字符 `abcab`，**而這五個字符，其實也就是子串的前五個字符**。

單用眼睛看，我們可以很快地發現這個位置：

```
   ↓
abcabcabcabe
   abcabe
   ↑
```

但程式沒辦法這樣「看」，它需要方法去推導出來。這個方法就是，**拿子串匹配成功的部分（即 `abcab`）的前綴去對準自己的後綴**，而且這個對準的字符數要最多；換句話說，我們在找的是 `abcab` 的**次長共同前後綴（Longest Proper Prefix Which Is Also Suffix**，以下簡稱為 LPS。會說次長，是因為這個前後綴不能等於字串本身）。

一樣，先用簡單的方法來找：`abcab` 的（真）前綴有 `a`、`ab`、`abc`、`abca`；（真）後綴有 `b`、`ab`、`cab`、`bcab`。LPS 顯然是 `ab`，它的長度為 2。

得到這個數字後，我們就可以知道要從哪個位置開始比了。回到第一次比較失敗的那一刻：

```
     ✗
abcabcabcabe
abcabe
     ✗
```

現在，我們不要動主串指針的位置，只要將子串向右移三位：

```
     ↓
abcabcabcabe
   abcabe
     ↑
```

我們便可以從 `c` 開始比了。省去了跟主串的第二個字和第三個字比較的功（即減少比較的趟數），也跳過了從主串的第四個字開始比較時的頭兩個字 `ab` 的比較——是不是比暴力算法有效率多了？

到此，我們可以把 KMP 算法的程式寫出來了：

```javascript
function indexOfByKmp(s, p) {
  let sI = 0;
  let pI = 0;
  // highlight-next-line
  const next = getNext(s);

  while (sI < s.length && pI < p.length) {
    if (s[sI] === p[pI]) {
      sI += 1;
      pI += 1;
    } else if (pI <= 0) {
      sI += 1;
    } else {
      // 主串指針不動，只動子串指針
      pI = next[pI - 1];
    }
  }

  if (pI >= p.length) {
    return sI - p.length;
  } else {
    return -1;
  }
}
```

等等，`getNext` 是什麼東西？它回傳的是一個陣列，這個陣列含有一系列部分子串的 LPS 長，它是讓 KMP 算法得以運行的關鍵，接下來就讓我們來看看怎麼求得這個陣列。

## Next 表

以子串 `abcabe` 為例：

```
abcabe
000120
```

這張表的意思是：`a` 的 LPS 長為 0，`ab` 為 0、`abc` 也為 0、`abca` 則為 1、`abcab` 為 2、`abcabe` 為 0。

要怎麼求得這張表呢？先看最簡單的方法：

```javascript
function getNext(p) {
  const next = [];

  for (let i = 0; i < p.length; i += 1) {
    const pSub = p.slice(0, i + 1);

    for (let j = pSub.length - 1; j >= 1; j -= 1) {
      if (pSub.slice(0, j) === pSub.slice(-j)) {
        next[i] = j;

        break;
      }
    }

    if (next[i] === undefined) {
      next[i] = 0;
    }
  }

  return next;
}
```

裡頭有兩個迴圈，時間複雜度為 `O(m^2)`，效率顯然不佳，會拖累 KMP 算法的整體速度。

要怎麼提高建造這張表的效率呢？思路是這樣的：**拿完整字串的前綴去對準部分字串的後綴**。假設有一個字串 p，值為 `abcabffabcabc`，現在我們要求前兩個字符的 LPS 長（第一個字的 LPS 長無論如何都是 0，須先補上）：

```
0↓
ab
 abcabffabcabc
 ↑
```

讓完整字串的前綴去跟 `ab` 的後綴比，若相同，則 LPS 長加一；若不同，且完整字串正在被比較的前綴為**第一個前綴（即第一個字符 `a`）**，那 LPS 長便為 0。接著繼續拿完整字串的前綴去跟 `abc` 的後綴比：

```
00↓
abc
  abcabffabcabc
  ↑
```

LPS 長也為 0，再繼續往下：

```
000↓
abca
   abcabffabcabc
   ↑
```

喔！現在 `abca` 的後綴與完整字串的第一個前綴相同了，LPS 長加一。再繼續往下，拿完整字串的第二個前綴跟 `abcab` 的第二個後綴比：

```
0001↓
abcab
   abcabffabcabc
    ↑
```

一樣！LPS 長再加一！

```
00012↓
abcabf
   abcabffabcabc
     ↑
```

又遇到不同了，這邊也是直接設為 0 嗎？其實不能，中間還需要經過一些計算，但這邊先不細講，因為這次結果的確是 0，計算的效果不明顯。再繼續往下吧！會告訴你答案的！

讓我們把求 LPS 長度的過程加快，直接到最後一個字符：

```
000120012345↓
abcabffabcabc
       abcabffabcabc
            ↑
```

現在我們又遇到比較失敗的字了，也是直接設為 0 嗎？不能！在這之前，我們還要做一些掙扎——也許我們可以試看看將完整字串向右移幾位（亦即將其指針向左移），再繼續比。但該移多少呢？

不覺得這個問題有點熟悉嗎？似乎在前面講 KMP 時說過。你可以把現在遇到的問題想像成也是在做字串匹配：`abcabffabcabc` 是主串，`abcabf` 是子串，當比較失敗時，我們要做什麼？

求 `abcab` 的 LPS 長度！那我們還要再建一個 Next 表嗎？不用！早就建好了！不就是 2 嗎？

```
    ↓
000120012345
abcabffabcabc
    ↑  abcabffabcabc
```

現在，將完整字串的指針移到索引 `2`：

```
000120012345↓
abcabffabcabc
          abcabffabcabc
            ↑
```

太棒了！再度配對成功！LPS 長為 3（注意，不是 6 喔）。

（前面沒說明的第六個字符設為 0，其實也要經過同樣的過程，只是因為再次比較時仍失敗，而此時完整字串正在被比較的前綴是第一個前綴，因此才會結果看起來都一樣）

把上述過程轉換成程式碼，便是這樣：

```javascript
function getNext(p) {
  const next = [0];
  
  // 部分字串的指針
  let iPartial = 1;
  
  // 完整字串的指針
  let iWhole = iPartial - 1;

  while (iPartial < p.length) {
    if (p[iPartial] === p[iWhole]) {
      iPartial += 1;
      iWhole += 1;

      next[iPartial - 1] = iWhole;
    } else if (iWhole <= 0) { // 當完整字串正在被比較的前綴是第一個前綴
      iPartial += 1;

      next[iPartial - 1] = 0;
    } else {
      iWhole = next[iWhole - 1];
    }
  }

  return next;
}
```

時間複雜度從 `O(m^2)` 降到 `O(m)`，與前述 KMP 的主體 `O(n)` 加起來，時間複雜度共為 `O(n + m)`。

## 那些長得不太一樣的 Next 表

你如果看過其它講 KMP 算法的文章，可能會發現它們的 Next 表長得跟這裡的 Next 表不太一樣：

```
 abcabe
 000120 <- 這裡的
-100012 <- 別人的
```

不同之處不過是後者將前者的數字都往右移了一位，並在第一個位置補上 `-1`。為什麼要這麼做呢？其實只是為了計算上的方便。

仔細看前面寫的 `indexOfByKmp` 和 `getNext` 兩個函數，裡面都有這個處理：

```javascript
function indexOfByKmp(s, p) {
  let sI = 0;
  let pI = 0;

  const next = getNext(s);

  while (sI < s.length && pI < p.length) {
    if (s[sI] === p[pI]) {
      sI += 1;
      pI += 1;
    // highlight-start
    } else if (pI <= 0) {
      sI += 1;
    // highlight-end
    } else {
      pI = next[pI - 1];
    }
  }

  if (pI >= p.length) {
    return sI - p.length;
  } else {
    return -1;
  }
}

function getNext(p) {
  const next = [0];
  let iPartial = 1;
  let iWhole = iPartial - 1;

  while (iPartial < p.length) {
    if (p[iPartial] === p[iWhole]) {
      iPartial += 1;
      iWhole += 1;

      next[iPartial - 1] = iWhole;
    // highlight-start
    } else if (iWhole <= 0) {
      iPartial += 1;

      next[iPartial - 1] = 0;
    // highlight-end
    } else {
      iWhole = next[iWhole - 1];
    }
  }

  return next;
}
```

這是為了防止當 `pI` 或 `iWhole` 等於 `0` 的時候會出的問題。有人覺得這樣額外開一個分支處理很麻煩，於是就做了上述移位補 `-1` 的動作，並把算法改寫如下：

```javascript
function indexOfByKmp(s, p) {
  let sI = 0;
  let pI = 0;
  const next = getNext(s);

  while (sI < s.length && pI < p.length) {
    // highlight-next-line
    if (pI === -1 || s[sI] === p[pI]) {
      sI += 1;
      pI += 1;
    } else {
      // highlight-next-line
      pI = next[pI];
    }
  }

  if (pI >= p.length) {
    return sI - p.length;
  } else {
    return -1;
  }
}

function getNext(p) {
  // highlight-start
  const next = [-1];
  let iPartial = 0;
  let iWhole = iPartial - 1;
  // highlight-end

  while (iPartial < p.length) {
    // highlight-next-line
    if (iWhole === -1 || p[iPartial] === p[iWhole]) {
      iPartial += 1;
      iWhole += 1;

      // highlight-next-line
      next[iPartial] = iWhole;
    } else {
      // highlight-next-line
      iWhole = next[iWhole];
    }
  }

  return next;
}
```

自己實際拿筆跟紙跑過一遍，會發現原理是相同的，答案當然也是一樣的噢。

## 相關資料

- [如何更好地理解和掌握 KMP 算法? - 海纳的回答](https://www.zhihu.com/question/21923021/answer/281346746)

- [如何更好地理解和掌握 KMP 算法? - 阮行止的回答](https://www.zhihu.com/question/21923021/answer/1032665486)

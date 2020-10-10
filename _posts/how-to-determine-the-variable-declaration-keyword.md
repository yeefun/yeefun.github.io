---
title: no-var？決定變數宣告關鍵字的原則與問題
description: 搭配 let，遵守最小暴露原則，var 其實很有用。
date: 2020-10-10
tags: [js, variable, scope]
---

大家平時都是怎麼決定該用哪個關鍵字（`var`、`let`、`const`）宣告變數的呢？受到 [ESlint 建議規範](https://eslint.org/docs/rules/no-var)的影響，我猜很多人跟我一樣，決定方式很簡單：會被再賦值（reassign）的就用 `let`，不會的就用 `const`。`var` 完全不在我們的選項，畢竟，`var` 有很多缺點，它的好處完全可以由 `let` 來代替，是吧？

我承認我並沒有很認真探討過這個問題，只是照著 ESlint 規範走，直到在讀書會看了頗有名氣的 [You Don't Know JS Yet: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)（是的，它出第二版了），發現作者 Kyle Simpson 並不派斥 `var`，[甚至認為 `var` 的好處無法取代](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#the-case-for-var)，這才讓我重新思考並質疑自己不使用 `var` 的理由。

## `var` 很有用

Simpson 認為，`var` 跟 `let` 都很有用（他沒有很喜歡 `const`，後面會說原因），前者為函數作用域（function scope），後者為區塊作用域（block scope），因此，當一個變數在整個函數中都會用到，那就該用 `var`，並宣告在**函數最外層**（top-level，也可以說是頂層）；反之，如果一個變數只會在函數中的某個區塊用到，那就該用 `let`，並宣告在**這個區塊內**，讓外層的作用域取用不到。

比方說，假如我現在要寫一個能判斷使用者網頁捲動方向的函數，按照 ESlint 建議的寫法，會是這樣：

```javascript
function logScrollDirection() {
  let beforeScrollY = window.pageYOffset;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    const delta = currentScrollY - beforeScrollY;

    if (delta > 0) {
      console.log('scroll down!');
    } else {
      console.log('scroll up!');
    }

    beforeScrollY = currentScrollY;
  });
}
```

但 Simpson 會建議這樣：

```javascript
function logScrollDirection() {
  // 變成 `var` 了
  var beforeScrollY = window.pageYOffset;
  
  window.addEventListener('scroll', () => {
    // 變成 `var` 了
    var currentScrollY = window.pageYOffset;
    
    // 多了大括號
    // highlight-next-line
    {
      // 變成 `let` 了
      let delta = currentScrollY - beforeScrollY;

      if (delta > 0) {
        console.log('scroll down!');
      } else {
        console.log('scroll up!');
      }
    // highlight-next-line
    }

    beforeScrollY = currentScrollY;
  });
}
```

你可能會想說，`let` 其實也是函數作用域，為什麼不乾脆把上面的 `var` 都改成 `let` 呢？

理由有兩個：第一，就語義上來說，`var` 比 `let` 更適合扮演「這個變數是作用在整個函數中」的角色，畢竟在 `let` 還未出現前的 20 年，`var` 就一直都是如此。

第二，如果你在任何地方都使用 `let `，那你可能會不好判斷這個 `let` 所宣告的變數是作用在整個函數中，還是只在某個區塊內。

你可能還會注意到，在黃線處有個奇怪的大括號 `{..}`。這個括號能確保 `delta` 不被函數內的其它地方取用到，讓它成為名副其實的區塊變數。

一般來說，我們在函數內創建區塊變數，是在遇到 `if..else` 或 `for` 迴圈的時候。但其實你可以不靠這些陳述語句（statement）來創建區塊變數，那就是直接用單獨的 `{..}` 大括號。

這個大括號看來有點奇怪又累贅，但它事實上是讓 `var` 與 `let` 的搭配發揮最大效用的關鍵，而且它還體現了軟體工程的一個原則：最小暴露原則（The Principle of Least Exposure, POLE）。

## 最小暴露原則

最小暴露原則與[最小權限原則（The Principle of Least Privilege, POLP）](https://en.wikipedia.org/wiki/Principle_of_least_privilege)有關，但它關注的層次較低。就變數而言，它想最小化暴露的是其**作用域**。

為什麼？想想一個極端的問題：為什麼我們不把所有變數都宣告在全局作用域（global scope）？命名衝突、被他人非預期或惡意修改、非意圖依賴導致重構困難（詳細說明可見[這裡](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch6.md#least-exposure)）——當我們把區域（local）變數非必要地暴露給程式其它部分使用時，這三個危險便會浮現，在日後絆你一跤。

因此，我們應遵守最小暴露原則，**這意味著我們應盡可能地保持變數私有（private），也就是將變數宣告在盡可能深的嵌套作用域內**。

說來容易，但這其實並不是一個很直覺的作法。我常需要在寫完函數的內容後，再回過頭來重新檢視程式碼，以找出哪些變數是函數中的區域變數（或甚至是區塊中的區域變數），再用 `{..}` 括起來。

聽來有點麻煩，但這種作法不僅能避免上述危險，還意外地擁有兩個好處。

第一個是當你不小心寫出一個肥大的函數，`{..}` 有助於你判斷哪些程式碼是彼此相關，從而讓你更容易理解整個函數在幹嘛。

當然，我們應盡可能避免寫出這樣的函數，但即使寫出來了，當我們在重構（refactoring）時，也可以相對容易判斷出哪些區塊可以[提取成函數](https://refactoring.com/catalog/extractFunction.html)，以提升可讀性（readability）。

同時，提取函數的過程也變得容易，因為你可以很快地判斷出變數的來源，知道現在要提取的區塊裡有哪些全局變數和區域變數，比如下面這段程式碼（請想像它是一個內容很長的函數）：

```javascript
/**
 * 此處範例借用自 Martin Fowler 的著作 Refactoring: Improving the Design of Existing Code (2nd Edition)
 * 第六章 Extract Fucntion 一節的程式碼
 */
function printOwing(invoice) {
  let outstanding = 0;
  const today = new Date();
  
  printBanner();
  
  // ...
  
  for (const order of invoice.orders) {
    outstanding += order.amount;
  }

  // highlight-next-line
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  
  // ...
  
  printDetails(invoice, outstanding);
  
  function printBanner() {
    // ...
  }
  
  function printDetails() {
    // ...
  }
}
```

假設你想重構被黃線劃起來的區塊，把它提取成一個名為 `recordDueDate` 的函數，但由於你不知道 `today` 這個變數還有在這個函數中的哪個地方用到，因此你必須一行一行檢查，還必須進到內嵌函數去看有無使用到 `today`，相當麻煩。

如果現在程式碼變成這樣：

```javascript
function printOwing(invoice) {
  let outstanding = 0;
  
  printBanner();
  
  // ...
  
  for (const order of invoice.orders) {
    outstanding += order.amount;
  }

  // highlight-start
  {
    let today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }
  // highlight-end
  
  // ...
  
  printDetails(invoice, outstanding);
  
  function printBanner() {
    // ...
  }
  
  function printDetails() {
    // ...
  }
}
```

清楚多了吧！現在你可以很篤定 `today` 絕對不會被這個區塊以外的地方用到，你可以放心又快速地把這兩行程式碼提取成 `recordDueDate` 函數了。

## 取捨：評估 `var` 的缺點

前面說了 `var` 的優點以及它該怎麼跟 `let` 搭配，這裡來談談 `var` 的缺點。

先從建議禁用 `var` 的 ESlint 看起。為什麼不用 `var`？[ESlint 文件說](https://eslint.org/docs/rules/no-var)，因為在**區塊中**宣告 `var` 可能會意外地改變其外同名的變數。注意「區塊中」這三個字。沒錯，這點與前幾節所述原則相符，`var` 的確不應該宣告在區塊內，那是 `let` 發揮作用的地方。因此，前述原則已避免掉了這個缺點（Simpson 在[這篇](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#the-case-for-var)講述了他覺得可以在區塊內宣告 `var` 的狀況，雖然我仍覺得宣告在外頭比較好，但值得看看）。

再來，應該就是所謂重新宣告（redeclare）的問題。`let` 跟 `const` 將重新宣告的問題澈底消除。但，重新宣告真的是一個嚴重的問題嗎？更確切地問，這個缺點有辦法抵銷甚至壓過前述 `var` 的優點嗎？

至少我自己是幾乎沒有碰過重新宣告的問題。即便你的函數都寫得很長，但當你很有意識地在區分變數的作用域範圍時，要出錯的機率可說是微乎其微。如果你真的很擔心程式壞掉，那你可以將所有用 `var` 宣告的變數都寫在最上面，總不會在這短短幾行中也有同名的問題吧？

```javascript
function doBigThing() {
  var first = 'watch movies';
  var second = 'shopping';
  var third = 'sleep';
  var first = ''; // <-- 哦哦抓到了，太明顯了吧！

  // ..
}
```

同樣地，重新賦值的問題也是如此。想想看，你會在什麼情況下，不小心將一個不該被重新賦值的變數重新賦值？這種情況多嗎？而且，即便你真的不小心犯錯了，會很難察覺嗎？會很難追蹤嗎？會很難改回來嗎？

我認為這兩個缺點並不足以說服我放棄前面所說的宣告方法。而且相對地，這兩個缺點也給予開發者更大的彈性，只要你謹慎使用（同樣地在[這篇](Simpson)，Simpson 簡單示範了重新宣告作為一種註解的功用，雖然我不怎麼喜歡）。

## 什麼時候該用 `const`？

你可能會發現，在上面範例中，即使我是在區塊內宣告不會再被賦值的變數，我也是用 `let`。為什麼不用 `const`？這樣語義上不是更清晰嗎？

好吧，其實我也是傾向用 `const`，但因為我介紹的是 Simpson 的論點，所以在宣告變數的寫法上就把他對 `const` 的意見也一併納入。

Simpson 認為，`const` 是一個有點讓人困惑的關鍵字：你不是說這個變數是常數（constant）嗎？那為什麼它又可以被修改（mutate）呢？這個誤解的確常在 JS 新手身上發生（至少我在公司面試前端時是如此）。

那該在什麼時候用 `const` 呢？只有當你宣告的變數已經是個不可變（immutable）的值（即基本型別值，詳情可見[這篇](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch6.md/#primitive-immutability)），而且它在語義上顯然是個常數時，才會用 `const`：

```javascript
const POSTS_PAGE_SIZE = 3; // 每次要從資料庫取得的文章數量
const DEGREE_TO_PI = Math.PI / 180;
const DEFAULT_THEME = 'dark';

// 其內容之後能被修改，不建議用 `const`
const SHARE_LINK_NAMES = ['fb', 'line'];
```

那重新賦值的問題呢？如同上一節所說，這個錯誤很難出現，即使出現也很好察覺並修復。而且當你會用 `{..}` 把區塊變數包起來，這個代碼塊通常不會太長，在這短短的十幾行中要出錯實在是不太可能。

以上是 Simpson 的論點。對我來說，我認同重新賦值的問題並不大，但考量到非 JS 新手應該都能明白 `const` 的「不變」意指為何，我還是會繼續照一般規範走，只是要稍微忍受當看到一個由 `const` 宣告的變數，其內容在之後被修改時所引發的不適感。

## 總結：一個原則，兩個問題

當我在與別人協作時，我會採用由團隊討論出來的代碼規範，或直接引入主流規範（如 [Airbnb](https://github.com/airbnb/javascript) 或 [Standard](https://standardjs.com/)）。畢竟，我喜愛的宣告方式，它的好處還無法勝過降低團隊溝通成本所帶來的優勢。但我仍會在程式碼中盡可能地用 `{..}` 縮小變數的作用域。

如果是我獨立開發的專案，當我碰到要宣告變數時，會問自己兩個問題。第一個：

>  這是整個函數內都會使用到的變數嗎？

是，就用 `var` 宣告在函數最上面；不是，遵循最小暴露原則，先用 `{..}` 括起，再問：

> 這個變數會被重新賦值嗎？

會，就用 `let`；不會，就用 `const`。

整個決策過程並不複雜，至少我最近在開發瀏覽器擴充套件 [Notion+ 標記管理器](https://github.com/yeefun/notion-mark-manager)，是使用得挺愉快的，除了程式碼變得更易讀，修改起來也較容易。

你是怎麼決定該用哪個關鍵字宣告變數的呢？你對我上面所說的一切，有什麼看法？歡迎留言給我！

## 相關資料

- [You Don't Know JS Yet: Scope & Closures (2nd Edition)](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md)
  - [Chapter 6: Limiting Scope Exposure](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch6.md)
  - [Appendix A: Exploring Further - The Case for `var`](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/apA.md#the-case-for-var)

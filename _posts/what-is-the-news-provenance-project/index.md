---
title: 區塊鏈溯源能否打擊假照片？紐約時報架了一個社群網站來驗證這件事
description: 透過區塊鏈技術揭露新聞更動源流，來讓大眾更好地區辨訊息真假或好壞——紐約時報發起的「新聞溯源計畫」究竟想做什麼？
featuredImage: poc-1.png
date: 2020-02-04
tags: [假訊息, 區塊鏈, 媒體]
update: 2020-08-01 14:43:00
---

向假新聞宣戰早已不是什麼新鮮事了。獨立檢證、協力查核、智能辨識⋯⋯無論手段新穎或傳統，在假訊息竄增的速度面前，似乎都顯得蒼白無力，一不小心還會惹禍上身。這不禁讓人想問：還有什麼辦法？難道真理終究戰不勝謊言？人類還有救嗎？

如果你已經對於當今所有防堵假訊息的手法都感到失望，準備當個極端的懷疑論者（這也不失為一個辦法），那你也許可以稍停一下，看看我底下將要介紹的計畫，也許它能帶給你一絲希望。

去年7月，媒體界龍頭紐約時報（The New York Times，以下簡稱紐時）發起[「新聞溯源計畫」（The News Provenance Project）](https://www.newsprovenanceproject.com/)，期待透過區塊鏈技術揭露新聞更動源流，來讓大眾更好地區辨訊息真假或好壞。其矛頭第一個對準的就是假照片。

**為什麼是假照片？區塊鏈在這整個計畫中的作用是什麼？「揭露新聞更動源流」是什麼意思？它能怎樣幫助我們辨別資訊？要達成這個目標，需要完成哪些事？**以下將一一回答。

## 假照片破壞力強

為什麼選擇假照片？理由似乎很直觀：照片比文字更容易傳播，且具有更高的可信度，因此破壞力也就愈強。據[美國獨立智庫研究](https://www.niemanlab.org/2020/01/heres-how-the-new-york-times-tested-blockchain-to-help-you-identify-faked-photos-on-your-timeline/)顯示，相較於其它形式的假訊息，美國人民對於大眾辨識假圖片或影片的信心和責任都更少。換言之，他們既覺得**大眾沒有能力辨識，也沒有義務辨識**。

低落的防衛意識，使得假照片有大行其道的空間。隨著[「深假」（deepfake）技術的進步](https://opinion.cw.com.tw/blog/profile/51/article/8316)，製造出高水準視覺效果的成本愈來愈低。如何在資訊生態系統崩壞之前，從結構上防制假照片的危害，顯然是當務之急。

## 區塊鏈如何溯源

從結構上防制？紐時究竟想怎麼做？最初的想法，是為照片加上一些**元數據（metadata）及編輯紀錄**。前者如拍攝時間、地點、發布者等；後者則可想像有一條時間軸，上面記錄著誰在何時取用、發布，並做了哪些更動。

舉例來說，假設阿帆今天在巴西拍到一張火噬雨林的照片，公布到臉書，並寫下：「天啊，地球之肺在燃燒！貪婪的人類終自食惡果！」阿昱看到了，順手把它載入自己的電腦。四個月後，澳洲森林發生大火，阿昱上傳這張照片，文字卻改為：「極端氣候正在吞噬澳洲！人類何時才要醒悟！」

此時悠遊於臉書河道的你，猝不及防地滑到這則貼文。怵目驚心的照片使你的手指停了下來，各種情緒頓時湧上心頭——擔憂、憤怒、恐懼、羞愧——「這麼嚴重的事情，大家應該要知道啊」，你一邊想著，一邊按下分享。

「欸？這是什麼？」你看到浮在照片下方的訊息區塊，裡頭有一行被黃色標起的文字：「四個月前拍攝」。

「四個月前？什麼鬼？這不是現在正在發生的事嗎？」你點開區塊，看見這張照片最初拍攝的時間、地點，以及發布者（阿帆）當時的貼文內容。

「殺小，該不會這是假照片吧？」你愈想愈不對勁，決定先將剛才分享貼文的隱私權限設為「只限本人」，並上網搜尋「澳洲大火」。最終你也許會發現：澳洲是真的有發生大火，但那張照片也是錯的。你不願做假訊息的幫兇，於是刪了貼文。

![去年8月亞馬遜森林大火，便有許多錯誤照片在網路上瘋傳，連法國總統馬克宏都搞錯：他所分享的照片至少攝於16年前。圖擷自[馬克宏推特](https://twitter.com/EmmanuelMacron/status/1164617008962527232?s=20)](macron-twitter.png)

謝天謝地！一場錯誤內容被轉發上萬次的災難被阻止了。**它靠的不是事後通知，也非事前審查，而是在訊息產生（或發布）當下，便在某處烙下一條不可更改的紀錄。它不做判斷，只呈現每次編輯的事實，讓讀者根據這些紀錄，自行決定要多相信這則訊息。**

「聽起來真是不錯，」你可能會問：「但我要怎麼知道這些紀錄沒有被惡意更改過？」這就是區塊鏈發揮作用的地方了。區塊鏈是一種記錄資料的技術，一旦資料「上鏈」，便**難以被竄改**；同時它也是**透明**的，任何更改都會被記錄，且可被看見。它能確保照片元數據和編輯紀錄的真實性。

## 概念驗證

一個看似簡單的概念，實作起來往往有許多複雜微妙之處。

比方說，我們知道這個計畫要在照片旁邊附上一些資訊，但要放哪些資訊？更深入點問：**平常人們在社群媒體上是如何決定一張照片可不可信的？不同背景的人，在判斷資訊方面又有什麼差異？我們所設想的方案，是否真的能幫助民眾更好地辨識新聞品質？**

為了回答上述關鍵問題，紐時找了34位政治傾向、媒體偏好各異的成年人進行深度訪談和原型測試，從中歸納出了幾個值得參考的洞見。

首先，關於民眾在社群平台上如何接收、判斷新聞資訊，紐時從「對於貼文脈絡的意識程度」（只看最顯眼的照片和標題？還是也會看發文日期、來源或網友反應？）和「對於主流媒體的信任程度」這兩條軸線，將民眾分成四種類型（來看看你比較偏向哪一種類型吧）：

1. **高意識、低信任——不信任媒體的懷疑者（Distrustful news skeptic）**：認為主流媒體都是有偏見的，並會試圖從一些線索去證明，很難與特定媒體建立信任關係。值得注意的是，這些人多半是質疑媒體的報導方式，而非事實細節。
2. **高意識、高信任——充滿自信的數位訂戶（Confident digital news subscriber）**：悠游於網路世界，樂意辨識自己信任的媒體所提供的訊息真假。他們不想與時事脫節或遭到誤導。
3. **低意識、低信任——討厭媒體的庶民（Media-jaded localist）**：覺得自己的聲音遭到主流媒體所排擠，毫不遲疑地接受非正式的激昂評論（hot takes）。他們希望新聞能夠既真實又接地氣。當自己信任的非正式來源提供錯誤訊息時，他們需要更清晰的線索才能判定。
4. **低意識、高信任——傳統的數位移民（Late-adopter media traditionalist）**：相較於網路媒體的喧囂，他們更喜歡透過電視、報紙等舊媒體來接收資訊。這類人需要學習更多的判斷技巧及明確的提示，才有辦法自己區辨訊息是否可信。

紐時認為，照片溯源計畫至少能讓信任媒體的人受益（即2、4類人）。接著，他們測試多種能表示照片來源的設計，發現：

- 認證標章（如臉書或IG的藍勾勾）並不足以讓照片變得可信。
- 關於標示術語，讀者喜愛「附有來源」（sourced）更勝於「已驗證」（verified）。這代表大眾不只想知道照片已被他人驗證，**也希望有可讓自己探索的資訊**。
- 陳列同一個事件的多張照片，能使讀者相信事件確實發生了。
- 強調為人熟知的照片元數據（如圖說、發布歷史），而非會造成混亂的術語（如加密、存儲於不可更動的資料庫）。
- 展示監督與問責的機制，有助於提升讀者信心。
- 只需清楚呈現照片的編輯歷史，避免使用可能會失準的詞彙，如「真實」、「假」，**因為只要出錯一次，讀者就不會再完全信任這套機制**。

紐時將這些發現整合進一個模擬社群網站的原型，經過兩輪測試，確認了來源資訊確實有效，而且即使是質疑新聞立場的讀者，也沒有懷疑來源資訊的真實性。

不過仍有要改善的地方，包括有許多人根本沒注意到錯誤訊息、讀者很難理解為什麼來源訊息與照片描述不符。最有趣的是，對於照片編輯的歷史紀錄，讀者並不怎麼感興趣；反之，他們想瞭解照片所描述事件的相關新聞。這引出了一個洞見：

> 民眾上社群網站不是為了查核事實，而是為了娛樂和建立聯繫。他們之所以願意停下來考察更多資訊，不是因為他們想證明這張照片是錯的，而是因為他們被與照片相連的故事引起了興趣。

紐時認知到，這種傾向雖造成民眾容易為網路圖片所騙，但他們也能利用這點，讓溯源的過程不只有驗證的功能，還可以幫助讀者對自己關心的事情形成更準確、細緻的認識。

吸取以上教訓，最終紐時建出了這個[概念原型](https://poc.newsprovenanceproject.com/)：

- 來源資訊區塊變大了，裡頭增加了一些可引人注意的細節（如照片拍攝距今已多久）。
- 展開資訊區塊，你可以看見上面有一塊醒目的提示，它能喚起讀者對於假照片的警戒。
- 區塊下方列出關於同一事件的其它照片與文章連結，供讀者進一步探索。

![概念原型：展開前。圖擷自[新聞溯源概念原型網頁](https://poc.newsprovenanceproject.com/)](poc-1.png)

![概念原型：照片概觀。圖擷自[新聞溯源概念原型網頁](https://poc.newsprovenanceproject.com/)](poc-2.png)

![概念原型：照片歷史紀錄。圖擷自[新聞溯源概念原型網頁](https://poc.newsprovenanceproject.com/)](poc-3.png)

大家可以自己點進[網頁](https://poc.newsprovenanceproject.com/)玩玩，看這樣的來源標示是否有助於你判斷貼文內容的真假或好壞。

---

這是個令人振奮的開始——但也只是開始。目前的原型僅僅是最末端的呈現，要達到預期中的效果，紐時需要跨界合作，**建立一套從拍攝到發布的體系**，且其運作流程還要好上手，以免排擠較小的新聞機構。這顯然是一項極為艱難的任務。

「當前的工作是確保大家以一致的方式來紀錄元數據，並讓這些資料能被其它組織（如社群平台）負責任地使用。」紐時研發團隊執行長Marc Lavallee說。他們在[官網](https://www.newsprovenanceproject.com/whats-next)公開徵求三種合作夥伴——社群平台、新聞編輯室、事實查核組織——來一起把計畫推展到下一階段：執行。

一個更好的網際網路會是什麼樣子？這是紐時對於這個大哉問的初步回答。即使它最終失敗了，整個設計過程——從問題定義、用戶研究、概念發想到原型測試——仍有許多值得我們深思和借鏡的地方。

## 相關資料

- [The News Provenance Project](https://www.newsprovenanceproject.com/)——新聞溯源計畫官網，裡頭將計畫目前的成果與潛力做了一個清楚且頗具啟發性的闡述，推薦你把它從頭到尾看完。
- [Proof of Concept](https://poc.newsprovenanceproject.com/)——新聞溯源的概念原型，來玩看看吧！
- [How Do People Decide Whether to Trust a Photo on Social Media?](https://open.nytimes.com/how-do-people-decide-whether-to-trust-a-photo-on-social-media-e0016b6080ae)——社群媒體上的讀者是怎麼判斷一張照片可不可信的？這是紐時訪談後的發現。
- [What If Every News Photo on Social Media Showed Contextual Information?](https://open.nytimes.com/what-if-every-news-photo-on-social-media-showed-contextual-information-8936cf4e8c45)——紐時測試原型的過程。
- [Can Publishers Use Metadata to Regain the Public’s Trust in Visual Journalism?](https://open.nytimes.com/can-publishers-use-metadata-to-regain-the-publics-trust-in-visual-journalism-ee32707c5662)——簡單描述了整個新聞溯源計畫及未來展望。
- [Here’s how The New York Times tested blockchain to help you identify faked photos on your timeline](https://www.niemanlab.org/2020/01/heres-how-the-new-york-times-tested-blockchain-to-help-you-identify-faked-photos-on-your-timeline/)——尼曼新聞實驗室對這個計畫的報導。
- [Introducing the News Provenance Project](https://open.nytimes.com/introducing-the-news-provenance-project-723dbaf07c44)——去年7月，紐時在Medium上介紹了這個計畫。
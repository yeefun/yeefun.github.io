 /*
                Optimize:
                  可將重複的代碼變為 function;
                */

 var data = {
 	chapter: ["The F2E Challenge Start!", "Todo List is Going Crazy!"],
 	page: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
 	url: [
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png",
 		"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png"
 	]
 };



 /*------ .comic-home 與 .comic-reader 頁面切換 ------*/
 $(".comic-reader").hide();

 $(".comic-chapter__item:eq(1)").click(function () {
 	$(".comic-home").hide();
 	$(".comic-reader").slideDown(600);
 });

 $(".comic-tool__name").click(function () {
 	$(".comic-home").fadeIn(600);
 	$(".comic-reader").hide();
 });

 /*------ 廣告開關 ------*/
 $(".ad__cross").click(function () {
 	$(this).parent().slideUp();
 });

 /*------ 明暗主題轉換 ------*/
 $(".fa-sun, .theme-switch__bright").click(function () {
 	$(
 		"body, nav, .comic-tool__name, .arrow-right, .fas.fa-sun, .theme-switch, .far.fa-moon, .prev-page, .next-page, .comic-preview, .num, .comic-preview__img, .page-mask").
 	removeClass("dark");
 });

 $(".fa-moon, .theme-switch__dark").click(function () {
 	$(
 		"body, nav, .comic-tool__name, .arrow-right, .fas.fa-sun, .theme-switch, .far.fa-moon, .prev-page, .next-page, .comic-preview, .num, .comic-preview__img, .page-mask").
 	addClass("dark");
 });

 /*------
       將所有圖片顯示於 ".comic-preview"，並為特定頁數加上裝飾;
       創建 ".select__option--page" 的 HTML;
     ------*/
 for (var i = 1; i <= data.page.length; i++) {

 	// 創建 ".select__option--page" 的 HTML;
 	var selOptPageHtml = "\n    <li>Page " + (
 		i < 10 ? "0" + i : i) + "</li>\n  ";

 	$(".select__option--page").append(selOptPageHtml);
 	$($(".select__option--page li")[0]).addClass("current");

 	// 創建 ".comic-preview" 的 HTML;
 	var previewHtml = "\n    <div class=\"comic-preview__page\">\n      <div class=\"num\">" + (

 			i < 10 ? "0" + i : i) + "</div>\n      <div class=\"comic-preview__img\">\n        <img src=\"https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-" +

 		i + ".png\" alt=\"\"/>\n        <div class=\"page-mask\"></div>\n      </div>\n    </div>\n  ";




 	$(".page-wrapper").append(previewHtml);

 	// 1.查詢當前頁數
 	var currentPageIndex = $(".select__option--page .current").index();
 	var _previewPage = $(".comic-preview__page");

 	// 2.為 preview 中的當前頁數加上 class ".current-page";
 	$(_previewPage[currentPageIndex]).addClass("current-page");
 }

 /*------ 創建 ".select__option--chapter" 的 HTML ------*/
 for (var _i = 1; _i <= data.chapter.length; _i++) {

 	var selOptChapterHtml = "\n    <li>Chapter " +
 		_i + "</li>\n  ";

 	$(".select__option--chapter").append(selOptChapterHtml);
 	$($(".select__option--chapter li")[1]).addClass("current");
 }

 /*------ .comic-preview 捲動 ------*/
 var previewPage = $(".comic-preview__page");

 /*!!! 計算平均要捲動幾 px 才輪到下一頁 !!!*/
 var scroInterval = (80 * data.page.length + 20 * (data.page.length + 1) + 50 * 2 - 620) / (data.page.length - 1);

 // 計算 .comic-preview 捲動了多少 px;
 var scroLeft = function scroLeft(page) {
 	if (!page && page !== 0) {
 		return $(".comic-preview").scrollLeft();
 	} else {
 		return $(".comic-preview").scrollLeft(page);
 	}
 };

 $(".comic-preview").scroll(function () {

 	// 讓 "mask--prev"、"mask--next" 隨著螢幕捲動而移動;
 	$(".mask--prev").css("left", scroLeft());
 	$(".mask--next").css("right", -scroLeft());

 	var selOptPage = $(".select__option--page li");
 	var selDisplayPage = selOptPage.parent().prev().children();

 	// 1.計算目前捲動到哪個區間，以得知要輪到第幾頁
 	for (var num = 0; num < data.page.length; num++) {

 		if (
 			/*!!! 關鍵：計算 scroLeft() 在哪個捲動區間，以知道現在要更換到哪一個頁數 !!!*/
 			/*!!!
 			                                                    為什麼 scroLeft() 要加 1？
 			                                                      因為 scroll 事件觸發過快，在捲動尚未完畢前便觸發，因此 scroLeft() 會小於實際捲動長度，因而更換不了頁面，所以才要 +1，以到達欲更換頁面的捲動區間;
 			                                                    !!!*/
 			scroLeft() + 1 >= scroInterval * num &&
 			scroLeft() + 1 < scroInterval * (num + 1)) {

 			// 2.先將所有的 Page 都移除遮罩 "current-page"
 			previewPage.removeClass("current-page");

 			// 3.再將遮罩放到目前捲動到的頁面上;
 			$(previewPage[num]).addClass("current-page");

 			// 同步更新 selOptPage、selDisplayPage 的頁數;
 			selOptPage.removeClass("current");
 			$(selOptPage[num]).addClass("current");
 			selDisplayPage.text(selOptPage.siblings(".current").text());

 			// 同步更新圖片;
 			$(".comic-screen__page").attr(
 				"src", "https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-" + (
 					num +
 					1) + ".png");

 		}
 	}

 	var previewCurrentPage = previewPage.siblings(".current-page");

 	// 1.若為第一頁，那 ".prev-page" 加上 ".disabled"；".mask--prev" 加上 ".active"
 	if (previewCurrentPage.index() === 0) {
 		$(".prev-page").addClass("disabled");
 		$(".mask--prev").addClass("active");

 		// 2.若為最後一頁，那 ".next-page" 加上 ".disabled"；".mask--next" 加上 ".active"
 	} else if (previewCurrentPage.index() === data.page.length - 1) {
 		$(".next-page").addClass("disabled");
 		$(".mask--next").addClass("active");

 	} else { // 3.其它頁數，則皆不顯示;
 		$(".prev-page, .next-page").removeClass("disabled");
 		$(".mask--prev, .mask--next").removeClass("active");
 	}

 });

 // 頁面載入一開始，若為第一頁，為 ".prev-page" 加上 ".disabled"；為 ".mask--prev" 加上 ".active";
 if (
 	previewPage.siblings(".current-page").index() === 0) {
 	$(".prev-page").addClass("disabled");
 	$(".mask--prev").addClass("active");
 } else if (previewCurrentPage.index() === data.page.length - 1) {
 	$(".next-page").addClass("disabled");
 	$(".mask--next").addClass("active");
 }

 /*------ 點擊 preview 的 img，捲動到特定位置，並更換 ".current-page" 和圖片 ------*/
 $(".comic-preview__img").click(function () {

 	scroLeft($(".comic-preview__img").index(this) * scroInterval);
 	/*???
 	                                                                 這不 work:
 	                                                                   scroLeft($(this).index() * scroInterval);
 	                                                                   可能是因為相同元素(.comic-preview__img)沒排在一起;
 	                                                               ???*/

 });

 /*------ hover ".mask" 後，顯示章節的 tooltip ------*/
 function maskHover(mask, tooltip) {
 	return $(mask).hover(function () {
 		$(tooltip).toggleClass("hide");
 	});
 }
 maskHover(".mask--prev", ".prev");
 maskHover(".mask--next", ".next");

 /*------ 章節、頁數選項 ------*/

 // 點擊某個選項(option)時，換到相對應的圖片，將該選項高亮、顯示於開頭(display)，並關閉該選項表; 
 $(".select").on("click", ".select__option li", function () {

 	/*???
 	                                                            這也可以 work：
 	                                                              let selPageClickId = $(".select__option--page li").index(this);
 	                                                              可能是因為相同元素(li)都排在一起;
 	                                                          ???*/

 	// 1.如果點擊的選項是 page
 	if ($(this).parent().hasClass("select__option--page")) {

 		// 2.那就把被點擊選項的 index 乘上捲動區間，讓 ".comic-preview" 捲動，觸發 scroll 事件;
 		scroLeft($(this).index() * scroInterval);

 	} else { // 3.如果點擊的選項是 chapter

 		// 4.那就將被點擊的選項高亮，並顯示於開頭（page 不需處理這部分，是因為它在 ".comic-preview" 的 scroll 事件會處理）;

 		$(this).parent().find(".current").removeClass("current");
 		$(this).addClass("current");

 		var selDisplay = $(this).parent().prev();
 		selDisplay.children().text($(this).text());
 	}

 	// 關閉該選項表;
 	$(this).parent().addClass("hide");
 });

 // 當滑鼠點擊選項之外的地方，便關閉選項表;
 $(document).click(function (evt) {

 	var selOpt = $(evt.target).next().next();

 	// 1.如果點擊處沒有 class ".hide"
 	if (!selOpt.is(".hide")) {

 		// 2.那就關閉選項表
 		$(".select__option").addClass("hide");

 	} else { // 3.如果點擊處有 class ".hide"

 		// 4.那先關閉所有選項表（防止原先的選項表未關閉）
 		$(".select__option").addClass("hide");

 		// 5.再開啟點擊處的選項表;
 		selOpt.removeClass("hide");
 	}
 });

 // 當滑鼠點擊選項開頭(display)的往上箭頭，便將目前選中的選項往上、高亮並顯示於開頭;
 /*
 Modify:
   可將代碼改成跟 "comic-screen 圖片切換" 一節一樣;
 */
 $(".arrow-top").click(function () {

 	var selOpt = $(this).parent().prev();
 	var currentOpt = selOpt.find(".current");

 	// 1.如果目前選中的選項上面還有選項
 	if (currentOpt.prev().length !== 0) {

 		// 2.那就移除目前選項的高亮，並將高亮往上;
 		currentOpt.
 		removeClass("current").
 		prev().addClass("current");

 		var newCurrentOpt = selOpt.find(".current");

 		/*???
 		                                               這 work：
 		                                                 newCurrentOpt.index();
 		                                               這 work：
 		                                                 $(this).parent().prev().find(".current").index();
 		                                               這不 work：
 		                                                 $(".arrow-top").parent().prev().find(".current").index();
 		                                                 可能是因為它不是用 $(this);
 		                                             ???*/

 		// 1.如果點擊的選項是 page
 		if (selOpt.hasClass("select__option--page")) {

 			// 2.那就把被點擊選項的 index 乘上捲動區間，讓 ".comic-preview" 捲動，觸發 scroll 事件
 			scroLeft(newCurrentOpt.index() * scroInterval);

 		} else { // 3.如果點擊的選項是 chapter

 			// 4.那將往上選中的選項顯示於開頭（page 不需處理這部分，是因為它在 ".comic-preview" 的 scroll 事件會處理）;
 			var selDisplay = selOpt.prev();
 			selDisplay.children().text(newCurrentOpt.text());
 		}
 	}
 });

 // 當滑鼠點擊選項開頭(display)的往下箭頭，便將目前選中的選項往下、高亮並顯示於開頭;
 /*
 modify:
   可將代碼改成跟 "comic-screen 圖片切換" 一節一樣;
 */
 $(".arrow-bottom").click(function () {

 	var selOpt = $(this).parent().prev();
 	var currentOpt = selOpt.find(".current");

 	// 1.如果目前選中的選項下面還有選項
 	if (currentOpt.next().length !== 0) {

 		// 2.那就移除目前選項的高亮，並將高亮往下;
 		currentOpt.
 		removeClass("current").
 		next().addClass("current");

 		var newCurrentOpt = selOpt.find(".current");

 		// 1.如果點擊的選項是 page
 		if (selOpt.is(".select__option--page")) {

 			// 2.那就把被點擊選項的 index 乘上捲動區間，讓 ".comic-preview" 捲動，觸發 scroll 事件
 			scroLeft(newCurrentOpt.index() * scroInterval);

 		} else { // 3.如果點擊的選項是 chapter

 			// 4.那將往上選中的選項顯示於開頭（page 不需處理這部分，是因為它在 ".comic-preview" 的 scroll 事件會處理）;
 			var selDisplay = selOpt.prev();
 			selDisplay.children().text(newCurrentOpt.text());
 		}
 	}
 });

 /*------ comic-screen 圖片切換 ------*/
 $(".comic-screen i").click(function () {

 	var selOptCurrentPage = $(".select__option--page").find(".current");

 	if ($(this).hasClass("prev-page")) {

 		scroLeft((selOptCurrentPage.index() - 1) * scroInterval);
 	} else {
 		scroLeft((selOptCurrentPage.index() + 1) * scroInterval);
 	}
 });
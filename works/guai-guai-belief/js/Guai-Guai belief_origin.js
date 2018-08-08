$(document).ready(function () {
	/* navbar */

	$("a[href^='#']").click(function () {
		// "^"，正則式，比對字串開頭 (開始位置)。

		var target = $($(this).attr("href"));
		$("a[href^='#']").each(function () {
			$(".stop-nav").css("color", "");
			$(this).removeClass("stop-nav");
		});
		$(this).css("color", "#17816f").addClass("stop-nav");
		setTimeout("$('.stop-nav').css('color','')", 2000);
		$("html, body").animate({
				scrollTop: target.offset().top
			},
			800
		);
	});

	/* opening */

	// RWD
	function title() {
		if ($(window).width() <= 381) {
			$(".subtitle h2")
				.before("<br class='sub-br'>")
				.css("left", "16px");
			$(".subtitle img").css("margin-bottom", "24px");
			$(".title").css("margin-left", "-4.1%");
		}
	}
	title();

	// animate
	setTimeout("$('.opening').slideUp(2400)", 32200);
	setTimeout("$('.head-title').slideDown(2000)", 34600);
	setTimeout("$('.content-display').fadeIn(800)", 36600);

	// RWD
	$(window).resize(function () {
		if ($(window).width() <= 381) {
			if ($(".subtitle br").hasClass("sub-br")) {} else {
				$(".subtitle h2").before("<br class='sub-br'>");
				$(".subtitle h2").css("left", "16px");
				$(".subtitle img").css("margin-bottom", "24px");
				$(".title").css("margin-left", "-4.1%");
			}
		} else if ($(window).width() > 381) {
			$(".sub-br").remove();
			$(".subtitle h2").css("left", "");
			$(".subtitle img").css("margin-bottom", "");
			$(".title").css("margin-left", "");
		}
	});

	/* image of engineer */

	// respond
	var grade = 0;

	function respond() {
		if (1 <= grade) {
			$(".engin-img .respond")
				.text("哦！看起來還不錯！")
				.removeClass("yellow-text")
				.removeClass("red-text")
				.addClass("green-text");
			$(".grade")
				.removeClass("yellow-text")
				.removeClass("red-text")
				.addClass("green-text");
		} else if (grade == 0) {
			$(".engin-img .respond")
				.html("嗯<span>……</span>有好有壞。")
				.removeClass("green-text")
				.removeClass("red-text")
				.addClass("yellow-text");
			$(".grade")
				.removeClass("green-text")
				.removeClass("red-text")
				.addClass("yellow-text");
		} else {
			$(".engin-img .respond")
				.html("呃<span>……</span>形象似乎有點不好。")
				.removeClass("green-text")
				.removeClass("yellow-text")
				.addClass("red-text");
			$(".grade")
				.removeClass("green-text")
				.removeClass("yellow-text")
				.addClass("red-text");
		}
	}

	// grade
	function btn_grade(btn) {
		grade = grade + btn;
		$(".grade").text(grade);
	}

	// button
	// add button
	var add1 = 0;
	var add1r = 0;
	var add2 = 0;
	var add2r = 0;
	var add3 = 0;
	var add3r = 0;
	$(".btn-a1").click(function () {
		add1 += 1;
		if (add1 % 2 == 1) {
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(23,129,111,0.8)",
					"border-color": "#17816f",
					color: "#17816f"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			add1r = add1;
			btn_grade(-1);
			respond();
			$(this)
				.css({
					// 函式或變數可以只儲存下面這三行 css 嗎？
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-a2").click(function () {
		add2 += 1;
		if (add2 % 2 == 1) {
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(23,129,111,0.8)",
					"border-color": "#17816f",
					color: "#17816f"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			add2r = add2;
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-a3").click(function () {
		add3 += 1;
		if (add3 % 2 == 1) {
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(23,129,111,0.8)",
					"border-color": "#17816f",
					color: "#17816f"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			add3r = add3;
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});

	// minus button
	var minus1 = 0;
	var minus1r = 0;
	var minus2 = 0;
	var minus2r = 0;
	var minus3 = 0;
	var minus3r = 0;
	var minus4 = 0;
	var minus4r = 0;
	$(".btn-m1").click(function () {
		minus1 += 1;
		if (minus1 % 2 == 1) {
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(219,43,24,0.8)",
					"border-color": "#db2b18",
					color: "#db2b18"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			minus1r = minus1;
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-m2").click(function () {
		minus2 += 1;
		if (minus2 % 2 == 1) {
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(219,43,24,0.8)",
					"border-color": "#db2b18",
					color: "#db2b18"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			minus2r = minus2;
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-m3").click(function () {
		minus3 += 1;
		if (minus3 % 2 == 1) {
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(219,43,24,0.8)",
					"border-color": "#db2b18",
					color: "#db2b18"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			minus3r = minus3;
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-m4").click(function () {
		minus4 += 1;
		if (minus4 % 2 == 1) {
			btn_grade(-1);
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(219,43,24,0.8)",
					"border-color": "#db2b18",
					color: "#db2b18"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			minus4r = minus4;
			btn_grade(1);
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});

	// neutral button
	var neutral1 = 0;
	var neutral1r = 0;
	var neutral2 = 0;
	var neutral2r = 0;
	var neutral3 = 0;
	var neutral3r = 0;
	$(".btn-n1").click(function () {
		neutral1 += 1;
		if (neutral1 % 2 == 1) {
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(229,131,14,0.8)",
					"border-color": "#e5830e",
					color: "#e5830e"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			neutral1r = neutral1;
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-n2").click(function () {
		neutral2 += 1;
		if (neutral2 % 2 == 1) {
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(229,131,14,0.8)",
					"border-color": "#e5830e",
					color: "#e5830e"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			neutral2r = neutral2;
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});
	$(".btn-n3").click(function () {
		neutral3 += 1;
		if (neutral3 % 2 == 1) {
			respond();
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(229,131,14,0.8)",
					"border-color": "#e5830e",
					color: "#e5830e"
				})
				.addClass("fw-medium")
				.addClass("stop-btn");
		} else {
			neutral3r = neutral3;
			respond();
			$(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium")
				.removeClass("stop-btn");
		}
	});

	// stop button
	$(".engin-img button").click(function () {
		if (
			add1 -
			add1r +
			add2 -
			add2r +
			add3 -
			add3r +
			minus1 -
			minus1r +
			minus2 -
			minus2r +
			minus3 -
			minus3r +
			minus4 -
			minus4r +
			neutral1 -
			neutral1r +
			neutral2 -
			neutral2r +
			neutral3 -
			neutral3r ==
			3
		) {
			$(".engin-img button").each(function () {
				$(this)
					.attr("disabled", "disabled")
					.addClass("disabled-btn");
				$(".stop-btn").removeAttr("disabled");
			});
		} else {
			$(".engin-img button")
				.removeAttr("disabled")
				.removeClass("disabled-btn");
		}

		// start button
		if (
			add1 -
			add1r +
			add2 -
			add2r +
			add3 -
			add3r +
			minus1 -
			minus1r +
			minus2 -
			minus2r +
			minus3 -
			minus3r +
			minus4 -
			minus4r +
			neutral1 -
			neutral1r +
			neutral2 -
			neutral2r +
			neutral3 -
			neutral3r ==
			0
		) {
			$(".engin-img .respond")
				.html("我對工程師的印象是<span>……</span>")
				.removeClass("green-text")
				.removeClass("yellow-text")
				.removeClass("red-text");
			$(".engin-img .grade")
				.removeClass("green-text")
				.removeClass("yellow-text")
				.removeClass("red-text");
		}
	});

	/* engineer how to practice */

	// practice-multi-choice-1
	$("#guai-yellow").click(function () {
		$(this).animate({
			opacity: 0
		}, 0);
		$("#guai-green").animate({
			opacity: 1
		}, 0);
		$("#guai-red").animate({
			opacity: 1
		}, 0);
		$("#guai-yt").addClass("yellow-text");
		$("#guai-gt").removeClass("green-text");
		$("#guai-rt").removeClass("red-text");
	});
	$("#guai-green").click(function () {
		$(this).animate({
			opacity: 0
		}, 0);
		$("#guai-yellow").animate({
			opacity: 1
		}, 0);
		$("#guai-red").animate({
			opacity: 1
		}, 0);
		$("#guai-yt").removeClass("yellow-text");
		$("#guai-gt").addClass("green-text");
		$("#guai-rt").removeClass("red-text");
	});
	$("#guai-red").click(function () {
		$(this).animate({
			opacity: 0
		}, 0);
		$("#guai-yellow").animate({
			opacity: 1
		}, 0);
		$("#guai-green").animate({
			opacity: 1
		}, 0);
		$("#guai-yt").removeClass("yellow-text");
		$("#guai-gt").removeClass("green-text");
		$("#guai-rt").addClass("red-text");
	});

	// practice-multi-choice-2
	$(".practice .mtc-2 .mtco1").click(function () {
		$(".practice .mtc-2 .mtco1 .mtca")
			.html("不能啊！！")
			.addClass("yellow-text");
		$(".practice .mtc-2 .mtco2 .mtca")
			.html("對它發出餓吼！")
			.removeClass("red-text");
		$(".practice .mtc-2 .mtco3 .mtca")
			.html("不能，吃了會出事<span>…</span>我要忍住<span>…</span>")
			.removeClass("green-text");
	});
	$(".practice .mtc-2 .mtco2").click(function () {
		$(".practice .mtc-2 .mtco2 .mtca")
			.html("應該是去對主管吼吧？！")
			.addClass("red-text");
		$(".practice .mtc-2 .mtco1 .mtca")
			.html("把它給吃了！")
			.removeClass("yellow-text");
		$(".practice .mtc-2 .mtco3 .mtca")
			.html("不能，吃了會出事<span>…</span>我要忍住<span>…</span>")
			.removeClass("green-text");
	});
	$(".practice .mtc-2 .mtco3").click(function () {
		$(".practice .mtc-2 .mtco3 .mtca")
			.html("忍耐~忍耐~想早下班你要學會忍耐~~")
			.addClass("green-text");
		$(".practice .mtc-2 .mtco1 .mtca")
			.html("把它給吃了！")
			.removeClass("yellow-text");
		$(".practice .mtc-2 .mtco2 .mtca")
			.html("對它發出餓吼！")
			.removeClass("red-text");
	});

	// practice-multi-choice-3
	$(".mtc-3 .mtco1").click(function () {
		$(".mtc-3 .mtco1 .mtca")
			.html("下場：過勞死。")
			.addClass("yellow-text");
		$(".mtc-3 .mtco2 .mtca")
			.html("啊！肯定是乖乖過期了！")
			.removeClass("green-text");
		$(".mtc-3 .mtco3 .mtca")
			.html("水逆啦~")
			.removeClass("red-text");
	});
	$(".mtc-3 .mtco2").click(function () {
		$(".mtc-3 .mtco2 .mtca")
			.html("快去買新的一包！")
			.addClass("green-text");
		$(".mtc-3 .mtco1 .mtca")
			.html("只好熬夜修機器QQ")
			.removeClass("yellow-text");
		$(".mtc-3 .mtco3 .mtca")
			.html("水逆啦~")
			.removeClass("red-text");
	});
	$(".mtc-3 .mtco3").click(function () {
		$(".mtc-3 .mtco3 .mtca")
			.html("沒有天天在水逆的啦！")
			.addClass("red-text");
		$(".mtc-3 .mtco1 .mtca")
			.html("只好熬夜修機器QQ")
			.removeClass("yellow-text");
		$(".mtc-3 .mtco2 .mtca")
			.html("肯定是乖乖過期了！")
			.removeClass("green-text");
	});

	/* three types of believers */
	$(".believer-type button")
		.eq(0)
		.css({
			"box-shadow": "-2px 2px 0px 0px rgba(23,129,111,0.8)",
			"border-color": "#17816f",
			color: "#17816f"
		});
	$(".believer-type .respond .point1").css("left", "4%");
	$(".believer-type .respond .point2").css("left", "3.4%");
	$(".believer-type button")
		.eq(0)
		.click(function () {
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(23,129,111,0.8)",
					"border-color": "#17816f",
					color: "#17816f"
				})
				.addClass("fw-medium");
			$(".believer-type button")
				.not(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium");
			$(".believer-type .respond h4")
				.text("堅信者")
				.removeClass("yellow-text")
				.removeClass("red-text")
				.addClass("green-text");
			$(".believer-type .respond .point1").css({
				left: "4%",
				right: ""
			});
			$(".believer-type .respond .point2").css({
				left: "3.4%",
				right: ""
			});
			$(".believer-type .respond .descri")
				.text(
					"什麼妖魔鬼怪我都見過，乖乖的威力是不唬人的！大家的努力當然重要，但不怕一萬、只怕萬一，乖乖肯定還是要放的。"
				)
				.css("color", "#17816f");
			$(".believer-type .respond").css({
				"border-color": "#17816f",
				"box-shadow": "4px 2px 0px 0px rgba(23, 129, 111, 0.8)"
			});
			$(".believer-type .respond .point1").css("border-bottom-color", "#17816f");
		});
	$(".believer-type button")
		.eq(1)
		.click(function () {
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(229,131,14,0.8)",
					"border-color": "#e5830e",
					color: "#e5830e"
				})
				.addClass("fw-medium");
			$(".believer-type button")
				.not(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium");
			$(".believer-type button")
				.eq(0)
				.removeClass("selected");
			$(".believer-type .respond h4")
				.text("求心安者")
				.removeClass("green-text")
				.removeClass("red-text")
				.addClass("yellow-text");
			$(".believer-type .respond .point1").css({
				left: "43%",
				right: ""
			});
			$(".believer-type .respond .point2").css({
				left: "42.4%",
				right: ""
			});
			$(".believer-type .respond .descri")
				.html(
					"嗯<span>……</span>我是聽過乖乖的傳說啦，但沒那麼相信。不過，放了也沒什麼損失吧？而且如果真能「穩定軍心」，好像也不錯呢。"
				)
				.css("color", "#e5830e");
			$(".believer-type .respond").css({
				"border-color": "#e5830e",
				"box-shadow": "0px 2px 0px 0px rgba(229, 131, 14, 0.8)"
			});
			$(".believer-type .respond .point1").css("border-bottom-color", "#e5830e");
		});
	$(".believer-type button")
		.eq(2)
		.click(function () {
			$(this)
				.css({
					"box-shadow": "-2px 2px 0px 0px rgba(219,43,24,0.8)",
					"border-color": "#db2b18",
					color: "#db2b18"
				})
				.addClass("fw-medium");
			$(".believer-type button")
				.not(this)
				.css({
					"box-shadow": "",
					"border-color": "",
					color: ""
				})
				.removeClass("fw-medium");
			$(".believer-type button")
				.eq(0)
				.removeClass("selected");
			$(".believer-type .respond h4")
				.text("都可以者")
				.removeClass("green-text")
				.removeClass("yellow-text")
				.addClass("red-text");
			$(".believer-type .respond .point1").css({
				left: "",
				right: "3.4%"
			});
			$(".believer-type .respond .point2").css({
				left: "",
				right: "4%"
			});
			$(".believer-type .respond .descri")
				.text(
					"就只是一包零食罷了，哪有什麼防止機器故障的效果？但對「信仰」這種事，我是尊重啦！只要不要對機器有負面影響就好。"
				)
				.css("color", "#db2b18");
			$(".believer-type .respond").css({
				"border-color": "#db2b18",
				"box-shadow": "-4px 2px 0px 0px rgba(219, 43, 24, 0.8)"
			});
			$(".believer-type .respond .point1").css("border-bottom-color", "#db2b18");
		});

	/* double-sided of Guai-Guai */

	// doubleside-multi-choice-1
	$(".double-side .mtc-1 .mtco1").click(function () {
		$(".double-side .mtc-1 .mtco1 .mtca")
			.html("但其他工程師還是會放，ㄎㄎ。")
			.addClass("red-text");
		$(".double-side .mtc-1 .mtco2 .mtca")
			.html(
				"機器會故障是我的疏失，我慢慢修還是能修好的，但希望下次乖乖給力一點啊。"
			)
			.removeClass("green-text");
		$(".double-side .mtc-1 .mtco3 .mtca")
			.html("這一定是某個更強大的邪惡勢力造成的，連乖乖神都無法阻擋<span>……</span>")
			.removeClass("yellow-text");
	});
	$(".double-side .mtc-1 .mtco2").click(function () {
		$(".double-side .mtc-1 .mtco2 .mtca")
			.html("有放總比沒放好，你說是吧？")
			.addClass("green-text");
		$(".double-side .mtc-1 .mtco1 .mtca")
			.html("放乖乖根本就沒用啊！以後不放了啦！")
			.removeClass("red-text");
		$(".double-side .mtc-1 .mtco3 .mtca")
			.html("這一定是某個更強大的邪惡勢力造成的，連乖乖神都無法阻擋<span>……</span>")
			.removeClass("yellow-text");
	});
	$(".double-side .mtc-1 .mtco3").click(function () {
		$(".double-side .mtc-1 .mtco3 .mtca")
			.html("都是&nbsp;They&nbsp;的錯。")
			.addClass("yellow-text");
		$(".double-side .mtc-1 .mtco1 .mtca")
			.html("放乖乖根本就沒用啊！以後不放了啦！")
			.removeClass("red-text");
		$(".double-side .mtc-1 .mtco2 .mtca")
			.html(
				"機器會故障是我的疏失，我慢慢修還是能修好的，但希望下次乖乖給力一點啊。"
			)
			.removeClass("green-text");
	});

	// doubleside-multi-choice-2
	$(".double-side .mtc-2 .mtco1").click(function () {
		$(".double-side .mtc-2 .mtco1 .mtca")
			.html(
				"對啊快加薪<span>——</span>不<span>…</span>不是啦！這跟我們討論的主題無關。"
			)
			.addClass("yellow-text");
		$(".double-side .mtc-2 .mtco2 .mtca")
			.html("我實在太強啦哈哈哈哈！什麼乖乖神的<span>——</span>吃掉！不需要！")
			.removeClass("red-text");
		$(".double-side .mtc-2 .mtco3 .mtca")
			.html(
				"不可否認，我能力真的很好，但還是要感謝乖乖保庇，機器才能順利運行到最後。"
			)
			.removeClass("green-text");
	});
	$(".double-side .mtc-2 .mtco2").click(function () {
		$(".double-side .mtc-2 .mtco2 .mtca")
			.html("小心被其他工程師揍！")
			.addClass("red-text");
		$(".double-side .mtc-2 .mtco1 .mtca")
			.html("不要只會說好聽話，快幫我加薪啊！")
			.removeClass("yellow-text");
		$(".double-side .mtc-2 .mtco3 .mtca")
			.html(
				"不可否認，我能力真的很好，但還是要感謝乖乖保庇，機器才能順利運行到最後。"
			)
			.removeClass("green-text");
	});
	$(".double-side .mtc-2 .mtco3").click(function () {
		$(".double-side .mtc-2 .mtco3 .mtca")
			.html("心態正確，100&nbsp;分！")
			.addClass("green-text");
		$(".double-side .mtc-2 .mtco1 .mtca")
			.html("不要只會說好聽話，快幫我加薪啊！")
			.removeClass("yellow-text");
		$(".double-side .mtc-2 .mtco2 .mtca")
			.html("我實在太強啦哈哈哈哈！什麼乖乖神的<span>——</span>吃掉！不需要！")
			.removeClass("red-text");
	});

	/* slide */
	$(window).scroll(function () {
		var pos1 = $(".slide-animate-1").offset().top;
		var pos2 = $(".slide-animate-2").offset().top;
		var pos3 = $(".slide-animate-3").offset().top;
		var pos4 = $(".slide-animate-4").offset().top;
		var pos5 = $(".slide-animate-5").offset().top;
		var pos6 = $(".slide-animate-6").offset().top;
		var pos7 = $(".slide-animate-7").offset().top;
		var pos8 = $(".slide-animate-8").offset().top;
		var pos9 = $(".slide-animate-9").offset().top;
		var pos10 = $(".slide-animate-10").offset().top;
		var pos11 = $(".slide-animate-11").offset().top;
		var winST = $(window).scrollTop();
		var winH = $(window).height();
		if (pos1 - winH * 0.8 < winST && pos1 != 0) {
			$(".slide-animate-1").addClass("slide");
		}
		if (pos2 - winH * 0.8 < winST && pos2 != 0) {
			$(".slide-animate-2").addClass("slide");
		}
		if (pos3 - winH * 0.8 < winST && pos3 != 0) {
			$(".slide-animate-3").addClass("slide");
		}
		if (pos4 - winH * 0.8 < winST && pos4 != 0) {
			$(".slide-animate-4").addClass("slide");
		}
		if (pos5 - winH * 0.8 < winST && pos5 != 0) {
			$(".slide-animate-5").addClass("slide");
		}
		if (pos6 - winH * 0.8 < winST && pos6 != 0) {
			$(".slide-animate-6").addClass("slide");
		}
		if (pos7 - winH * 0.8 < winST && pos7 != 0) {
			$(".slide-animate-7").addClass("slide");
		}
		if (pos8 - winH * 0.8 < winST && pos8 != 0) {
			$(".slide-animate-8").addClass("slide");
		}
		if (pos9 - winH * 0.8 < winST && pos9 != 0) {
			$(".slide-animate-9").addClass("slide");
		}
		if (pos10 - winH * 0.8 < winST && pos10 != 0) {
			$(".slide-animate-10").addClass("slide");
		}
		if (pos11 - winH * 0.8 < winST && pos11 != 0) {
			$(".slide-animate-11").addClass("slide");
		}
	});
});
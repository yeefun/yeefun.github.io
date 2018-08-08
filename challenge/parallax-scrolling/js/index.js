var ww = window.innerWidth;
var wh = window.innerHeight;
$(window).resize(function () {
	ww = window.innerWidth;
	wh = window.innerHeight;
});

var canClick = void 0;
/*------ Begin → Q1 ------*/
$("#bgBegin .rect").one("animationend", function () {

	canClick = false;

	var begin = new TimelineLite();

	begin.to("#bgBegin .rect", 0.8, {
		scale: 8,
		ease: Power0.easeNone,
		onComplete: function() {
			$("#bgBegin .rect").remove();
		}
	}).

	to("#bgBegin .circle", 0.8, {
			scale: 8,
			ease: Power0.easeNone,
			onComplete: function() {
				$("#bgBegin .circle").remove();
			}
		},
		"-=0.6").
	to("#beginStar", 0.8, {
			scale: 10,
			ease: Power0.easeNone
		},
		"-=0.6").
	to("#beginStar", 1, {
		opacity: 0,
		onComplete: function() {
			$("#beginStar").remove();
		}
	}).

	to("header", 1, {
			opacity: 0,
			onComplete: function() {
				$("header").remove();
				$("#bgBegin .question, #bgQ2").show();
				$("body").css("overflow", "auto");
			}
		},
		"-=1").
	from("#bgBegin .question", 1.2, {
		opacity: 0,
		onComplete: function() {
			$("#bgBegin").css("height", "auto");
		}
	}).

	to("#bgQ2 .shape", 1, {
		width: 422,
		onStart: function() {
			canClick = true;
		}
	}).

	add("q1ShapeEnter").
	to("#bgQ2 .rect", 0.8, {
		top: 108
	}).

	to("#bgQ2 svg", 0.9, {
			top: 320
		},
		"q1ShapeEnter").
	to("#bgQ2 .circle", 1, {
			top: 504,
			onComplete: function() {
				$("#bgQ2 .rect").css("animation-name", "q1Rect");
				$("#bgQ2 svg").css("animation-name", "q1Tri");
				$("#bgQ2 .circle").css("animation-name", "q1Cir");
			}
		},
		"q1ShapeEnter");
});


/*------ Q1 → Q2 ------*/
$(".answer .a1").click(function () {

	if (!canClick) return;

	canClick = false;

	var q2 = new TimelineLite({
		onStart: function() {
			$("#bgQ2").css({
				height: "100vh",
				overflow: "auto"
			});
			$("#bgBegin .question, #bgQ2 .shape").remove();
		}
	});


	q2.to("#bgQ2", 0.4, {
		width: "100%",
		onComplete: function() {
			$("#bgBegin").remove();
			$("#bgQ2 .question, #bgQ3").show();
			$("#bgQ2").css("flex-shrink", "initial");
		}
	}).

	from("#bgQ2 .question", 0.8, {
		opacity: 0
	}).

	to("#bgQ3 .shape", 0.8, {
		width: 422,
		onStart: function() {
			canClick = true;
		}
	}).

	add("q2ShapeEnter").
	to("#bgQ3 svg", 0.8, {
			top: 10
		},
		"q2ShapeEnter-=0.1").
	to("#bgQ3 .rect", 0.9, {
			top: 208
		},
		"q2ShapeEnter-=0.1").
	to("#bgQ3 .circle", 1, {
			top: 370,
			onComplete: function() {
				$("#bgQ3 svg").css("animation-name", "q2Tri");
				$("#bgQ3 .rect").css("animation-name", "q2Rect");
				$("#bgQ3 .circle").css("animation-name", "q2Cir");
			}
		},
		"q2ShapeEnter-=0.1");
});


/*------ Q2 → Q3 ------*/
$(".answer .a2").click(function () {

	if (!canClick) return;

	canClick = false;

	var q3 = new TimelineLite({
		onStart: function() {
			$("#bgQ3").css({
				height: "100vh",
				overflow: "auto"
			});
			$("#bgQ2 .question, #bgQ3 .shape").remove();
		}
	});


	q3.to("#bgQ3", 0.4, {
		width: "100%",
		onComplete: function() {
			$("#bgQ2").remove();
			$("#bgQ3 .question, #bgCalc").show();
			$("#bgQ3").css("flex-shrink", "initial");
		}
	}).

	from("#bgQ3 .question", 0.8, {
		opacity: 0,
		onComplete: function() {
			$("#bgQ3").css("height", "auto");
		}
	}).

	to("#bgCalc .shape", 0.8, {
		width: 422,
		onStart: function() {
			canClick = true;
		}
	}).

	add("q3ShapeEnter").
	to("#bgCalc .circle", 0.8, {
			top: -40
		},
		"q3ShapeEnter-=0.1").
	to("#bgCalc .rect", 0.9, {
			top: 84
		},
		"q3ShapeEnter-=0.1").
	to("#bgCalc svg", 1, {
			top: 426,
			onComplete: function() {
				$("#bgCalc .circle").css("animation-name", "q3Cir");
				$("#bgCalc .rect").css("animation-name", "q3Rect");
				$("#bgCalc svg").css("animation-name", "q3Tri");
			}
		},
		"q3ShapeEnter-=0.1");
});


/*------ Q3 → Calc ------*/
$(".answer .a3").click(function () {

	if (!canClick) return;

	var beforeCalc = new TimelineLite({
		onStart: function() {
			$("#bgQ3 .question, #bgCalc .shape").remove();
			$("#bgCalc").css({
				display: "flex",
				height: "100vh"
			});
		}
	});

	var calc = new TimelineLite({
		onStart: function() {
			calc.pause();
		}
	});

	beforeCalc.to("#bgCalc", 0.4, {
		width: "100%",
		onComplete: function() {
			$("#bgQ3").remove();
			$("#bgCalc #calcText2").css("display", "flex");
			$("#bgCalc").css("position", "fixed");
			$("body").css({
				height: "1500vh"
			});
			$("#scrollShape1").show();
		}
	}).

	from("#calcText2", 0.8, {
		opacity: 0
	}).

	add(calc);

	// Calc
	$(window).scroll(function () {
		var scrollY = window.scrollY;
		var pageHeight = $("body").height() - window.innerHeight;
		var scrollProgress = scrollY / pageHeight;
		console.log(scrollProgress)
		calc.progress(scrollProgress);
	});

	calc.to("#scrollRect1", 0.4, {
		top: "-8%",
		left: ww + 64
	}).

	set("#scrollRect1", {
		opacity: 0
	}).

	to("#scrollRect2", 0.35, {
			top: "2%",
			left: ww + 42
		},
		"-=0.15").
	set("#scrollRect2", {
		opacity: 0
	}).

	to("#scrollRect3", 0.35, {
			bottom: wh + 20,
			right: "24%"
		},
		"-=0.25").
	set("#scrollRect3", {
		opacity: 0
	}).

	to("#scrollRect4", 0.3, {
			top: "8%",
			left: ww + 64
		},
		"-=0.2").
	set("#scrollRect4", {
		opacity: 0
	}).

	to("#scrollRect5", 0.4, {
		bottom: wh + 50,
		right: "-30%"
	}).

	set("#scrollRect5", {
		opacity: 0
	}).

	to("#scrollRect6", 0.35, {
			top: "60%",
			left: ww + 20
		},
		"-=0.2").
	set("#scrollRect6", {
		opacity: 0
	}).

	to("#scrollRect7", 0.4, {
		bottom: wh + 28,
		right: "20%"
	}).

	set("#scrollRect7", {
		opacity: 0
	}).

	to("#scrollRect8", 0.4, {
			top: "-34%",
			left: ww + 62
		},
		"-=0.4").
	set("#scrollRect8", {
		opacity: 0
	}).

	to("#scrollRect9", 0.4, {
			bottom: wh + 64,
			right: "-2%"
		},
		"-=0.15").
	set("#scrollRect9", {
		opacity: 0
	}).

	to("#scrollRect10", 0.4, {
			bottom: wh + 20,
			right: "2%"
		},
		"-=0.3").
	set("#scrollRect10", {
		opacity: 0
	}).

	to("#scrollRect11", 0.6, {
			transform: "scale(" + ww + ") translate(-50%, 36%) rotate(30deg)",
			onComplete: function() {
				$("#bgCalc").css("background-color", "#ff3c82");
				$("#scrollRect11, #calcText2, #scrollShape1").remove();
				$("#calcText3").css("display", "flex");
			}
		},
		"+=0.3").
	from("#calcText3", 0.8, {
			opacity: 0
		},
		"-=0.2").
	add(result); // 以防某些電腦滑不到最底，而起不了作用;
});

/*------ Result ------*/
var result = function result() {

	var result = new TimelineLite({
		onStart: function() {
			$("#bgResult").css("display", "flex");
			$("body").css("height", "unset");
			$("#bgCalc").remove();
		}
	});


	result.from(".resultTitle", 0.8, {
		opacity: 0
	}).

	add("resultShapeEnter").
	to("#moveRect1", 0.6, {
			bottom: "96.6%"
		},
		"resultShapeEnter-=0.8").
	to("#moveRect5", 0.6, {
			bottom: "94.9%"
		},
		"resultShapeEnter-=0.8").
	to("#moveRect2", 0.8, {
			bottom: "80.6%"
		},
		"resultShapeEnter-=0.6").
	to("#moveRect6", 0.8, {
			bottom: "77.2%"
		},
		"resultShapeEnter-=0.6").
	to("#moveRect3", 1, {
			bottom: "65.5%"
		},
		"resultShapeEnter-=0.6").
	to("#moveRect4", 1.2, {
			bottom: "56.9%"
		},
		"resultShapeEnter-=0.6").
	to("#resultRect2", 0.6, {
			top: 52
		},
		"resultShapeEnter-=0.2").
	to("#resultRect3", 0.8, {
			top: 0
		},
		"resultShapeEnter-=0.2").
	to("#resultRect1", 1, {
			top: 30
		},
		"resultShapeEnter-=0.2");
};
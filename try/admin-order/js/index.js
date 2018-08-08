$(function () {
	$('nav li:not(".active")').hover(
		function () {
			$(this).addClass("active");
		},
		function () {
			$(this).removeClass("active");
		});

	var date = [
		"6 JUN",
		"7 JUN",
		"8 JUN",
		"9 JUN",
		"10 JUN",
		"11 JUN",
		"12 JUN",
		"13 JUN"
	];

	var revenue = [6540, 7500, 7000, 6400, 7500, 7600, 7400, 4600];
	var cost = [2000, 1600, 1750, 1100, 1600, 1810, 1000, 1800];
	var income = [6300, 6700, 5300, 4700, 2880, 3000, 6000, 7000];

	var lineChart = echarts.init(document.getElementById("line-chart"));

	var option = {
		xAxis: {
			data: date,
			type: "category",
			axisLine: {
				show: false
			},

			axisTick: {
				show: false
			},

			axisLabel: {
				interval: 0,
				fontFamily: "'Work Sans', 'Microsoft JhengHei', sans-serif",
				fontSize: 16,
				fontWeight: 500,
				margin: 20
			}
		},

		yAxis: {
			type: "value",
			interval: 2000,
			axisLine: {
				show: false
			},

			axisTick: {
				show: false
			},

			axisLabel: {
				fontFamily: "'Work Sans', 'Microsoft JhengHei', sans-serif",
				fontSize: 16,
				fontWeight: 500,
				margin: 28
			},

			splitLine: {
				lineStyle: {
					color: "#ebebeb"
				}
			}
		},

		title: {
			text: "Activity",
			left: 0,
			padding: 0,
			textStyle: {
				color: "#000",
				fontFamily: "'Work Sans', 'Microsoft JhengHei', sans-serif",
				fontSize: 24,
				fontWeight: 700
			}
		},

		grid: {
			top: 54,
			left: 0,
			right: 0,
			bottom: 0,
			containLabel: true
		},

		legend: {
			show: false
		},

		tooltip: {
			trigger: "axis",
			axisPointer: {
				lineStyle: {
					color: "#ebebeb"
				}
			},

			confine: true,
			hideDelay: 0,
			transitionDuration: 0,
			padding: [8, 16],
			textStyle: {
				fontFamily: "'Work Sans', 'Microsoft JhengHei', sans-serif",
				fontSize: 16,
				fontWeight: 500
			},

			extraCssText: "border-radius: 3px;"
		},

		series: [{
				type: "line",
				data: revenue,
				tooltip: {
					backgroundColor: "#7ed321"
				},
				itemStyle: {
					opacity: 0
				},

				emphasis: {
					itemStyle: {
						borderWidth: 4,
						opacity: 1
					}
				}
			},

			{
				type: "line",
				data: cost,
				tooltip: {
					backgroundColor: "#d0021b"
				},
				itemStyle: {
					opacity: 0
				},

				emphasis: {
					itemStyle: {
						borderWidth: 4,
						opacity: 1
					}
				}
			},

			{
				type: "line",
				data: income,
				tooltip: {
					backgroundColor: "#4a90e2"
				},
				itemStyle: {
					opacity: 0
				},

				emphasis: {
					itemStyle: {
						borderWidth: 4,
						opacity: 1
					}
				}
			}
		],

		color: ["#7ed321", "#d0021b", "#4a90e2"],
		textStyle: {
			color: "#9b9b9b"
		},

		animationDuration: 800
	};

	lineChart.setOption(option);
	window.onresize = lineChart.resize;
});
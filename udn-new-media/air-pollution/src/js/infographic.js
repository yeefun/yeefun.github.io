const detailTrigger = document.querySelectorAll('.infographic__detail u');
const detailTable = document.querySelectorAll('.infographic__detail-table');
const closeBtn = document.querySelectorAll('.close-btn');
const chartBtn = document.querySelectorAll('.infographic__chart-button');
const seventeenBtn = document.getElementById('seventeen-btn');
const eighteenBtn = document.getElementById('eighteen-btn');





for (let i = 0; i < detailTrigger.length; i++) {
  detailTrigger[i].addEventListener('click', () => {
    detailTable[i].style.cssText = 'opacity: 1; pointer-events: auto;';
  });
  closeBtn[i].addEventListener('click', () => {
    detailTable[i].style.cssText = 'opacity: 0; pointer-events: none;';
  });
}





let is2018 = false;
let seventeenBtnClick = function () {
  for (let i = 0; i < chartBtn.length; i++) {
    chartBtn[i].classList.remove('active');
  };
  this.classList.add('active');

  is2018 = false;
  d3.selectAll('rect.bar').transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('width', d => xScale(d['2017_concn']))
    .attr('fill', '#5ae2db');

  d3.selectAll('text.bar-num')
    .transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('x', d => xScale(d['2017_concn']) + 6)
    .style('opacity', 0)
    .attr('fill', '#000');

  d3.selectAll('text.y-tick')
    .transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('fill', '#000');
};
let eighteenBtnClick = function () {
  for (let i = 0; i < chartBtn.length; i++) {
    chartBtn[i].classList.remove('active');
  };
  this.classList.add('active');

  is2018 = true;
  d3.selectAll('rect.bar').transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('width', d => xScale(d['2018_concn']))
    .attr('fill', d => {
      if (d.city === '連江縣' || d.city === '新竹市' || d.city === '苗栗縣' || d.city === '桃園市' || d.city === '宜蘭縣' || d.city === '臺東縣' || d.city === '嘉義縣') {
        return '#ff4800';
      } else {
        return '#5ae2db';
      }
    });

  d3.selectAll('text.bar-num')
    .transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('x', d => xScale(d['2018_concn']) + 6)
    .style('opacity', 1)
    .attr('fill', d => {
      if (d.city === '連江縣' || d.city === '新竹市' || d.city === '苗栗縣' || d.city === '桃園市' || d.city === '宜蘭縣' || d.city === '臺東縣' || d.city === '嘉義縣') {
        return '#ff4800';
      }
    });

  d3.selectAll('text.y-tick')
    .transition()
    .duration(600)
    .ease(d3.easeExp)
    .attr('fill', d => {
      if (d.city === '連江縣' || d.city === '新竹市' || d.city === '苗栗縣' || d.city === '桃園市' || d.city === '宜蘭縣' || d.city === '臺東縣' || d.city === '嘉義縣') {
        return '#ff4800';
      } else {
        return '#000';
      }
    });
};
seventeenBtn.addEventListener('click', function () {
  seventeenBtnClick.call(this);
  clearTimeout(switchSeventeenBtn);
  clearTimeout(switchEighteenBtn);
});

eighteenBtn.addEventListener('click', function () {
  eighteenBtnClick.call(this);
  clearTimeout(switchSeventeenBtn);
  clearTimeout(switchEighteenBtn);
});

let switchSeventeenBtn;
let switchEighteenBtn;
const autoSwitchBtn = function () {
  switchSeventeenBtn = setTimeout(() => {
    seventeenBtnClick.call(seventeenBtn);
    switchEighteenBtn = setTimeout(() => {
      eighteenBtnClick.call(eighteenBtn);
      autoSwitchBtn();
    }, 2500);
  }, 2500);
};

setTimeout(() => {
  eighteenBtnClick.call(eighteenBtn);
  autoSwitchBtn();
}, 2500);



const data = [{
    city: '基隆市',
    '2017_concn': 17.2,
    '2018_concn': 15.7
  },
  {
    city: '臺北市',
    '2017_concn': 17.3,
    '2018_concn': 16.6
  },
  {
    city: '新北市',
    '2017_concn': 19.3,
    '2018_concn': 18.4
  },
  {
    city: '桃園市',
    '2017_concn': 19.4,
    '2018_concn': 20.3
  },
  {
    city: '新竹縣',
    '2017_concn': 21.3,
    '2018_concn': 20.5
  },
  {
    city: '新竹市',
    '2017_concn': 18.7,
    '2018_concn': 21.5
  },
  {
    city: '苗栗縣',
    '2017_concn': 19.6,
    '2018_concn': 21.4
  },
  {
    city: '臺中市',
    '2017_concn': 22.3,
    '2018_concn': 21
  },
  {
    city: '彰化縣',
    '2017_concn': 24.6,
    '2018_concn': 24.6
  },
  {
    city: '南投縣',
    '2017_concn': 29,
    '2018_concn': 25.7
  },
  {
    city: '雲林縣',
    '2017_concn': 30.1,
    '2018_concn': 26.4
  },
  {
    city: '嘉義縣',
    '2017_concn': 25.9,
    '2018_concn': 26.3
  },
  {
    city: '嘉義市',
    '2017_concn': 30.8,
    '2018_concn': 27.2
  },
  {
    city: '臺南市',
    '2017_concn': 28.1,
    '2018_concn': 26
  },
  {
    city: '高雄市',
    '2017_concn': 29.5,
    '2018_concn': 26.2
  },
  {
    city: '屏東縣',
    '2017_concn': 23.1,
    '2018_concn': 20.7
  },
  {
    city: '宜蘭縣',
    '2017_concn': 12.9,
    '2018_concn': 13.6
  },
  {
    city: '花蓮縣',
    '2017_concn': 13.2,
    '2018_concn': 8.3
  },
  {
    city: '臺東縣',
    '2017_concn': 9.8,
    '2018_concn': 10.3
  },
  {
    city: '澎湖縣',
    '2017_concn': 16.7,
    '2018_concn': 16
  },
  {
    city: '金門縣',
    '2017_concn': 31.5,
    '2018_concn': 26.7
  },
  {
    city: '連江縣',
    '2017_concn': 21.2,
    '2018_concn': 24.3
  }
];

data.sort((a, b) => {
  a = a['2018_concn'] - a['2017_concn'];
  b = b['2018_concn'] - b['2017_concn'];
  return b - a;
});





const chart = d3.select('.stacked-bar-chart');
const totalGroup = chart.append('g');
let width = chart._groups[0][0].getBoundingClientRect().width - 49;
const yTickValue = [0, 10, 20, 30, 40, 50];
let xScale = d3
  .scaleLinear()
  .domain([0, 50])
  .range([0, width]);





// Resize Event
window.addEventListener('resize', () => {

  width = chart._groups[0][0].getBoundingClientRect().width - 49;

  xScale = d3
    .scaleLinear()
    .domain([0, 50])
    .range([0, width]);

  if (is2018) {
    d3
      .selectAll('rect.bar')
      .attr('width', d => xScale(d['2018_concn']));
    d3
      .selectAll('text.bar-num')
      .attr('x', d => xScale(d['2018_concn']) + 6);
  } else {
    d3
      .selectAll('rect.bar')
      .attr('width', d => xScale(d['2017_concn']));
    d3
      .selectAll('text.bar-num')
      .attr('x', d => xScale(d['2017_concn']) + 6);
  }

  xAxisGroup
    .selectAll('path')
    .attr('d', `M48 528 l${width} 0 l0 1 l-${width} 0 Z`);

  xAxisGroup
    .selectAll('g.x-tick')
    .attr('transform', (d, i) => {
      if (i === 0) {
        return 'translate(-2, 0)';
      } else if (i === 5) {
        return `translate(${width - 15.56 + 1.5}, 0)`;
      } else {
        return `translate(${width / 5 * i - 7.78}, 0)`;
      }
    });
});





/*
 ** Bar
 */
const barGroup = totalGroup
  .append('g')
  .selectAll('g.bar-group')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'bar-group')
  .attr('transform', (d, i) => {
    if (i === 0) {
      return 'translate(49, 3)';
    } else {
      return `translate(49, ${18 * i + 6 * i + 3})`;
    }
  });

barGroup
  .append('rect')
  .attr('class', 'bar')
  .attr('fill', '#5ae2db')
  .attr('width', d => xScale(d['2017_concn']))
  .attr('height', 18);

barGroup
  .append('text')
  .attr('class', 'bar-num')
  .text(d => {
    let cononGap = Math.round((d['2018_concn'] - d['2017_concn']) * 10) / 10;
    return cononGap > 0 ? `+${cononGap}%` : `${cononGap}%`;
  })
  .style('opacity', 0)
  .attr('x', d => xScale(d['2017_concn']) + 6)
  .attr('y', 14)
  .attr('fill', '#000');





/*
 ** Y-axis
 */
const yAxisGroup = totalGroup
  .append('g')
  .attr('class', 'y-axis');

yAxisGroup
  .selectAll('g.y-axis')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'y-tick')
  .text(d => d['city'])
  .attr('fill', '#000')
  .attr('transform', (d, i) => {
    if (i === 0) {
      return 'translate(0, 17)';
    } else {
      return `translate(0, ${18 * i + 6 * i + 17})`;
    }
  });

yAxisGroup
  .append('path')
  .attr('fill', '#aaa')
  .attr('d', 'M48 0 l0 528 l1 0 l0 -528 Z');





/*
 ** X-axis
 */
const xAxisGroup = totalGroup
  .append('g')
  .attr('class', 'x-axis');

const xTickGroup = xAxisGroup
  .append('g')
  .attr('transform', 'translate(48, 545)')
  .selectAll('g.x-axis')
  .data(yTickValue)
  .enter()
  .append('g')
  .attr('class', 'x-tick')
  .attr('transform', (d, i) => {
    if (i === 0) {
      return 'translate(-2, 0)';
    } else if (i === 5) {
      return `translate(${width - 15.56 + 1.5}, 0)`;
    } else {
      return `translate(${width / 5 * i - 7.78}, 0)`;
    }
  });

xAxisGroup
  .append('path')
  .attr('fill', '#aaa')
  .attr('d', `M48 528 l${width} 0 l0 1 l-${width} 0 Z`);

xTickGroup
  .append('text')
  .text(d => d)
  .attr('fill', '#aaa')
  .attr('transform', 'translate(0, 4)');

xTickGroup
  .append('line')
  .attr('y2', 6)
  .attr('stroke', '#aaa')
  .attr('transform', (d, i) => {
    if (i === 0) {
      return 'translate(2.5, -16)';
    } else if (i === 5) {
      return 'translate(13.6, -16)';
    } else {
      return 'translate(8.5, -16)';
    }
  });
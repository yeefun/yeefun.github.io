/* Environment Variable */
const updateFPS = 30;
// const showMouse = true;
// const bgColor = 'black';
let time = 0;

const globalColor = {
  red: "#e7465d",
  yellow: "#f5af5f",
  blue: "#3676bb",
  blueDark: "#001d2e",
  white: "#fff",
};





/* GUI Controls */
// const controls = {
//   value: 0,
// }

const gui = new dat.GUI();
// gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});





/* 2D Vector Class */
class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
  add(v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  }
  sub(v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  }
  mul(s) {
    return new Vec2(this.x * s, this.y * s);
  }
  clone() {
    return new Vec2(this.x, this.y);
  }
  equal(v) {
    return this.x === v.x && this.y === v.y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  set length(newVal) {
    const newLength = this.unit.mul(newVal);
    this.set(newLength.x, newLength.y);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  get unit() {
    return this.mul(1 / this.length);
  }
}





/* Initialize Canvas Settings */
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let cw;
let ch;

ctx.circle = function (v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
}
ctx.line = function (v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
}

function initCanvas() {
  cw = canvas.width;
  ch = canvas.height;
}
// initCanvas();





const degToPi = Math.PI / 180;
class Game {
  constructor(args) {
    const def = {
      start: false,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  init() {
    this.render();
    this.update();
  }
  render() {
    ctx.fillStyle = globalColor.blueDark;
    ctx.fillRect(0, 0, cw, ch);
    if (!this.start) {
      // 中央兩白圈
      ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.beginPath();
        ctx.arc(0, 0, 196, 0, Math.PI * 2);
        ctx.strokeStyle = globalColor.white;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 264, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      ctx.restore();
      // 左下方字
      // ctx.fillStyle = globalColor.white;
      // ctx.font = '300 14px sans-serif';
      // ctx.fillText('你身負著運送能量電池的任務', 24, ch - 80);
      // ctx.fillText('卻遭到幾何星人的埋伏', 24, ch - 56);
      // ctx.fillText('請協助從他們的手中奪回能量電池！', 24, ch - 32);
      // 黃圓
      const circle = new Circle({
        p: {
          x: cw - 128,
          y: 96,
        },
      });
      circle.draw();
      // 藍三角形
      const triangle = new Triangle({
        p: {
          x: cw - 224,
          y: ch - 80,
        },
        rotate: 8,
      });
      triangle.draw();
      // 紅多邊形
      const polygon = new Polygon({
        p: {
          x: 88,
          y: 104,
        },
      });
      polygon.draw();
    }
    requestAnimationFrame(() => { this.render() });
  }
  update() {
    time += 1;

    setTimeout(() => { this.update() }, 1000 / updateFPS);
  }
}



/* Circle Class
 **
 */
class Circle {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      r: 40,
      color: globalColor.yellow,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.p.x, this.p.y, this.r, 0, Math.PI *2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}


/* Triangle Class
**
 */
class Triangle {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      // angleSpan: 360 / 3,
      r: 78,
      rotate: 0,
      color: globalColor.blue,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.beginPath();
    ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.moveTo(0, 0);
      ctx.rotate(this.rotate * degToPi);
      ctx.lineTo(this.r, 0);
      ctx.translate(this.r, 0);
      ctx.rotate(-30 * degToPi);
      ctx.lineTo(0, -this.r);
    ctx.restore();
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    // let points = [];
    // for (let i = 0; i < 3; i += 1) {
    //   const angle = this.rotate * degToPi + (360 / 3) * i * degToPi;
    //   points.push({
    //     angle,
    //     r: this.r,
    //   });
    // }
    // ctx.save();
    //   ctx.translate(this.p.x, this.p.y);
    //   ctx.beginPath();
    //   points.forEach((point) => {
    //     ctx.lineTo(point.r * Math.cos(point.angle), point.r * Math.sin(point.angle));
    //   });
    //   ctx.closePath();
    //   ctx.fillStyle = this.color;
    //   ctx.fill();
    // ctx.restore();
  }
}



class Polygon {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      color: globalColor.red,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.beginPath();
      ctx.translate(this.p.x, this.p.y);
      ctx.moveTo(0, 0);
      ctx.rotate(18 * degToPi);
      ctx.lineTo(44, 0);
      ctx.translate(44, 0)

      ctx.rotate(64 * degToPi);
      ctx.lineTo(28, 0);
      ctx.translate(28, 0);

      ctx.rotate(40 * degToPi);
      ctx.lineTo(38, 0);
      ctx.translate(38, 0);

      ctx.rotate(76 * degToPi);
      ctx.lineTo(52, 0);
      ctx.translate(52, 0);

      ctx.rotate(50 * degToPi);
      ctx.lineTo(48, 0);
    ctx.restore();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

/* Initialize Game Logic */
// function init() {

// }





/* Update Game Logic */
// function update() {
//   time += 1;
// }





/* Update Picture */
// function draw() {
  // clear background
  // ctx.fillStyle = globalColor.blueDark;
  // ctx.fillRect(0, 0, cw, ch);

  // draw here
  // ...

  // draw mouse
  // ctx.fillStyle = 'red';
  // ctx.beginPath();
  // ctx.circle(mouseMovePos, 3);
  // ctx.fill();

  // ctx.save();
  // ctx.translate(mouseMovePos.x, mouseMovePos.y);
  // ctx.strokeStyle = 'red';
  // const length = 20;
  // ctx.beginPath();
  // ctx.fillText(mouseMovePos, 10, -10);
  // ctx.line(new Vec2(-length, 0), new Vec2(length, 0));
  // ctx.line(new Vec2(0, -length), new Vec2(0, length));
  // ctx.stroke();
  // ctx.restore();

  // requestAnimationFrame(draw);
// }





/* Page Loaded */
function handleLoad() {
  const game = new Game();
  initCanvas();
  game.init();
  // init();
  // requestAnimationFrame(draw);
  // setInterval(update, 1000 / updateFPS);
}

// load & resize event
window.addEventListener('load', handleLoad);
window.addEventListener('resize', initCanvas);





/* Mouse Events & Recording */
const mouseMovePos = new Vec2(0, 0);
let mouseUpPos = new Vec2(0, 0);
let mouseDownPos = new Vec2(0, 0);

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousedown', handleMouseDown);

function handleMouseMove(evt) {
  mouseMovePos.set(evt.x, evt.y);
}

function handleMouseUp(evt) {
  mouseUpPos = mouseMovePos.clone();
}

function handleMouseDown(evt) {
  mouseDownPos = mouseMovePos.clone();
}
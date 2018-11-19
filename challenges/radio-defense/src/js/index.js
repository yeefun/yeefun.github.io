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
        ctx.arc(0, 0, 180, 0, Math.PI * 2);
        ctx.strokeStyle = globalColor.white;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 264, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      ctx.restore();
      // 黃圓
      const circle = new Circle({
        p: {
          x: cw - 120,
          y: 96,
        },
      });
      circle.draw();
      // 藍三角形
      const triangle = new Triangle({
        p: {
          x: cw - 240,
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
      // 電池
      drawBattery({
        x: cw / 2 - 24,
        y: ch / 2 - 51.8,
      });
      // R 字小三角裝飾
      ctx.save();
        ctx.translate(cw / 2 + 24, ch / 2 - 30);
        ctx.rotate(-132 * degToPi);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(4, 0);
        ctx.lineTo(0, -8);
        ctx.lineTo(-4, 0);
        ctx.closePath();
        ctx.fillStyle = globalColor.white;
        ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(() => { this.render() });
  }
  update() {
    time += 1;
    setTimeout(() => { this.update() }, 1000 / updateFPS);
  }
}



/* Circle Class */
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



/* Triangle Class */
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
  }
}



/* Polygon Class */
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
      ctx.rotate(16 * degToPi);
      ctx.lineTo(40, 0);
      ctx.translate(40, 0)

      ctx.rotate(64 * degToPi);
      ctx.lineTo(28, 0);
      ctx.translate(28, 0);

      ctx.rotate(42 * degToPi);
      ctx.lineTo(36, 0);
      ctx.translate(36, 0);

      ctx.rotate(76 * degToPi);
      ctx.lineTo(48, 0);
      ctx.translate(48, 0);

      ctx.rotate(48 * degToPi);
      ctx.lineTo(44, 0);
    ctx.restore();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}



function drawBattery(p) {
  ctx.save();
    ctx.translate(p.x, p.y);
    ctx.fillStyle = globalColor.yellow;
    // 瓶身
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-24, 0);
    ctx.lineTo(-24, 42);
    ctx.lineTo(0, 42);
    ctx.closePath();
    ctx.fill();

    ctx.save();
      ctx.translate(0, 44);
      // 瓶底
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-24, 0);
      ctx.lineTo(-24, 3);
      ctx.lineTo(0, 3);
      ctx.closePath();
      ctx.fill();
    ctx.restore();

    // 瓶蓋
    ctx.fillStyle = globalColor.white;
    ctx.save();
      ctx.translate(-6.75, 0);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -3);
      ctx.lineTo(-10.5, -3);
      ctx.lineTo(-10.5, -0);
      ctx.closePath();
      ctx.fill();
    ctx.restore();

    // 閃電
    ctx.strokeStyle = globalColor.white;
    ctx.translate(-12, 9);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rotate(18 * degToPi);
    ctx.lineTo(0, 10);
    ctx.translate(0, 10);
    ctx.rotate(-18 * degToPi);

    ctx.lineTo(10, 0);
    ctx.translate(10, 0);

    ctx.rotate(28 * degToPi);
    ctx.lineTo(0, 16);
    ctx.translate(0, 16);
    ctx.rotate(-28 * degToPi);

    ctx.rotate(3.6 * degToPi);
    ctx.lineTo(0, -10);
    ctx.translate(0, -10);
    ctx.rotate(-3.6 * degToPi);

    ctx.lineTo(-8, 0);
    ctx.closePath();
    ctx.fill();
  ctx.restore();
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
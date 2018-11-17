/* Environment Variable */
const updateFPS = 30;
// const showMouse = true;
// const bgColor = 'black';
let time = 0;

const color = {
  red: "#e7465d",
  yellow: "#f5af5f",
  blue: "#3676bb",
  blueDark: "#001d2e",
  white: "#fff",
};





/* GUI Controls */
const controls = {
  value: 0,
}

const gui = new dat.GUI();
gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});





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
let ww;
let wh;

ctx.circle = function (v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
}
ctx.line = function (v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
}

function initCanvas() {
  ww = canvas.width = document.documentElement.clientWidth;
  wh = canvas.height = document.documentElement.clientHeight;
}
// initCanvas();





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
    ctx.fillStyle = color.blueDark;
    ctx.fillRect(0, 0, ww, wh);
    if (!this.start) {
      // 中央兩白圈
      ctx.save();
        ctx.translate(ww / 2, wh / 2);
        ctx.beginPath();
        ctx.arc(0, 0, 184, 0, Math.PI * 2);
        ctx.strokeStyle = color.white;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 272, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      ctx.restore();

      // 左下方字
      ctx.fillStyle = color.white;
      ctx.font = "300 16px sans-serif";
      ctx.fillText("你身負著運送能量電池的任務", 40, wh - 120);
      ctx.fillText("卻遭到幾何星人的埋伏", 40, wh - 90);
      ctx.fillText("請協助從他們的手中奪回能量電池！", 40, wh - 60);
    }
    requestAnimationFrame(() => { this.render() });
  }
  update() {
    time += 1;

    setTimeout(() => { this.update() }, 1000 / updateFPS);
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
  // ctx.fillStyle = color.blueDark;
  // ctx.fillRect(0, 0, ww, wh);

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
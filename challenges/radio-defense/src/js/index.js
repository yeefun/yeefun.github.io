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

const startBtn = document.getElementById('start-btn');
const panel = document.getElementById('panel');
startBtn.addEventListener('click',
  function() {
    game.startGame();
  },
  {
    once: true,
  }
);


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
let ww;
let wh;
let gameW;
let gameH;

ctx.circle = function (v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
}
ctx.line = function (v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
}

function initCanvas() {
  gameW = canvas.width;
  gameH = canvas.height;
  ww = document.documentElement.clientWidth;
  wh = document.documentElement.clientHeight;
}
// initCanvas();





const degToPi = Math.PI / 180;
// let circles = [];
let coverCircle;
let coverTriangle;
let coverPolygon;
let game;

class Game {
  constructor(args) {
    const def = {
      isGameStart: true,
      // isGameStart: false,
      shooter: null,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  init() {
    coverCircle = new Circle({
      rotationAxisR: 380,
      rotationAngle: -36,
      r: 39,
    });
    coverTriangle = new Triangle({
      rotationAxisR: {
        x: 320,
        y: 320,
      },
      rotationAngle: 40,
      rotate: 32,
      r: 44,
    });
    coverPolygon = new Polygon({
      p: {
        x: 72,
        y: 96,
      },
      scale: 1.25,
    });
    this.startGame();
    this.render();
    this.update();
  }
  render() {
    ctx.fillStyle = globalColor.blueDark;
    ctx.fillRect(0, 0, gameW, gameH);
    if (this.isGameStart) {
      this.shooter.draw();
    } else {
      // this.startGame();
      this.drawCover();
    }
    requestAnimationFrame(() => { this.render() });
  }
  update() {
    time += 1;
    if (this.isGameStart) {
      this.shooter.update();
    }
    setTimeout(() => { this.update() }, 1000 / updateFPS);
  }
  drawCover() {
    // 中央兩白圈
    ctx.save();
      ctx.translate(gameW / 2, gameH / 2);
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
    coverCircle.draw();
    coverCircle.update();
    // 藍三角形
    coverTriangle.draw();
    coverTriangle.update();
    // 紅多邊形
    coverPolygon.draw();
    coverPolygon.update();
    // 電池
    drawBattery({
      x: gameW / 2 - 24,
      y: gameH / 2 - 51.8,
    });
    // R 字小角裝飾
    ctx.save();
      ctx.translate(gameW / 2 + 24, gameH / 2 - 30);
      ctx.rotate(-132 * degToPi);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(4, 0);
      ctx.lineTo(0, -8.4);
      ctx.lineTo(-4.2, 0);
      ctx.closePath();
      ctx.fillStyle = globalColor.white;
      ctx.fill();
    ctx.restore();
  }
  startGame() {
    this.isGameStart = true;
    panel.style.display = 'none';
    this.shooter = new Shooter();
    canvas.style.cursor = 'pointer';
  }
}



/* Circle Class */
class Circle {
  constructor(args) {
    const def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2,
      },
      rotationAxisR: 0,
      rotationAngle: 0,
      r: 26,
      v: 0.8,
      color: globalColor.yellow,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.beginPath();
    ctx.save();
      ctx.translate(this.rotationAxisPos.x, this.rotationAxisPos.y);
      ctx.arc(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi), this.rotationAxisR * Math.sin(this.rotationAngle * degToPi), this.r, 0, Math.PI * 2);
    ctx.restore();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.rotationAngle += this.v;
  }
}



/* Triangle Class */
class Triangle {
  constructor(args) {
    const def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2,
      },
      rotationAxisR: {
        x: 0,
        y: 0,
      },
      rotationAngle: 0,
      r: 28,
      rotate: 0,
      v: -0.4,
      color: globalColor.blue,
      canMove: true,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.beginPath();
    ctx.save();
      ctx.translate(this.rotationAxisPos.x, this.rotationAxisPos.y);
      ctx.translate(this.rotationAxisR.x * Math.cos(this.rotationAngle * degToPi), this.rotationAxisR.y * Math.sin(this.rotationAngle * degToPi)); 
      ctx.moveTo(this.r * Math.cos(0 + this.rotate * degToPi), this.r * Math.sin(0 + this.rotate * degToPi));
      ctx.lineTo(this.r * Math.cos((120 + this.rotate) * degToPi), this.r * Math.sin((120 + this.rotate) * degToPi));
      ctx.lineTo(this.r * Math.cos((240 + this.rotate) * degToPi), this.r * Math.sin((240 + this.rotate) * degToPi));
    ctx.restore();
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.rotate += this.v;
    // if (this.canMove) {
    //   this.canMove = false;
    //   setTimeout(() => {
    //     TweenLite.to(this, 0.8, {
    //       // rotationAngle: `${Math.random() < 0.5 ? '-=' : '+='}${Math.random() * 30 + 15}`,
    //       rotationAngle: '+=90',
    //       ease: Sine.easeInOut,
    //       // onComplete: () => {
    //       //   this.canMove = true;
    //       // },
    //     });
    //     this.canMove = true;
    //   }, 1200);
    // }
  }
}



/* Polygon Class */
class Polygon {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      v: {
        x: 1,
        y: 0.5,
      },
      scale: 1,
      rotate: 0,
      rotateV: 0.4,
      color: globalColor.red,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.beginPath();
      ctx.scale(this.scale, this.scale);
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotate * degToPi);
      ctx.moveTo(0, 0);
      ctx.rotate(20 * degToPi);
      ctx.lineTo(32, 0);
      ctx.translate(32, 0);

      ctx.rotate(62 * degToPi);
      ctx.lineTo(20, 0);
      ctx.translate(20, 0);

      ctx.rotate(40 * degToPi);
      ctx.lineTo(28, 0);
      ctx.translate(28, 0);

      ctx.rotate(78 * degToPi);
      ctx.lineTo(36, 0);
      ctx.translate(36, 0);

      ctx.rotate(44 * degToPi);
      ctx.lineTo(34, 0);
    ctx.restore();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.p.x += this.v.x;
    this.p.y += this.v.y;
    this.rotate += this.rotateV;
    if (!this.isInBoundary) {
      this.p.x = -48;
      this.p.y = -32;
      this.v.x = 0.5 * Math.random() + 0.5;
      this.v.y = 0.5 * Math.random() + 0.5;
    }
  }
  get isInBoundary() {
    const xInRange = -48 <= this.p.x && this.p.x <= gameW + 48;
    const yInRange = -48 <= this.p.y && this.p.y <= gameH + 48;
    return xInRange && yInRange;
  }
}


/* Shooter Class */
let shooterBullets = [];
class Shooter {
  constructor(args) {
    const def = {
      p: {
        x: gameW / 2,
        y: gameH / 2,
      },
      color: globalColor.white,
      r: 34,
      rotateAngle: 0,
      bullet: null,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save(); 
      // 輪圍
      ctx.translate(this.p.x, this.p.y);
      // ctx.save();
        ctx.beginPath();
        // ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        // ctx.shadowBlur = 16;
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 6;
        ctx.stroke();
        // 輪軸
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.r * Math.cos(30 * degToPi + this.rotateAngle), this.r * Math.sin(30 * degToPi + this.rotateAngle));
        ctx.moveTo(0, 0);
        ctx.lineTo(this.r * Math.cos(150 * degToPi + this.rotateAngle), this.r * Math.sin(150 * degToPi + this.rotateAngle));
        ctx.moveTo(0, 0);
        ctx.lineTo(this.r * Math.cos(270 * degToPi + this.rotateAngle), this.r * Math.sin(270 * degToPi + this.rotateAngle));
        ctx.lineWidth = 3;
        ctx.stroke();
      // ctx.restore();
      // 輪圍外虛線
      // ctx.beginPath();
      ctx.strokeStyle = this.color;
      const outerR = this.r + 22;
      for (let i = 0; i < 360; i += 1) {
        // const angle1 = i;
        // const angle2 = (i + 1);
        const x1 = outerR * Math.cos(i * degToPi + this.rotateAngle);
        const y1 = outerR * Math.sin(i * degToPi + this.rotateAngle);
        const x2 = outerR * Math.cos((i + 1) * degToPi + this.rotateAngle);
        const y2 = outerR * Math.sin((i + 1) * degToPi + this.rotateAngle);

        if (i % 10 < 5) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      // 護盾
      const shieldR = this.r + 36;
      ctx.beginPath();
      ctx.arc(0, 0, shieldR, 45 * degToPi + this.rotateAngle, 135 * degToPi + this.rotateAngle);
      ctx.lineWidth = 4;
      ctx.stroke();
      // 砲口
      ctx.beginPath();
      // ctx.save();
        // ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        // ctx.shadowBlur = 12;
        ctx.rotate(this.rotateAngle)
        ctx.translate(0, -this.r - 8);
        ctx.moveTo(0, 0);
        // 下方長方形長 16、寬（高） 12
        // 上方梯形高 14、上邊寬 8
        ctx.lineTo(8, 0);
        ctx.lineTo(8, -12);
        ctx.lineTo(4, -26);
        ctx.lineTo(-4, -26);
        ctx.lineTo(-8, -12);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      // ctx.restore();
    ctx.restore();

    this.shoot();
  }
  update() {
    this.rotateAngle = mouseMoveAngle;
  }
  shoot() {
    shooterBullets.forEach((bullet) => {
      bullet.draw();
    });
    // this.bullet = new Bullet({
    //   p: new Vec2(this.p.x, this.p.y - this.r - 8 - 30),
    // });
    // this.bullet.draw();
    // ctx.save();
    //   ctx.beginPath();
    //   ctx.translate(this.p.x, this.p.y - this.r - 8 - 30);
    //   ctx.arc(0, 0, 4, 0, Math.PI * 2);
    //   ctx.fillStyle = this.color;
    //   ctx.fill();
    //   ctx.beginPath();
    //   ctx.moveTo(3, -3);
    //   ctx.lineTo(0, -15);
    //   ctx.lineTo(-3, -3);
    //   ctx.closePath();
    //   ctx.fill();
    // ctx.restore();
  }
}

class Bullet {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      shotInterval: 0,
      color: globalColor.white,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {    
    ctx.save();
      ctx.beginPath();
      // ctx.translate(this.p.x, this.p.y - this.r - 8 - 30);
      ctx.translate(this.p.x, this.p.y);
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(3, -3);
      ctx.lineTo(0, -15);
      ctx.lineTo(-3, -3);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
}

// draw battery
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
    // 瓶底
    ctx.save();
      ctx.translate(0, 44);
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
    ctx.translate(-11, 9);
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
  // ctx.fillRect(0, 0, gameW, gameH);

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
  game = new Game();
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
// const mouseMovePos = new Vec2(0, 0);
let mouseMovePos = {};
let mouseMoveAngle = 0;
// let mouseUpPos = new Vec2(0, 0);
// let mouseDownPos = new Vec2(0, 0);

// window.addEventListener('mousemove', handleMouseMove);
// window.addEventListener('mouseup', handleMouseUp);
// window.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(evt) {
  mouseMovePos.x = evt.x - ww / 2;
  mouseMovePos.y = evt.y - wh / 2;
  mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x) - 270 * degToPi;
}

canvas.addEventListener('click', handleClick);

function handleClick() {
  shooterBullets.push(new Bullet({
    p: new Vec2(gameW / 2, gameH / 2 - 34 - 8 - 30),
  }));
}


// function handleMouseUp(evt) {
//   mouseUpPos = mouseMovePos.clone();
// }

// function handleMouseDown(evt) {
//   mouseDownPos = mouseMovePos.clone();
// }
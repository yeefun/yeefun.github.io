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
  // toString() {
  //   return `(${this.x}, ${this.y})`;
  // }

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

// ctx.circle = function (v, r) {
//   this.arc(v.x, v.y, r, 0, Math.PI * 2);
// }
// ctx.line = function (v1, v2) {
//   this.moveTo(v1.x, v1.y);
//   this.lineTo(v2.x, v2.y);
// }

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

let circles = [];
let triangles = [];
let polygons = [];

class Game {
  constructor(args) {
    const def = {
      isGameStart: true,
      // isGameStart: false,
      shooter: null,
      currentLevel: 1,
      isInLevel1: false,
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
    // ctx.fillStyle = "rgba(0, 0, 255, 0.1)"
    ctx.fillRect(0, 0, gameW, gameH);
    if (this.isGameStart) {
      this.shooter.draw();
      circles.forEach((circle) => {
        circle.draw();
        // circle.bullets.forEach((bullet) => {
        //   bullet.draw();
        // });
      });
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
      if (this.currentLevel === 1 && !this.isInLevel1) {
        this.setLevelOne();
        this.isInLevel1 = true;
      }
      circles.forEach((circle) => {
        circle.update();
      });
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
  setLevelOne() {
    circles.push(new Circle({
      rotationAxisR: 240,
      rotationAngle: 180,
    }));
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
      r: 22,
      v: 0.8,
      rotate: 0,
      color: globalColor.yellow,
      bullets: [],
      brforeShootTime: new Date(),
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  get originalPos() {
    return {
      x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAngle * degToPi),
      y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAngle * degToPi),
    };
  }
  draw() {
    const bigCircleR = this.r + 5;
    const smallCircleR = this.r - 10;
    const subRotationAxisR = 14;
    ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      // 大淡圓
      ctx.rotate(this.rotate * degToPi);
      ctx.beginPath();
      ctx.arc(-4, 0, bigCircleR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.3)';
      ctx.fill();
      // 小淡圓
      ctx.beginPath();
      ctx.arc(20, 0, smallCircleR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.3)';
      ctx.fill();
      // 主體圓
      ctx.beginPath();
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      // 小三圓
      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      ctx.arc(subRotationAxisR, 0, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(120 * degToPi), subRotationAxisR * Math.sin(120 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(240 * degToPi), subRotationAxisR * Math.sin(240 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      // 神經
      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      ctx.lineTo(8, 0);
      ctx.lineTo(3 * Math.cos(32 * degToPi), 3 * Math.sin(32 * degToPi));
      ctx.lineTo(12 * Math.cos(120 * degToPi), 12 * Math.sin(120 * degToPi));
      ctx.lineTo(1 * Math.cos(170 * degToPi), 3 * Math.sin(170 * degToPi));
      ctx.lineTo(8 * Math.cos(240 * degToPi), 8 * Math.sin(240 * degToPi));
      ctx.lineTo(1 * Math.cos(320 * degToPi), 3 * Math.sin(320 * degToPi));
      ctx.closePath();
      ctx.fill();
      ctx.rotate(-this.rotate * degToPi);
    ctx.restore();
    // 子彈
    this.bullets.forEach((bullet) => {
      bullet.draw();
    });
  }
  update() {
    this.rotationAngle += this.v;
    this.rotate += this.v;
    this.bullets.forEach((bullet) => {
      bullet.update();
    });
    const shootTime = new Date();
    if (shootTime - this.brforeShootTime > 800) {
      this.bullets.push(new CircleBullet({
        p: {
          x: this.originalPos.x,
          y: this.originalPos.y,
        },
        rotate: this.rotate,
      }));
      this.brforeShootTime = shootTime;
    }
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
      ctx.save();
        ctx.beginPath();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 16;
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
      ctx.restore();
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
      ctx.save();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 16;
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
      ctx.restore();
    ctx.restore();

    this.shoot();
  }
  update() {
    this.rotateAngle = mouseMoveAngle;
    shooterBullets.forEach((bullet) => {
      bullet.update();
    });
  }
  shoot() {
    shooterBullets.forEach((bullet) => {
      bullet.draw();
    });
  }
}

class ShooterBullet {
  constructor(args) {
    const def = {
      p: new Vec2(0, 0),
      // shootInterval: 0.4,
      color: globalColor.white,
      v: new Vec2(0, -6),
      rotateAngle: 0,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.beginPath();
      ctx.translate(gameW / 2, gameH / 2);
      ctx.rotate(this.rotateAngle);
      ctx.translate(this.p.x, this.p.y);
      // 殘影
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(-4, 0, 8, 4);
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillRect(-4, 4, 8, 4);
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillRect(-4, 8, 8, 4);
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(-4, 12, 8, 4);
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(-4, 16, 8, 4);
      // 園底
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      // ctx.fillStyle = 'red';
      ctx.fill();
      // 尖頭
      ctx.beginPath();
      ctx.moveTo(3, -3);
      ctx.lineTo(0, -15);
      ctx.lineTo(-3, -3);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
  update() {
    this.p = this.p.add(this.v);
  }
}

class CircleBullet {;
  constructor(args) {
    const def = {
      p: {
        x: 0,
        y: 0,
      },
      movePos: new Vec2(0, 0),
      color: globalColor.yellow,
      v: new Vec2(2, 0),
      rotate: 0,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.beginPath();
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotate * degToPi);
      ctx.scale(1.6, 0.7);
      ctx.arc(this.movePos.x + 22, this.movePos.y, 4, 0, Math.PI * 2);
    ctx.restore();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.movePos = this.movePos.add(this.v);
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
};

canvas.addEventListener('click', handleClick);

let beforeShootTime = new Date();
function handleClick() {
  const shootTime = new Date();
  if (shootTime - beforeShootTime > 200) {
    shooterBullets.push(new ShooterBullet({
      p: new Vec2(0, -34 - 12 - 16),
      // p: new Vec2(0, -34 - 8 - 30),
      rotateAngle: mouseMoveAngle,
    }));
    beforeShootTime = shootTime;
  }
};


// function handleMouseUp(evt) {
//   mouseUpPos = mouseMovePos.clone();
// }

// function handleMouseDown(evt) {
//   mouseDownPos = mouseMovePos.clone();
// }
/* Environment Variable */
const updateFPS = 30;
// const showMouse = true;
// const bgColor = 'black';
let time = 0;

const globalColor = {
  red: "#e7465d",
  orange: "#f5af5f",
  blue: "#3676bb",
  blueDark: "#001d2e",
  white: "#fff",
};

const startBtn = document.getElementById('start-btn');
const cover = document.getElementById('cover');
const gameInfo = document.getElementById('info');
startBtn.addEventListener('click',
  function() {
    game.startGame();
  },
  {
    once: true,
  }
);


/* GUI Controls */
const controls = {
  splited: false,
}

const gui = new dat.GUI();
gui.add(controls, 'splited');
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

ctx.$triLineTo = function(r, angle, angleAdd = 0) {
  return ctx.lineTo(r * Math.cos(angle * degToPi + angleAdd), r * Math.sin(angle * degToPi + angleAdd));
}

function initCanvas() {
  gameW = canvas.width;
  gameH = canvas.height;
  ww = document.documentElement.clientWidth;
  wh = document.documentElement.clientHeight;
}
// initCanvas();





const degToPi = Math.PI / 180;
let coverCircle;
let coverTriangle;
let coverPolygon;
let game;

let circles = [];
let triangles = [];
let subTriangles = [];
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
    // coverCircle = new Circle({
    //   rotationAxisR: 380,
    //   rotationAxisAngle: -36,
    //   r: 39,
    // });
    // coverTriangle = new Triangle({
    //   rotationAxisR: {
    //     x: 320,
    //     y: 320,
    //   },
    //   rotationAxisAngle: 40,
    //   rotate: 32,
    //   r: 44,
    // });
    // coverPolygon = new Polygon({
    //   p: {
    //     x: 72,
    //     y: 96,
    //   },
    //   scale: 1.25,
    // });
    this.startGame();
    this.render();
    this.update();
  }
  render() {
    ctx.fillStyle = globalColor.blueDark;
    // ctx.fillStyle = "rgba(0, 0, 255, 0.1)"
    ctx.fillRect(0, 0, gameW, gameH);
    if (this.isGameStart) {
      // 繪製 shooter
      this.shooter.draw();
      // 繪製每個 circle
      circles.forEach((circle) => {
        circle.draw();
      });
      // 繪製每個 triangle
      triangles.forEach((triangle) => {
        triangle.draw();
      });
      // 繪製每個 polygon
      polygons.forEach((polygon) => {
        polygon.draw();
      });
      // 繪製 sub triangles
      subTriangles.forEach((subTriangle) => {
        subTriangle.draw();
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
      // 判斷現在是第幾關
      if (this.currentLevel === 1 && !this.isInLevel1) {
        this.setLevelOne();
        this.isInLevel1 = true;
      }
      // 更新 shooter
      this.shooter.update();
      // 更新每個 circle
      circles.forEach((circle) => {
        circle.update();
      });
      // 更新每個 triangles
      triangles.forEach((triangle) => {
        triangle.update();
      });
      // 更新每個 polygons
      polygons.forEach((polygon) => {
        polygon.update();
      });
      // 更新 sub triangles
      subTriangles.forEach((subTriangle) => {
        subTriangle.update();
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
    // 藍三角
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
    cover.style.display = 'none';
    gameInfo.style.display = 'block';
    this.shooter = new Shooter();
    canvas.style.cursor = 'pointer';
  }
  setLevelOne() {
    // circles.push(new Circle({
    //   rotationAxisR: 240,
    //   rotationAxisAngle: 0,
    // }));
    // triangles.push(new Triangle({
    //   rotationAxisR: 280,
    //   rotationAxisAngle: 0,
    // }));
    polygons.push(new Polygon({
      rotationAxisR: {
        whole: 280,
        splited1: 280,
        splited2: 280,
      },
      rotationAxisAngle: {
        whole: 0,
        splited1: 0,
        splited2: 0,
      },
      // rotate: {
      //   whole: 15,
      // },
      // scale: 0.8,
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
      rotationAxisAngle: 0,
      r: 22,
      rotate: 0,
      rotationAxisRV: 0.1,
      rotationAxisAngleV: 0.4,
      rotateV: 0.4,
      color: globalColor.orange,
      HP: 2,
      bullets: [],
      beforeRotateTime: new Date(),
      isRotating: false,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  get originalPos() {
    return {
      x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
      y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi),
    };
  }
  draw() {
    const circleBigR = this.r + 5;
    const circleSmallR = this.r - 10;
    const subRotationAxisR = 14;
    ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotate * degToPi);
      // 大淡圓
      ctx.beginPath();
      ctx.arc(4, 0, circleBigR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill();
      // 小淡圓
      ctx.beginPath();
      ctx.arc(-20, 0, circleSmallR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill();
      // 主體圓
      ctx.beginPath();
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      // 小三圓
      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      // ctx.arc(subRotationAxisR, 0, 2.4, 0, Math.PI * 2);
      ctx.arc(subRotationAxisR * Math.cos(60 * degToPi), subRotationAxisR * Math.sin(60 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(180 * degToPi), subRotationAxisR * Math.sin(180 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(300 * degToPi), subRotationAxisR * Math.sin(300 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      // 神經
      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      ctx.lineTo(-8, 0);
      ctx.$triLineTo(-2, 32);
      ctx.$triLineTo(-12, 120);
      ctx.$triLineTo(-2.4, 176);
      ctx.$triLineTo(-8, 240);
      ctx.$triLineTo(-1.6, 320);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
    // 繪製圓形子彈
    this.bullets.forEach((bullet) => {
      bullet.draw();
    });
  }
  update() {
    // 更新圓形子彈
    this.bullets.forEach((bullet, idx, arr) => {
      bullet.update(idx, arr);
    });
    // 當圓形自身在旋轉時，圓形不要移動
    if (!this.isRotating) {
      this.rotationAxisAngle += this.rotationAxisAngleV;
      // this.rotationAxisAngle += 2;
    }
    // 每 2-4 秒，自身旋轉一次
    const rotateTime = new Date();
    if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
      this.isRotating = true;
      // console.log(this.rotationAxisAngle);
      TweenLite.to(this, 0.4, {
        // rotate: this.rotationAxisAngle - 180,
        // rotate: this.rotationAxisAngle % 360,
        rotate: this.rotationAxisAngle,
        ease: Power2.easeOut,
        // 自身旋轉完後射擊
        onComplete: () => {
          this.shoot();
          this.isRotating = false;
        },
      });
      this.beforeRotateTime = rotateTime;
    }
  }
  shoot() {
    // 射 1-2 發
    for (let i = 0; i < 2 * Math.random(); i += 1) {
      const timer = setTimeout(() => {
        this.bullets.push(new CircleBullet({
          originalPos: {
            x: this.originalPos.x,
            y: this.originalPos.y,
          },
          rotateAngle: this.rotate,
          moveX: -this.r - 10,
          // rotateAngle: Math.sin(this.rotate * degToPi),
          rotationAxisR: this.rotationAxisR,
        }));
        clearTimeout(timer);
        // 間隔 0.2-0.4 秒
      }, i * (200 * Math.random() + 200));
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
      // rotationAxisR: {
      //   x: 0,
      //   y: 0,
      // },
      rotationAxisR: 0,
      rotationAxisAngle: 0,
      r: 26,
      rotate: 0,
      rotationAxisRV: 0.1,
      rotationAxisAngleV: 0.4,
      rotateV: -2.4,
      color: globalColor.blue,
      bullets: [],
      beforeRotateAxisAngleTime: new Date(),
      beforeShootTime: new Date(),
      HP: 4,
      isReproduce: false,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  get originalPos() {
    return {
      x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
      y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi),
    };
  }
  draw() {
    const triangleOuterBigR = this.r + 4;
    const triangleInnerBigR = this.r - 16;
    const triangleInnerSmallR = this.r - 22;
    ctx.save();
      // 淡三角
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotate * degToPi);
      ctx.save();
        ctx.translate(4, 0);
        ctx.beginPath();
        ctx.moveTo(triangleOuterBigR * Math.cos(60 * degToPi), triangleOuterBigR * Math.sin(60 * degToPi));
        ctx.$triLineTo(triangleOuterBigR, 180);
        ctx.$triLineTo(triangleOuterBigR, 300);
        ctx.closePath();
        ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
        ctx.fill();
      ctx.restore();
      // 主體三角
      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(60 * degToPi), this.r * Math.sin(60 * degToPi));
      ctx.$triLineTo(this.r, 180);
      ctx.$triLineTo(this.r, 300);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      // 大白三角
      ctx.translate(0, -2.8);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.$triLineTo(triangleInnerBigR, 90);
      ctx.$triLineTo(triangleInnerBigR, 150);
      ctx.closePath();
      ctx.fill();
      // 小白三角
      ctx.translate(8 * Math.cos(-40 * degToPi), 8 * Math.sin(-40 * degToPi))
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.$triLineTo(triangleInnerSmallR, 90);
      ctx.$triLineTo(triangleInnerSmallR, 150);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
    // 繪製三角子彈
    this.bullets.forEach((bullet) => {
      bullet.draw();
    });
  }
  update() {
    // 更新三角子彈
    this.bullets.forEach((bullet, idx, arr) => {
      bullet.update(idx, arr);
    });
    // 每 4-8 秒，三角移動 + 自身旋轉
    const rotateAxisAngleTime = new Date();
    if (rotateAxisAngleTime - this.beforeRotateAxisAngleTime > (Math.random() * 4000 + 4000)) {
      const randomRotateAngle = (Math.random() > 0.25 ? -1 : 1) * (30 * Math.random() + 45);
      // 以 0.8 秒移動
      TweenLite.to(this, 0.8, {
        rotationAxisAngle: `+=${randomRotateAngle}`,
        ease: Power0.easeNone,
      });
      // 以 1.2 秒自身旋轉
      TweenLite.to(this, 1.2, {
        rotate: `+=${randomRotateAngle + 360}`,
        ease: Power2.easeInOut,
      });
      this.beforeRotateAxisAngleTime = rotateAxisAngleTime;
    }
    // 每 2.4-3.6 秒，發射 1 發子彈
    const shootTime = new Date();
    if (shootTime - this.beforeShootTime > (Math.random() * 1200 + 2400)) {
    // if (!this.bullets.length) {
      this.bullets.push(new TriangleBullet({
        p: {
          x: this.originalPos.x,
          y: this.originalPos.y,
        },
        rotationAxisR: this.rotationAxisR,
        rotateAngle: this.rotate,
        // rotate: this.rotate,
      }));
      this.beforeShootTime = shootTime;
    }
    // 當生命值剩 2，派副三角形攻擊
    if (this.HP === 2 && !this.isReproduce) {
      for (let i = 1; i <= 2; i += 1) {
        subTriangles.push(new TriangleSub({
          // rotationAxisR: {
          //   x: this.rotationAxisR.x,
          //   y: this.rotationAxisR.y,
          // },
          rotationAxisR: this.rotationAxisR,
          rotationAxisAngle: this.rotationAxisAngle,
          rotate: this.rotate,
          order: i,
        }));
      }
      this.isReproduce = true;
    }
  }
}



/* Polygon 類別 */
class Polygon {
  constructor(args) {
    const def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2,
      },
      rotationAxisR: {
        whole: 0,
        splited1: 0,
        splited2: 0,
        // big: 0,
        // small: 0,
      },
      rotationAxisAngle: {
        whole: 0,
        splited1: 0,
        splited2: 0,
        // big: 0,
        // small: 0,
      },
      rotate: {
        whole: 0,
        splited1: 0,
        splited2: 0,
        // big: 0,
        // small: 0,
      },
      HP: {
        whole: 1,
        splited1: 1,
        splited2: 1,
      },
      rotationAxisRV: {
        whole: 0.4,
        splited1: 0.4,
        splited2: 0.4,
      },
      rotationAxisAngleV: {
        whole: 0.4,
        splited1: 0.4,
        splited2: 0.4,
      },
      rotateV: {
        whole: 0.4,
        splited1: 0.4,
        splited2: 0.4,
      },
      color: globalColor.red,
      isSplited: false,
      isSplitedMove: false,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  get originalPos() {
    return {
      whole: {
        x: this.rotationAxisPos.x + this.rotationAxisR.whole * Math.cos(this.rotationAxisAngle.whole * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR.whole * Math.sin(this.rotationAxisAngle.whole * degToPi),
      },
      splited1: {
        x: this.rotationAxisPos.x + this.rotationAxisR.splited1 * Math.cos(this.rotationAxisAngle.splited1 * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR.splited1 * Math.sin(this.rotationAxisAngle.splited1 * degToPi),
      },
      splited2: {
        x: this.rotationAxisPos.x + this.rotationAxisR.splited2 * Math.cos(this.rotationAxisAngle.splited2 * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR.splited2 * Math.sin(this.rotationAxisAngle.splited2 * degToPi),
      },
    };
  }
  draw() {
    if (!this.isSplited && !controls.splited) {
      ctx.save();
        ctx.translate(this.originalPos.whole.x, this.originalPos.whole.y);
        ctx.rotate(this.rotate.whole * degToPi);
        // 主體多邊形
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(21 * Math.cos(8 * degToPi), 21 * Math.sin(8 * degToPi));
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(23, 150);
        ctx.$triLineTo(34, 202);
        ctx.$triLineTo(22, 255);
        ctx.$triLineTo(22, 324);
        ctx.closePath();
        ctx.fill();
        // 右淡五邊形
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.moveTo(9.6, -2);
        ctx.$triLineTo(22, 324);
        ctx.$triLineTo(21, 8);
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(10, 36);
        ctx.closePath();
        ctx.fill();
        // 下淡四邊形
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
        ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(23, 150);
        ctx.lineTo(-8.8, 0);
        ctx.closePath();
        ctx.fill();
        // 閃電
        drawLightning({
          x: -0.8,
          y: -16
        });
      ctx.restore();
    } else {
      // 左分裂四邊形
      if (this.HP.splited1) {
        ctx.save();
          ctx.translate(this.originalPos.splited1.x, this.originalPos.splited1.y);
          ctx.rotate(this.rotate.splited1 * degToPi);
          // 左分裂主體
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(23, 150);
          ctx.$triLineTo(34, 202);
          ctx.$triLineTo(22, 255);
          ctx.closePath();
          ctx.fill();
          // 左內下四邊形
          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.beginPath();
          ctx.moveTo(-8.8, 0);
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(23, 150);
          ctx.closePath();
          ctx.fill();
          // 左閃電
          drawLightning({
            x: -12,
            y: -8
          }, 0.6);
        ctx.restore();
      }
      // 右分裂四邊形
      if (this.HP.splited2) {
        ctx.save();
          ctx.translate(this.originalPos.splited2.x, this.originalPos.splited2.y);
          ctx.rotate(this.rotate.splited2 * degToPi);
          // 右分裂主體
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(22, 255);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.closePath();
          ctx.fill();
          // 右內下三角形
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.closePath();
          ctx.fill();
          // 右內右五邊形
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
          ctx.moveTo(9.6, -2);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(10, 36);
          ctx.closePath();
          ctx.fill();
          // 右閃電
          drawLightning({
            x: 10,
            y: -8
          }, 0.5);
        ctx.restore();
      }
    }
  }
  update() {
    if (!this.HP.whole) {
      this.isSplited = true;
    }
    if (!this.isSplited && !controls.splited) {
      // this.rotationAxisR.whole -= this.rotationAxisRV.whole;
      // this.rotationAxisR.splited1 -= this.rotationAxisRV.whole;
      // this.rotationAxisR.splited2 -= this.rotationAxisRV.whole;
      // this.rotate.whole += this.rotateV.whole;
      // this.rotate.splited1 += this.rotateV.whole;
      // this.rotate.splited2 += this.rotateV.whole;
    } else {
      if (!this.isSplitedMove) {
        const rotateOriginPos = 90 - 70;
        const rotateDirection = (((this.rotate.whole % 360) >= rotateOriginPos) && ((this.rotate.whole % 360) < (180 + rotateOriginPos))) ? -1 : 1;
        TweenLite.to(this.rotationAxisAngle, 2.4, {
          splited1: `+=${(Math.random() * 15 + 15) * rotateDirection}`,
          splited2: `-=${(Math.random() * 15 + 15) * rotateDirection}`,
          ease: Circ.easeOut,
        });
        TweenLite.to(this.rotate, 3.2, {
          splited1: `-=${Math.random() * 90 + 180}`,
          splited2: `+=${Math.random() * 90 + 180}`,
          ease: Power4.easeOut,
        });
        this.isSplitedMove = true;
      }
      this.rotationAxisR.splited1 -= this.rotationAxisRV.splited1;
      this.rotationAxisR.splited2 -= this.rotationAxisRV.splited2;
    }
    // if (!this.isInBoundary) {
    //   this.p.x = -48;
    //   this.p.y = -32;
    //   this.v.x = 0.5 * Math.random() + 0.5;
    //   this.v.y = 0.5 * Math.random() + 0.5;
    // }
  }
  // get isInBoundary() {
  //   const xInRange = -48 <= this.p.x && this.p.x <= gameW + 48;
  //   const yInRange = -48 <= this.p.y && this.p.y <= gameH + 48;
  //   return xInRange && yInRange;
  // }
}



/* Shooter 類別 */
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
      HP: 9,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save(); 
      // 輪圍
      ctx.translate(this.p.x, this.p.y);
      // ctx.rotate(this.rotateAngle);
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
        ctx.$triLineTo(this.r, 0, this.rotateAngle);
        ctx.moveTo(0, 0);
        ctx.$triLineTo(this.r, 120, this.rotateAngle);
        ctx.moveTo(0, 0);
        ctx.$triLineTo(this.r, 240, this.rotateAngle);
        ctx.lineWidth = 3;
        ctx.stroke();
      ctx.restore();
      // 輪圍外虛線
      ctx.strokeStyle = this.color;
      const outerR = this.r + 22;
      for (let i = 0; i < 360; i += 1) {
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
      ctx.arc(0, 0, shieldR, 135 * degToPi + this.rotateAngle, 225 * degToPi + this.rotateAngle);
      ctx.lineWidth = 4;
      ctx.stroke();
      // 砲口
      ctx.beginPath();
      ctx.save();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 16;
        ctx.rotate(this.rotateAngle);
        ctx.translate(this.r + 8, 0);
        ctx.moveTo(0, 0);
        // 下方長方形長 16、寬（高） 12
        // 上方梯形高 14、上邊寬 8
        ctx.lineTo(0, 8);
        ctx.lineTo(12, 8);
        ctx.lineTo(26, 4);
        ctx.lineTo(26, -4);
        ctx.lineTo(12, -8);
        ctx.lineTo(0, -8);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      ctx.restore();
    ctx.restore();

    this.shoot();
  }
  update() {
    this.rotateAngle = mouseMoveAngle;
    shooterBullets.forEach((bullet, idx) => {
      bullet.update(idx);
    });
  }
  shoot() {
    shooterBullets.forEach((bullet) => {
      bullet.draw();
    });
  }
}


/* Shooter 子彈 */
class ShooterBullet {
  constructor(args) {
    const def = {
      // p: new Vec2(0, 0),
      bodyLength: 15,
      rotationAxisR: 0,
      color: globalColor.white,
      v: 8,
      rotateAngle: 0,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.translate(gameW / 2, gameH / 2);
      ctx.rotate(this.rotateAngle);
      // ctx.translate(this.p.x, this.p.y);
      // 殘影
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.arc(-7 + this.rotationAxisR, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.arc(-12 + this.rotationAxisR, 0, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.arc(-15 + this.rotationAxisR, 0, 1, 0, Math.PI * 2);
      ctx.fill();
      // 園底
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(0 + this.rotationAxisR, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      // 尖頭
      ctx.beginPath();
      ctx.moveTo(3 + this.rotationAxisR, 3);
      ctx.lineTo(this.bodyLength + this.rotationAxisR, 0);
      ctx.lineTo(3 + this.rotationAxisR, -3);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
  update(bulletIdx) {
    // 移動子彈
    this.rotationAxisR += this.v;
    // 判斷子彈有無射中圓形
    circles.forEach((circle, cirIdx) => {
      // 取得兩個外切線所構成角度的一半
      const anglePan = Math.asin(circle.r / circle.rotationAxisR);
      // 設中角度範圍
      const shotAngleRange = this.rotateAngle >= ((circle.rotationAxisAngle % 360) * degToPi - anglePan) && this.rotateAngle <= ((circle.rotationAxisAngle % 360) * degToPi + anglePan);
      // 設中距離範圍
      const shotRRange = ((this.rotationAxisR + this.bodyLength) >= (circle.rotationAxisR - (circle.r / 2))) && ((this.rotationAxisR + this.bodyLength) <= (circle.rotationAxisR + (circle.r / 2)));
      // 判斷子彈有無射中圓形
      if (shotAngleRange && shotRRange) {
        // 移除子彈
        shooterBullets.splice(bulletIdx, 1);
        // 扣 1 生命值
        circle.HP -= 1;
        if (circle.HP === 0) {
          // 若生命值 0，移除圓形
          circles.splice(cirIdx, 1);
        }
      }
    });
    // 判斷子彈有無射中三角形
    triangles.forEach((triangle, triIdx) => {
      // const lengthX = triangle.rotationAxisR.x * Math.cos(triangle.rotationAxisAngle * degToPi);
      // const lengthY = triangle.rotationAxisR.y * Math.sin(triangle.rotationAxisAngle * degToPi);
      // const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

      // 取得射中角度範圍的一半
      const lengthX = triangle.rotationAxisR + (triangle.r / 2);
      const lengthY = (triangle.r / 2) * Math.sqrt(3);
      const anglePan = Math.atan2(lengthY, lengthX);
      // 設中角度範圍
      const shotAngleRange = this.rotateAngle >= (((triangle.rotationAxisAngle + 360) % 360) * degToPi - anglePan) && this.rotateAngle <= (((triangle.rotationAxisAngle + 360) % 360) * degToPi + anglePan);
      // 設中距離範圍
      const shotRRange = ((this.rotationAxisR + this.bodyLength) >= triangle.rotationAxisR) && ((this.rotationAxisR + this.bodyLength) <= (triangle.rotationAxisR + (triangle.r / 2)))
      // 判斷子彈有無射中三角形
      if (shotAngleRange && shotRRange) {
        // 移除子彈
        shooterBullets.splice(bulletIdx, 1);
        // 扣 1 生命值
        triangle.HP -= 1;
        if (triangle.HP === 0) {
          // 若生命值 0，移除三角形
          triangles.splice(triIdx, 1);
        }
      }
    });
    // 判斷子彈有無射中多邊形
    polygons.forEach((polygon, polyIdx) => {
      // 取得兩側射中角度
      const sideA = polygon.rotationAxisR.whole;
      const sideB1 = 22;
      const sideB2 = 23;
      const sideC1 = cosineFormula(sideA, sideB1, (255 - 180));
      const sideC2 = cosineFormula(sideA, sideB2, (180 - 70));
      function getAngleB(a, b, c) {
        return Math.acos((a * a + c * c - b * b) / (2 * a * c));
      }
      const angleB1 = getAngleB(sideA, sideB1, sideC1);
      const angleB2 = getAngleB(sideA, sideB2, sideC2);
      // 射中角度範圍
      const shotAngleRange = this.rotateAngle >= (polygon.rotationAxisAngle * degToPi - angleB1) && this.rotateAngle <= (polygon.rotationAxisAngle * degToPi + angleB2);
      // 設中距離範圍
      // const shotRRange = ((this.rotationAxisR + this.bodyLength) >= polygon.rotationAxisR) && ((this.rotationAxisR + this.bodyLength) <= (polygon.rotationAxisR + (polygon.r / 2)));
      // 判斷子彈有無射中多邊形
      // if (shotAngleRange && shotRRange) {
      //   // 移除子彈
      //   shooterBullets.splice(bulletIdx, 1);
      //   // 扣 1 生命值
      //   polygon.whole.HP -= 1;
      //   if (polygon.whole.HP === 0) {
      //     // 若生命值 0，移除三角形
      //     polygons.splice(triIdx, 1);
      //   }
      // }
    });
  }
}



/* Sub Triangle 類別 */
class TriangleSub {;
  constructor(args) {
    const def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2,
      },
      // rotationAxisR: {
      //   x: 0,
      //   y: 0,
      // },
      rotationAxisR: 0,
      rotationAxisAngle: 0,
      // r: 26 * 0.4,
      r: 10.4,
      rotate: 0,
      rotateV: 4,
      // v: -0.4,
      // v: 0,
      color: globalColor.blue,
      HP: 2,
      isReproduceMoving: false,
      order: 0,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  get originalPos() {
    return {
      x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
      y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi),
    };
  }
  draw() {
    // const scale = 0.4;
    const triangleOuterBigR = this.r + 1.6;
    const triangleInnerBigR = this.r - 6.4;
    const triangleInnerSmallR = this.r - 8.8;
    ctx.save();
      // 淡三角
      ctx.translate(this.originalPos.x, this.originalPos.y);
      // ctx.scale(0.4, 0.4);
      ctx.rotate(this.rotate * degToPi);
      ctx.save();
        ctx.translate(0.8, -Math.sqrt(1.92));
        ctx.beginPath();
        ctx.moveTo(triangleOuterBigR * Math.cos(0), triangleOuterBigR * Math.sin(0));
        ctx.lineTo(triangleOuterBigR * Math.cos(120 * degToPi), triangleOuterBigR * Math.sin(120 * degToPi));
        ctx.lineTo(triangleOuterBigR * Math.cos(240 * degToPi), triangleOuterBigR * Math.sin(240 * degToPi));
        ctx.closePath();
        ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
        ctx.fill();
      ctx.restore();
      // 主體三角
      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(0), this.r * Math.sin(0));
      ctx.lineTo(this.r * Math.cos(120 * degToPi), this.r * Math.sin(120 * degToPi));
      ctx.lineTo(this.r * Math.cos(240 * degToPi), this.r * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      // 大白三角
      ctx.translate(-1.28, -0.64);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerBigR * Math.cos(30 * degToPi), triangleInnerBigR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerBigR * Math.cos(90 * degToPi), triangleInnerBigR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill();
      // 小白三角
      ctx.translate(0, -3.52);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerSmallR * Math.cos(30 * degToPi), triangleInnerSmallR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerSmallR * Math.cos(90 * degToPi), triangleInnerSmallR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
  update() {
    this.rotate += this.rotateV;
    if (!this.isReproduceMoving) {
      if (this.order === 1) {
        TweenLite.to(this, 0.8, {
          rotationAxisAngle: '+=10',
          ease: Power2.easeOut,
          onComplete: () => {
            TweenLite.to(this, 1.6, {
              rotationAxisR: 0,
              ease: Power1.easeIn,
            });
          }
        });
      } else {
        TweenLite.to(this, 0.8, {
          rotationAxisAngle: '-=10',
          ease: Power2.easeOut,
          onComplete: () => {
            TweenLite.to(this, 1.6, {
              rotationAxisR: 0,
              ease: Power1.easeIn,
            });
          }
        });
      }
    }
    this.isReproduceMoving = true;
  }
}


/* Circle 子彈 */
class CircleBullet {;
  constructor(args) {
    const def = {
      originalPos: {
        x: 0,
        y: 0,
      },
      rotationAxisR: 0,
      color: globalColor.orange,
      moveX: 0,
      moveXV: -3,
      // v: 4,
      rotateAngle: 0,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotateAngle * degToPi); 
      // ctx.scale(1.6, 0.68);
      // ctx.scale(1, 0.9);
      ctx.beginPath();
      // ctx.arc(this.moveX + 22 + 10, 0, 4, 0, Math.PI * 2);
      ctx.arc(this.moveX, 0, 4, 0, Math.PI * 2);
      // ctx.arc(this.rotationAxisR + 16, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    ctx.restore();
  }
  update(idx, arr) {
    const shooterR = 34;
    const shieldR = shooterR + 36;
    const shooterInnerCirLineW = 6;
    const shieldLineW = 4;
    // 圓形子彈移動
    this.moveX += this.moveXV;
    // 當圓形子彈射中 shooter 主體
    if (-this.moveX >= (this.rotationAxisR - shooterR - (shooterInnerCirLineW / 2))) {
      // shooter 命減 1
      game.shooter.HP -= 1;
      // 移除子彈
      arr.splice(idx, 1);
    }
    // 當圓形子彈射中 shooter 的護盾
    const shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= (225 * degToPi);  
    if (shieldAngleRange && (-this.moveX >= (this.rotationAxisR - shieldR - (shieldLineW / 2)))) {
      // 移除子彈
      arr.splice(idx, 1);
    }
  }
}


/* Triangle 子彈 */
class TriangleBullet {;
  constructor(args) {
    const def = {
      p: {
        x: 0,
        y: 0,
      },
      moveX: 0,
      moveXV: -4,
      rotateAngle: 0,
      color: globalColor.blue,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotateAngle * degToPi);
      ctx.translate(this.moveX, 0);
      // 主體三角子彈
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(-16, 0);
      ctx.$triLineTo(38, 174);
      ctx.$triLineTo(16.8, 200);
      ctx.closePath();
      ctx.fill();
      // 淡三角子彈
      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.beginPath();
      ctx.moveTo(-16.4, 0);
      ctx.$triLineTo(38, 174);
      ctx.$triLineTo(15.6, 168);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
  update(idx, arr) {
    const shooterR = 34;
    const shieldR = shooterR + 36;
    const shooterInnerCirLineW = 6;
    const shieldLineW = 4;
    const triBulletLength = 37.8;
    // 三角子彈移動
    this.moveX += this.moveXV;
    // 當三角子彈射中 shooter 主體
    if (-this.moveX >= (this.rotationAxisR - (triBulletLength + shooterR + (shooterInnerCirLineW / 2)))) {
      // shooter 命減 1
      game.shooter.HP -= 1;
      // 移除三角子彈
      arr.splice(idx, 1);
    }
    // 當三角子彈射中 shooter 的護盾
    const shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= (225 * degToPi);
    if (shieldAngleRange && (-this.moveX >= (this.rotationAxisR - (triBulletLength + shieldR + (shieldLineW / 2))))) {
      // 移除三角子彈
      arr.splice(idx, 1);
    }
  }
}



// 繪製電池
function drawBattery(p) {
  ctx.save();
    ctx.translate(p.x, p.y);
    ctx.fillStyle = globalColor.orange;
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
    // ctx.strokeStyle = globalColor.white;
    drawLightning({ x: -11, y: -9 });
    // ctx.translate(-11, 9);
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.rotate(18 * degToPi);
    // ctx.lineTo(0, 10);
    // ctx.translate(0, 10);
    // ctx.rotate(-18 * degToPi);

    // ctx.lineTo(10, 0);
    // ctx.translate(10, 0);

    // ctx.rotate(28 * degToPi);
    // ctx.lineTo(0, 16);
    // ctx.translate(0, 16);
    // ctx.rotate(-28 * degToPi);

    // ctx.rotate(3.6 * degToPi);
    // ctx.lineTo(0, -10);
    // ctx.translate(0, -10);
    // ctx.rotate(-3.6 * degToPi);

    // ctx.lineTo(-8, 0);
    // ctx.closePath();
    // ctx.fill();
  ctx.restore();
}

// 餘弦定理
function cosineFormula(a, b, angle) {
  return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle * degToPi));
}

// 繪製閃電
function drawLightning(translate =  { x: 0, y: 0 }, scale = 1 ) {
  ctx.fillStyle = globalColor.white;
  ctx.translate(translate.x, translate.y);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(18 * degToPi);
  ctx.lineTo(0, 10 * scale);
  ctx.translate(0, 10 * scale);
  ctx.rotate(-18 * degToPi);

  ctx.lineTo(10 * scale, 0);
  ctx.translate(10 * scale, 0);

  ctx.rotate(28 * degToPi);
  ctx.lineTo(0, 16 * scale);
  ctx.translate(0, 16 * scale);
  ctx.rotate(-28 * degToPi);

  ctx.rotate(3.6 * degToPi);
  ctx.lineTo(0, -10 * scale);
  ctx.translate(0, -10 * scale);
  ctx.rotate(-3.6 * degToPi);

  ctx.lineTo(-8 * scale, 0);
  ctx.closePath();
  ctx.fill();
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
  const angle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
  mouseMoveAngle = angle < 0 ? angle + 2 * Math.PI : angle;
  // mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
  
  // console.log(mouseMoveAngle / Math.PI * 180);
};

canvas.addEventListener('click', handleClick);

let beforeShootTime = new Date();
function handleClick() {
  const shootTime = new Date();
  if (shootTime - beforeShootTime > 400) {
    shooterBullets.push(new ShooterBullet({
      // 34 + 12 + 16
      // p: new Vec2(62, 0),
      rotationAxisR: 62,
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
/* Environment Variable */
const updateFPS = 30;
// const showMouse = true;
// const bgColor = 'black';
let time = 0;

const globalColor = {
  red: '#e7465d',
  orange: '#f5af5f',
  yellow: '#f7b52c',
  blue: '#3676bb',
  blueDark: '#001d2e',
  white: '#fff',
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
  },
);


/* GUI Controls */
const controls = {
  splited: false,
}

const gui = new dat.GUI();
// gui.add(controls, 'splited');
// gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});

const shooterHpBar = document.getElementById('hp');




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





/* 道具 class */
class Prop {
  constructor(args) {
    const def = {
      img: new Image(),
      src: '',
      axisRotateR: 0,
      axisRotateAngle: 0,
      r: 32,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    if (!this.img.src) {
      this.img.src = this.src;
      // ctx.mozImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = ctx.msImageSmoothingEnabled = ctx.imageSmoothingEnabled = false;
    }
    if (this.img.complete) {
      ctx.save();
        ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
        ctx.drawImage(this.img, 0, 0);
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.arc(this.img.width / 2, this.img.height / 2, this.r, 0, Math.PI * 2);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.fillStyle = 'red';
        // ctx.arc(0, 0, 4, 0, Math.PI * 2);
        // ctx.fill();
      ctx.restore();
    }
  }
  update(idx) {
    this.axisRotateR -= 3.2;
    // 當道具撞上 shooter 主體
    const shooter = game.shooter;
    if ((this.axisRotateR + this.r) <= (shooter.r + (shooter.cirSolidLineW / 2))) {
      game.props.splice(idx, 1);
      const propName = this.src.slice(17).split('.')[0];
      shooter.getProp(propName);
    }
  }
}





const degToPi = Math.PI / 180;
let coverCircle;
let coverTriangle;
let coverPolygon;
let game;

let circles = [];
let triangles = [];
let subTriangles = [];
let polygons = [];
// let props = [];

class Game {
  constructor(args) {
    const def = {
      isGameStart: true,
      // isGameStart: false,
      shooter: null,
      currentLevel: 1,
      isInLevel1: false,
      props: [],
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  init() {
    // coverCircle = new Circle({
    //   axisRotateR: 380,
    //   axisRotateAngle: -36,
    //   r: 39,
    // });
    // coverTriangle = new Triangle({
    //   axisRotateR: {
    //     x: 320,
    //     y: 320,
    //   },
    //   axisRotateAngle: 40,
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
      // 繪製每個 sub triangle
      subTriangles.forEach((subTriangle) => {
        subTriangle.draw();
      });
      // 繪製每個 prop
      this.props.forEach((prop) => {
        prop.draw();
      })
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
      circles.forEach((circle, idx) => {
        circle.update(idx);
      });
      // 更新每個 triangle
      triangles.forEach((triangle, idx) => {
        triangle.update(idx);
      });
      // 更新每個 polygon
      polygons.forEach((polygon, idx) => {
        polygon.update(idx);
      });
      // 更新每個 sub triangle
      subTriangles.forEach((subTriangle, idx) => {
        subTriangle.update(idx);
      });
      // 更新每個 prop
      this.props.forEach((prop, idx) => {
        prop.update(idx);
      });
      // 產生道具
      this.generateProp();
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
  generateProp() {

  }
  setLevelOne() {
    // this.props.push(new Prop({
    //   src: '../../src/assets/crackdown.png',
    //   axisRotateR: 200,
    //   axisRotateAngle: 40,
    // }));
    circles.push(new Circle({
      axisRotateR: 240,
      axisRotateAngle: 90,
    }));
    // triangles.push(new Triangle({
    //   axisRotateR: 280,
    //   // axisRotateAngle 與 rotate 必須相同
    //   axisRotateAngle: 0,
    //   // rotate: 160,
    // }));
    // polygons.push(new Polygon({
    //   axisRotateR: {
    //     whole: 280,
    //     big: 280,
    //     small: 280,
    //   },
    //   axisRotateAngle: {
    //     whole: 0,
    //     big: 0,
    //     small: 0,
    //   },
    //   // rotate: {
    //   //   whole: 40,
    //   //   big: 40,
    //   //   small: 40,
    //   // },
    // }));
  }
}



/* Circle Class */
class Circle {
  constructor(args) {
    const def = {
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      axisRotateR: 0,
      axisRotateAngle: 0,
      r: 22,
      rotate: 0,
      axisRotateRV: 0.1,
      axisRotateAngleV: 0.4,
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
  draw() {
    const circleBigR = this.r + 5;
    const circleSmallR = this.r - 10;
    const subaxisRotateR = 14;
    ctx.save();
      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
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
      // ctx.arc(subaxisRotateR, 0, 2.4, 0, Math.PI * 2);
      ctx.arc(subaxisRotateR * Math.cos(60 * degToPi), subaxisRotateR * Math.sin(60 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subaxisRotateR * Math.cos(180 * degToPi), subaxisRotateR * Math.sin(180 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subaxisRotateR * Math.cos(300 * degToPi), subaxisRotateR * Math.sin(300 * degToPi), 2.4, 0, Math.PI * 2);
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
  update(idx) {
    // this.axisRotateR -= 3.2;
    // 更新圓形子彈
    this.bullets.forEach((bullet, idx, arr) => {
      bullet.update(idx, arr);
    });
    // 當圓形自身在旋轉時，圓形不要移動
    // if (!this.isRotating) {
    //   this.axisRotateAngle += this.axisRotateAngleV;
    //   // this.axisRotateAngle += 2;
    // }
    // 每 2-4 秒，自身旋轉一次
    const rotateTime = new Date();
    if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
      this.isRotating = true;
      // console.log(this.axisRotateAngle);
      TweenLite.to(this, 0.4, {
        // rotate: this.axisRotateAngle - 180,
        // rotate: this.axisRotateAngle % 360,
        rotate: this.axisRotateAngle,
        ease: Power2.easeOut,
        // 自身旋轉完後射擊
        onComplete: () => {
          this.shoot();
          this.isRotating = false;
        },
      });
      this.beforeRotateTime = rotateTime;
    }
    // 當圓形撞上 shooter
    enemyHitShooter(circles, idx, this.axisRotateR, this.axisRotateAngle);
  }
  shoot() {
    // 射 1-2 發
    for (let i = 0; i < 2 * Math.random(); i += 1) {
      const timer = setTimeout(() => {
        this.bullets.push(new CircleBullet({
          p: {
            x: originalPos(this.axisRotateR, this.axisRotateAngle).x,
            y: originalPos(this.axisRotateR, this.axisRotateAngle).y,
          },
          rotateAngle: this.rotate,
          moveX: -this.r - 10,
          // rotateAngle: Math.sin(this.rotate * degToPi),
          axisRotateR: this.axisRotateR,
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
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      // axisRotateR: {
      //   x: 0,
      //   y: 0,
      // },
      axisRotateR: 0,
      axisRotateAngle: 0,
      r: 26,
      rotate: 0,
      axisRotateRV: 0.1,
      axisRotateAngleV: 0.4,
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
  draw() {
    const triangleOuterBigR = this.r + 4;
    const triangleInnerBigR = this.r - 16;
    const triangleInnerSmallR = this.r - 22;
    ctx.save();
      // 淡三角
      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
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
  update(idx) {
    // this.axisRotateR -= 2.4;
    // 更新三角子彈
    this.bullets.forEach((bullet, idx, arr) => {
      bullet.update(idx, arr);
    });
    // 每 4-8 秒，三角移動 + 自身旋轉
    // const rotateAxisAngleTime = new Date();
    // if (rotateAxisAngleTime - this.beforeRotateAxisAngleTime > (Math.random() * 4000 + 4000)) {
    //   const randomRotateAngle = (Math.random() > 0.25 ? -1 : 1) * (30 * Math.random() + 45);
    //   // 以 0.8 秒移動
    //   TweenLite.to(this, 0.8, {
    //     axisRotateAngle: `+=${randomRotateAngle}`,
    //     ease: Power0.easeNone,
    //   });
    //   // 以 1.2 秒自身旋轉
    //   TweenLite.to(this, 1.2, {
    //     rotate: `+=${randomRotateAngle + 360}`,
    //     ease: Power2.easeInOut,
    //   });
    //   this.beforeRotateAxisAngleTime = rotateAxisAngleTime;
    // }
    // 每 2.4-3.6 秒，發射 1 發子彈
    const shootTime = new Date();
    if (shootTime - this.beforeShootTime > (Math.random() * 1200 + 2400)) {
    // if (!this.bullets.length) {
      this.bullets.push(new TriangleBullet({
        p: {
          x: originalPos(this.axisRotateR, this.axisRotateAngle).x,
          y: originalPos(this.axisRotateR, this.axisRotateAngle).y,
        },
        axisRotateR: this.axisRotateR,
        rotateAngle: this.rotate,
        // rotate: this.rotate,
      }));
      this.beforeShootTime = shootTime;
    }
    // 當生命值剩 2，派副三角形攻擊
    if (this.HP === 2 && !this.isReproduce) {
      for (let i = 1; i <= 2; i += 1) {
        subTriangles.push(new TriangleSub({
          // axisRotateR: {
          //   x: this.axisRotateR.x,
          //   y: this.axisRotateR.y,
          // },
          axisRotateR: this.axisRotateR,
          axisRotateAngle: this.axisRotateAngle,
          rotate: this.rotate,
          order: i,
        }));
      }
      this.isReproduce = true;
    }
    // 當三角形撞上 shooter
    enemyHitShooter(triangles, idx, this.axisRotateR, this.axisRotateAngle);
  }
}



/* Polygon 類別 */
class Polygon {
  constructor(args) {
    const def = {
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      axisRotateR: {
        whole: 0,
        big: 0,
        small: 0,
      },
      axisRotateAngle: {
        whole: 0,
        big: 0,
        small: 0,
      },
      rotate: {
        whole: 0,
        big: 0,
        small: 0,
      },
      HP: {
        whole: 1,
        big: 1,
        small: 1,
      },
      axisRotateRV: {
        whole: 2.4,
        big: 2.4,
        small: 2.4,
      },
      axisRotateAngleV: {
        whole: 0.4,
        big: 0.4,
        small: 0.4,
      },
      rotateV: {
        whole: 0.4,
        big: 0.4,
        small: 0.4,
      },
      color: globalColor.red,
      isSplited: false,
      isSplitedMove: false,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  originalPos(form) {
    return {
      x: (gameW / 2) + this.axisRotateR[form] * Math.cos(this.axisRotateAngle[form] * degToPi),
      y: (gameH / 2) + this.axisRotateR[form] * Math.sin(this.axisRotateAngle[form] * degToPi),
    };
  }
  draw() {
    if (!this.isSplited) {
      ctx.save();
        ctx.translate(this.originalPos('whole').x, this.originalPos('whole').y);
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
      // 大分裂四邊形
      if (this.HP.big) {
        ctx.save();
          ctx.translate(this.originalPos('big').x, this.originalPos('big').y);
          ctx.rotate(this.rotate.big * degToPi);
          // 大分裂主體
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(23, 150);
          ctx.$triLineTo(34, 202);
          ctx.$triLineTo(22, 255);
          ctx.closePath();
          ctx.fill();
          // 大分裂內下四邊形
          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.beginPath();
          ctx.moveTo(-8.8, 0);
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(23, 150);
          ctx.closePath();
          ctx.fill();
          // 大分裂左閃電
          drawLightning({
            x: -12,
            y: -8
          }, 0.6);
        ctx.restore();
      }
      // 小分裂四邊形
      if (this.HP.small) {
        ctx.save();
          ctx.translate(this.originalPos('small').x, this.originalPos('small').y);
          ctx.rotate(this.rotate.small * degToPi);
          // 小分裂主體
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(22, 255);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.closePath();
          ctx.fill();
          // 小分裂內下三角形
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.closePath();
          ctx.fill();
          // 小分裂內右五邊形
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
          ctx.moveTo(9.6, -2);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(10, 36);
          ctx.closePath();
          ctx.fill();
          // ctx.fillStyle = 'yellow';
          // ctx.beginPath();
          // ctx.arc(0, 0, 2, 0, Math.PI * 2)
          // ctx.fill();
          // 小分裂閃電
          drawLightning({
            x: 10,
            y: -8
          }, 0.5);
        ctx.restore();
      }
    }
  }
  update(idx) {
    if (!this.HP.whole) {
      this.isSplited = true;
    }
    if (!this.isSplited) {
      // this.axisRotateR.whole = this.axisRotateR.big = this.axisRotateR.small -= this.axisRotateRV.whole;
      // this.rotate.whole = this.rotate.big = this.rotate.small += this.rotateV.whole;
      // 當多邊形撞上 shooter
      enemyHitShooter(polygons, idx, this.axisRotateR.whole, this.axisRotateAngle.whole);
    } else {
      if (!this.isSplitedMove) {
        // const rotateOriginPos = 90 - 70;
        // const rotateDirection = (((this.rotate.whole % 360) >= rotateOriginPos) && ((this.rotate.whole % 360) < (180 + rotateOriginPos))) ? -1 : 1;
        const rotateDirection = Math.random() > 0.5 ? 1 : -1;
        TweenLite.to(this.axisRotateAngle, 2.4, {
          big: `+=${(Math.random() * 15 + 15) * rotateDirection}`,
          small: `-=${(Math.random() * 15 + 15) * rotateDirection}`,
          ease: Circ.easeOut,
        });
        TweenLite.to(this.rotate, 3.2, {
          big: `-=${Math.random() * 90 + 180}`,
          small: `+=${Math.random() * 90 + 180}`,
          ease: Power4.easeOut,
        });
        this.isSplitedMove = true;
      }
      // 當大分裂撞上 shooter
      if (this.HP.big) {
        this.axisRotateR.big -= this.axisRotateRV.big;
        enemyHitShooter(polygons, idx, this.axisRotateR.small, this.axisRotateAngle.small, this.HP, 'big');
      }
      // 當小分裂撞上 shooter
      if (this.HP.small) {
        this.axisRotateR.small -= this.axisRotateRV.small;
        enemyHitShooter(polygons, idx, this.axisRotateR.small, this.axisRotateAngle.small, this.HP, 'small');
      }
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



// 敵人撞擊 shooter 判定
function enemyHitShooter(enemies, enemyIdx, enemyAxisRotateR, enemyAxisRotateAngle, splitedPolygonHP, splitedPolygonName) {
  // const shooterR = 34;
  // const shieldR = shooterR + 36;
  // const shooterInnerCirLineW = 6;
  // const shieldLineW = 4;
  const shooter = game.shooter;
  const shieldAngleRange = Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) <= (225 * degToPi);
  function judgeEnemyHit() {
    if (!splitedPolygonName) {
      enemies.splice(enemyIdx, 1);
    } else {
      splitedPolygonName === 'big' ? splitedPolygonHP.big -= 1 : splitedPolygonHP.small -= 1;
      if (!splitedPolygonHP.big && !splitedPolygonHP.small) {
        enemies.splice(enemyIdx, 1);
      }
    }
  }
  // 當敵人撞上 shooter 主體
  if (enemyAxisRotateR <= (shooter.r + (shooter.cirSolidLineW / 2))) {
    shooter.HP -= 1;
    judgeEnemyHit();
    // 當敵人撞上 shooter 護盾
  } else if (shieldAngleRange && (enemyAxisRotateR <= (shooter.shieldR + (shooter.shieldLineW / 2)))) {
    judgeEnemyHit();
  }
}



/* Shooter 類別 */
let shooterBullets = [];
class Shooter {
  constructor(args) {
    const def = {
      // p: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      color: globalColor.white,
      r: 34,
      shieldR: 34 + 36,
      cirSolidLineW: 6,
      shieldLineW: 4,
      rotateAngle: 0,
      bullet: null,
      HP: 9,
      statuses: [],
      isShot: false,
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    ctx.save(); 
      // 輪圍
      ctx.translate(gameW / 2, gameH / 2);
      // ctx.rotate(this.rotateAngle);
      ctx.save();
        ctx.beginPath();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = 16;
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        if (!this.isShot) {
          ctx.strokeStyle = this.color;
        } else {
          ctx.strokeStyle = globalColor.red;
          this.isShot = false;
        }
        // ctx.strokeStyle = this.color;
        ctx.lineWidth = this.cirSolidLineW;
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
      // const shieldR = this.r + 36;
      ctx.beginPath();
      // 如果 shooter 狀態為 shield，護盾變為 180°
      if (!this.statuses.find((status) => status === 'shield')) {
        ctx.arc(0, 0, this.shieldR, 135 * degToPi + this.rotateAngle, 225 * degToPi + this.rotateAngle);
      } else {
        ctx.arc(0, 0, this.shieldR, 90 * degToPi + this.rotateAngle, 270 * degToPi + this.rotateAngle);
      }
      ctx.lineWidth = this.shieldLineW;
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
    // 發射子彈
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
  getProp(prop) {
    // 持續秒數
    let lastTime;
    switch (prop) {
      case 'shield':
        lastTime = 10000;
        break;
      case 'double':
        lastTime = 20000;
        break;
      case 'crackdown':
        lastTime = 1600;
        break;
      default:
        lastTime = 0;
    }
    // 將道具推進 shooter 的狀態
    this.statuses.push(prop);
    // 時間到後，移除道具效果
    setTimeout(() => {
      for (let i = 0; i < this.statuses.length; i += 1) {
        if (this.statuses[i] === prop) {
          this.statuses.splice(i, 1);
          break;
        }
      }
    }, lastTime);
    // 如果 shooter 狀態為 crackdown，就發出清場效果
    if (this.statuses.find((status) => status === 'crackdown')) {
      this.drawCrackdownEffect();
    }
  }
  drawCrackdownEffect() {
    let crackdownR = 1;
    const effect = () => {
      crackdownR += 1;
      ctx.beginPath();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.72)';
      ctx.shadowBlur = 2;
      // 透明度從 1 到 0
      ctx.strokeStyle = `rgba(255, 255, 255, ${(100 - crackdownR) / 98})`;
      ctx.lineWidth = 5;
      /**
       * baseLog() 從 0 到 3
       * 所以 (((crackdownR - 2) / 98) * 26) + 1 為從 1 到 27
       * 清場半徑因此為從 0 到 528
       */
      ctx.arc(gameW / 2, gameH / 2, 176 * baseLog(3, (((crackdownR - 2) / 98) * 26) + 1), 0, Math.PI * 2);
      ctx.stroke();
      if (crackdownR < 100) {
        requestAnimationFrame(effect);
      }
    }
    requestAnimationFrame(effect);
  }
}

// 以 x 為底的 y 的對數：logxy
function baseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


/* Shooter 子彈 */
class ShooterBullet {
  constructor(args) {
    const def = {
      // p: new Vec2(0, 0),
      bodyLength: 15,
      axisRotateR: 0,
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
      ctx.arc(-7 + this.axisRotateR, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.arc(-12 + this.axisRotateR, 0, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.arc(-15 + this.axisRotateR, 0, 1, 0, Math.PI * 2);
      ctx.fill();
      // 園底
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(0 + this.axisRotateR, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      // 尖頭
      ctx.beginPath();
      ctx.moveTo(3 + this.axisRotateR, 3);
      ctx.lineTo(this.bodyLength + this.axisRotateR, 0);
      ctx.lineTo(3 + this.axisRotateR, -3);
      ctx.closePath();
      ctx.fill();
    ctx.restore();
  }
  update(bulletIdx) {
    // 移動子彈
    this.axisRotateR += this.v;
    // 判斷子彈有無射中圓形
    let anglePanFn;
    let shotRRangeFn;
    circles.forEach((circle, cirIdx) => {
      anglePanFn = () => {
        return Math.asin(circle.r / circle.axisRotateR);
      }
      shotRRangeFn = () => {
        const bulletMoveLength = this.axisRotateR + this.bodyLength;
        return (bulletMoveLength >= (circle.axisRotateR - (circle.r / 2))) && (bulletMoveLength <= (circle.axisRotateR + (circle.r / 2)));
      }
      shooterBulletHitEnemy(circle, cirIdx, circles, this, bulletIdx, anglePanFn, shotRRangeFn);
    });
    // 判斷子彈有無射中三角形
    triangles.forEach((triangle, triIdx) => {
      anglePanFn = () => {
        const lengthX = triangle.axisRotateR + (triangle.r / 2);
        const lengthY = (triangle.r / 2) * Math.sqrt(3);
        return Math.atan2(lengthY, lengthX);
      }
      shotRRangeFn = () => {
        const bulletMoveLength = this.axisRotateR + this.bodyLength;
        return (bulletMoveLength >= triangle.axisRotateR) && (bulletMoveLength <= (triangle.axisRotateR + (triangle.r / 2)));
      }
      shooterBulletHitEnemy(triangle, triIdx, triangles, this, bulletIdx, anglePanFn, shotRRangeFn);
      // const lengthX = triangle.axisRotateR.x * Math.cos(triangle.axisRotateAngle * degToPi);
      // const lengthY = triangle.axisRotateR.y * Math.sin(triangle.axisRotateAngle * degToPi);
      // const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);
    });
    // 判斷子彈有無射中多邊形
    polygons.forEach((polygon, polyIdx) => {
      // 當多邊形未分裂
      if (polygon.HP.whole) {
        shotRRangeFn = () => {
          const bulletMoveLength = this.axisRotateR + this.bodyLength;
          const sideA = polygon.axisRotateR.whole;
          return (bulletMoveLength >= sideA) && (bulletMoveLength <= (sideA + 9));
        }
        shooterBulletHitPolygon(polygon, 'whole', 34, 21, (360 - (202 + 75)), (8 + 75), 75, this, bulletIdx, shotRRangeFn);
      } else {
        // 當多邊形分裂
        // 大分裂
        if (polygon.HP.big) {
          shotRRangeFn = () => {
            const bulletMoveLength = this.axisRotateR + this.bodyLength;
            const sideA = polygon.axisRotateR.big;
            return (bulletMoveLength >= sideA + 8) && (bulletMoveLength <= (sideA + 16));
          }
          shooterBulletHitPolygon(polygon, 'big', 34, 23, ((202 + 44) - 180), (180 - (70 + 44)), 44, this, bulletIdx, shotRRangeFn);
        }
        // 小分裂
        if (polygon.HP.small) {
          shotRRangeFn = () => {
            const bulletMoveLength = this.axisRotateR + this.bodyLength;
            const sideA = polygon.axisRotateR.small;
            return (bulletMoveLength >= sideA + 8) && (bulletMoveLength <= (sideA + 16));
          }
          shooterBulletHitPolygon(polygon, 'small', 22, 23, ((255 + 17.5) - 180), (180 - (70 + 17.5)), 17.5, this, bulletIdx, shotRRangeFn);
        }
        // 如果大小分裂都被擊斃了，那就移除此多邊形
        if (!polygon.HP.big && !polygon.HP.small) {
          polygons.splice(polyIdx, 1);
        }
      }
    });
  }
}

function shooterBulletHitEnemy(enemy, enemyIdx, enemies, shooterBullet, bulletIdx, anglePanFn, shotRRangeFn) {
  /**
   * 射中角度範圍
   * 圓形：取得兩個外切線所構成角度的一半
   * 三角形：取得射中角度範圍的一半
   */
  const anglePan = anglePanFn();
  const angleMinus = (enemy.axisRotateAngle % 360) * degToPi - anglePan;
  const angleAdd = (enemy.axisRotateAngle % 360) * degToPi + anglePan;
  const shooterRotateAngle = (angleMinus < 0 && shooterBullet.rotateAngle > Math.PI) ? (shooterBullet.rotateAngle - Math.PI * 2) : shooterBullet.rotateAngle;
  const shotAngleRange = shooterRotateAngle >= angleMinus && shooterRotateAngle <= angleAdd;
  // 射中距離範圍
  const shotRRange = shotRRangeFn();
  // 判斷子彈有無射中敵人
  if (shotAngleRange && shotRRange) {
    // 移除子彈
    shooterBullets.splice(bulletIdx, 1);
    // 扣敵人 1 生命值
    enemy.HP -= 1;
    if (!enemy.HP) {
      // 若生命值 0，移除敵人
      enemies.splice(enemyIdx, 1);
    }
  }
}

function shooterBulletHitPolygon(polygon, form, sideB1Len, sideB2Len, angleAB1, angleAB2, rotateAngleJudge, shooterBullet, bulletIdx, shotRRangeFn) {
  const polyAxisRotateAngle = polygon.axisRotateAngle[form];
  const polyRotate = polygon.rotate[form];
  // 取得兩側射中最大角度
  const sideA = polygon.axisRotateR[form];
  const sideB1 = sideB1Len;
  const sideB2 = sideB2Len;
  /**
   * 兩側點愈靠近軸心，夾角便愈大
   *   whole: 8°, 202°
   *   big: 70°, 202°
   *   small: 70°, 255°

   * 相同軸半徑下，當多邊形呈某一角度，兩側點離軸心（幾乎）最近，angleB 相同
   *   whole: axisRotateAngle 180°, rotate 75°
   *     270 - 202 = 68
   *     90 - 8 = 82
   *     (68 + 82) / 2 = 75
   * 
   *   big: axisRotateAngle 0°, rotate 44°
   *     270 - 202 = 68
   *     90 - 70 = 20
   *     (68 + 20) / 2 = 44
   * 
   *   small: axisRotateAngle 0°, rotate 17.5°
   *     270 - 255 = 15
   *     90 - 70 = 20
   *     (15 + 20) / 2 = 17.5
   */
  const sideC1 = cosineFormula(sideA, sideB1, angleAB1);
  const sideC2 = cosineFormula(sideA, sideB2, angleAB2);
  // 當多邊形的 axisRotateAngle、rotate 不同，要加上與減去的角度也不一樣
  const bottomJudge = (polyAxisRotateAngle <= 180) && ((polyRotate % 360) < rotateAngleJudge || (polyRotate % 360) >= (rotateAngleJudge + 180));
  const topJudge = (polyAxisRotateAngle > 180) && ((polyRotate % 360) >= rotateAngleJudge || (polyRotate % 360) < (rotateAngleJudge + 180));
  let angleB1;
  let angleB2;
  if (bottomJudge || topJudge) {
    angleB1 = getAngleB(sideA, sideB2, sideC2);
    angleB2 = getAngleB(sideA, sideB1, sideC1);
  } else {
    angleB1 = getAngleB(sideA, sideB1, sideC1);
    angleB2 = getAngleB(sideA, sideB2, sideC2);
  }
  /**
   * 射中角度範圍
   * 多邊形不會繞軸旋轉，axisRotateAngle 固定，不用 % 360
   */
  const angleMinus = polyAxisRotateAngle * degToPi - angleB1;
  const angleAdd = polyAxisRotateAngle * degToPi + angleB2;
  const shooterRotateAngle = (angleMinus < 0 && shooterBullet.rotateAngle > Math.PI) ? (shooterBullet.rotateAngle - Math.PI * 2) : shooterBullet.rotateAngle;
  const shotAngleRange = shooterRotateAngle >= angleMinus && shooterRotateAngle <= angleAdd;
  // 射中距離範圍
  const shotRRange = shotRRangeFn();
  // 判斷子彈有無射中多邊形
  if (shotAngleRange && shotRRange) {
    // 移除子彈
    shooterBullets.splice(bulletIdx, 1);
    // 扣 1 生命值
    polygon.HP[form] -= 1;
  }
}

/* Sub Triangle 類別 */
class TriangleSub {;
  constructor(args) {
    const def = {
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      axisRotateR: 0,
      axisRotateAngle: 0,
      // r: 26 * 0.4,
      r: 10.4,
      rotate: 0,
      rotateV: 4,
      color: globalColor.blue,
      HP: 2,
      isReproduceMoving: false,
      order: 0,
    }
    Object.assign(def, args);
    Object.assign(this, def);
  }
  draw() {
    // const scale = 0.4;
    const triangleOuterBigR = this.r + 1.6;
    const triangleInnerBigR = this.r - 6.4;
    const triangleInnerSmallR = this.r - 8.8;
    ctx.save();
      // 淡三角
      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
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
  update(idx) {
    this.rotate += this.rotateV;
    if (!this.isReproduceMoving) {
      TweenLite.to(this, 0.8, {
        axisRotateAngle: `${this.order === 1 ? '+=' : '-='}10`,
        ease: Power2.easeOut,
        onComplete: () => {
          TweenLite.to(this, 1.6, {
            axisRotateR: 0,
            ease: Power1.easeIn,
          });
        }
      });
      this.isReproduceMoving = true;
    }
    // 當小三角形撞上 shooter
    enemyHitShooter(subTriangles, idx, this.axisRotateR, this.axisRotateAngle);
  }
}


/* Circle 子彈 */
class CircleBullet {
  constructor(args) {
    const def = {
      p: {
        x: 0,
        y: 0,
      },
      axisRotateR: 0,
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
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotateAngle * degToPi); 
      // ctx.scale(1.6, 0.68);
      // ctx.scale(1, 0.9);
      ctx.beginPath();
      // ctx.arc(this.moveX + 22 + 10, 0, 4, 0, Math.PI * 2);
      ctx.arc(this.moveX, 0, 4, 0, Math.PI * 2);
      // ctx.arc(this.axisRotateR + 16, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    ctx.restore();
  }
  update(idx, arr) {
    // 圓形子彈移動
    this.moveX += this.moveXV;
    enemyBulletHitShooter(this, idx, arr);
    // const shooter = game.shooter;
    // const shooterBodyCore = shooter.r + (shooter.cirSolidLineW / 2);
    // const shooterBodyShield = shooter.shieldR + (shooter.shieldLineW / 2);
    // // 當圓形子彈射中 shooter 主體
    // if (-this.moveX >= (this.axisRotateR - shooterBodyCore)) {
    //   // 顯示被子彈擊中效果
    //   shooter.isShot = true;
    //   const shooterHpBarOriginW = 216;
    //   const shooterHpW = shooterHpBar.offsetWidth - (shooterHpBarOriginW / 3);
    //   // shooter 命減 1
    //   shooter.HP -= 1;
    //   shooterHpBar.style.width = `${shooterHpW}px`;
    //   if (shooterHpW === 0) {
    //     const shooterHeart = document.querySelectorAll('.panel__game-heart');
    //     // 如果還有愛心命
    //     if (shooterHeart.length) {
    //       // 減掉一個愛心
    //       shooterHeart[0].parentNode.removeChild(shooterHeart[0]);
    //       // 命條減 1/3
    //       shooterHpBar.style.width = `${shooterHpBarOriginW}px`;
    //     }
    //   }
    //   // 移除子彈
    //   arr.splice(idx, 1);
    // }
    // // 當圓形子彈射中 shooter 的護盾
    // const shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= (225 * degToPi);  
    // if (shieldAngleRange && (-this.moveX >= (this.axisRotateR - shooterBodyShield))) {
    //   // 移除子彈
    //   arr.splice(idx, 1);
    // }
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
    // 三角子彈移動
    this.moveX += this.moveXV;
    enemyBulletHitShooter(this, idx, arr, 37.8);
    // const shooter = game.shooter;
    // const shooterBodyCore = shooter.r + (shooter.cirSolidLineW / 2);
    // const shooterBodyShield = shooter.shieldR + (shooter.shieldLineW / 2);
    // const triBulletLength = 37.8;
    // // 當三角子彈射中 shooter 主體
    // if (-this.moveX >= (this.axisRotateR - (triBulletLength + shooterBodyCore))) {
    //   // shooter 命減 1
    //   shooter.HP -= 1;
    //   // 移除三角子彈
    //   arr.splice(idx, 1);
    // }
    // // 當三角子彈射中 shooter 的護盾
    // const shieldAngleRange = Math.abs(mouseMoveAngle - (this.rotateAngle % 360) * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - (this.rotateAngle % 360) * degToPi) <= (225 * degToPi);
    // if (shieldAngleRange && (-this.moveX >= (this.axisRotateR - (triBulletLength + shooterBodyShield)))) {
    //   // 移除三角子彈
    //   arr.splice(idx, 1);
    // }
  }
}

function enemyBulletHitShooter(enemy, enemyIdx, enemies, enemyBulletLen = 0) {
  const shooter = game.shooter;
  const shooterBodyCore = shooter.r + (shooter.cirSolidLineW / 2);
  const shooterBodyShield = shooter.shieldR + (shooter.shieldLineW / 2);
  // 當敵人子彈射中 shooter 主體
  if (-enemy.moveX >= (enemy.axisRotateR - (shooterBodyCore + enemyBulletLen))) {
    // 顯示被子彈擊中效果
    shooter.isShot = true;
    const shooterHpBarOriginW = 216;
    const shooterHpBarW = shooterHpBar.offsetWidth - (shooterHpBarOriginW / 3);
    // shooter 命減 1
    shooter.HP -= 1;
    shooterHpBar.style.width = `${shooterHpBarW}px`;
    if (!shooterHpBarW) {
      const shooterHeart = document.querySelectorAll('.panel__game-heart');
      // 如果 shooter 還有愛心命
      if (shooterHeart.length) {
        // 減掉一個愛心
        shooterHeart[0].parentNode.removeChild(shooterHeart[0]);
        // 命條減 1/3
        shooterHpBar.style.width = `${shooterHpBarOriginW}px`;
      }
    }
    // 移除敵人子彈
    enemies.splice(enemyIdx, 1);
  }
  // 當敵人子彈射中 shooter 的護盾
  const shieldAngleRange = Math.abs(mouseMoveAngle - (enemy.rotateAngle % 360) * degToPi) >= (135 * degToPi) && Math.abs(mouseMoveAngle - (enemy.rotateAngle % 360) * degToPi) <= (225 * degToPi);
  if (shieldAngleRange && (-enemy.moveX >= (enemy.axisRotateR - (shooterBodyShield + enemyBulletLen)))) {
    // 移除子彈
    enemies.splice(enemyIdx, 1);
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


function originalPos(axisRotateR, axisRotateAngle) {
  return {
    x: (gameW / 2) + axisRotateR * Math.cos(axisRotateAngle * degToPi),
    y: (gameH / 2) + axisRotateR * Math.sin(axisRotateAngle * degToPi),
  };
}

// 餘弦定理
function cosineFormula(a, b, angle) {
  return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle * degToPi));
}

function getAngleB(a, b, c) {
  return Math.acos((a * a + c * c - b * b) / (2 * a * c));
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
  mouseMoveAngle = angle < 0 ? (angle + 2 * Math.PI) : angle;
  // mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
};

canvas.addEventListener('click', handleClick);

let beforeShootTime = new Date();
function handleClick() {
  const shootTime = new Date();
  if (shootTime - beforeShootTime > 400) {
    let bulletNum;
    // 如果 shooter 狀態為 double，每次射兩發，兩發之間隔 0.16 秒
    if (!game.shooter.statuses.find((status) => status === 'double')) {
      bulletNum = 1;
    } else {
      bulletNum = 2;
    }
    for (let i = 0; i < bulletNum; i++) {
      setTimeout(() => {
        shooterBullets.push(new ShooterBullet({
          // 34 + 12 + 16
          // p: new Vec2(62, 0),
          axisRotateR: 62,
          rotateAngle: mouseMoveAngle,
        }));
      }, 160 * i);
    }
    beforeShootTime = shootTime;
  }
};


// function handleMouseUp(evt) {
//   mouseUpPos = mouseMovePos.clone();
// }

// function handleMouseDown(evt) {
//   mouseDownPos = mouseMovePos.clone();
// }
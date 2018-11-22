"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Environment Variable */
var updateFPS = 30; // const showMouse = true;
// const bgColor = 'black';

var time = 0;
var globalColor = {
  red: "#e7465d",
  yellow: "#f5af5f",
  blue: "#3676bb",
  blueDark: "#001d2e",
  white: "#fff"
};
var startBtn = document.getElementById('start-btn');
var panel = document.getElementById('panel');
startBtn.addEventListener('click', function () {
  game.startGame();
}, {
  once: true
});
/* GUI Controls */
// const controls = {
//   value: 0,
// }

var gui = new dat.GUI(); // gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});

/* 2D Vector Class */

var Vec2 =
/*#__PURE__*/
function () {
  function Vec2(x, y) {
    _classCallCheck(this, Vec2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vec2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.x += x;
      this.y += y;
    }
  }, {
    key: "add",
    value: function add(v) {
      return new Vec2(this.x + v.x, this.y + v.y);
    }
  }, {
    key: "sub",
    value: function sub(v) {
      return new Vec2(this.x - v.x, this.y - v.y);
    }
  }, {
    key: "mul",
    value: function mul(s) {
      return new Vec2(this.x * s, this.y * s);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vec2(this.x, this.y);
    }
  }, {
    key: "equal",
    value: function equal(v) {
      return this.x === v.x && this.y === v.y;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "(".concat(this.x, ", ").concat(this.y, ")");
    }
  }, {
    key: "length",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    set: function set(newVal) {
      var newLength = this.unit.mul(newVal);
      this.set(newLength.x, newLength.y);
    }
  }, {
    key: "angle",
    get: function get() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "unit",
    get: function get() {
      return this.mul(1 / this.length);
    }
  }]);

  return Vec2;
}();
/* Initialize Canvas Settings */


var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var ww;
var wh;
var gameW;
var gameH; // ctx.circle = function (v, r) {
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
} // initCanvas();


var degToPi = Math.PI / 180; // let circles = [];

var coverCircle;
var coverTriangle;
var coverPolygon;
var game;
var circles = [];
var triangles = [];
var polygons = [];

var Game =
/*#__PURE__*/
function () {
  function Game(args) {
    _classCallCheck(this, Game);

    var def = {
      isGameStart: true,
      // isGameStart: false,
      shooter: null,
      currentLevel: 1,
      isInLevel1: false
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      coverCircle = new Circle({
        rotationAxisR: 380,
        rotationAngle: -36,
        r: 39
      });
      coverTriangle = new Triangle({
        rotationAxisR: {
          x: 320,
          y: 320
        },
        rotationAngle: 40,
        rotate: 32,
        r: 44
      });
      coverPolygon = new Polygon({
        p: {
          x: 72,
          y: 96
        },
        scale: 1.25
      });
      this.startGame();
      this.render();
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      ctx.fillStyle = globalColor.blueDark; // ctx.fillStyle = "rgba(0, 0, 255, 0.1)"

      ctx.fillRect(0, 0, gameW, gameH);

      if (this.isGameStart) {
        this.shooter.draw();
        circles.forEach(function (circle) {
          circle.draw(); // circle.bullets.forEach((bullet) => {
          //   bullet.draw();
          // });
        });
      } else {
        // this.startGame();
        this.drawCover();
      }

      requestAnimationFrame(function () {
        _this.render();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      time += 1;

      if (this.isGameStart) {
        this.shooter.update();

        if (this.currentLevel === 1 && !this.isInLevel1) {
          this.setLevelOne();
          this.isInLevel1 = true;
        }

        circles.forEach(function (circle) {
          circle.update();
        });
      }

      setTimeout(function () {
        _this2.update();
      }, 1000 / updateFPS);
    }
  }, {
    key: "drawCover",
    value: function drawCover() {
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
      ctx.restore(); // 黃圓

      coverCircle.draw();
      coverCircle.update(); // 藍三角形

      coverTriangle.draw();
      coverTriangle.update(); // 紅多邊形

      coverPolygon.draw();
      coverPolygon.update(); // 電池

      drawBattery({
        x: gameW / 2 - 24,
        y: gameH / 2 - 51.8
      }); // R 字小角裝飾

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
  }, {
    key: "startGame",
    value: function startGame() {
      this.isGameStart = true;
      panel.style.display = 'none';
      this.shooter = new Shooter();
      canvas.style.cursor = 'pointer';
    }
  }, {
    key: "setLevelOne",
    value: function setLevelOne() {
      circles.push(new Circle({
        rotationAxisR: 240,
        rotationAngle: 184
      }));
    }
  }]);

  return Game;
}();
/* Circle Class */


var Circle =
/*#__PURE__*/
function () {
  function Circle(args) {
    _classCallCheck(this, Circle);

    var def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2
      },
      rotationAxisR: 0,
      rotationAngle: 0,
      r: 22,
      v: 0.4,
      color: globalColor.yellow,
      bullets: [new CircleBullet()]
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      var bigCirR = this.r + 5;
      var smallCirR = this.r - 10;
      var subRotationAxisR = 14;
      ctx.save();
      ctx.translate(this.rotationAxisPos.x, this.rotationAxisPos.y); // ctx.translate(-4, 0);
      // 大淡圓

      ctx.beginPath();
      ctx.arc(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi) - 4, this.rotationAxisR * Math.sin(this.rotationAngle * degToPi), bigCirR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.3)';
      ctx.fill(); // 小淡圓

      ctx.beginPath();
      ctx.arc(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi) + 20, this.rotationAxisR * Math.sin(this.rotationAngle * degToPi), smallCirR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.3)';
      ctx.fill(); // 主體圓

      ctx.beginPath();
      ctx.arc(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi), this.rotationAxisR * Math.sin(this.rotationAngle * degToPi), this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.save();
      ctx.translate(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi), this.rotationAxisR * Math.sin(this.rotationAngle * degToPi)); // 小三圓

      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      ctx.arc(subRotationAxisR, 0, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(120 * degToPi), subRotationAxisR * Math.sin(120 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(240 * degToPi), subRotationAxisR * Math.sin(240 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill(); // 神經

      ctx.beginPath();
      ctx.fillStyle = globalColor.white;
      ctx.lineTo(8, 0);
      ctx.lineTo(3 * Math.cos(32 * degToPi), 3 * Math.sin(32 * degToPi));
      ctx.lineTo(12 * Math.cos(120 * degToPi), 12 * Math.sin(120 * degToPi));
      ctx.lineTo(1 * Math.cos(170 * degToPi), 3 * Math.sin(170 * degToPi));
      ctx.lineTo(8 * Math.cos(240 * degToPi), 8 * Math.sin(240 * degToPi));
      ctx.lineTo(1 * Math.cos(320 * degToPi), 3 * Math.sin(320 * degToPi));
      ctx.closePath();
      ctx.fill(); // 子彈

      this.bullets.forEach(function (bullet) {
        // ctx.beginPath()
        bullet.draw();
      });
      ctx.restore();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {// this.rotationAngle += this.v;
      // this.bullets.forEach((bullet) => {
      //   bullet.update();
      // });
    }
  }]);

  return Circle;
}();
/* Triangle Class */


var Triangle =
/*#__PURE__*/
function () {
  function Triangle(args) {
    _classCallCheck(this, Triangle);

    var def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2
      },
      rotationAxisR: {
        x: 0,
        y: 0
      },
      rotationAngle: 0,
      r: 28,
      rotate: 0,
      v: -0.4,
      color: globalColor.blue,
      canMove: true
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw() {
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
  }, {
    key: "update",
    value: function update() {
      this.rotate += this.v; // if (this.canMove) {
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
  }]);

  return Triangle;
}();
/* Polygon Class */


var Polygon =
/*#__PURE__*/
function () {
  function Polygon(args) {
    _classCallCheck(this, Polygon);

    var def = {
      p: new Vec2(0, 0),
      v: {
        x: 1,
        y: 0.5
      },
      scale: 1,
      rotate: 0,
      rotateV: 0.4,
      color: globalColor.red
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Polygon, [{
    key: "draw",
    value: function draw() {
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
  }, {
    key: "update",
    value: function update() {
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
  }, {
    key: "isInBoundary",
    get: function get() {
      var xInRange = -48 <= this.p.x && this.p.x <= gameW + 48;
      var yInRange = -48 <= this.p.y && this.p.y <= gameH + 48;
      return xInRange && yInRange;
    }
  }]);

  return Polygon;
}();
/* Shooter Class */


var shooterBullets = [];

var Shooter =
/*#__PURE__*/
function () {
  function Shooter(args) {
    _classCallCheck(this, Shooter);

    var def = {
      p: {
        x: gameW / 2,
        y: gameH / 2
      },
      color: globalColor.white,
      r: 34,
      rotateAngle: 0,
      bullet: null
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Shooter, [{
    key: "draw",
    value: function draw() {
      ctx.save(); // 輪圍

      ctx.translate(this.p.x, this.p.y);
      ctx.save();
      ctx.beginPath();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = 16;
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 6;
      ctx.stroke(); // 輪軸

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(this.r * Math.cos(30 * degToPi + this.rotateAngle), this.r * Math.sin(30 * degToPi + this.rotateAngle));
      ctx.moveTo(0, 0);
      ctx.lineTo(this.r * Math.cos(150 * degToPi + this.rotateAngle), this.r * Math.sin(150 * degToPi + this.rotateAngle));
      ctx.moveTo(0, 0);
      ctx.lineTo(this.r * Math.cos(270 * degToPi + this.rotateAngle), this.r * Math.sin(270 * degToPi + this.rotateAngle));
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore(); // 輪圍外虛線
      // ctx.beginPath();

      ctx.strokeStyle = this.color;
      var outerR = this.r + 22;

      for (var i = 0; i < 360; i += 1) {
        // const angle1 = i;
        // const angle2 = (i + 1);
        var x1 = outerR * Math.cos(i * degToPi + this.rotateAngle);
        var y1 = outerR * Math.sin(i * degToPi + this.rotateAngle);
        var x2 = outerR * Math.cos((i + 1) * degToPi + this.rotateAngle);
        var y2 = outerR * Math.sin((i + 1) * degToPi + this.rotateAngle);

        if (i % 10 < 5) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } // 護盾


      var shieldR = this.r + 36;
      ctx.beginPath();
      ctx.arc(0, 0, shieldR, 45 * degToPi + this.rotateAngle, 135 * degToPi + this.rotateAngle);
      ctx.lineWidth = 4;
      ctx.stroke(); // 砲口

      ctx.beginPath();
      ctx.save();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = 16;
      ctx.rotate(this.rotateAngle);
      ctx.translate(0, -this.r - 8);
      ctx.moveTo(0, 0); // 下方長方形長 16、寬（高） 12
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
  }, {
    key: "update",
    value: function update() {
      this.rotateAngle = mouseMoveAngle;
      shooterBullets.forEach(function (bullet) {
        bullet.update();
      });
    }
  }, {
    key: "shoot",
    value: function shoot() {
      shooterBullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }]);

  return Shooter;
}();

var ShooterBullet =
/*#__PURE__*/
function () {
  function ShooterBullet(args) {
    _classCallCheck(this, ShooterBullet);

    var def = {
      p: new Vec2(0, 0),
      // shootInterval: 0.4,
      color: globalColor.white,
      v: new Vec2(0, -6),
      rotateAngle: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(ShooterBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.beginPath();
      ctx.translate(gameW / 2, gameH / 2);
      ctx.rotate(this.rotateAngle);
      ctx.translate(this.p.x, this.p.y); // 殘影

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
      ctx.fillRect(-4, 16, 8, 4); // 園底

      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color; // ctx.fillStyle = 'red';

      ctx.fill(); // 尖頭

      ctx.beginPath();
      ctx.moveTo(3, -3);
      ctx.lineTo(0, -15);
      ctx.lineTo(-3, -3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.p = this.p.add(this.v);
    }
  }]);

  return ShooterBullet;
}();

var CircleBullet =
/*#__PURE__*/
function () {
  function CircleBullet(args) {
    _classCallCheck(this, CircleBullet);

    var def = {
      p: new Vec2(0, 4),
      color: globalColor.yellow,
      v: new Vec2(0, -6),
      rotateAngle: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(CircleBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.beginPath();
      ctx.scale(1.6, 0.7);
      ctx.arc(23, this.p.x, this.p.y, 0, Math.PI * 2);
      ctx.restore();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }]);

  return CircleBullet;
}(); // draw battery


function drawBattery(p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.fillStyle = globalColor.yellow; // 瓶身

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-24, 0);
  ctx.lineTo(-24, 42);
  ctx.lineTo(0, 42);
  ctx.closePath();
  ctx.fill(); // 瓶底

  ctx.save();
  ctx.translate(0, 44);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-24, 0);
  ctx.lineTo(-24, 3);
  ctx.lineTo(0, 3);
  ctx.closePath();
  ctx.fill();
  ctx.restore(); // 瓶蓋

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
  ctx.restore(); // 閃電

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
  game.init(); // init();
  // requestAnimationFrame(draw);
  // setInterval(update, 1000 / updateFPS);
} // load & resize event


window.addEventListener('load', handleLoad);
window.addEventListener('resize', initCanvas);
/* Mouse Events & Recording */
// const mouseMovePos = new Vec2(0, 0);

var mouseMovePos = {};
var mouseMoveAngle = 0; // let mouseUpPos = new Vec2(0, 0);
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

;
canvas.addEventListener('mousedown', handleMousedown);
var beforeShootTime = new Date();

function handleMousedown() {
  var shootTime = new Date();

  if (shootTime - beforeShootTime > 200) {
    shooterBullets.push(new ShooterBullet({
      p: new Vec2(0, -34 - 12 - 16),
      // p: new Vec2(0, -34 - 8 - 30),
      rotateAngle: mouseMoveAngle
    }));
    beforeShootTime = shootTime;
  }
}

; // function handleMouseUp(evt) {
//   mouseUpPos = mouseMovePos.clone();
// }
// function handleMouseDown(evt) {
//   mouseDownPos = mouseMovePos.clone();
// }
//# sourceMappingURL=index.js.map

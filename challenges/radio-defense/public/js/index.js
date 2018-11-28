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
  orange: "#f5af5f",
  blue: "#3676bb",
  blueDark: "#001d2e",
  white: "#fff"
};
var startBtn = document.getElementById('start-btn');
var cover = document.getElementById('cover');
var gameInfo = document.getElementById('info');
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
    } // toString() {
    //   return `(${this.x}, ${this.y})`;
    // }

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

ctx.$triLineTo = function (r, angle) {
  var angleAdd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return ctx.lineTo(r * Math.cos(angle * degToPi + angleAdd), r * Math.sin(angle * degToPi + angleAdd));
};

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
var subTriangles = [];
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
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      ctx.fillStyle = globalColor.blueDark; // ctx.fillStyle = "rgba(0, 0, 255, 0.1)"

      ctx.fillRect(0, 0, gameW, gameH);

      if (this.isGameStart) {
        // 繪製 shooter
        this.shooter.draw(); // 繪製 circles

        circles.forEach(function (circle) {
          circle.draw();
        }); // 繪製 triangles

        triangles.forEach(function (triangle) {
          triangle.draw();
        }); // 繪製 polygons

        polygons.forEach(function (polygon) {
          polygon.draw();
        }); // 繪製 sub triangles

        subTriangles.forEach(function (subTriangle) {
          subTriangle.draw();
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
        // 判斷現在是第幾關
        if (this.currentLevel === 1 && !this.isInLevel1) {
          this.setLevelOne();
          this.isInLevel1 = true;
        } // 更新 shooter


        this.shooter.update(); // 更新 circle

        circles.forEach(function (circle) {
          circle.update();
        }); // 更新 triangles

        triangles.forEach(function (triangle) {
          triangle.update();
        }); // 更新 polygons

        polygons.forEach(function (polygon) {
          polygon.update();
        }); // 更新 sub triangles

        subTriangles.forEach(function (subTriangle) {
          subTriangle.update();
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
      coverCircle.update(); // 藍三角

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
      cover.style.display = 'none';
      gameInfo.style.display = 'block';
      this.shooter = new Shooter();
      canvas.style.cursor = 'pointer';
    }
  }, {
    key: "setLevelOne",
    value: function setLevelOne() {
      circles.push(new Circle({
        rotationAxisR: 240,
        rotationAxisAngle: 0
      })); // triangles.push(new Triangle({
      //   rotationAxisR: {
      //     x: 280,
      //     y: 280,
      //   },
      //   rotationAxisAngle: 40,
      //   // rotate: 36,
      // }));
      // polygons.push(new Polygon({
      //   rotationAxisR: 280,
      //   rotationAxisAngle: 220,
      //   // scale: 0.8,
      // }));
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
      rotationAxisAngle: 0,
      r: 22,
      rotate: 0,
      rotationAxisRV: 0.01,
      rotationAxisAngleV: 0.4,
      rotateV: 0.4,
      color: globalColor.orange,
      hP: 2,
      bullets: [],
      beforeRotateTime: new Date(),
      isRotating: false // beforeRotateAxisAngleTime: new Date(),

    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      var circleBigR = this.r + 5;
      var circleSmallR = this.r - 10;
      var subRotationAxisR = 14;
      ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotate * degToPi); // 大淡圓

      ctx.beginPath();
      ctx.arc(-4, 0, circleBigR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill(); // 小淡圓

      ctx.beginPath();
      ctx.arc(20, 0, circleSmallR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill(); // 主體圓

      ctx.beginPath();
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill(); // 小三圓

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
      ctx.$triLineTo(2, 32);
      ctx.$triLineTo(12, 120);
      ctx.$triLineTo(2.4, 176);
      ctx.$triLineTo(8, 240);
      ctx.$triLineTo(1.6, 320);
      ctx.closePath();
      ctx.fill();
      ctx.restore(); // 子彈

      this.bullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 當圓形自身在旋轉時，圓形不要移動

      if (!this.isRotating) {
        this.rotationAxisAngle += this.rotationAxisAngleV;
      }

      var rotateTime = new Date(); // 每 2-4 秒，自身旋轉一次

      if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
        this.isRotating = true;
        TweenLite.to(this, 0.4, {
          rotate: this.rotationAxisAngle - 180,
          ease: Power2.easeOut,
          // 自身旋轉完後射擊
          onComplete: function onComplete() {
            _this3.shoot();

            _this3.isRotating = false;
          }
        });
        this.beforeRotateTime = rotateTime;
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var _this4 = this;

      var _loop = function _loop(i) {
        var timer = setTimeout(function () {
          _this4.bullets.push(new CircleBullet({
            originalPos: {
              x: _this4.originalPos.x,
              y: _this4.originalPos.y
            },
            rotateAngle: _this4.rotate,
            rotationAxisR: _this4.rotationAxisR
          }));

          clearTimeout(timer); // 間隔 02-04 秒
        }, i * (200 * Math.random() + 200));
      };

      // 射 1-2 發
      for (var i = 0; i < 2 * Math.random(); i += 1) {
        _loop(i);
      }
    }
  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi)
      };
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
      rotationAxisAngle: 0,
      r: 26,
      rotate: 0,
      v: -0.4,
      color: globalColor.blue,
      bullets: [],
      beforeShootTime: new Date(),
      hP: 4,
      isReproduce: false // canMove: true,

    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw() {
      var triangleOuterBigR = this.r + 4;
      var triangleInnerBigR = this.r - 16;
      var triangleInnerSmallR = this.r - 22;
      ctx.save(); // 淡三角

      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotate * degToPi);
      ctx.save();
      ctx.translate(2, -Math.sqrt(12));
      ctx.beginPath();
      ctx.moveTo(triangleOuterBigR * Math.cos(0), triangleOuterBigR * Math.sin(0));
      ctx.lineTo(triangleOuterBigR * Math.cos(120 * degToPi), triangleOuterBigR * Math.sin(120 * degToPi));
      ctx.lineTo(triangleOuterBigR * Math.cos(240 * degToPi), triangleOuterBigR * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.fill();
      ctx.restore(); // 主體三角

      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(0), this.r * Math.sin(0));
      ctx.lineTo(this.r * Math.cos(120 * degToPi), this.r * Math.sin(120 * degToPi));
      ctx.lineTo(this.r * Math.cos(240 * degToPi), this.r * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill(); // 大白三角

      ctx.translate(-3.2, -1.6);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerBigR * Math.cos(30 * degToPi), triangleInnerBigR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerBigR * Math.cos(90 * degToPi), triangleInnerBigR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill(); // 小白三角

      ctx.translate(0, -8.8);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerSmallR * Math.cos(30 * degToPi), triangleInnerSmallR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerSmallR * Math.cos(90 * degToPi), triangleInnerSmallR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill();
      ctx.restore(); // 子彈

      this.bullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      // this.rotationAxisAngle += this.v;
      // this.rotate += this.v;
      this.bullets.forEach(function (bullet) {
        bullet.update();
      }); // const shootTime = new Date();
      // if (shootTime - this.beforeShootTime > 1000) {

      if (!this.bullets.length) {
        this.bullets.push(new TriangleBullet({
          p: {
            x: this.originalPos.x,
            y: this.originalPos.y
          },
          rotate: this.rotate
        }));
      } // 派副三角形攻擊


      if (this.hP === 4 && !this.isReproduce) {
        for (var i = 1; i <= 2; i += 1) {
          subTriangles.push(new TriangleSub({
            rotationAxisR: {
              x: this.rotationAxisR.x,
              y: this.rotationAxisR.y
            },
            rotationAxisAngle: this.rotationAxisAngle,
            rotate: this.rotate,
            order: i
          }));
        }

        this.isReproduce = true;
      } // this.beforeShootTime = shootTime;
      // }
      // if (this.canMove) {
      //   this.canMove = false;
      //   setTimeout(() => {
      //     TweenLite.to(this, 0.8, {
      //       // rotationAxisAngle: `${Math.random() < 0.5 ? '-=' : '+='}${Math.random() * 30 + 15}`,
      //       rotationAxisAngle: '+=90',
      //       ease: Sine.easeInOut,
      //       // onComplete: () => {
      //       //   this.canMove = true;
      //       // },
      //     });
      //     this.canMove = true;
      //   }, 1200);
      // }

    } // reproduce() {
    //   ctx.save();
    //     ctx.scale(4, 4);
    //     this.draw('red');
    //   ctx.restore();
    // }

  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.rotationAxisPos.x + this.rotationAxisR.x * Math.cos(this.rotationAxisAngle * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR.y * Math.sin(this.rotationAxisAngle * degToPi)
      };
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
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2
      },
      rotationAxisR: 0,
      rotationAxisAngle: 0,
      // p: new Vec2(0, 0),
      // v: {
      //   x: 1,
      //   y: 0.5,
      // },
      v: 0.8,
      rotate: 0,
      // scale: 1,
      // rotateV: 0.4,
      color: globalColor.red,
      isSplited: true
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Polygon, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotate * degToPi);

      if (this.isSplited) {
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
        ctx.fill(); // 右淡五邊形

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)'; // ctx.fillStyle = globalColor.blue;

        ctx.moveTo(9.6, -2);
        ctx.$triLineTo(22, 324);
        ctx.$triLineTo(21, 8);
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(10, 36);
        ctx.closePath();
        ctx.fill(); // 下淡四邊形

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)'; // ctx.fillStyle = globalColor.orange;
        // ctx.moveTo(8.4, 5.6);

        ctx.moveTo(10 * Math.cos(36 * degToPi), 10 * Math.sin(36 * degToPi));
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(23, 150);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fill(); // 閃電

        drawLightning({
          x: -0.8,
          y: -16
        });
      } else {
        // 右分裂四邊形
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(18, 0);
        ctx.$triLineTo(24, 36);
        ctx.$triLineTo(32, 74);
        ctx.closePath();
        ctx.fill(); // 內右淡四邊形

        ctx.beginPath(); // ctx.fillStyle = globalColor.blue;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.lineTo(18, 0);
        ctx.$triLineTo(24, 36);
        ctx.$triLineTo(32, 74);
        ctx.$triLineTo(19, 65);
        ;
        ctx.$triLineTo(13, 42);
        ;
        ctx.closePath();
        ctx.fill(); // 內左淡四邊形

        ctx.beginPath(); // ctx.fillStyle = globalColor.orange;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
        ctx.$triLineTo(32, 74);
        ctx.$triLineTo(16.4, 74);
        ctx.$triLineTo(19, 65);
        ctx.closePath();
        ctx.fill(); // 右閃電

        ctx.save();
        drawLightning({
          x: 12,
          y: 6
        }, 0.5);
        ctx.restore(); // 左分裂四邊形

        ctx.translate(-32, 0);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.$triLineTo(32, 36);
        ctx.$triLineTo(28, 90);
        ctx.$triLineTo(28, 144);
        ctx.closePath();
        ctx.fill(); // 內右淡四邊形

        ctx.beginPath(); // ctx.fillStyle = globalColor.orange;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
        ctx.$triLineTo(16, 36);
        ctx.$triLineTo(32, 36);
        ctx.$triLineTo(28, 90);
        ctx.$triLineTo(12, 88);
        ctx.fill(); // 左閃電

        drawLightning({
          x: 0,
          y: 8
        }, 0.6);
      }

      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {} // this.p.x += this.v.x;
    // this.p.y += this.v.y;
    // this.rotate += this.rotateV;
    // if (!this.isInBoundary) {
    //   this.p.x = -48;
    //   this.p.y = -32;
    //   this.v.x = 0.5 * Math.random() + 0.5;
    //   this.v.y = 0.5 * Math.random() + 0.5;
    // }
    // get isInBoundary() {
    //   const xInRange = -48 <= this.p.x && this.p.x <= gameW + 48;
    //   const yInRange = -48 <= this.p.y && this.p.y <= gameH + 48;
    //   return xInRange && yInRange;
    // }

  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi)
      };
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

      ctx.translate(this.p.x, this.p.y); // ctx.rotate(this.rotateAngle);

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
      ctx.$triLineTo(this.r, 0, this.rotateAngle);
      ctx.moveTo(0, 0);
      ctx.$triLineTo(this.r, 120, this.rotateAngle);
      ctx.moveTo(0, 0);
      ctx.$triLineTo(this.r, 240, this.rotateAngle);
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
      ctx.arc(0, 0, shieldR, 135 * degToPi + this.rotateAngle, 225 * degToPi + this.rotateAngle);
      ctx.lineWidth = 4;
      ctx.stroke(); // 砲口

      ctx.beginPath();
      ctx.save();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = 16;
      ctx.rotate(this.rotateAngle); // ctx.translate(0, -this.r - 8);

      ctx.translate(this.r + 8, 0);
      ctx.moveTo(0, 0); // 下方長方形長 16、寬（高） 12
      // 上方梯形高 14、上邊寬 8
      // ctx.lineTo(8, 0);
      // ctx.lineTo(8, -12);
      // ctx.lineTo(4, -26);
      // ctx.lineTo(-4, -26);
      // ctx.lineTo(-8, -12);
      // ctx.lineTo(-8, 0);

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
  }, {
    key: "update",
    value: function update() {
      this.rotateAngle = mouseMoveAngle;
      shooterBullets.forEach(function (bullet, idx) {
        bullet.update(idx);
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
      // p: new Vec2(0, 0),
      rotationAxisR: 0,
      color: globalColor.white,
      v: 4,
      rotateAngle: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(ShooterBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(gameW / 2, gameH / 2);
      ctx.rotate(this.rotateAngle); // ctx.translate(this.p.x, this.p.y);
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
      ctx.fill(); // 園底

      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(0 + this.rotationAxisR, 0, 4, 0, Math.PI * 2);
      ctx.fill(); // 尖頭

      ctx.beginPath();
      ctx.moveTo(3 + this.rotationAxisR, 3);
      ctx.lineTo(15 + this.rotationAxisR, 0);
      ctx.lineTo(3 + this.rotationAxisR, -3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(bulletIdx) {
      var _this5 = this;

      // 移動子彈
      this.rotationAxisR += this.v; // 判斷子彈有無射中圓形

      circles.forEach(function (circle, circleIdx) {
        // 取兩個外切線所構成角度的一半
        var anglePan = Math.asin(circle.r / circle.rotationAxisR); // 設中角度範圍

        var shotAngleRange = _this5.rotateAngle >= circle.rotationAxisAngle % 360 * degToPi - anglePan && _this5.rotateAngle <= circle.rotationAxisAngle % 360 * degToPi + anglePan; // 設中距離範圍

        var shotRRange = _this5.rotationAxisR + 15 + 11 >= circle.rotationAxisR && _this5.rotationAxisR + 15 - 11 <= circle.rotationAxisR; // 判斷子彈有無射中圓形

        if (shotAngleRange && shotRRange) {
          // 移除子彈
          shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

          circle.hP -= 1;

          if (circle.hP === 0) {
            // 若生命值 0，移除圓形
            circles.splice(circleIdx, 1);
          }
        }
      });
    }
  }]);

  return ShooterBullet;
}();
/* Sub Triangle Class */


var TriangleSub =
/*#__PURE__*/
function () {
  function TriangleSub(args) {
    _classCallCheck(this, TriangleSub);

    var def = {
      rotationAxisPos: {
        x: gameW / 2,
        y: gameH / 2
      },
      rotationAxisR: {
        x: 0,
        y: 0
      },
      rotationAxisAngle: 0,
      r: 26 * 0.4,
      rotate: 0,
      rotateV: 4,
      // v: -0.4,
      // v: 0,
      color: globalColor.blue,
      hP: 2,
      // isReproduce: false,
      isReproduceMoving: false,
      order: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(TriangleSub, [{
    key: "draw",
    value: function draw() {
      var scale = 0.4;
      var triangleOuterBigR = this.r + 4 * scale;
      var triangleInnerBigR = this.r - 16 * scale;
      var triangleInnerSmallR = this.r - 22 * scale;
      ctx.save(); // 淡三角

      ctx.translate(this.originalPos.x, this.originalPos.y); // ctx.scale(0.4, 0.4);

      ctx.rotate(this.rotate * degToPi);
      ctx.save();
      ctx.translate(2 * scale, -Math.sqrt(12) * scale);
      ctx.beginPath();
      ctx.moveTo(triangleOuterBigR * Math.cos(0), triangleOuterBigR * Math.sin(0));
      ctx.lineTo(triangleOuterBigR * Math.cos(120 * degToPi), triangleOuterBigR * Math.sin(120 * degToPi));
      ctx.lineTo(triangleOuterBigR * Math.cos(240 * degToPi), triangleOuterBigR * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.fill();
      ctx.restore(); // 主體三角

      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(0), this.r * Math.sin(0));
      ctx.lineTo(this.r * Math.cos(120 * degToPi), this.r * Math.sin(120 * degToPi));
      ctx.lineTo(this.r * Math.cos(240 * degToPi), this.r * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill(); // 大白三角

      ctx.translate(-3.2 * scale, -1.6 * scale);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerBigR * Math.cos(30 * degToPi), triangleInnerBigR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerBigR * Math.cos(90 * degToPi), triangleInnerBigR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill(); // 小白三角

      ctx.translate(0, -8.8 * scale);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerSmallR * Math.cos(30 * degToPi), triangleInnerSmallR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerSmallR * Math.cos(90 * degToPi), triangleInnerSmallR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      var _this6 = this;

      this.rotate += this.rotateV;

      if (!this.isReproduceMoving) {
        if (this.order === 1) {
          TweenLite.to(this, 0.8, {
            rotationAxisAngle: '+=10',
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              TweenLite.to(_this6.rotationAxisR, 1.6, {
                x: 0,
                y: 0,
                ease: Power1.easeIn
              });
            }
          });
        } else {
          TweenLite.to(this, 0.8, {
            rotationAxisAngle: '-=10',
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              TweenLite.to(_this6.rotationAxisR, 1.6, {
                x: 0,
                y: 0,
                ease: Power1.easeIn
              });
            }
          });
        }
      }

      this.isReproduceMoving = true;
    }
  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.rotationAxisPos.x + this.rotationAxisR.x * Math.cos(this.rotationAxisAngle * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR.y * Math.sin(this.rotationAxisAngle * degToPi)
      };
    }
  }]);

  return TriangleSub;
}();

var CircleBullet =
/*#__PURE__*/
function () {
  function CircleBullet(args) {
    _classCallCheck(this, CircleBullet);

    var def = {
      originalPos: {
        x: 0,
        y: 0
      },
      rotationAxisR: 0,
      // movePos: new Vec2(0, 0),
      color: globalColor.orange,
      // rotationAxisRV: 4,
      moveX: 0,
      moveV: 3,
      // v: 4,
      rotateAngle: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(CircleBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.originalPos.x, this.originalPos.y);
      ctx.rotate(this.rotateAngle * degToPi); // ctx.scale(1.6, 0.68);
      // ctx.scale(1, 0.9);

      ctx.beginPath();
      ctx.arc(this.moveX + 22 + 10, 0, 4, 0, Math.PI * 2); // ctx.arc(this.rotationAxisR + 16, 0, 4, 0, Math.PI * 2);

      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(idx, arr) {
      // this.rotationAxisR += this.rotationAxisRV;
      this.moveX += this.moveV;

      if (this.moveX >= this.rotationAxisR - 22 - 10 - 37) {
        arr.splice(idx, 1);
      }
    }
  }]);

  return CircleBullet;
}();

var TriangleBullet =
/*#__PURE__*/
function () {
  function TriangleBullet(args) {
    _classCallCheck(this, TriangleBullet);

    var def = {
      p: {
        x: 0,
        y: 0
      },
      movePos: new Vec2(0, 0),
      color: globalColor.blue,
      v: new Vec2(-1.5, 1.5 * Math.sqrt(3)),
      rotate: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(TriangleBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotate * degToPi);
      ctx.translate(this.movePos.x + 28 * Math.cos(120 * degToPi), this.movePos.y + 28 * Math.sin(120 * degToPi)); // 淡三角子彈

      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(18.8 * Math.cos(-45 * degToPi), 18.8 * Math.sin(-45 * degToPi));
      ctx.lineTo(18 * Math.cos(-52 * degToPi), 18 * Math.sin(-52 * degToPi));
      ctx.closePath();
      ctx.fill(); // 主體三角子彈

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(18 * Math.cos(-52 * degToPi), 18 * Math.sin(-52 * degToPi));
      ctx.lineTo(19.6 * Math.cos(-72 * degToPi), 19.6 * Math.sin(-72 * degToPi));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.movePos = this.movePos.add(this.v); // this.reproduce();
    }
  }]);

  return TriangleBullet;
}(); // draw battery


function drawBattery(p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.fillStyle = globalColor.orange; // 瓶身

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
  // ctx.strokeStyle = globalColor.white;

  drawLightning({
    x: -11,
    y: -9
  }); // ctx.translate(-11, 9);
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
} // 繪製閃電


function drawLightning() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    x: 0,
    y: 0
  };
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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
  mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
}

;
canvas.addEventListener('click', handleClick);
var beforeShootTime = new Date();

function handleClick() {
  var shootTime = new Date();

  if (shootTime - beforeShootTime > 400) {
    shooterBullets.push(new ShooterBullet({
      // 34 + 12 + 16
      // p: new Vec2(62, 0),
      rotationAxisR: 62,
      rotateAngle: mouseMoveAngle < 0 ? mouseMoveAngle + 2 * Math.PI : mouseMoveAngle
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

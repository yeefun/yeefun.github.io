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


var degToPi = Math.PI / 180;
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
        this.shooter.draw(); // 繪製每個 circle

        circles.forEach(function (circle) {
          circle.draw();
        }); // 繪製每個 triangle

        triangles.forEach(function (triangle) {
          triangle.draw();
        }); // 繪製每個 polygon

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


        this.shooter.update(); // 更新每個 circle

        circles.forEach(function (circle) {
          circle.update();
        }); // 更新每個 triangles

        triangles.forEach(function (triangle) {
          triangle.update();
        }); // 更新每個 polygons

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
      // circles.push(new Circle({
      //   rotationAxisR: 240,
      //   rotationAxisAngle: 0,
      // }));
      // triangles.push(new Triangle({
      //   rotationAxisR: 280,
      //   rotationAxisAngle: 0,
      // }));
      polygons.push(new Polygon({
        rotationAxisR: 280,
        rotationAxisAngle: 220 // scale: 0.8,

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
      isRotating: false
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
      ctx.arc(4, 0, circleBigR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill(); // 小淡圓

      ctx.beginPath();
      ctx.arc(-20, 0, circleSmallR, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 175, 95, 0.21)';
      ctx.fill(); // 主體圓

      ctx.beginPath();
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill(); // 小三圓

      ctx.beginPath();
      ctx.fillStyle = globalColor.white; // ctx.arc(subRotationAxisR, 0, 2.4, 0, Math.PI * 2);

      ctx.arc(subRotationAxisR * Math.cos(60 * degToPi), subRotationAxisR * Math.sin(60 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(180 * degToPi), subRotationAxisR * Math.sin(180 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subRotationAxisR * Math.cos(300 * degToPi), subRotationAxisR * Math.sin(300 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill(); // 神經

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
      ctx.restore(); // 繪製圓形子彈

      this.bullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      // 更新圓形子彈
      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 當圓形自身在旋轉時，圓形不要移動

      if (!this.isRotating) {
        this.rotationAxisAngle += this.rotationAxisAngleV; // this.rotationAxisAngle += 2;
      } // 每 2-4 秒，自身旋轉一次


      var rotateTime = new Date();

      if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
        this.isRotating = true; // console.log(this.rotationAxisAngle);

        TweenLite.to(this, 0.4, {
          // rotate: this.rotationAxisAngle - 180,
          // rotate: this.rotationAxisAngle % 360,
          rotate: this.rotationAxisAngle,
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
            moveX: -_this4.r - 10,
            // rotateAngle: Math.sin(this.rotate * degToPi),
            rotationAxisR: _this4.rotationAxisR
          }));

          clearTimeout(timer); // 間隔 0.2-0.4 秒
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
      isReproduce: false
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
      ctx.translate(4, 0);
      ctx.beginPath();
      ctx.moveTo(triangleOuterBigR * Math.cos(60 * degToPi), triangleOuterBigR * Math.sin(60 * degToPi));
      ctx.$triLineTo(triangleOuterBigR, 180);
      ctx.$triLineTo(triangleOuterBigR, 300);
      ctx.closePath();
      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.fill();
      ctx.restore(); // 主體三角

      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(60 * degToPi), this.r * Math.sin(60 * degToPi));
      ctx.$triLineTo(this.r, 180);
      ctx.$triLineTo(this.r, 300);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill(); // 大白三角

      ctx.translate(0, -2.8);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.$triLineTo(triangleInnerBigR, 90);
      ctx.$triLineTo(triangleInnerBigR, 150);
      ctx.closePath();
      ctx.fill(); // 小白三角

      ctx.translate(8 * Math.cos(-40 * degToPi), 8 * Math.sin(-40 * degToPi));
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.$triLineTo(triangleInnerSmallR, 90);
      ctx.$triLineTo(triangleInnerSmallR, 150);
      ctx.closePath();
      ctx.fill();
      ctx.restore(); // 繪製三角子彈

      this.bullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      // 更新三角子彈
      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 每 4-8 秒，三角移動 + 自身旋轉

      var rotateAxisAngleTime = new Date();

      if (rotateAxisAngleTime - this.beforeRotateAxisAngleTime > Math.random() * 4000 + 4000) {
        var randomRotateAngle = (Math.random() > 0.25 ? -1 : 1) * (30 * Math.random() + 45); // 以 0.8 秒移動

        TweenLite.to(this, 0.8, {
          rotationAxisAngle: "+=".concat(randomRotateAngle),
          ease: Power0.easeNone
        }); // 以 1.2 秒自身旋轉

        TweenLite.to(this, 1.2, {
          rotate: "+=".concat(randomRotateAngle + 360),
          ease: Power2.easeInOut
        });
        this.beforeRotateAxisAngleTime = rotateAxisAngleTime;
      } // 每 2.4-3.6 秒，發射 1 發子彈


      var shootTime = new Date();

      if (shootTime - this.beforeShootTime > Math.random() * 1200 + 2400) {
        // if (!this.bullets.length) {
        this.bullets.push(new TriangleBullet({
          p: {
            x: this.originalPos.x,
            y: this.originalPos.y
          },
          rotationAxisR: this.rotationAxisR,
          rotateAngle: this.rotate // rotate: this.rotate,

        }));
        this.beforeShootTime = shootTime;
      } // 當生命值剩 2，派副三角形攻擊


      if (this.HP === 2 && !this.isReproduce) {
        for (var i = 1; i <= 2; i += 1) {
          subTriangles.push(new TriangleSub({
            // rotationAxisR: {
            //   x: this.rotationAxisR.x,
            //   y: this.rotationAxisR.y,
            // },
            rotationAxisR: this.rotationAxisR,
            rotationAxisAngle: this.rotationAxisAngle,
            rotate: this.rotate,
            order: i
          }));
        }

        this.isReproduce = true;
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

  return Triangle;
}();
/* Polygon 類別 */


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
      rotateV: 0.4,
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

      if (!this.isSplited) {
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
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.moveTo(9.6, -2);
        ctx.$triLineTo(22, 324);
        ctx.$triLineTo(21, 8);
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(10, 36);
        ctx.closePath();
        ctx.fill(); // 下淡四邊形

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
        ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(23, 150);
        ctx.lineTo(-8.8, 0);
        ctx.closePath();
        ctx.fill(); // 閃電

        drawLightning({
          x: -0.8,
          y: -16
        });
      } else {
        // 右分裂四邊形
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
        ctx.$triLineTo(23, 150);
        ctx.$triLineTo(34, 202);
        ctx.$triLineTo(22, 255);
        ctx.closePath();
        ctx.fill(); // 左分裂四邊形

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
        ctx.$triLineTo(22, 255);
        ctx.$triLineTo(22, 324);
        ctx.$triLineTo(21, 8);
        ctx.closePath();
        ctx.fill(); // 右內下四邊形

        ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
        ctx.beginPath();
        ctx.moveTo(-8.8, 0);
        ctx.$triLineTo(4.8, 64);
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(23, 150);
        ctx.closePath();
        ctx.fill(); // 左內下三角形

        ctx.beginPath();
        ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
        ctx.$triLineTo(4.8, 64);
        ctx.$triLineTo(23, 70);
        ctx.closePath();
        ctx.fill(); // 左內右五邊形

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
        ctx.moveTo(9.6, -2);
        ctx.$triLineTo(22, 324);
        ctx.$triLineTo(21, 8);
        ctx.$triLineTo(23, 70);
        ctx.$triLineTo(10, 36);
        ctx.closePath();
        ctx.fill(); // 左閃電

        ctx.save();
        drawLightning({
          x: -12,
          y: -8
        }, 0.6);
        ctx.restore(); // 右閃電

        drawLightning({
          x: 10,
          y: -8
        }, 0.5);
      }

      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      // this.p.x += this.v.x;
      // this.p.y += this.v.y;
      // this.rotationAxisR -= 4;
      this.rotate += this.rotateV; // if (!this.isInBoundary) {
      //   this.p.x = -48;
      //   this.p.y = -32;
      //   this.v.x = 0.5 * Math.random() + 0.5;
      //   this.v.y = 0.5 * Math.random() + 0.5;
      // }
    } // get isInBoundary() {
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
/* Shooter 類別 */


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
      bullet: null,
      HP: 9
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

      ctx.strokeStyle = this.color;
      var outerR = this.r + 22;

      for (var i = 0; i < 360; i += 1) {
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
      ctx.rotate(this.rotateAngle);
      ctx.translate(this.r + 8, 0);
      ctx.moveTo(0, 0); // 下方長方形長 16、寬（高） 12
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
/* Shooter 子彈 */


var ShooterBullet =
/*#__PURE__*/
function () {
  function ShooterBullet(args) {
    _classCallCheck(this, ShooterBullet);

    var def = {
      // p: new Vec2(0, 0),
      bodyLength: 15,
      rotationAxisR: 0,
      color: globalColor.white,
      v: 8,
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
      ctx.lineTo(this.bodyLength + this.rotationAxisR, 0);
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
        // 取得兩個外切線所構成角度的一半
        var anglePan = Math.asin(circle.r / circle.rotationAxisR); // 設中角度範圍

        var shotAngleRange = _this5.rotateAngle >= circle.rotationAxisAngle % 360 * degToPi - anglePan && _this5.rotateAngle <= circle.rotationAxisAngle % 360 * degToPi + anglePan; // 設中距離範圍

        var shotRRange = _this5.rotationAxisR + _this5.bodyLength >= circle.rotationAxisR - circle.r / 2 && _this5.rotationAxisR + _this5.bodyLength <= circle.rotationAxisR + circle.r / 2; // 判斷子彈有無射中圓形

        if (shotAngleRange && shotRRange) {
          // 移除子彈
          shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

          circle.HP -= 1;

          if (circle.HP === 0) {
            // 若生命值 0，移除圓形
            circles.splice(circleIdx, 1);
          }
        }
      }); // 判斷子彈有無射中三角形

      triangles.forEach(function (triangle, triangleIdx) {
        // const lengthX = triangle.rotationAxisR.x * Math.cos(triangle.rotationAxisAngle * degToPi);
        // const lengthY = triangle.rotationAxisR.y * Math.sin(triangle.rotationAxisAngle * degToPi);
        // const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);
        // 取得射中角度範圍的一半
        var lengthX = triangle.rotationAxisR + triangle.r / 2;
        var lengthY = triangle.r / 2 * Math.sqrt(3);
        var anglePan = Math.atan2(lengthY, lengthX); // 設中角度範圍

        var shotAngleRange = _this5.rotateAngle >= (triangle.rotationAxisAngle + 360) % 360 * degToPi - anglePan && _this5.rotateAngle <= (triangle.rotationAxisAngle + 360) % 360 * degToPi + anglePan; // 設中距離範圍

        var shotRRange = _this5.rotationAxisR + _this5.bodyLength >= triangle.rotationAxisR && _this5.rotationAxisR + _this5.bodyLength <= triangle.rotationAxisR + triangle.r / 2; // 判斷子彈有無射中三角形

        if (shotAngleRange && shotRRange) {
          // 移除子彈
          shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

          triangle.HP -= 1;

          if (triangle.HP === 0) {
            // 若生命值 0，移除三角形
            triangles.splice(triangleIdx, 1);
          }
        }
      });
    }
  }]);

  return ShooterBullet;
}();
/* Sub Triangle 類別 */


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
      order: 0
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(TriangleSub, [{
    key: "draw",
    value: function draw() {
      // const scale = 0.4;
      var triangleOuterBigR = this.r + 1.6;
      var triangleInnerBigR = this.r - 6.4;
      var triangleInnerSmallR = this.r - 8.8;
      ctx.save(); // 淡三角

      ctx.translate(this.originalPos.x, this.originalPos.y); // ctx.scale(0.4, 0.4);

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
      ctx.restore(); // 主體三角

      ctx.beginPath();
      ctx.moveTo(this.r * Math.cos(0), this.r * Math.sin(0));
      ctx.lineTo(this.r * Math.cos(120 * degToPi), this.r * Math.sin(120 * degToPi));
      ctx.lineTo(this.r * Math.cos(240 * degToPi), this.r * Math.sin(240 * degToPi));
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill(); // 大白三角

      ctx.translate(-1.28, -0.64);
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(triangleInnerBigR * Math.cos(30 * degToPi), triangleInnerBigR * Math.sin(30 * degToPi));
      ctx.lineTo(triangleInnerBigR * Math.cos(90 * degToPi), triangleInnerBigR * Math.sin(90 * degToPi));
      ctx.closePath();
      ctx.fill(); // 小白三角

      ctx.translate(0, -3.52);
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
              TweenLite.to(_this6, 1.6, {
                rotationAxisR: 0,
                ease: Power1.easeIn
              });
            }
          });
        } else {
          TweenLite.to(this, 0.8, {
            rotationAxisAngle: '-=10',
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              TweenLite.to(_this6, 1.6, {
                rotationAxisR: 0,
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
        x: this.rotationAxisPos.x + this.rotationAxisR * Math.cos(this.rotationAxisAngle * degToPi),
        y: this.rotationAxisPos.y + this.rotationAxisR * Math.sin(this.rotationAxisAngle * degToPi)
      };
    }
  }]);

  return TriangleSub;
}();
/* Circle 子彈 */


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
      color: globalColor.orange,
      moveX: 0,
      moveXV: -3,
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

      ctx.beginPath(); // ctx.arc(this.moveX + 22 + 10, 0, 4, 0, Math.PI * 2);

      ctx.arc(this.moveX, 0, 4, 0, Math.PI * 2); // ctx.arc(this.rotationAxisR + 16, 0, 4, 0, Math.PI * 2);

      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(idx, arr) {
      var shooterR = 34;
      var shieldR = shooterR + 36;
      var shooterInnerCirLineW = 6;
      var shieldLineW = 4; // 圓形子彈移動

      this.moveX += this.moveXV; // 當圓形子彈射中 shooter 主體

      if (-this.moveX >= this.rotationAxisR - shooterR - shooterInnerCirLineW / 2) {
        // shooter 命減 1
        game.shooter.HP -= 1; // 移除子彈

        arr.splice(idx, 1);
      } // 當圓形子彈射中 shooter 的護盾


      var shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= 225 * degToPi;

      if (shieldAngleRange && -this.moveX >= this.rotationAxisR - shieldR - shieldLineW / 2) {
        // 移除子彈
        arr.splice(idx, 1);
      }
    }
  }]);

  return CircleBullet;
}();
/* Triangle 子彈 */


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
      moveX: 0,
      moveXV: -4,
      rotateAngle: 0,
      color: globalColor.blue
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(TriangleBullet, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.rotate(this.rotateAngle * degToPi);
      ctx.translate(this.moveX, 0); // 主體三角子彈

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(-16, 0);
      ctx.$triLineTo(38, 174);
      ctx.$triLineTo(16.8, 200);
      ctx.closePath();
      ctx.fill(); // 淡三角子彈

      ctx.fillStyle = 'rgba(54, 118, 187, 0.34)';
      ctx.beginPath();
      ctx.moveTo(-16.4, 0);
      ctx.$triLineTo(38, 174);
      ctx.$triLineTo(15.6, 168);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(idx, arr) {
      var shooterR = 34;
      var shieldR = shooterR + 36;
      var shooterInnerCirLineW = 6;
      var shieldLineW = 4;
      var triBulletLength = 37.8; // 三角子彈移動

      this.moveX += this.moveXV; // 當三角子彈射中 shooter 主體

      if (-this.moveX >= this.rotationAxisR - (triBulletLength + shooterR + shooterInnerCirLineW / 2)) {
        // shooter 命減 1
        game.shooter.HP -= 1; // 移除三角子彈

        arr.splice(idx, 1);
      } // 當三角子彈射中 shooter 的護盾


      var shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= 225 * degToPi;

      if (shieldAngleRange && -this.moveX >= this.rotationAxisR - (triBulletLength + shieldR + shieldLineW / 2)) {
        // 移除三角子彈
        arr.splice(idx, 1);
      }
    }
  }]);

  return TriangleBullet;
}(); // 繪製電池


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
  var angle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
  mouseMoveAngle = angle < 0 ? angle + 2 * Math.PI : angle; // mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
  // console.log(mouseMoveAngle / Math.PI * 180);
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

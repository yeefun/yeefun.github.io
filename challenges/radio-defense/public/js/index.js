"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Environment Variable */
var updateFPS = 30; // const showMouse = true;
// const bgColor = 'black';

var time = 0;
var globalColor = {
  red: '#e7465d',
  orange: '#f5af5f',
  blue: '#3676bb',
  blueDark: '#001d2e',
  white: '#fff'
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

var controls = {
  splited: false
};
var gui = new dat.GUI(); // gui.add(controls, 'splited');
// gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});

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

/* 道具 class */


var Prop =
/*#__PURE__*/
function () {
  function Prop(args) {
    _classCallCheck(this, Prop);

    var def = {
      img: new Image(),
      src: '',
      p: {
        x: 0,
        y: 0
      }
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Prop, [{
    key: "draw",
    value: function draw() {
      if (!this.img.src) {
        this.img.src = this.src;
      }

      if (this.img.complete) {
        ctx.drawImage(this.img, this.p.x, this.p.y);
      }
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return Prop;
}();

var degToPi = Math.PI / 180;
var coverCircle;
var coverTriangle;
var coverPolygon;
var game;
var circles = [];
var triangles = [];
var subTriangles = [];
var polygons = []; // let props = [];

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
      isInLevel1: false,
      props: []
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
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
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      ctx.fillStyle = globalColor.blueDark;
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
        }); // 繪製每個 sub triangle

        subTriangles.forEach(function (subTriangle) {
          subTriangle.draw();
        }); // 繪製每個 prop

        this.props.forEach(function (prop) {
          prop.draw();
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

        circles.forEach(function (circle, idx) {
          circle.update(idx);
        }); // 更新每個 triangle

        triangles.forEach(function (triangle, idx) {
          triangle.update(idx);
        }); // 更新每個 polygon

        polygons.forEach(function (polygon, idx) {
          polygon.update(idx);
        }); // 更新每個 sub triangle

        subTriangles.forEach(function (subTriangle, idx) {
          subTriangle.update(idx);
        }); // 更新每個 prop

        this.props.forEach(function (prop) {
          prop.update();
        }); // 產生道具

        this.generateProp();
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
    key: "generateProp",
    value: function generateProp() {}
  }, {
    key: "setLevelOne",
    value: function setLevelOne() {
      this.props.push(new Prop({
        src: '../../src/assets/laser.png',
        p: {
          x: 90,
          y: 90
        }
      })); // circles.push(new Circle({
      //   axisRotateR: 240,
      //   axisRotateAngle: 0,
      // }));
      // triangles.push(new Triangle({
      //   axisRotateR: 280,
      //   // axisRotateAngle 與 rotate 必須相同
      //   axisRotateAngle: 160,
      //   rotate: 160,
      // }));
      // polygons.push(new Polygon({
      //   axisRotateR: {
      //     whole: 280,
      //     big: 280,
      //     small: 280,
      //   },
      //   axisRotateAngle: {
      //     whole: 180,
      //     big: 180,
      //     small: 180,
      //   },
      //   rotate: {
      //     whole: 40,
      //     big: 40,
      //     small: 40,
      //   },
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
      axisRotatePos: {
        x: gameW / 2,
        y: gameH / 2
      },
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
      var subaxisRotateR = 14;
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
      ctx.fillStyle = globalColor.white; // ctx.arc(subaxisRotateR, 0, 2.4, 0, Math.PI * 2);

      ctx.arc(subaxisRotateR * Math.cos(60 * degToPi), subaxisRotateR * Math.sin(60 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subaxisRotateR * Math.cos(180 * degToPi), subaxisRotateR * Math.sin(180 * degToPi), 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(subaxisRotateR * Math.cos(300 * degToPi), subaxisRotateR * Math.sin(300 * degToPi), 2.4, 0, Math.PI * 2);
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
    value: function update(idx) {
      var _this3 = this;

      // this.axisRotateR -= 3.2;
      // 更新圓形子彈
      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 當圓形自身在旋轉時，圓形不要移動

      if (!this.isRotating) {
        this.axisRotateAngle += this.axisRotateAngleV; // this.axisRotateAngle += 2;
      } // 每 2-4 秒，自身旋轉一次


      var rotateTime = new Date();

      if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
        this.isRotating = true; // console.log(this.axisRotateAngle);

        TweenLite.to(this, 0.4, {
          // rotate: this.axisRotateAngle - 180,
          // rotate: this.axisRotateAngle % 360,
          rotate: this.axisRotateAngle,
          ease: Power2.easeOut,
          // 自身旋轉完後射擊
          onComplete: function onComplete() {
            _this3.shoot();

            _this3.isRotating = false;
          }
        });
        this.beforeRotateTime = rotateTime;
      } // 當圓形撞上 shooter


      enemyHitShooter(circles, idx, this.axisRotateR, this.axisRotateAngle);
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
            axisRotateR: _this4.axisRotateR
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
        x: this.axisRotatePos.x + this.axisRotateR * Math.cos(this.axisRotateAngle * degToPi),
        y: this.axisRotatePos.y + this.axisRotateR * Math.sin(this.axisRotateAngle * degToPi)
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
      axisRotatePos: {
        x: gameW / 2,
        y: gameH / 2
      },
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
    value: function update(idx) {
      // this.axisRotateR -= 2.4;
      // 更新三角子彈
      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 每 4-8 秒，三角移動 + 自身旋轉

      var rotateAxisAngleTime = new Date();

      if (rotateAxisAngleTime - this.beforeRotateAxisAngleTime > Math.random() * 4000 + 4000) {
        var randomRotateAngle = (Math.random() > 0.25 ? -1 : 1) * (30 * Math.random() + 45); // 以 0.8 秒移動

        TweenLite.to(this, 0.8, {
          axisRotateAngle: "+=".concat(randomRotateAngle),
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
          axisRotateR: this.axisRotateR,
          rotateAngle: this.rotate // rotate: this.rotate,

        }));
        this.beforeShootTime = shootTime;
      } // 當生命值剩 2，派副三角形攻擊


      if (this.HP === 2 && !this.isReproduce) {
        for (var i = 1; i <= 2; i += 1) {
          subTriangles.push(new TriangleSub({
            // axisRotateR: {
            //   x: this.axisRotateR.x,
            //   y: this.axisRotateR.y,
            // },
            axisRotateR: this.axisRotateR,
            axisRotateAngle: this.axisRotateAngle,
            rotate: this.rotate,
            order: i
          }));
        }

        this.isReproduce = true;
      } // 當三角形撞上 shooter


      enemyHitShooter(triangles, idx, this.axisRotateR, this.axisRotateAngle);
    }
  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.axisRotatePos.x + this.axisRotateR * Math.cos(this.axisRotateAngle * degToPi),
        y: this.axisRotatePos.y + this.axisRotateR * Math.sin(this.axisRotateAngle * degToPi)
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
      axisRotatePos: {
        x: gameW / 2,
        y: gameH / 2
      },
      axisRotateR: {
        whole: 0,
        big: 0,
        small: 0
      },
      axisRotateAngle: {
        whole: 0,
        big: 0,
        small: 0
      },
      rotate: {
        whole: 0,
        big: 0,
        small: 0
      },
      HP: {
        whole: 1,
        big: 1,
        small: 1
      },
      axisRotateRV: {
        whole: 2.4,
        big: 2.4,
        small: 2.4
      },
      axisRotateAngleV: {
        whole: 0.4,
        big: 0.4,
        small: 0.4
      },
      rotateV: {
        whole: 0.4,
        big: 0.4,
        small: 0.4
      },
      color: globalColor.red,
      isSplited: false,
      isSplitedMove: false
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Polygon, [{
    key: "draw",
    value: function draw() {
      if (!this.isSplited) {
        ctx.save();
        ctx.translate(this.originalPos.whole.x, this.originalPos.whole.y);
        ctx.rotate(this.rotate.whole * degToPi); // 主體多邊形

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
        ctx.restore();
      } else {
        // 大分裂四邊形
        if (this.HP.big) {
          ctx.save();
          ctx.translate(this.originalPos.big.x, this.originalPos.big.y);
          ctx.rotate(this.rotate.big * degToPi); // 大分裂主體

          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(23, 150);
          ctx.$triLineTo(34, 202);
          ctx.$triLineTo(22, 255);
          ctx.closePath();
          ctx.fill(); // 大分裂內下四邊形

          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.beginPath();
          ctx.moveTo(-8.8, 0);
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(23, 150);
          ctx.closePath();
          ctx.fill(); // 大分裂左閃電

          drawLightning({
            x: -12,
            y: -8
          }, 0.6);
          ctx.restore();
        } // 小分裂四邊形


        if (this.HP.small) {
          ctx.save();
          ctx.translate(this.originalPos.small.x, this.originalPos.small.y);
          ctx.rotate(this.rotate.small * degToPi); // 小分裂主體

          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.moveTo(23 * Math.cos(70 * degToPi), 23 * Math.sin(70 * degToPi));
          ctx.$triLineTo(22, 255);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.closePath();
          ctx.fill(); // 小分裂內下三角形

          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.21)';
          ctx.moveTo(10 * Math.cos(40 * degToPi), 10 * Math.sin(40 * degToPi));
          ctx.$triLineTo(4.8, 64);
          ctx.$triLineTo(23, 70);
          ctx.closePath();
          ctx.fill(); // 小分裂內右五邊形

          ctx.beginPath();
          ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
          ctx.moveTo(9.6, -2);
          ctx.$triLineTo(22, 324);
          ctx.$triLineTo(21, 8);
          ctx.$triLineTo(23, 70);
          ctx.$triLineTo(10, 36);
          ctx.closePath();
          ctx.fill(); // ctx.fillStyle = 'yellow';
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
  }, {
    key: "update",
    value: function update(idx) {
      if (!this.HP.whole) {
        this.isSplited = true;
      }

      if (!this.isSplited) {
        this.axisRotateR.whole = this.axisRotateR.big = this.axisRotateR.small -= this.axisRotateRV.whole;
        this.rotate.whole = this.rotate.big = this.rotate.small += this.rotateV.whole; // 當多邊形撞上 shooter

        enemyHitShooter(polygons, idx, this.axisRotateR.whole, this.axisRotateAngle.whole);
      } else {
        if (!this.isSplitedMove) {
          // const rotateOriginPos = 90 - 70;
          // const rotateDirection = (((this.rotate.whole % 360) >= rotateOriginPos) && ((this.rotate.whole % 360) < (180 + rotateOriginPos))) ? -1 : 1;
          var rotateDirection = Math.random() > 0.5 ? 1 : -1;
          TweenLite.to(this.axisRotateAngle, 2.4, {
            big: "+=".concat((Math.random() * 15 + 15) * rotateDirection),
            small: "-=".concat((Math.random() * 15 + 15) * rotateDirection),
            ease: Circ.easeOut
          });
          TweenLite.to(this.rotate, 3.2, {
            big: "-=".concat(Math.random() * 90 + 180),
            small: "+=".concat(Math.random() * 90 + 180),
            ease: Power4.easeOut
          });
          this.isSplitedMove = true;
        } // 當大分裂撞上 shooter


        if (this.HP.big) {
          this.axisRotateR.big -= this.axisRotateRV.big;
          enemyHitShooter(polygons, idx, this.axisRotateR.small, this.axisRotateAngle.small, this.HP, 'big');
        } // 當小分裂撞上 shooter


        if (this.HP.small) {
          this.axisRotateR.small -= this.axisRotateRV.small;
          enemyHitShooter(polygons, idx, this.axisRotateR.small, this.axisRotateAngle.small, this.HP, 'small');
        }
      } // if (!this.isInBoundary) {
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
        whole: {
          x: this.axisRotatePos.x + this.axisRotateR.whole * Math.cos(this.axisRotateAngle.whole * degToPi),
          y: this.axisRotatePos.y + this.axisRotateR.whole * Math.sin(this.axisRotateAngle.whole * degToPi)
        },
        big: {
          x: this.axisRotatePos.x + this.axisRotateR.big * Math.cos(this.axisRotateAngle.big * degToPi),
          y: this.axisRotatePos.y + this.axisRotateR.big * Math.sin(this.axisRotateAngle.big * degToPi)
        },
        small: {
          x: this.axisRotatePos.x + this.axisRotateR.small * Math.cos(this.axisRotateAngle.small * degToPi),
          y: this.axisRotatePos.y + this.axisRotateR.small * Math.sin(this.axisRotateAngle.small * degToPi)
        }
      };
    }
  }]);

  return Polygon;
}();

function enemyHitShooter(enemies, enemyIdx, enemyAxisRotateR, enemyAxisRotateAngle, splitedPolygonHP, splitedPolygonName) {
  var shooterR = 34;
  var shieldR = shooterR + 36;
  var shooterInnerCirLineW = 6;
  var shieldLineW = 4;
  var shieldAngleRange = Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) <= 225 * degToPi;

  function judgeEnemyHit() {
    if (!splitedPolygonName) {
      enemies.splice(enemyIdx, 1);
    } else {
      splitedPolygonName === 'big' ? splitedPolygonHP.big -= 1 : splitedPolygonHP.small -= 1;

      if (!splitedPolygonHP.big && !splitedPolygonHP.small) {
        enemies.splice(enemyIdx, 1);
      }
    }
  } // 當敵人撞上 shooter 主體


  if (enemyAxisRotateR <= shooterR + shooterInnerCirLineW / 2) {
    game.shooter.HP -= 1;
    judgeEnemyHit(); // 當敵人撞上 shooter 護盾
  } else if (shieldAngleRange && enemyAxisRotateR <= shieldR + shieldLineW / 2) {
    judgeEnemyHit();
  }
}
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
      axisRotateR: 0,
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
      ctx.arc(-7 + this.axisRotateR, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.arc(-12 + this.axisRotateR, 0, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.arc(-15 + this.axisRotateR, 0, 1, 0, Math.PI * 2);
      ctx.fill(); // 園底

      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(0 + this.axisRotateR, 0, 4, 0, Math.PI * 2);
      ctx.fill(); // 尖頭

      ctx.beginPath();
      ctx.moveTo(3 + this.axisRotateR, 3);
      ctx.lineTo(this.bodyLength + this.axisRotateR, 0);
      ctx.lineTo(3 + this.axisRotateR, -3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(bulletIdx) {
      var _this5 = this;

      // 移動子彈
      this.axisRotateR += this.v; // 判斷子彈有無射中圓形

      circles.forEach(function (circle, cirIdx) {
        // 取得兩個外切線所構成角度的一半
        var anglePan = Math.asin(circle.r / circle.axisRotateR); // 射中角度範圍

        var shotAngleRange = _this5.rotateAngle >= circle.axisRotateAngle % 360 * degToPi - anglePan && _this5.rotateAngle <= circle.axisRotateAngle % 360 * degToPi + anglePan; // 射中距離範圍

        var shotRRange = _this5.axisRotateR + _this5.bodyLength >= circle.axisRotateR - circle.r / 2 && _this5.axisRotateR + _this5.bodyLength <= circle.axisRotateR + circle.r / 2; // 判斷子彈有無射中圓形

        if (shotAngleRange && shotRRange) {
          // 移除子彈
          shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

          circle.HP -= 1;

          if (circle.HP === 0) {
            // 若生命值 0，移除圓形
            circles.splice(cirIdx, 1);
          }
        }
      }); // 判斷子彈有無射中三角形

      triangles.forEach(function (triangle, triIdx) {
        // const lengthX = triangle.axisRotateR.x * Math.cos(triangle.axisRotateAngle * degToPi);
        // const lengthY = triangle.axisRotateR.y * Math.sin(triangle.axisRotateAngle * degToPi);
        // const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);
        // 取得射中角度範圍的一半
        var lengthX = triangle.axisRotateR + triangle.r / 2;
        var lengthY = triangle.r / 2 * Math.sqrt(3);
        var anglePan = Math.atan2(lengthY, lengthX); // 射中角度範圍

        var shotAngleRange = _this5.rotateAngle >= (triangle.axisRotateAngle + 360) % 360 * degToPi - anglePan && _this5.rotateAngle <= (triangle.axisRotateAngle + 360) % 360 * degToPi + anglePan; // 射中距離範圍

        var shotRRange = _this5.axisRotateR + _this5.bodyLength >= triangle.axisRotateR && _this5.axisRotateR + _this5.bodyLength <= triangle.axisRotateR + triangle.r / 2; // 判斷子彈有無射中三角形

        if (shotAngleRange && shotRRange) {
          // 移除子彈
          shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

          triangle.HP -= 1;

          if (triangle.HP === 0) {
            // 若生命值 0，移除三角形
            triangles.splice(triIdx, 1);
          }
        }
      }); // 判斷子彈有無射中多邊形
      // FIXME 當 polygon.axisRotateAngle 在 0° 附近時，上半部分（角度為負的地方）會出問題，因為 mouseMoveAngle（正數）恆大於負

      polygons.forEach(function (polygon, polyIdx) {
        // 當多邊形未分裂
        if (polygon.HP.whole) {
          var polyaxisRotateAngle = polygon.axisRotateAngle.whole;
          var polyRotate = polygon.rotate.whole; // 取得兩側射中最大角度

          var sideA = polygon.axisRotateR.whole;
          var sideB1 = 34;
          var sideB2 = 21;
          /**
           * 兩側點（8°、202°）愈靠近軸心，夾角便愈大
           * 相同軸半徑下，當多邊形　axisRotateAngle 180°，rotate 75° 時，兩側點離軸心（幾乎）最近，angleB 相同
           * 270 - 202 = 68
           * 90 - 8 = 82
           * (68 + 82) / 2 = 75
           */

          var sideC1 = cosineFormula(sideA, sideB1, 360 - (202 + 75));
          var sideC2 = cosineFormula(sideA, sideB2, 8 + 75);
          var angleB1 = getAngleB(sideA, sideB1, sideC1);
          var angleB2 = getAngleB(sideA, sideB2, sideC2);
          /**
           * 射中角度範圍
           * 當多邊形的 axisRotateAngle、rotate 不同，要加上與減去的角度也不一樣
           * 多邊形不會繞軸旋轉， axisRotateAngle 固定，不用 % 360
           */

          var shotAngleRange;
          var bottomJudge = polyaxisRotateAngle <= 180 && (polyRotate % 360 < 75 || polyRotate % 360 >= 255);
          var topJudge = polyaxisRotateAngle > 180 && (polyRotate % 360 >= 75 || polyRotate % 360 < 255);

          if (bottomJudge || topJudge) {
            shotAngleRange = _this5.rotateAngle >= polyaxisRotateAngle * degToPi - angleB2 && _this5.rotateAngle <= polyaxisRotateAngle * degToPi + angleB1;
          } else {
            shotAngleRange = _this5.rotateAngle >= polyaxisRotateAngle * degToPi - angleB1 && _this5.rotateAngle <= polyaxisRotateAngle * degToPi + angleB2;
          } // 射中距離範圍


          var shotRRange = _this5.axisRotateR + _this5.bodyLength >= sideA && _this5.axisRotateR + _this5.bodyLength <= sideA + 9; // 判斷子彈有無射中多邊形

          if (shotAngleRange && shotRRange) {
            // 移除子彈
            shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

            polygon.HP.whole -= 1;
          }
        } else {
          // 當多邊形分裂
          // 大分裂
          if (polygon.HP.big) {
            var _polyaxisRotateAngle = polygon.axisRotateAngle.big;
            var _polyRotate = polygon.rotate.big; // 取得兩側射中最大角度

            var _sideA = polygon.axisRotateR.big;
            var _sideB = 34;
            var _sideB2 = 23;
            /**
             * 兩側點（70°、202°）愈靠近軸心，夾角便愈大
             * 相同軸半徑下，當多邊形　axisRotateAngle 0°，rotate 44° 時，兩側點離軸心（幾乎）最近，angleB 相同
             * 270 - 202 = 68
             * 90 - 70 = 20
             * (68 + 20) / 2 = 44
             */

            var _sideC = cosineFormula(_sideA, _sideB, 202 + 44 - 180);

            var _sideC2 = cosineFormula(_sideA, _sideB2, 180 - (70 + 44));

            var _angleB = getAngleB(_sideA, _sideB, _sideC);

            var _angleB2 = getAngleB(_sideA, _sideB2, _sideC2);
            /**
             * 射中角度範圍
             * 當多邊形的 axisRotateAngle、rotate 不同，要加上與減去的角度也不一樣
             * 多邊形不會繞軸旋轉， axisRotateAngle 固定，不用 % 360
             */


            var _shotAngleRange;

            var _bottomJudge = _polyaxisRotateAngle <= 180 && (_polyRotate % 360 < 44 || _polyRotate % 360 >= 224);

            var _topJudge = _polyaxisRotateAngle > 180 && (_polyRotate % 360 >= 44 || _polyRotate % 360 < 224);

            if (_bottomJudge || _topJudge) {
              _shotAngleRange = _this5.rotateAngle >= _polyaxisRotateAngle * degToPi - _angleB2 && _this5.rotateAngle <= _polyaxisRotateAngle * degToPi + _angleB;
            } else {
              _shotAngleRange = _this5.rotateAngle >= _polyaxisRotateAngle * degToPi - _angleB && _this5.rotateAngle <= _polyaxisRotateAngle * degToPi + _angleB2;
            } // 設中距離範圍


            var _shotRRange = _this5.axisRotateR + _this5.bodyLength >= _sideA + 8 && _this5.axisRotateR + _this5.bodyLength <= _sideA + 16; // 判斷子彈有無射中大分裂


            if (_shotAngleRange && _shotRRange) {
              // 移除子彈
              shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

              polygon.HP.big -= 1;
            }
          } // 小分裂


          if (polygon.HP.small) {
            var _polyaxisRotateAngle2 = polygon.axisRotateAngle.small;
            var _polyRotate2 = polygon.rotate.small; // 取得兩側射中最大角度

            var _sideA2 = polygon.axisRotateR.small;
            var _sideB3 = 22;
            var _sideB4 = 23;
            /**
             * 兩側點（70°、255°）愈靠近軸心，夾角便愈大
             * 相同軸半徑下，當多邊形　axisRotateAngle 0°，rotate 17.5° 時，兩側點離軸心（幾乎）最近，angleB 相同
             * 270 - 255 = 15
             * 90 - 70 = 20
             * (15 + 20) / 2 = 17.5
             */

            var _sideC3 = cosineFormula(_sideA2, _sideB3, 255 + 17.5 - 180);

            var _sideC4 = cosineFormula(_sideA2, _sideB4, 180 - (70 + 17.5));

            var _angleB3 = getAngleB(_sideA2, _sideB3, _sideC3);

            var _angleB4 = getAngleB(_sideA2, _sideB4, _sideC4);
            /**
             * 射中角度範圍
             * 當多邊形的 axisRotateAngle、rotate 不同，要加上與減去的角度也不一樣
             * 多邊形不會繞軸旋轉， axisRotateAngle 固定，不用 % 360
             */


            var _shotAngleRange2;

            var _bottomJudge2 = _polyaxisRotateAngle2 <= 180 && (_polyRotate2 % 360 < 17.5 || _polyRotate2 % 360 >= 197.5);

            var _topJudge2 = _polyaxisRotateAngle2 > 180 && (_polyRotate2 % 360 >= 17.5 || _polyRotate2 % 360 < 197.5);

            if (_bottomJudge2 || _topJudge2) {
              _shotAngleRange2 = _this5.rotateAngle >= _polyaxisRotateAngle2 * degToPi - _angleB4 && _this5.rotateAngle <= _polyaxisRotateAngle2 * degToPi + _angleB3;
            } else {
              _shotAngleRange2 = _this5.rotateAngle >= _polyaxisRotateAngle2 * degToPi - _angleB3 && _this5.rotateAngle <= _polyaxisRotateAngle2 * degToPi + _angleB4;
            } // 設中距離範圍


            var _shotRRange2 = _this5.axisRotateR + _this5.bodyLength >= _sideA2 + 8 && _this5.axisRotateR + _this5.bodyLength <= _sideA2 + 16; // 判斷子彈有無射中小分裂


            if (_shotAngleRange2 && _shotRRange2) {
              // 移除子彈
              shooterBullets.splice(bulletIdx, 1); // 扣 1 生命值

              polygon.HP.small -= 1;
            }
          } // 如果大小分裂都被擊斃了，那就移除此多邊形


          if (!polygon.HP.big && !polygon.HP.small) {
            polygons.splice(polyIdx, 1);
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
      axisRotatePos: {
        x: gameW / 2,
        y: gameH / 2
      },
      axisRotateR: 0,
      axisRotateAngle: 0,
      // r: 26 * 0.4,
      r: 10.4,
      rotate: 0,
      rotateV: 4,
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
    value: function update(idx) {
      var _this6 = this;

      this.rotate += this.rotateV;

      if (!this.isReproduceMoving) {
        TweenLite.to(this, 0.8, {
          axisRotateAngle: "".concat(this.order === 1 ? '+=' : '-=', "10"),
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            TweenLite.to(_this6, 1.6, {
              axisRotateR: 0,
              ease: Power1.easeIn
            });
          }
        });
        this.isReproduceMoving = true;
      } // 當小三角形撞上 shooter


      enemyHitShooter(subTriangles, idx, this.axisRotateR, this.axisRotateAngle);
    }
  }, {
    key: "originalPos",
    get: function get() {
      return {
        x: this.axisRotatePos.x + this.axisRotateR * Math.cos(this.axisRotateAngle * degToPi),
        y: this.axisRotatePos.y + this.axisRotateR * Math.sin(this.axisRotateAngle * degToPi)
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
      axisRotateR: 0,
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

      ctx.arc(this.moveX, 0, 4, 0, Math.PI * 2); // ctx.arc(this.axisRotateR + 16, 0, 4, 0, Math.PI * 2);

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

      if (-this.moveX >= this.axisRotateR - shooterR - shooterInnerCirLineW / 2) {
        // shooter 命減 1
        game.shooter.HP -= 1; // 移除子彈

        arr.splice(idx, 1);
      } // 當圓形子彈射中 shooter 的護盾


      var shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - this.rotateAngle * degToPi) <= 225 * degToPi;

      if (shieldAngleRange && -this.moveX >= this.axisRotateR - shieldR - shieldLineW / 2) {
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

      if (-this.moveX >= this.axisRotateR - (triBulletLength + shooterR + shooterInnerCirLineW / 2)) {
        // shooter 命減 1
        game.shooter.HP -= 1; // 移除三角子彈

        arr.splice(idx, 1);
      } // 當三角子彈射中 shooter 的護盾


      var shieldAngleRange = Math.abs(mouseMoveAngle - this.rotateAngle % 360 * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - this.rotateAngle % 360 * degToPi) <= 225 * degToPi;

      if (shieldAngleRange && -this.moveX >= this.axisRotateR - (triBulletLength + shieldR + shieldLineW / 2)) {
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
} // 餘弦定理


function cosineFormula(a, b, angle) {
  return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(angle * degToPi));
}

function getAngleB(a, b, c) {
  return Math.acos((a * a + c * c - b * b) / (2 * a * c));
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
      axisRotateR: 62,
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

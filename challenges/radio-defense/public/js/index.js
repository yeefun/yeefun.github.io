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
  panel.style.display = 'none';
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
var gameW;
var gameH;

ctx.circle = function (v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
};

ctx.line = function (v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
};

function initCanvas() {
  gameW = canvas.width;
  gameH = canvas.height;
} // initCanvas();


var degToPi = Math.PI / 180; // let circles = [];

var coverCircle;
var coverTriangle;
var coverPolygon;
var game;

var Game =
/*#__PURE__*/
function () {
  function Game(args) {
    _classCallCheck(this, Game);

    var def = {
      isGameStart: true
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
      this.render();
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      ctx.fillStyle = globalColor.blueDark;
      ctx.fillRect(0, 0, gameW, gameH);

      if (!this.isGameStart) {
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
      r: 26,
      v: 0.8,
      color: globalColor.yellow
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.save();
      ctx.translate(this.rotationAxisPos.x, this.rotationAxisPos.y);
      ctx.arc(this.rotationAxisR * Math.cos(this.rotationAngle * degToPi), this.rotationAxisR * Math.sin(this.rotationAngle * degToPi), this.r, 0, Math.PI * 2);
      ctx.restore();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.rotationAngle += this.v;
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


var Shooter =
/*#__PURE__*/
function () {
  function Shooter(args) {
    _classCallCheck(this, Shooter);

    var def = {
      p: {
        x: gameW / 2,
        y: gameH / 2
      }
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Shooter, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.restore();
    }
  }]);

  return Shooter;
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

var mouseMovePos = new Vec2(0, 0);
var mouseUpPos = new Vec2(0, 0);
var mouseDownPos = new Vec2(0, 0);
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
//# sourceMappingURL=index.js.map

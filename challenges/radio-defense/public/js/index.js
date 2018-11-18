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
var cw;
var ch;

ctx.circle = function (v, r) {
  this.arc(v.x, v.y, r, 0, Math.PI * 2);
};

ctx.line = function (v1, v2) {
  this.moveTo(v1.x, v1.y);
  this.lineTo(v2.x, v2.y);
};

function initCanvas() {
  cw = canvas.width;
  ch = canvas.height;
} // initCanvas();


var degToPi = Math.PI / 180;

var Game =
/*#__PURE__*/
function () {
  function Game(args) {
    _classCallCheck(this, Game);

    var def = {
      start: false
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.render();
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      ctx.fillStyle = globalColor.blueDark;
      ctx.fillRect(0, 0, cw, ch);

      if (!this.start) {
        // 中央兩白圈
        ctx.save();
        ctx.translate(cw / 2, ch / 2);
        ctx.beginPath();
        ctx.arc(0, 0, 196, 0, Math.PI * 2);
        ctx.strokeStyle = globalColor.white;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 264, 0, Math.PI * 2);
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.restore(); // 左下方字
        // ctx.fillStyle = globalColor.white;
        // ctx.font = '300 14px sans-serif';
        // ctx.fillText('你身負著運送能量電池的任務', 24, ch - 80);
        // ctx.fillText('卻遭到幾何星人的埋伏', 24, ch - 56);
        // ctx.fillText('請協助從他們的手中奪回能量電池！', 24, ch - 32);
        // 黃圓

        var circle = new Circle({
          p: {
            x: cw - 128,
            y: 96
          }
        });
        circle.draw(); // 藍三角形

        var triangle = new Triangle({
          p: {
            x: cw - 224,
            y: ch - 80
          },
          rotate: 8
        });
        triangle.draw(); // 紅多邊形

        var polygon = new Polygon({
          p: {
            x: 88,
            y: 104
          }
        });
        polygon.draw();
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
  }]);

  return Game;
}();
/* Circle Class
 **
 */


var Circle =
/*#__PURE__*/
function () {
  function Circle(args) {
    _classCallCheck(this, Circle);

    var def = {
      p: new Vec2(0, 0),
      r: 40,
      color: globalColor.yellow
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.p.x, this.p.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }]);

  return Circle;
}();
/* Triangle Class
**
 */


var Triangle =
/*#__PURE__*/
function () {
  function Triangle(args) {
    _classCallCheck(this, Triangle);

    var def = {
      p: new Vec2(0, 0),
      // angleSpan: 360 / 3,
      r: 78,
      rotate: 0,
      color: globalColor.blue
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.save();
      ctx.translate(this.p.x, this.p.y);
      ctx.moveTo(0, 0);
      ctx.rotate(this.rotate * degToPi);
      ctx.lineTo(this.r, 0);
      ctx.translate(this.r, 0);
      ctx.rotate(-30 * degToPi);
      ctx.lineTo(0, -this.r);
      ctx.restore();
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill(); // let points = [];
      // for (let i = 0; i < 3; i += 1) {
      //   const angle = this.rotate * degToPi + (360 / 3) * i * degToPi;
      //   points.push({
      //     angle,
      //     r: this.r,
      //   });
      // }
      // ctx.save();
      //   ctx.translate(this.p.x, this.p.y);
      //   ctx.beginPath();
      //   points.forEach((point) => {
      //     ctx.lineTo(point.r * Math.cos(point.angle), point.r * Math.sin(point.angle));
      //   });
      //   ctx.closePath();
      //   ctx.fillStyle = this.color;
      //   ctx.fill();
      // ctx.restore();
    }
  }]);

  return Triangle;
}();

var Polygon =
/*#__PURE__*/
function () {
  function Polygon(args) {
    _classCallCheck(this, Polygon);

    var def = {
      p: new Vec2(0, 0),
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
      ctx.translate(this.p.x, this.p.y);
      ctx.moveTo(0, 0);
      ctx.rotate(18 * degToPi);
      ctx.lineTo(44, 0);
      ctx.translate(44, 0);
      ctx.rotate(64 * degToPi);
      ctx.lineTo(28, 0);
      ctx.translate(28, 0);
      ctx.rotate(40 * degToPi);
      ctx.lineTo(38, 0);
      ctx.translate(38, 0);
      ctx.rotate(76 * degToPi);
      ctx.lineTo(52, 0);
      ctx.translate(52, 0);
      ctx.rotate(50 * degToPi);
      ctx.lineTo(48, 0);
      ctx.restore();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }]);

  return Polygon;
}();
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
// ctx.fillRect(0, 0, cw, ch);
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
  var game = new Game();
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

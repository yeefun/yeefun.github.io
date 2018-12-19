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
  yellow: '#f7b52c',
  blue: '#3676bb',
  blueDark: '#001d2e',
  white: '#fff'
};
/* GUI Controls */

var controls = {// splited: false,
  // length: 120,
  // amp: 8,
  // freq: 0.3,
  // divide: 1,
};
var gui = new dat.GUI(); // gui.add(controls, 'length', 0, 200).step(1).onChange((value) => {});
// gui.add(controls, 'amp', 0, 30).step(1).onChange((value) => {});
// gui.add(controls, 'freq', 0, 1).step(0.1).onChange((value) => {});
// gui.add(controls, 'divide', 1, 100).step(1).onChange((value) => {});
// gui.add(controls, 'splited');
// gui.add(controls, 'value', -2, 2).step(0.01).onChange((value) => {});

var startBtn = document.getElementById('start-btn');
var restartBtn = document.getElementById('restart-btn');
var cover = document.getElementById('cover');
var gamePanel = document.getElementById('game-panel');
var batteryInfo = document.getElementById('battery-info');
var shooterHpBar = document.getElementById('hp');
var prop = document.getElementById('prop');
var propImg = document.getElementById('prop__img');
var propLastTime = document.getElementById('prop__last-time');
var batteryNum = document.getElementById('battery-num');
var result = document.getElementById('result');
var resultNum = document.getElementById('result-num');
var panel = document.getElementById('panel');
var container = document.getElementById('container');
var keyboard = document.getElementById('keyboard'); // const mouseStyle = document.getElementById('mouse-style');

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
      axisRotateR: 0,
      axisRotateAngle: 0,
      r: 32
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Prop, [{
    key: "draw",
    value: function draw() {
      if (!this.img.src) {
        this.img.src = this.src; // ctx.mozImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = ctx.msImageSmoothingEnabled = ctx.imageSmoothingEnabled = false;
      }

      if (this.img.complete) {
        ctx.save();
        ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
        ctx.drawImage(this.img, 0, 0);
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.arc(this.img.width / 2, this.img.height / 2, this.r, 0, Math.PI * 2);
        ctx.stroke(); // ctx.beginPath();
        // ctx.fillStyle = 'red';
        // ctx.arc(0, 0, 4, 0, Math.PI * 2);
        // ctx.fill();

        ctx.restore();
      }
    }
  }, {
    key: "update",
    value: function update(idx) {
      this.axisRotateR -= 3.2; // 當道具撞上 shooter 主體

      var shooter = game.shooter;

      if (this.axisRotateR + this.r <= shooter.r + shooter.cirSolidLineW / 2) {
        game.props.splice(idx, 1);
        var propName = this.src.slice(17).split('.')[0];
        shooter.getProp(propName);
      }
    }
  }]);

  return Prop;
}();

var degToPi = Math.PI / 180;
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
      isStart: true,
      shooter: null,
      currentLevel: 1,
      isInLevel1: false,
      props: [],
      batteryNum: 0,
      circles: [],
      triangles: [],
      polygons: [],
      subTriangles: [],
      isPause: false,
      blockV: {
        x: -2,
        y: 2
      },
      recoverHpTimer: null
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this = this;

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
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);
      window.addEventListener('keyup', handleKeyup);
      startBtn.addEventListener('click', function () {
        _this.startGame();
      }, {
        once: true
      }); // restartBtn.addEventListener('click', this.restartGame);

      restartBtn.addEventListener('click', function () {
        _this.restartGame();
      });
      this.startGame();
      this.render();
      this.update(); // 初始化方格移動速率與計時器

      this.setBlockV(); // 緩慢恢復 shooter 生命條

      this.recoverShooterHpBar();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      ctx.fillStyle = globalColor.blueDark;
      ctx.fillRect(0, 0, gameW, gameH); // if (this.isStart) {
      // 繪製方格

      this.drawBlock(); // 繪製滑鼠

      this.drawMouse(); // 繪製 shooter

      this.shooter.draw(); // 繪製每個 circle

      this.circles.forEach(function (circle) {
        circle.draw();
      }); // 繪製每個 triangle

      this.triangles.forEach(function (triangle) {
        triangle.draw();
      }); // 繪製每個 polygon

      this.polygons.forEach(function (polygon) {
        polygon.draw();
      }); // 繪製每個 sub triangle

      this.subTriangles.forEach(function (subTriangle) {
        subTriangle.draw();
      }); // 繪製每個 prop（道具）

      this.props.forEach(function (prop) {
        prop.draw();
      }); // } else {
      // this.startGame();
      // this.drawCover();
      // }

      requestAnimationFrame(function () {
        _this2.render();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      time += 1;

      if (this.isStart) {
        // 判斷現在是第幾關
        if (this.currentLevel === 1 && !this.isInLevel1) {
          this.setLevelOne();
          this.isInLevel1 = true;
        } // 更新 shooter


        this.shooter.update(); // 更新每個 circle

        this.circles.forEach(function (circle, idx) {
          circle.update(idx);
        }); // 更新每個 triangle

        this.triangles.forEach(function (triangle, idx) {
          triangle.update(idx);
        }); // 更新每個 polygon

        this.polygons.forEach(function (polygon, idx) {
          polygon.update(idx);
        }); // 更新每個 sub triangle

        this.subTriangles.forEach(function (subTriangle, idx) {
          subTriangle.update(idx);
        }); // 更新每個 prop（道具）

        this.props.forEach(function (prop, idx) {
          prop.update(idx);
        }); // 產生道具

        this.generateProp();
      }

      setTimeout(function () {
        _this3.update();
      }, 1000 / updateFPS);
    } // 繪製封面

  }, {
    key: "drawCover",
    value: function drawCover() {} // if (this.rLogo.complete) {
    //   ctx.drawImage(this.rLogo, gameW / 2 - 12, gameH / 2 - 70, 31 * 1.7, 38 * 1.7);
    // }
    // 中央兩白圈
    // ctx.save();
    //   ctx.translate(gameW / 2, gameH / 2);
    //   ctx.beginPath();
    //   ctx.arc(0, 0, 180, 0, Math.PI * 2);
    //   ctx.strokeStyle = globalColor.white;
    //   ctx.stroke();
    //   ctx.beginPath();
    //   ctx.arc(0, 0, 264, 0, Math.PI * 2);
    //   ctx.globalAlpha = 0.3;
    //   ctx.stroke();
    // ctx.restore();
    // 黃圓
    // coverCircle.draw();
    // coverCircle.update();
    // 藍三角
    // coverTriangle.draw();
    // coverTriangle.update();
    // 紅多邊形
    // coverPolygon.draw();
    // coverPolygon.update();
    // 電池
    // drawBattery({
    //   x: gameW / 2 - 24,
    //   y: gameH / 2 - 52,
    // });
    // R 字小角裝飾
    // ctx.save();
    //   ctx.translate(gameW / 2 + 24, gameH / 2 - 30);
    //   ctx.rotate(-132 * degToPi);
    //   ctx.beginPath();
    //   ctx.moveTo(0, 0);
    //   ctx.lineTo(4, 0);
    //   ctx.lineTo(0, -8.4);
    //   ctx.lineTo(-4.2, 0);
    //   ctx.closePath();
    //   ctx.fillStyle = globalColor.white;
    //   ctx.fill();
    // ctx.restore();
    // 畫方格

  }, {
    key: "drawBlock",
    value: function drawBlock() {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 0.4; // 畫橫列

      for (var i = 0; i < 18; i += 1) {
        ctx.moveTo(i * 56 + time * this.blockV.x % 56, 0);
        ctx.lineTo(i * 56 + time * this.blockV.x % 56, gameH);
      } // 畫直行


      for (var _i = 0; _i < 14; _i += 1) {
        ctx.moveTo(0, _i * 52 + time * this.blockV.y % 52);
        ctx.lineTo(gameW, _i * 52 + time * this.blockV.y % 52);
      }

      ctx.stroke();
      ctx.restore();
    } // 畫滑鼠

  }, {
    key: "drawMouse",
    value: function drawMouse() {
      var mouseMovePosX = mouseMovePos.x + gameW / 2;
      var mouseMovePosY = mouseMovePos.y + gameH / 2;
      var length = 12;
      ctx.save();
      ctx.translate(mouseMovePosX, mouseMovePosY);
      ctx.strokeStyle = globalColor.white;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-length, 0);
      ctx.lineTo(length, 0);
      ctx.moveTo(0, -length);
      ctx.lineTo(0, length);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = globalColor.white;
      ctx.beginPath();
      ctx.arc(mouseMovePosX, mouseMovePosY, 1.6, 0, Math.PI * 2);
      ctx.fill();
    } // 設定方格移動速率

  }, {
    key: "setBlockV",
    value: function setBlockV() {
      var _this4 = this;

      setTimeout(function () {
        _this4.blockV.x = Math.random() * 8 - 4;
        _this4.blockV.y = Math.random() * 8 - 4;

        _this4.setBlockV();
      }, 8000);
    } // 開始遊戲（當讀者按下 'Start Play' 按鈕）

  }, {
    key: "startGame",
    value: function startGame() {
      this.isStart = true; // 移除封面

      cover.style.display = 'none'; // 顯示遊戲介面

      gamePanel.style.display = 'block'; // 初始化 shooter

      this.shooter = new Shooter(); // 隱藏預設滑鼠

      container.style.cursor = 'none'; // 讓滑鼠點擊無效

      panel.style.pointerEvents = 'none';
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      this.isStart = true; // 重設敵人

      this.circles = [];
      this.triangles = [];
      this.polygons = [];
      this.subTriangles = []; // 電池資訊歸零

      batteryNum.textContent = 0; // 重設生命條

      shooterHpBar.style.width = '216px'; // 初始化反患恢復生命條

      this.recoverShooterHpBar(); // 重設 shooter

      this.shooter = new Shooter(); // 隱藏結果

      result.style.opacity = 0; // 讓滑鼠點擊無效

      panel.style.pointerEvents = 'none'; // 顯示獲得電池資訊

      batteryInfo.style.opacity = 1; // 顯示鍵盤指示

      keyboard.style.opacity = 1;
      this.isInLevel1 = false;
    } // 遊戲結束

  }, {
    key: "endGame",
    value: function endGame() {
      this.isStart = false; // 隱藏獲得電池資訊

      batteryInfo.style.opacity = 0; // 隱藏鍵盤指示

      keyboard.style.opacity = 0; // 貼上電池數量

      resultNum.textContent = this.batteryNum; // 顯示結果

      result.style.opacity = 1; // 顯示預設滑鼠

      container.style.cursor = 'auto'; // 讓滑鼠可以點擊

      panel.style.pointerEvents = 'auto'; // 清除生命條恢復計時器

      clearTimeout(this.recoverHpTimer);
    } // 暫停遊戲

  }, {
    key: "pauseGame",
    value: function pauseGame() {
      this.isPause = !this.isPause;
    } // 產生道具

  }, {
    key: "generateProp",
    value: function generateProp() {} // 緩慢恢復 shooter 生命條

  }, {
    key: "recoverShooterHpBar",
    value: function recoverShooterHpBar() {
      var _this5 = this;

      this.recoverHpTimer = setTimeout(function () {
        var nowHpBarW = shooterHpBar.offsetWidth;

        if (nowHpBarW < 216) {
          var recoverHpBarW = nowHpBarW + 1;
          shooterHpBar.style.width = "".concat(recoverHpBarW, "px");
        }

        _this5.recoverShooterHpBar();
      }, 500);
    } // 設定第一關

  }, {
    key: "setLevelOne",
    value: function setLevelOne() {
      // this.props.push(new Prop({
      //   src: '../../src/assets/crackdown.svg',
      //   axisRotateR: 200,
      //   axisRotateAngle: 40,
      // }));
      this.circles.push(new Circle({
        axisRotateR: 240,
        axisRotateAngle: 40,
        rotate: 235
      })); // this.triangles.push(new Triangle({
      //   axisRotateR: 280,
      //   // axisRotateAngle 與 rotate 必須相同
      //   axisRotateAngle: 230,
      //   rotate: 230,
      // }));
      // this.polygons.push(new Polygon({
      //   axisRotateR: {
      //     whole: 280,
      //     big: 280,
      //     small: 280,
      //   },
      //   axisRotateAngle: {
      //     whole: 210,
      //     big: 210,
      //     small: 210,
      //   },
      //   rotate: {
      //     whole: 56,
      //     big: 56,
      //     small: 56,
      //   },
      // }));
    }
  }]);

  return Game;
}();
/* 
 ** 敵人方法
 */


var enemyMethods = {
  // 死亡效果
  dieEffect: function dieEffect(enemyR, effectX, effectY, colorRGB) {
    var dieTime = 1;

    var effect = function effect() {
      // FIXME 暫停後再啟動，效果就會直接消失，原因不明
      if (!game.isPause) {
        dieTime += 1;
        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = "rgba(".concat(colorRGB, ", ").concat((48 - dieTime) / 46, ")");
        ctx.fillStyle = "rgba(".concat(colorRGB, ", ").concat((48 - dieTime) / 230, ")");
        ctx.shadowColor = "rgba(".concat(colorRGB, ", 0.48)");
        ctx.shadowBlur = 2;
        ctx.lineWidth = 2;
        var effectR = enemyR * baseLog(3, (dieTime - 2) / 46 * 8 + 1);
        ctx.arc(effectX, effectY, effectR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      if (dieTime < 48) {
        requestAnimationFrame(effect);
      }
    };

    requestAnimationFrame(effect);
  },
  // 敵人撞擊 shooter 判定
  hitShooter: function hitShooter(enemies, enemyIdx, type, enemyAxisRotateR, enemyAxisRotateAngle) {
    var enemy = enemies[enemyIdx];
    var shooter = game.shooter;
    var shieldAngleRange = Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) >= 135 * degToPi && Math.abs(mouseMoveAngle - enemyAxisRotateAngle * degToPi) <= 225 * degToPi; // 判斷是多邊形或其它敵人撞上 shooter

    var judgeWhichEnemyHit = function judgeWhichEnemyHit() {
      if (type !== 'big' && type !== 'small') {
        enemies.splice(enemyIdx, 1); // 移除敵人效果

        if (type !== 'whole') {
          var colorRGB = type === 'circle' ? '245, 175, 95' : '54, 118, 187';
          enemyMethods.dieEffect(enemy.r, originalPos(enemyAxisRotateR, enemyAxisRotateAngle).x, originalPos(enemyAxisRotateR, enemyAxisRotateAngle).y, colorRGB);
        } else {
          var polygonR = (34 + 22) / 2;
          enemyMethods.dieEffect(polygonR, enemy.originalPos(type).x, enemy.originalPos(type).y, '231, 70, 93');
        }
      } else {
        enemy.HP[type] -= 1;

        var _polygonR = type === 'big' ? (34 + 22) / 2 : (23 + 21) / 2;

        enemyMethods.dieEffect(_polygonR, enemy.originalPos(type).x, enemy.originalPos(type).y, '231, 70, 93');

        if (!enemy.HP.big && !enemy.HP.small) {
          enemies.splice(enemyIdx, 1);
        }
      }
    }; // 當敵人撞上 shooter 主體


    if (enemyAxisRotateR <= shooter.r + shooter.cirSolidLineW / 2) {
      // shooter.HP -= 1;
      judgeWhichEnemyHit();
      enemyMethods.attackShooterResult(); // 當敵人撞上 shooter 護盾
    } else if (shieldAngleRange && enemyAxisRotateR <= shooter.shieldR + shooter.shieldLineW / 2) {
      judgeWhichEnemyHit();
      shooter.isProtect = true;
    }
  },
  // 敵人子彈擊中 shooter 判定
  bulletAttackShooter: function bulletAttackShooter(enemy, enemyIdx, enemies) {
    var enemyBulletLen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var shooter = game.shooter;
    var shooterBodyCore = shooter.r + shooter.cirSolidLineW / 2;
    var shooterBodyShield = shooter.shieldR + shooter.shieldLineW / 2; // 當敵人子彈擊中 shooter 主體

    if (-enemy.moveX >= enemy.axisRotateR - (shooterBodyCore + enemyBulletLen)) {
      // 子彈擊中後
      enemyMethods.attackShooterResult(); // 移除敵人子彈

      enemies.splice(enemyIdx, 1);
    } // 當敵人子彈射中 shooter 的護盾


    var angleGap = Math.abs(mouseMoveAngle - enemy.rotateAngle % 360 * degToPi);
    var shieldAngleRange = angleGap >= 135 * degToPi && angleGap <= 225 * degToPi;

    if (shieldAngleRange && -enemy.moveX >= enemy.axisRotateR - (shooterBodyShield + enemyBulletLen)) {
      // 移除子彈
      enemies.splice(enemyIdx, 1);
    }
  },
  // 敵人撞擊或子彈擊中 shooter 後
  attackShooterResult: function attackShooterResult() {
    var shooter = game.shooter;
    var shooterHpBarOriginW = 216;
    var shooterHpBarW = shooterHpBar.offsetWidth - shooterHpBarOriginW / 3;
    shooter.isAttacked = true; // shooter 命減 1
    // shooter.HP -= 1;

    shooterHpBar.style.width = "".concat(shooterHpBarW < 0 ? 0 : shooterHpBarW, "px");

    if (shooterHpBarW <= 0) {
      var shooterHeart = document.querySelectorAll('.panel__game-heart'); // 如果 shooter 還有愛心命

      if (shooterHeart.length) {
        // 減掉一個愛心
        shooterHeart[0].parentNode.removeChild(shooterHeart[0]); // 命條減 1/3

        shooterHpBar.style.width = "".concat(shooterHpBarOriginW, "px");
      } else {
        // 如果沒有，結束遊戲
        game.endGame();
      }
    }
  }
};
/* Circle Class */

var Circle =
/*#__PURE__*/
function () {
  function Circle(args) {
    _classCallCheck(this, Circle);

    var def = {
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      axisRotateR: 0,
      axisRotateAngle: 0,
      r: 22,
      rotate: 0,
      scale: 0,
      axisRotateRV: 0.1,
      axisRotateAngleV: 0.4,
      rotateV: 0.4,
      color: globalColor.orange,
      HP: 2,
      bullets: [],
      beforeRotateTime: new Date(),
      isRotating: false,
      isAppearing: true
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      this.isAppearing && this.appear();
      this.isAppearing = false;
      var circleBigR = this.r + 5;
      var circleSmallR = this.r - 10;
      var subaxisRotateR = 14;
      ctx.save();
      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
      ctx.rotate(this.rotate * degToPi);
      ctx.scale(this.scale, this.scale); // 大淡圓

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
      var _this6 = this;

      this.axisRotateR -= 1; // 更新圓形子彈

      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 當圓形自身在旋轉時，圓形不要移動

      if (!this.isRotating) {
        this.axisRotateAngle += this.axisRotateAngleV; // this.axisRotateAngle += 2;
      } // 每 2-4 秒，自身旋轉一次


      var rotateTime = new Date();

      if (rotateTime - this.beforeRotateTime > 2000 * Math.random() + 2000) {
        this.isRotating = true;
        TweenLite.to(this, 0.4, {
          // rotate: this.axisRotateAngle - 180,
          // rotate: this.axisRotateAngle % 360,
          rotate: this.axisRotateAngle,
          ease: Power2.easeOut,
          // 自身旋轉完後射擊
          onComplete: function onComplete() {
            _this6.shoot();

            _this6.isRotating = false;
          }
        });
        this.beforeRotateTime = rotateTime;
      } // 當圓形撞上 shooter


      enemyMethods.hitShooter(game.circles, idx, 'circle', this.axisRotateR, this.axisRotateAngle);
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var _this7 = this;

      var _loop = function _loop(i) {
        var timer = setTimeout(function () {
          _this7.bullets.push(new CircleBullet({
            p: {
              x: originalPos(_this7.axisRotateR, _this7.axisRotateAngle).x,
              y: originalPos(_this7.axisRotateR, _this7.axisRotateAngle).y
            },
            rotateAngle: _this7.rotate,
            moveX: -_this7.r - 10,
            // rotateAngle: Math.sin(this.rotate * degToPi),
            axisRotateR: _this7.axisRotateR
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
    key: "appear",
    value: function appear() {
      TweenLite.to(this, 0.8, {
        scale: 1,
        ease: Back.easeOut.config(1.7)
      });
      TweenLite.from(this, 1.6, {
        rotate: 0,
        ease: Back.easeOut.config(1.7)
      });
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
      scale: 0,
      axisRotateRV: 0.1,
      axisRotateAngleV: 0.4,
      rotateV: -2.4,
      color: globalColor.blue,
      bullets: [],
      beforeRotateAxisAngleTime: new Date(),
      beforeShootTime: new Date(),
      HP: 4,
      isReproduce: false,
      shootTimer: null,
      isAppearing: true
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw() {
      this.isAppearing && this.appear();
      this.isAppearing = false;
      var triangleOuterBigR = this.r + 4;
      var triangleInnerBigR = this.r - 16;
      var triangleInnerSmallR = this.r - 22;
      ctx.save(); // 淡三角

      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y);
      ctx.scale(this.scale, this.scale);
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
      var _this8 = this;

      // this.axisRotateR -= 4.8;
      // 更新三角子彈
      this.bullets.forEach(function (bullet, idx, arr) {
        bullet.update(idx, arr);
      }); // 每 8-16 秒，三角移動 + 自身旋轉

      var rotateAxisAngleTime = new Date();
      var randomRotateAngle;

      if (rotateAxisAngleTime - this.beforeRotateAxisAngleTime > Math.random() * 16000 + 8000) {
        // 旋轉時不發射子彈
        if (this.shootTimer) clearTimeout(this.shootTimer);
        randomRotateAngle = (Math.random() > 0.25 ? -1 : 1) * (30 * Math.random() + 45); // 以 0.8 秒移動

        TweenLite.to(this, 0.8, {
          axisRotateAngle: "+=".concat(randomRotateAngle),
          ease: Power0.easeNone
        }); // 以 1.2 秒自身旋轉

        TweenLite.to(this, 1.2, {
          rotate: "+=".concat(randomRotateAngle + 360),
          ease: Power2.easeInOut,
          onComplete: function onComplete() {
            // 移動完後發射子彈
            _this8.shoot(); // 發射一顆子彈後，每 2.4 - 10.4 秒發射第二發子彈


            _this8.shootTimer = setTimeout(function () {
              _this8.shoot();
            }, Math.random() * 8000 + 2400);
          }
        });
        this.beforeRotateAxisAngleTime = rotateAxisAngleTime;
      } // 每 2.4-3.6 秒，發射 1 發子彈
      // const shootTime = new Date();
      // if (shootTime - this.beforeShootTime > (Math.random() * 1200 + 2400)) {
      //   if (!this.bullets.length) {
      //     this.shoot();
      //   }
      // }
      // 當生命值剩 2，派副三角形攻擊


      if (this.HP === 2 && !this.isReproduce) {
        for (var i = 1; i <= 2; i += 1) {
          game.subTriangles.push(new TriangleSub({
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


      enemyMethods.hitShooter(game.triangles, idx, 'triangle', this.axisRotateR, this.axisRotateAngle);
    }
  }, {
    key: "shoot",
    value: function shoot() {
      this.bullets.push(new TriangleBullet({
        p: {
          x: originalPos(this.axisRotateR, this.axisRotateAngle).x,
          y: originalPos(this.axisRotateR, this.axisRotateAngle).y
        },
        axisRotateR: this.axisRotateR,
        rotateAngle: this.rotate // rotate: this.rotate,

      }));
    }
  }, {
    key: "appear",
    value: function appear() {
      TweenLite.to(this, 0.8, {
        scale: 1,
        ease: Back.easeOut.config(1.7)
      });
      TweenLite.to(this, 1.6, {
        rotate: '+=360',
        ease: Back.easeOut.config(1.7)
      });
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
      // axisRotatePos: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
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
      // axisRotateRA: {
      //   whole: 0.01,
      //   big: 0.01,
      //   small: 0.01,
      // },
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
      isSplitedMove: false,
      scale: 0,
      isAppearing: true,
      isSpliting: false
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Polygon, [{
    key: "originalPos",
    value: function originalPos(form) {
      return {
        x: gameW / 2 + this.axisRotateR[form] * Math.cos(this.axisRotateAngle[form] * degToPi),
        y: gameH / 2 + this.axisRotateR[form] * Math.sin(this.axisRotateAngle[form] * degToPi)
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      if (!this.isSplited) {
        this.isAppearing && this.appear();
        this.isAppearing = false;
        ctx.save();
        ctx.translate(this.originalPos('whole').x, this.originalPos('whole').y);
        ctx.rotate(this.rotate.whole * degToPi);
        ctx.scale(this.scale, this.scale); // 主體多邊形

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
          ctx.translate(this.originalPos('big').x, this.originalPos('big').y);
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
          ctx.translate(this.originalPos('small').x, this.originalPos('small').y);
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
      var _this9 = this;

      if (!this.HP.whole) {
        this.isSplited = true;
      }

      if (!this.isSplited) {
        // this.axisRotateR.whole = this.axisRotateR.big = this.axisRotateR.small -= this.axisRotateRV.whole;
        this.rotate.whole = this.rotate.big = this.rotate.small += this.rotateV.whole; // 當多邊形撞上 shooter

        enemyMethods.hitShooter(game.polygons, idx, 'whole', this.axisRotateR.whole, this.axisRotateAngle.whole);
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
          TweenLite.to(this.axisRotateR, 2.4, {
            big: "+=".concat(Math.random() * 100 + 50),
            small: "+=".concat(Math.random() * 100 + 50),
            ease: Circ.easeOut,
            onComplete: function onComplete() {
              _this9.isSpliting = true;
            }
          });
          TweenLite.to(this.rotate, 3.2, {
            big: "-=".concat(Math.random() * 90 + 180),
            small: "+=".concat(Math.random() * 90 + 180),
            ease: Power2.easeOut
          });
          this.isSplitedMove = true;
        } // 當大分裂撞上 shooter


        if (this.HP.big && this.isSpliting) {
          this.axisRotateR.big -= this.axisRotateRV.big; // this.axisRotateRV.big += this.axisRotateRA.big;

          enemyMethods.hitShooter(game.polygons, idx, 'big', this.axisRotateR.big, this.axisRotateAngle.big);
        } // 當小分裂撞上 shooter


        if (this.HP.small && this.isSpliting) {
          this.axisRotateR.small -= this.axisRotateRV.small;
          enemyMethods.hitShooter(game.polygons, idx, 'small', this.axisRotateR.small, this.axisRotateAngle.small);
        }
      } // if (!this.isInBoundary) {
      //   this.p.x = -48;
      //   this.p.y = -32;
      //   this.v.x = 0.5 * Math.random() + 0.5;
      //   this.v.y = 0.5 * Math.random() + 0.5;
      // }

    }
  }, {
    key: "appear",
    value: function appear() {
      TweenLite.to(this, 0.8, {
        scale: 1,
        ease: Back.easeOut.config(1.7)
      });
    } // get isInBoundary() {
    //   const xInRange = -48 <= this.p.x && this.p.x <= gameW + 48;
    //   const yInRange = -48 <= this.p.y && this.p.y <= gameH + 48;
    //   return xInRange && yInRange;
    // }

  }]);

  return Polygon;
}();
/* Shooter 類別 */
// let shooterBullets = [];


var Shooter =
/*#__PURE__*/
function () {
  function Shooter(args) {
    _classCallCheck(this, Shooter);

    var def = {
      // p: {
      //   x: gameW / 2,
      //   y: gameH / 2,
      // },
      color: globalColor.white,
      r: 34 * 0.85,
      shieldR: (34 + 36) * 0.85,
      cirSolidLineW: 6 * 0.85,
      shieldLineW: 4 * 0.85,
      rotateAngle: 0,
      bullets: [],
      // HP: 6,
      // HP: 1,
      statuses: [],
      isAttacked: false,
      isProtect: false,
      beforeShootTime: new Date()
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }

  _createClass(Shooter, [{
    key: "draw",
    value: function draw() {
      ctx.save(); // 輪圍

      ctx.translate(gameW / 2, gameH / 2); // ctx.rotate(this.rotateAngle);

      ctx.save();
      ctx.beginPath();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
      ctx.shadowBlur = 16;
      ctx.lineWidth = this.cirSolidLineW;
      ctx.arc(0, 0, this.r, 0, Math.PI * 2);

      if (!this.isAttacked) {
        ctx.strokeStyle = this.color;
      } else {
        ctx.strokeStyle = globalColor.red;
        this.isAttacked = false;
      } // ctx.strokeStyle = this.color;


      ctx.stroke(); // 輪軸

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.$triLineTo(this.r, 0, this.rotateAngle);
      ctx.moveTo(0, 0);
      ctx.$triLineTo(this.r, 120, this.rotateAngle);
      ctx.moveTo(0, 0);
      ctx.$triLineTo(this.r, 240, this.rotateAngle);
      ctx.lineWidth = 3 * 0.85;
      ctx.stroke();
      ctx.restore(); // 輪圍外虛線

      ctx.strokeStyle = this.color;
      var outerR = this.r + 22 * 0.85;

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
      // const shieldR = this.r + 36;


      ctx.beginPath();
      ctx.lineWidth = this.shieldLineW; // 如果 shooter 狀態為 shield，護盾變為 180°

      if (!this.judgeStatus('shield')) {
        ctx.arc(0, 0, this.shieldR, 135 * degToPi + this.rotateAngle, 225 * degToPi + this.rotateAngle);
      } else {
        ctx.arc(0, 0, this.shieldR, 90 * degToPi + this.rotateAngle, 270 * degToPi + this.rotateAngle);
      }

      if (!this.isProtect) {
        ctx.strokeStyle = this.color;
      } else {
        ctx.strokeStyle = globalColor.blue;
        this.isProtect = false;
      }

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
      ctx.restore(); // 發射子彈

      this.bullets.forEach(function (bullet) {
        bullet.draw();
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.rotateAngle = mouseMoveAngle;
      this.bullets.forEach(function (bullet, idx) {
        bullet.update(idx);
      });
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var _this10 = this;

      var shootTime = new Date();

      if (shootTime - beforeShootTime > 400) {
        var bulletNum; // 如果 shooter 狀態為 double，每次射兩發，兩發之間隔 0.16 秒

        if (!this.judgeStatus('double')) {
          bulletNum = 1;
        } else {
          bulletNum = 2;
        }

        for (var i = 0; i < bulletNum; i++) {
          if (!this.judgeStatus('wave')) {
            setTimeout(function () {
              _this10.bullets.push(new ShooterBullet({
                // 34 + 12 + 16
                // p: new Vec2(62, 0),
                axisRotateR: 62,
                rotateAngle: mouseMoveAngle
              }));
            }, 160 * i);
          } else {
            setTimeout(function () {
              _this10.bullets.push(new ShooterBullet({
                waveLength: Math.random() * 40 + 40,
                waveFreq: Math.random() * 0.2 + 0.2,
                waveAmp: Math.random() * 4 + 4,
                waveFlow: Math.random() * 4 + 4,
                axisRotateR: 70,
                rotateAngle: mouseMoveAngle
              }));
            }, 160 * i);
          }
        }

        beforeShootTime = shootTime;
      }
    }
  }, {
    key: "getProp",
    value: function getProp(propName) {
      var _this11 = this;

      // 持續秒數
      var lastTime;

      switch (propName) {
        case 'shield':
          lastTime = 10000;
          break;

        case 'double':
          lastTime = 20000;
          break;
        // case 'crackdown':
        //   lastTime = 1600;
        //   break;

        case 'wave':
          lastTime = 30000;
          break;

        default:
          lastTime = 0;
      } // 將道具推入 shooter 的狀態


      this.statuses.push(propName); // 時間到後，移除道具效果

      setTimeout(function () {
        for (var i = 0; i < _this11.statuses.length; i += 1) {
          if (_this11.statuses[i] === propName) {
            _this11.statuses.splice(i, 1);

            break;
          }
        }
      }, lastTime); // 如果 shooter 狀態為 heart，就恢復一個愛心

      if (this.judgeStatus('heart')) {
        this.recoverOneHeart();
      } // 如果 shooter 狀態為 crackdown，就發出清場效果


      if (this.judgeStatus('crackdown')) {
        this.drawCrackdownEffect();
      } // 顯示道具效果持續時間


      this.displayPropInfo(propName, lastTime);
    }
  }, {
    key: "judgeStatus",
    value: function judgeStatus(shooterStatus) {
      return this.statuses.find(function (status) {
        return status === shooterStatus;
      });
    } // 繪製清場效果

  }, {
    key: "drawCrackdownEffect",
    value: function drawCrackdownEffect() {
      var crackdownTime = 1;

      var effect = function effect() {
        ctx.save();
        crackdownTime += 1;
        ctx.beginPath();
        ctx.shadowColor = 'rgba(255, 255, 255, 0.72)';
        ctx.shadowBlur = 2; // 透明度從 1 到 0

        ctx.strokeStyle = "rgba(255, 255, 255, ".concat((100 - crackdownTime) / 98, ")");
        ctx.fillStyle = "rgba(255, 255, 255, ".concat((100 - crackdownTime) / 490, ")");
        ctx.lineWidth = 5;
        /**
         * baseLog() 從 0 到 3
         * 所以 (((crackdownTime - 2) / 98) * 26) + 1 為從 1 到 27
         * 清場半徑因此為從 0 到 528
         */

        var effectR = 176 * baseLog(3, (crackdownTime - 2) / 98 * 26 + 1);
        ctx.arc(gameW / 2, gameH / 2, effectR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore(); // 清除敵人

        game.circles.forEach(function (circle, idx) {
          if (effectR > circle.axisRotateR) {
            enemyMethods.dieEffect(circle.r, originalPos(circle.axisRotateR, circle.axisRotateAngle).x, originalPos(circle.axisRotateR, circle.axisRotateAngle).y, '245, 175, 95');
            game.circles.splice(idx, 1);
          }
        });
        game.triangles.forEach(function (triangle, idx) {
          if (effectR > triangle.axisRotateR) {
            enemyMethods.dieEffect(triangle.r, originalPos(triangle.axisRotateR, triangle.axisRotateAngle).x, originalPos(triangle.axisRotateR, triangle.axisRotateAngle).y, '54, 118, 187');
            game.triangles.splice(idx, 1);
          }
        });
        game.polygons.forEach(function (polygon, idx) {
          if (effectR > polygon.axisRotateR.whole) {
            if (polygon.HP.whole) {
              var polygonWholeR = (34 + 21) / 2;
              enemyMethods.dieEffect(polygonWholeR, polygon.originalPos('whole').x, polygon.originalPos('whole').y, '231, 70, 93');
            } else {
              if (polygon.HP.big) {
                var polygonBigR = (34 + 22) / 2;
                enemyMethods.dieEffect(polygonBigR, polygon.originalPos('big').x, polygon.originalPos('big').y, '231, 70, 93');
                game.polygons.splice(idx, 1);
              }

              if (polygon.HP.small) {
                var polygonSmallR = (23 + 21) / 2;
                enemyMethods.dieEffect(polygonSmallR, polygon.originalPos('small').x, polygon.originalPos('small').y, '231, 70, 93');
                game.polygons.splice(idx, 1);
              }
            }

            game.polygons.splice(idx, 1);
          }
        });
        game.subTriangles.forEach(function (subTriangle, idx) {
          if (effectR > subTriangle.axisRotateR) {
            game.subTriangles.splice(idx, 1);
          }
        });

        if (crackdownTime < 100) {
          requestAnimationFrame(effect);
        }
      };

      requestAnimationFrame(effect);
    } // 恢復一個愛心命

  }, {
    key: "recoverOneHeart",
    value: function recoverOneHeart() {
      // this.HP += 3;
      var heartWrapper = document.getElementById('heart-wrapper');
      var heart = document.createElement('DIV');
      heart.classList.add('panel__game-heart');
      heartWrapper.insertBefore(heart, heartWrapper.firstChild);
    }
  }, {
    key: "displayPropInfo",
    value: function displayPropInfo(propName, lastTime) {
      if (propName === 'crackdown' || propName === 'heart') {
        return;
      }

      prop.style.opacity = 1;
      propImg.src = "../../src/assets/".concat(propName, "--panel.svg");
      lastTime = lastTime / 1000;
      propLastTime.textContent = lastTime;
      setTimeout(function minusLastTime() {
        lastTime -= 1;
        propLastTime.textContent = lastTime;

        if (!lastTime) {
          prop.style.opacity = 0;
        }

        setTimeout(minusLastTime, 1000);
      }, 1000);
    }
  }]);

  return Shooter;
}(); // 以 x 為底的 y 的對數：logxy


function baseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
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
      rotateAngle: 0,
      waveLength: 40,
      waveFreq: 0.2,
      waveAmp: 4,
      waveFlow: 4
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

      if (!game.shooter.judgeStatus('wave')) {
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
        ctx.fill(); // 如果 shooter 狀態為 wave
      } else {
        this.drawWaveBullet();
      }

      ctx.restore();
    }
  }, {
    key: "update",
    value: function update(bulletIdx) {
      var _this12 = this;

      // 移動子彈
      this.axisRotateR += this.v; // 判斷子彈為哪一類型

      var anglePanFn;
      var shotRRangeFn; // 一般類型

      if (!game.shooter.judgeStatus('wave')) {
        var bulletMoveLength = this.axisRotateR + this.bodyLength; // 判斷子彈有無射中圓形

        game.circles.forEach(function (circle, cirIdx) {
          anglePanFn = function anglePanFn() {
            return Math.asin(circle.r / circle.axisRotateR);
          };

          shotRRangeFn = function shotRRangeFn() {
            // const bulletMoveLength = this.axisRotateR + this.bodyLength;
            return bulletMoveLength >= circle.axisRotateR - circle.r / 2 && bulletMoveLength <= circle.axisRotateR + circle.r / 2;
          };

          _this12.attackEnemy(circle, cirIdx, game.circles, bulletIdx, anglePanFn, shotRRangeFn, '245, 175, 95');
        }); // 判斷子彈有無射中三角形

        game.triangles.forEach(function (triangle, triIdx) {
          // const lengthX = triangle.axisRotateR.x * Math.cos(triangle.axisRotateAngle * degToPi);
          // const lengthY = triangle.axisRotateR.y * Math.sin(triangle.axisRotateAngle * degToPi);
          // const length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);
          anglePanFn = function anglePanFn() {
            var lengthX = triangle.axisRotateR + triangle.r / 2;
            var lengthY = triangle.r / 2 * Math.sqrt(3);
            return Math.atan2(lengthY, lengthX);
          };

          shotRRangeFn = function shotRRangeFn() {
            // const bulletMoveLength = this.axisRotateR + this.bodyLength;
            return bulletMoveLength >= triangle.axisRotateR && bulletMoveLength <= triangle.axisRotateR + triangle.r / 2;
          };

          _this12.attackEnemy(triangle, triIdx, game.triangles, bulletIdx, anglePanFn, shotRRangeFn, '54, 118, 187');
        }); // 判斷子彈有無射中多邊形

        game.polygons.forEach(function (polygon, polyIdx) {
          // 當多邊形未分裂
          if (polygon.HP.whole) {
            shotRRangeFn = function shotRRangeFn() {
              // const bulletMoveLength = this.axisRotateR + this.bodyLength;
              var sideA = polygon.axisRotateR.whole;
              return bulletMoveLength >= sideA && bulletMoveLength <= sideA + 9;
            };

            _this12.attackPolygon(polygon, polyIdx, 'whole', 34, 21, 360 - (202 + 75), 8 + 75, 75, bulletIdx, shotRRangeFn, '231, 70, 93');
          } else {
            // 當多邊形分裂
            // 大分裂
            if (polygon.HP.big) {
              shotRRangeFn = function shotRRangeFn() {
                // const bulletMoveLength = this.axisRotateR + this.bodyLength;
                var sideA = polygon.axisRotateR.big;
                return bulletMoveLength >= sideA + 8 && bulletMoveLength <= sideA + 16;
              };

              _this12.attackPolygon(polygon, polyIdx, 'big', 34, 23, 202 + 44 - 180, 180 - (70 + 44), 44, bulletIdx, shotRRangeFn, '231, 70, 93');
            } // 小分裂


            if (polygon.HP.small) {
              shotRRangeFn = function shotRRangeFn() {
                // const bulletMoveLength = this.axisRotateR + this.bodyLength;
                var sideA = polygon.axisRotateR.small;
                return bulletMoveLength >= sideA + 8 && bulletMoveLength <= sideA + 16;
              };

              _this12.attackPolygon(polygon, polyIdx, 'small', 22, 23, 255 + 17.5 - 180, 180 - (70 + 17.5), 17.5, bulletIdx, shotRRangeFn, '231, 70, 93');
            }
          }
        });
      } else {
        // FIXME 多邊形判斷不準
        // 波狀類型
        // 有無射中圓形
        game.circles.forEach(function (circle, cirIdx) {
          anglePanFn = function anglePanFn() {
            return Math.asin(circle.r / circle.axisRotateR);
          };

          shotRRangeFn = function shotRRangeFn() {
            return _this12.axisRotateR >= circle.axisRotateR - circle.r / 2 && _this12.axisRotateR <= circle.axisRotateR + circle.r / 2;
          };

          _this12.attackEnemy(circle, cirIdx, game.circles, bulletIdx, anglePanFn, shotRRangeFn, '245, 175, 95', 'wave');
        }); // 有無射中三角形

        game.triangles.forEach(function (triangle, triIdx) {
          anglePanFn = function anglePanFn() {
            var lengthX = triangle.axisRotateR + triangle.r / 2;
            var lengthY = triangle.r / 2 * Math.sqrt(3);
            return Math.atan2(lengthY, lengthX);
          };

          shotRRangeFn = function shotRRangeFn() {
            return _this12.axisRotateR >= triangle.axisRotateR && _this12.axisRotateR <= triangle.axisRotateR + triangle.r / 2;
          };

          _this12.attackEnemy(triangle, triIdx, game.triangles, bulletIdx, anglePanFn, shotRRangeFn, '54, 118, 187', 'wave');
        }); // 有無射中多邊形

        game.polygons.forEach(function (polygon, polyIdx) {
          // 當多邊形未分裂
          if (polygon.HP.whole) {
            shotRRangeFn = function shotRRangeFn() {
              var sideA = polygon.axisRotateR.whole;
              return _this12.axisRotateR >= sideA && _this12.axisRotateR <= sideA + 9;
            };

            _this12.attackPolygon(polygon, polyIdx, 'whole', 34, 21, 360 - (202 + 75), 8 + 75, 75, bulletIdx, shotRRangeFn, '231, 70, 93', 'wave');
          } else {
            // 當多邊形分裂
            // 大分裂
            if (polygon.HP.big) {
              shotRRangeFn = function shotRRangeFn() {
                var sideA = polygon.axisRotateR.big;
                return _this12.axisRotateR >= sideA + 8 && _this12.axisRotateR <= sideA + 16;
              };

              _this12.attackPolygon(polygon, polyIdx, 'big', 34, 23, 202 + 44 - 180, 180 - (70 + 44), 44, bulletIdx, shotRRangeFn, '231, 70, 93', 'wave');
            } // 小分裂


            if (polygon.HP.small) {
              shotRRangeFn = function shotRRangeFn() {
                var sideA = polygon.axisRotateR.small;
                return _this12.axisRotateR >= sideA + 8 && _this12.axisRotateR <= sideA + 16;
              };

              _this12.attackPolygon(polygon, polyIdx, 'small', 22, 23, 255 + 17.5 - 180, 180 - (70 + 17.5), 17.5, bulletIdx, shotRRangeFn, '231, 70, 93', 'wave');
            } // 移除大小分裂效果
            // if (!polygon.HP.big) {
            //   enemyMethods.dieEffect(enemy, enemy.r, colorRGB);
            // }
            // 如果大小分裂都被擊斃了，那就移除此多邊形


            if (!polygon.HP.big && !polygon.HP.small) {
              game.polygons.splice(polyIdx, 1); // 電池加一

              game.batteryNum += 1;
              batteryNum.textContent = game.batteryNum;
            }
          }
        });
      } // 當子彈超出邊界


      this.beyondBoundary(bulletIdx);
    } // 繪製波狀子彈

  }, {
    key: "drawWaveBullet",
    value: function drawWaveBullet() {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.72)';
      ctx.shadowBlur = 2; // 正半波

      ctx.beginPath();

      for (var i = 0; i < this.waveLength; i += 1) {
        var degree = i * this.waveFreq + time / this.waveFlow;
        ctx.lineTo(this.axisRotateR + this.waveAmp * Math.sin(degree), i);
      }

      ctx.stroke(); // 負半波

      ctx.beginPath();

      for (var _i2 = 0; _i2 < this.waveLength; _i2 += 1) {
        var _degree = _i2 * this.waveFreq + time / this.waveFlow;

        ctx.lineTo(this.axisRotateR + this.waveAmp * Math.sin(_degree), -_i2);
      }

      ctx.stroke();
    } // 攻擊敵人（圓形、三角形）

  }, {
    key: "attackEnemy",
    value: function attackEnemy(enemy, enemyIdx, enemies, bulletIdx, anglePanFn, shotRRangeFn, colorRGB) {
      var type = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'ordinary';

      /**
       * 射中角度範圍
       * 圓形：取得兩個外切線所構成角度的一半
       * 三角形：取得射中角度範圍的一半
       */
      var enemyAnglePan = anglePanFn();
      var enemyAngleMinus = enemy.axisRotateAngle % 360 * degToPi - enemyAnglePan;
      var enemyAngleAdd = enemy.axisRotateAngle % 360 * degToPi + enemyAnglePan;
      var shotAngleRange = this.judgeShotAngleRange(enemyAngleMinus, enemyAngleAdd, type); // 射中距離範圍

      var shotRRange = shotRRangeFn(); // 判斷子彈有無射中敵人

      if (shotAngleRange && shotRRange) {
        // 移除子彈
        game.shooter.bullets.splice(bulletIdx, 1); // 扣敵人 1 生命值

        enemy.HP -= 1;

        if (!enemy.HP) {
          // 若生命值 0，移除敵人
          enemies.splice(enemyIdx, 1); // 移除效果

          enemyMethods.dieEffect(enemy.r, originalPos(enemy.axisRotateR, enemy.axisRotateAngle).x, originalPos(enemy.axisRotateR, enemy.axisRotateAngle).y, colorRGB); // 電池加一

          game.batteryNum += 1;
          batteryNum.textContent = game.batteryNum;
        }
      }
    } // 攻擊多邊形

  }, {
    key: "attackPolygon",
    value: function attackPolygon(polygon, polyIdx, form, sideB1Len, sideB2Len, angleAB1, angleAB2, rotateAngleJudge, bulletIdx, shotRRangeFn) {
      var type = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 'ordinary';
      var polyAxisRotateAngle = polygon.axisRotateAngle[form];
      var polyRotate = polygon.rotate[form]; // 取得兩側射中最大角度

      var sideA = polygon.axisRotateR[form];
      var sideB1 = sideB1Len;
      var sideB2 = sideB2Len;
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

      var sideC1 = cosineFormula(sideA, sideB1, angleAB1);
      var sideC2 = cosineFormula(sideA, sideB2, angleAB2); // 當多邊形的 axisRotateAngle、rotate 不同，要加上與減去的角度也不一樣

      var bottomJudge = polyAxisRotateAngle <= 180 && (polyRotate % 360 < rotateAngleJudge || polyRotate % 360 >= rotateAngleJudge + 180);
      var topJudge = polyAxisRotateAngle > 180 && (polyRotate % 360 >= rotateAngleJudge || polyRotate % 360 < rotateAngleJudge + 180);
      var angleB1;
      var angleB2;

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


      var polyAngleMinus = polyAxisRotateAngle * degToPi - angleB1;
      var polyAngleAdd = polyAxisRotateAngle * degToPi + angleB2;
      var shotAngleRange = this.judgeShotAngleRange(polyAngleMinus, polyAngleAdd, type); // 射中距離範圍

      var shotRRange = shotRRangeFn(); // 判斷子彈有無射中多邊形

      if (shotAngleRange && shotRRange) {
        // 移除子彈
        game.shooter.bullets.splice(bulletIdx, 1); // 扣 1 生命值

        polygon.HP[form] -= 1; // 若大或小分裂生命值為 0

        if (!polygon.HP.big || !polygon.HP.small) {
          // 移除效果
          var polygonR = form === 'big' ? (34 + 22) / 2 : (23 + 21) / 2;
          enemyMethods.dieEffect(polygonR, polygon.originalPos(form).x, polygon.originalPos(form).y, '231, 70, 93');
        } // 如果大小分裂都被擊斃了，那就移除此多邊形


        if (!polygon.HP.big && !polygon.HP.small) {
          game.polygons.splice(polyIdx, 1); // 電池加一

          game.batteryNum += 1;
          batteryNum.textContent = game.batteryNum;
        }
      }
    } // 判斷射中角度範圍

  }, {
    key: "judgeShotAngleRange",
    value: function judgeShotAngleRange(enemyAngleMinus, enemyAngleAdd, type) {
      var shooterRotateAngle = enemyAngleMinus < 0 && this.rotateAngle > Math.PI ? this.rotateAngle - Math.PI * 2 : this.rotateAngle; // 判斷子彈為哪一類型
      // 一般子彈

      if (type !== 'wave') {
        return shooterRotateAngle >= enemyAngleMinus && shooterRotateAngle <= enemyAngleAdd;
      } else {
        // 波狀子彈
        var shooterAnglePan = Math.atan2(this.waveLength, this.axisRotateR);
        var shooterAngleMinus = shooterRotateAngle - shooterAnglePan;
        var shooterAngleAdd = shooterRotateAngle + shooterAnglePan;
        return enemyAngleMinus <= shooterAngleAdd && enemyAngleAdd >= shooterAngleMinus;
      }
    } // 當子彈超出邊界

  }, {
    key: "beyondBoundary",
    value: function beyondBoundary(bulletIdx) {
      /**
       * 856 / 2 = 428
       * 624 / 2 = 312
       * Math.sqrt(428 * 428 + 312 * 312) = 529.6
       */
      if (this.axisRotateR >= 530) {
        game.shooter.bullets.splice(bulletIdx, 1);
      }
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

      ctx.translate(originalPos(this.axisRotateR, this.axisRotateAngle).x, originalPos(this.axisRotateR, this.axisRotateAngle).y); // ctx.scale(0.4, 0.4);

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
      var _this13 = this;

      this.rotate += this.rotateV;

      if (!this.isReproduceMoving) {
        TweenLite.to(this, 0.8, {
          axisRotateAngle: "".concat(this.order === 1 ? '+=' : '-=', "10"),
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            TweenLite.to(_this13, 1.6, {
              axisRotateR: 0,
              ease: Power1.easeIn
            });
          }
        });
        this.isReproduceMoving = true;
      } // 當小三角形撞上 shooter


      enemyMethods.hitShooter(game.subTriangles, idx, 'triangle', this.axisRotateR, this.axisRotateAngle);
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
      p: {
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
      ctx.translate(this.p.x, this.p.y);
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
      // 圓形子彈移動
      this.moveX += this.moveXV; // 子彈擊中 shooter

      enemyMethods.bulletAttackShooter(this, idx, arr);
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
      // 三角子彈移動
      this.moveX += this.moveXV; // 子彈擊中 shooter

      enemyMethods.bulletAttackShooter(this, idx, arr, 37.8); // 當子彈超出邊界

      this.beyondBoundary(idx, arr);
    } // 當子彈超出邊界

  }, {
    key: "beyondBoundary",
    value: function beyondBoundary(idx, arr) {
      // Math.sqrt(856 * 856 + 624 * 624) = 1059.3
      if (this.moveX <= -1060) {
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
    y: 9
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
}

function originalPos(axisRotateR, axisRotateAngle) {
  return {
    x: gameW / 2 + axisRotateR * Math.cos(axisRotateAngle * degToPi),
    y: gameH / 2 + axisRotateR * Math.sin(axisRotateAngle * degToPi)
  };
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
// canvas.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(evt) {
  if (game.isPause) return;
  mouseMovePos.x = evt.x - ww / 2;
  mouseMovePos.y = evt.y - wh / 2;
  var angle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
  mouseMoveAngle = angle < 0 ? angle + 2 * Math.PI : angle; // mouseMoveAngle = Math.atan2(mouseMovePos.y, mouseMovePos.x);
}

; // canvas.addEventListener('click', handleClick);
// window.addEventListener('keyup', handleKeyup);

var beforeShootTime = new Date();

function handleClick() {
  game.shooter.shoot();
}

;

function handleKeyup(evt) {
  if (evt.key === 's') {
    game.shooter.shoot();
  }

  if (evt.key === 'p') {
    game.pauseGame();
  }
} // function handleMouseUp(evt) {
//   mouseUpPos = mouseMovePos.clone();
// }
// function handleMouseDown(evt) {
//   mouseDownPos = mouseMovePos.clone();
// }
//# sourceMappingURL=index.js.map

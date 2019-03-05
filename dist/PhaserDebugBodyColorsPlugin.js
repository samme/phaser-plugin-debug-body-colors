(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('phaser-plugin-debug-body-colors', ['exports', 'phaser'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('phaser'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Phaser);
    global.phaserPluginDebugBodyColors = mod.exports;
  }
})(this, function (exports, _phaser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _phaser2 = _interopRequireDefault(_phaser);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var COLOR_DISABLED = 0x666666;
  var COLOR_BLOCKED = 0xff0000;
  var COLOR_TOUCHING = 0xffff00;
  var COLOR_EMBEDDED = 0x0099ff;
  var COLOR_DEFAULT = 0xff00ff;

  var DebugBodyColorsPlugin = function (_Phaser$Plugins$Scene) {
    _inherits(DebugBodyColorsPlugin, _Phaser$Plugins$Scene);

    function DebugBodyColorsPlugin() {
      _classCallCheck(this, DebugBodyColorsPlugin);

      return _possibleConstructorReturn(this, (DebugBodyColorsPlugin.__proto__ || Object.getPrototypeOf(DebugBodyColorsPlugin)).apply(this, arguments));
    }

    _createClass(DebugBodyColorsPlugin, [{
      key: 'boot',
      value: function boot() {
        this.systems.events.on('postupdate', this.sceneUpdate, this).once('destroy', this.sceneDestroy, this);
      }
    }, {
      key: 'sceneUpdate',
      value: function sceneUpdate() {
        this.systems.arcadePhysics.world.bodies.iterate(this.updateBody, this);
      }
    }, {
      key: 'sceneDestroy',
      value: function sceneDestroy() {
        this.systems.events.off('postupdate', this.sceneUpdate, this).off('destroy', this.sceneDestroy, this);

        this.gameObjects = null;
        this.scene = null;
        this.systems = null;
      }
    }, {
      key: 'updateBody',
      value: function updateBody(body) {
        body.debugBodyColor = this.getColor(body);
      }
    }, {
      key: 'getColor',
      value: function getColor(body) {
        switch (false) {
          case body.enable:
            return this.disabled;
          case body.blocked.none:
            return this.blocked;
          case body.touching.none:
            return this.touching;
          case !body.embedded:
            return this.embedded;
          default:
            return this.default;
        }
      }
    }]);

    return DebugBodyColorsPlugin;
  }(_phaser2.default.Plugins.ScenePlugin);

  exports.default = DebugBodyColorsPlugin;


  Object.assign(DebugBodyColorsPlugin.prototype, {
    blocked: COLOR_BLOCKED,
    default: COLOR_DEFAULT,
    disabled: COLOR_DISABLED,
    embedded: COLOR_EMBEDDED,
    touching: COLOR_TOUCHING
  });

  if (typeof window !== 'undefined') {
    window.PhaserDebugBodyColorsPlugin = DebugBodyColorsPlugin;
  }
});

//# sourceMappingURL=PhaserDebugBodyColorsPlugin.js.map
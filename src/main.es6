import Phaser from 'phaser';

const COLOR_DISABLED = 0x660000;
const COLOR_BLOCKED = 0xff0000;
const COLOR_TOUCHING = 0xffff00;
const COLOR_EMBEDDED = 0x0099ff;
const COLOR_DEFAULT = 0xff00ff;

export default class DebugBodyColorsPlugin extends Phaser.Plugins.ScenePlugin {

  boot () {
    this.systems.events
      .on('postupdate', this.sceneUpdate, this)
      .once('destroy', this.sceneDestroy, this);
  }

  sceneUpdate () {
    this.systems.arcadePhysics.world.bodies.iterate(this.updateBody, this);
  }

  sceneDestroy () {
    this.systems.events
      .off('postupdate', this.sceneUpdate, this)
      .off('destroy', this.sceneDestroy, this);

    this.gameObjects = null;
    this.scene = null;
    this.systems = null;
  }

  updateBody (body) {
    body.debugBodyColor = this.getColor(body);
  }

  getColor (body) {
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

}

Object.assign(DebugBodyColorsPlugin.prototype, {
  blocked: COLOR_BLOCKED,
  default: COLOR_DEFAULT,
  disabled: COLOR_DISABLED,
  embedded: COLOR_EMBEDDED,
  touching: COLOR_TOUCHING
});

Phaser.Plugins.DebugBodyColorsPlugin = DebugBodyColorsPlugin;

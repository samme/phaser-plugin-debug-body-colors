import Phaser from "phaser";
const COLOR_DISABLED = 6710886;
const COLOR_BLOCKED = 16711680;
const COLOR_TOUCHING = 16776960;
const COLOR_EMBEDDED = 39423;
const COLOR_DEFAULT = 16711935;
class DebugBodyColorsPlugin extends Phaser.Plugins.ScenePlugin {
  boot() {
    this.systems.events.on("update", this.sceneUpdate, this).once("destroy", this.sceneDestroy, this);
  }
  sceneUpdate() {
    for (const body of this.systems.arcadePhysics.world.bodies.entries) {
      this.updateBody(body);
    }
  }
  sceneDestroy() {
    this.systems.events.off("update", this.sceneUpdate, this).off("destroy", this.sceneDestroy, this);
    this.gameObjects = null;
    this.scene = null;
    this.systems = null;
  }
  updateBody(body) {
    body.debugBodyColor = this.getColor(body);
  }
  getColor(body) {
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
export {
  DebugBodyColorsPlugin as default
};

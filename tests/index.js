console.assert(Phaser, 'Phaser');

console.assert(Phaser.Plugins.DebugBodyColorsPlugin, 'Phaser.Plugins.DebugBodyColorsPlugin');

var scene = {

  preload: function () {
    this.load.setPath('assets/');
    this.load.image('crate');
    this.load.image('platform');
  },

  create: function () {
    var group = this.physics.add.group({
      key: 'crate',
      frameQuantity: 12,
      collideWorldBounds: true,
      bounceX: 0.5,
      bounceY: 0.5
    });

    Phaser.Actions.SetAlpha(group.getChildren(), 0.5);
    Phaser.Actions.RandomRectangle(group.getChildren(), this.physics.world.bounds);

    var platform = this.physics.add.staticImage(400, 300, 'platform').setAlpha(0.5);

    this.physics.add.collider(group);
    this.physics.add.collider(group, platform);

    this.input.on('pointerdown', function () {
      this.scene.restart();
    }, this);
  }

};

var config = {
  type: Phaser.AUTO,
  antialias: false,
  roundPixels: true,
  width: 800,
  height: 600,
  scene: scene,
  plugins: {
    scene: [{ key: 'DebugBodyColorsPlugin', plugin: Phaser.Plugins.DebugBodyColorsPlugin, mapping: 'debugBodyColors' }]
  },
  physics: {
    default: 'arcade',
    arcade: { debug: true, gravity: { y: 300 }, debugShowVelocity: false }
  }
};

window.game = new Phaser.Game(config);

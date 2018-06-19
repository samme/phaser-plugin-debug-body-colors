console.assert(Phaser, 'Phaser');

console.assert(Phaser.Plugins.DebugBodyColorsPlugin, 'Phaser.Plugins.DebugBodyColorsPlugin');

var scene = {

  preload: function () {
    if (this.load.totalComplete) return;

    this.load.setPath('assets/');
    this.load.image('cavern');
    this.load.image('blue');
    this.load.spritesheet('face', 'metalface78x92.png', { frameWidth: 78, frameHeight: 92 });
  },

  create: function () {
    this.anims.create({ key: 'blink', frames: this.anims.generateFrameNumbers('face'), frameRate: 3, yoyo: true });

    this.add.image(400, 300, 'cavern');

    var staticGroup = this.physics.add.staticGroup({
      key: 'face',
      frameQuantity: 4,
      setXY: { x: 150, y: 300, stepX: 150 }
    });

    var group = this.physics.add.group({
      key: 'blue',
      frameQuantity: 12,
      collideWorldBounds: true,
      bounceX: 0.25,
      bounceY: 0.25,
      dragX: 6,
      dragY: 6,
      velocityX: 0,
      velocityY: 60
    });

    Phaser.Actions.RandomRectangle(group.getChildren(), this.physics.world.bounds);

    this.physics.add.collider(group);

    this.physics.add.collider(group, staticGroup, function (gem, statue) {
      statue.play('blink', true);
    });

    this.input.on('pointerdown', this.scene.restart.bind(this.scene));
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

import Phaser from 'phaser';
import DebugBodyColorsPlugin from './src/DebugBodyColorsPlugin.js';

import cavern from './tests/assets/cavern.png';
import blue from './tests/assets/blue.png';
import face from './tests/assets/metalface78x92.png';

class Examples extends Phaser.Scene {
  constructor() {
    super({ key: 'Examples' });
  }

  init() {
    const { world} = this.physics;
    const {debugGraphic} = world;

    // world.setBounds(50, 50, 700, 500);

    if (debugGraphic) {
      debugGraphic.defaultStrokeWidth = 2;
    }
  }

  preload() {
    this.load.image('cavern', cavern);
    this.load.image('blue', blue);
    this.load.spritesheet('face', face, { frameWidth: 78, frameHeight: 92 });
  }

  create() {
    this.anims.create({ key: 'blink', frames: this.anims.generateFrameNumbers('face'), frameRate: 3, yoyo: true });

    this.add.image(400, 300, 'cavern');

    const staticGroup = this.physics.add.staticGroup({
      key: 'face',
      frameQuantity: 4,
      setXY: { x: 150, y: 300, stepX: 150 }
    });

    const group = this.physics.add.group({
      defaultKey: 'blue',
      collideWorldBounds: true,
      bounceX: 0.2,
      bounceY: 0.2,
      dragX: 6,
      dragY: 6,
      velocityX: 0,
      velocityY: 60
    });

    const {bounds} = this.physics.world;

    for (let i = 0; i < 12; i++) {
      const { x, y } = bounds.getRandomPoint();
      group.create(x, y);
    }

    this.physics.add.collider(group);

    this.physics.add.collider(group, staticGroup, function (gem, statue) {
      statue.play('blink', true);
    });

    this.text = this.add.text();

    this.renderer.snapshot(function (image) {
      console.log('snapshot');

      document.body.appendChild(image);
    });

    this.input.on('pointerdown', () => { this.scene.restart(); });
  }

  update() {
    this.text.text = `Frame ${this.game.getFrame()} | Physics Steps ${this.physics.world.stepsLastFrame}`;
  }
}

const gameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  width: 800,
  height: 600,
  scene: Examples,
  plugins: {
    scene: [{ key: 'DebugBodyColorsPlugin', plugin: DebugBodyColorsPlugin, mapping: 'debugBodyColors' }]
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      debugShowVelocity: true,
      fps: 100,
      gravity: { y: 300 },
      timeScale: 1
    }
  }
};

window.game = new Phaser.Game(gameConfig);

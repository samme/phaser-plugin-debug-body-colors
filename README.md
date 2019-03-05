![](https://samme.github.io/phaser-plugin-debug-body-colors/preview.png)

Phaser 3 Debug Body Colors Plugin
=================================

```javascript
new Phaser.Game({
  plugins: {
    scene: [{
      key: 'DebugBodyColorsPlugin',
      plugin: PhaserDebugBodyColorsPlugin,
      mapping: 'debugBodyColors'
    }]
  },
  physics {
    arcade: { debug: true }
  }
});
```

Colors
------

- [disabled][0] — gray
- [blocked][1], not disabled — red
- [touching][2], not disabled or blocked — yellow
- [embedded][3], not disabled, blocked or touching — aqua
- not disabled, blocked, touching, or embedded — violet

[0]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#enable
[1]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#blocked
[2]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#touching
[3]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#embedded

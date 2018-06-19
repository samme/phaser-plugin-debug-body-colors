![](https://samme.github.io/phaser-plugin-debug-body-colors/preview.png)

Phaser 3 Debug Body Colors Plugin
=================================

```javascript
new Phaser.Game({
  plugins: {
    scene: [{
      key: 'DebugBodyColorsPlugin',
      plugin: Phaser.Plugins.DebugBodyColorsPlugin,
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

- [blocked][1] — red
- [touching][2], not blocked — yellow
- [embedded][3], not blocked or touching — aqua
- not blocked, touching, or embedded — violet

[1]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#blocked
[2]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#touching
[3]: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#embedded

![](https://samme.github.io/phaser-plugin-debug-body-colors/preview.png)

Colors Arcade Physics bodies by collision state.

| State                                            | Color  |
|--------------------------------------------------|--------|
| [disabled][0]                                    | gray   |
| [blocked][1], not disabled                       | red    |
| [touching][2], not disabled or blocked           | yellow |
| [embedded][3], not disabled, blocked or touching | aqua   |
| not disabled, blocked, touching, or embedded     | violet |

- [Examples](https://codepen.io/collection/yyBZBZ?grid_type=grid)

UMD
---

```html
<!-- after phaser.js -->
<script src="https://cdn.jsdelivr.net/npm/phaser-plugin-debug-body-colors@4.0.0"></script>
```

```javascript
/* global Phaser, PhaserDebugBodyColorsPlugin */

new Phaser.Game({
  plugins: {
    scene: [
      { key: 'DebugBodyColorsPlugin', plugin: PhaserDebugBodyColorsPlugin, mapping: 'debugBodyColors' }
    ]
  },
  physics: {
    arcade: { debug: true }
  }
});
```

Quick load
----------

```js
function preload () {
  this.load.scenePlugin('PhaserDebugBodyColorsPlugin', 'https://cdn.jsdelivr.net/npm/phaser-plugin-debug-body-colors@4.0.0');
}
```

Module
------

```javascript
import DebugBodyColorsPlugin from 'phaser-plugin-debug-body-colors';

new Phaser.Game({
  plugins: {
    scene: [
      { key: 'DebugBodyColorsPlugin', plugin: DebugBodyColorsPlugin, mapping: 'debugBodyColors' }
    ]
  },
  physics: {
    arcade: { debug: true }
  }
});
```

[0]: https://docs.phaser.io/api-documentation/class/physics-arcade-body#enable
[1]: https://docs.phaser.io/api-documentation/class/physics-arcade-body#blocked
[2]: https://docs.phaser.io/api-documentation/class/physics-arcade-body#touching
[3]: https://docs.phaser.io/api-documentation/class/physics-arcade-body#embedded

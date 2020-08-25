---
title: Add git commit hash using webpack
title-es: Añadir hash del commit usando webpack
tags:
  - Javascript
  - Git
---

```js
// Get hash using command-line
let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();

// Add to webpack plugins a new Plugin
...
plugins: [
    new webpack.DefinePlugin({
      __COMMIT_HASH__: JSON.stringify(commitHash),
    })
  ]
...

// Add to .eslintrc
globals: { __COMMIT_HASH__: true }
```

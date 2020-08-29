---
title: Traverse directory recursively with depth option
title-es: Recorrer un directorio de forma recursiva con un máximo de profundidad
tags:
  - Javascript
createdAt: 2020-08-25T19:41:17.100Z
updatedAt: 2020-08-25T19:41:17.100Z
---

```js
function getFiles(dirPath, currentLevel, maxLevel) {
  if (currentLevel > maxLevel) {
    return
  } else {
    fs.readdirSync(dirPath).forEach(function (file) {
      let filepath = path.join(dirPath, file)
      let stat = fs.statSync(filepath)
      if (stat.isDirectory()) {
        getFiles(filepath, currentLevel + 1, maxLevel)
      } else {
        console.info(filepath + '\n')
      }
    })
  }
}
```

---
title: Copy to clipboard from variable natively
title-es: Copiar al portapapeles de forma nativa
tags:
    - Javascript
createdAt: 2020-08-29T13:29:11.015Z
updatedAt: 2020-08-29T14:05:34.956Z
---

```js{5}
if (!navigator.clipboard) {
    console.error('Clipboard feature not supported in this browser')
    return
}
await navigator.clipboard.writeText(textVar)
```
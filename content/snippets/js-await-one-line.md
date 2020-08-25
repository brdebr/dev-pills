---
title: Await X milliseconds in one line using async/await
title-es: Esperar X milisegundos en una línea usando async/await
tags:
    - Javascript
---

```js{1}
await new Promise(resolve => setTimeout(resolve, 1000));
```
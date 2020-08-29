---
title: Await X milliseconds in one line using async/await
title-es: Esperar X milisegundos en una línea usando async/await
tags:
    - Javascript
createdAt: 2020-08-25T19:41:53.700Z
updatedAt: 2020-08-25T19:41:53.700Z
---

```js{1}
await new Promise(resolve => setTimeout(resolve, 1000));
```
---
title: Format a number of bytes to human readable text
title-es: Darle un formato legible a un número de bytes
tags:
    - Javascript
createdAt: 2020-09-02T17:31:39.482Z
updatedAt: 2020-09-02T17:35:20.164Z
---

```ts
function bytesToHuman(bytes: number) {
    let i = Math.floor(Math.log(bytes) / Math.log(1024));
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    return `${(bytes / Math.pow(1024, i)).toFixed(2) * 1} ${sizes[i]}`;
}
```

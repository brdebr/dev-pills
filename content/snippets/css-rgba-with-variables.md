---
title: Color RGBA with variables
title-es: Color RGBA con variables
tags:
    - CSS
createdAt: 2020-08-27T20:48:26.400Z
updatedAt: 2020-08-27T20:48:26.400Z
---

```css
--colorB: 25, 58, 154;
--color1: rgba(var(--colorB), 0.2);
--color2: rgba(var(--colorB), 0.14);
--color3: rgba(var(--colorB), 0.12);
box-shadow:
    0px 8px 10px -5px var(--color1),
    0px 16px 24px 2px var(--color2),
    0px 6px 30px 5px var(--color3)
    !important;
```
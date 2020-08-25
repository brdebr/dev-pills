---
title: Create a .patch file from the last commit
title-es: Crear un archivo .patch del último commit
tags:
    - Git
---

```
$ git format-patch HEAD~1 --stdout > patchfile.patch
```
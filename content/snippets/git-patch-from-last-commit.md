---
title: Create a .patch file from the last commit
title-es: Crear un archivo .patch del último commit
tags:
    - Git
createdAt: 2020-08-25T19:41:56.500Z
updatedAt: 2020-08-25T19:41:56.500Z
---

```shell
$ git format-patch HEAD~1 --stdout > patchfile.patch
```
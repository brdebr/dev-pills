---
title: Send logs from tomcat console to a file, also known as "catalina.out"
title-es: Mandar la información de la consola de tomcat a un archivo, también conocido como "catalina.out"
tags:
    - Java
    - Tomcat
createdAt: 2020-09-06T21:50:41.660Z
updatedAt: 2020-09-06T21:57:27.447Z
---

Replace this at startup.bat:

```
call "%EXECUTABLE%" start %CMD_LINE_ARGS%
```

With:

```
call "%EXECUTABLE%" run >..\logs\outputfile.log 2>&1 start %CMD_LINE_ARGS% run >..\logs\outputfile.log 2>&1
```

Logs will go to that file, but won't be visible in the console
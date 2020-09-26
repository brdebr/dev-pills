---
title: Send logs from tomcat console to a file, also known as "catalina.out"
title-es: Mandar la información de la consola de tomcat a un archivo, también conocido como "catalina.out"
tags:
    - Java
    - Tomcat
createdAt: 2020-09-06T21:50:41.660Z
updatedAt: 2020-09-14T18:57:27.447Z
---

Replace this at **startup.bat:**

```batch
call "%EXECUTABLE%" start %CMD_LINE_ARGS%
```

With:

```batch
SET isodt=%date:~6,4%-%date:~3,2%-%date:~0,2%
SET isodt=%isodt: =0%
SET logFile=..\logs\console.%isodt%.log

powershell "%EXECUTABLE% %CMD_LINE_ARGS% run 2>&1 | ForEach-Object ToString | Tee-Object %logFile% -Append"
```
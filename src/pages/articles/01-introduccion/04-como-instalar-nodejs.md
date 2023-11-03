---
articleName : Guía para instalar Node.js y NPM

# Para las Cards

iconName: box
summary : Echa un vistazo a la instalación y configuración de Nodejs y NPM con esta guía detallada 

# Metadatos

layout: ../../../layout/ArticleLayout.astro
title: Guía paso a paso para instalar y configurar Node.js y NPM en Windows | ILoveJS
description: Echa un vistazo a la instalación y configuración de Nodejs con esta detallada guía de programación. Tanto si estás empezando, como si eres un programador experimentado, esta guía te llevará a través del proceso con facilidad.
keywords : ["tutorial de programacion","como instalar nodejs","configurar nodejs","como instalar npm","como configurar npm","tutorial de nodejs","guia de nodejs"]

# Adjuntar

author: Juan Villegas
pubDate: 2023-11-03
---

# Guía para instalar y configurar Node.js y NPM

En esta guía, aprenderás cómo instalar y configurar Node.js en windows. Utilizar Node.js facilita la depuración del código y la visualización de resultados en la consola, en contraste con la necesidad de alternar entre pantallas y abrir las herramientas de desarrollo del navegador.

Además en el proceso también instalaremos *NPM (node package manager)*, que nos permitirá instalar un sin fin de bibliotecas que forman parte del repositorio open source más grande que hay.

## Como Descargar e Instalar Node.js

El primer paso es dirigirse al [sitio web oficial de Node.js](https://nodejs.org/en). Una vez allí, sigue los siguientes pasos.

Haz clic en el recuadro marcado en rojo para descargar la versión *LTS (Long Term Support)*. Esta elección garantiza que recibirás actualizaciones regulares, que incluyen correcciones de errores y mejoras de seguridad, entre otras.

![home page de nodejs](/articles/img/como-instalar-nodejs-y-npm/node_web_screen.png)

Una vez finalizada la descarga, ejecuta el instalador de Node.js. Entonces deberías ver el asistente de instalación. 

Haz clic en el botón **Next**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_00.png" style="margin: 3rem 0;"/>

Acepta los términos y condiciones de uso y continúa haciendo clic en el botón **Next**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_01.png" style="margin: 3rem 0;"/>

A continuación, puedes elegir la ruta de instalación de Node.js. Si la ruta por defecto es adecuada para ti, puedes dejarla así. Si deseas cambiarla, siéntete libre de hacerlo, luego haz clic en el botón **Next**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_02.png" style="margin: 3rem 0;"/>

En este punto, comenzamos a explorar los módulos de instalación que se incluirán con Node.js. 

Continúa haciendo clic en el botón **Next**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_03.png" style="margin: 3rem 0;"/>

La siguiente ventana te brinda la opción de instalar la herramienta "Chocolatey," que facilita el trabajo con bibliotecas de Node.js que utilizan C/C++. Normalmente, esto se requiere para tareas complejas de bajo nivel. En mi caso, no lo necesitaré, así que dejaré esta opción desmarcada.

Continúa haciendo clic en el botón **Next**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_04.png" style="margin: 3rem 0;"/>

Finalmente, llegarás a la pantalla final, que te ofrece una oportunidad para retroceder y cambiar alguna configuración, lo cual no es necesario en nuestro caso.

Continúa haciendo clic en el botón **Install**

<img src="/articles/img/como-instalar-nodejs-y-npm/setup_05.png" style="margin: 3rem 0;"/>

Después de unos segundos, la instalación habrá finalizado. Ahora es el momento de verificar si todo se ha realizado correctamente.

Presiona las teclas **Windows + R** y busca *cmd (abreviatura de CoMmanD)*.

<img src="/articles/img/como-instalar-nodejs-y-npm/search.png" style="margin: 3rem 0;"/>

Una vez que tengas el CMD abierto, ejecuta los siguientes comandos para verificar las versiones de Node.js y NPM que tienes instaladas:

Para verificar la versión de Node.js, ejecuta el siguiente comando:

```shell
node --version
```

Luego, para verificar la versión de NPM, ejecuta este comando:

```shell
npm --version
```

Deberías ver un resultado similar al siguiente:

<img src="/articles/img/como-instalar-nodejs-y-npm/output.png" style="margin: 3rem 0;"/>

## Conclusión

¡Listo! Ahora has instalado Node.js en tu dispositivo Windows. Ahora estás preparado para continuar con los demás módulos de la guía, donde utilizarás Node.js de forma constante para depurar tus scripts.

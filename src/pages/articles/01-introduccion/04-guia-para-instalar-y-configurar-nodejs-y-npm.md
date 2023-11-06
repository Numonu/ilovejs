---
articleName: Guía para instalar Node.js y NPM

# Para las Cards

iconName: box
summary: Echa un vistazo a la instalación y configuración de Nodejs y NPM con esta guía detallada

# Metadatos

layout: ../../../layout/ArticleLayout.astro
title: Guía paso a paso para instalar y configurar Node.js y NPM en Windows | ILoveJS
description: Echa un vistazo a la instalación y configuración de node.js con esta detallada guía de programación. Tanto si estás empezando, como si eres un programador experimentado, esta guía te llevará a través del proceso con facilidad.
keywords:
    [
        "tutorial de programacion",
        "como instalar node.js",
        "configurar node.js",
        "como instalar npm",
        "como configurar npm",
        "tutorial de node.js",
        "guia de node.js",
    ]

# Adjuntar

author: Juan Villegas
pubDate: 2023-11-03
---

# Guía para instalar y configurar Node.js y NPM

En esta guía, aprenderás cómo instalar y configurar Node.js en windows. Utilizar Node.js facilita la depuración del código y la visualización de resultados en la consola, en contraste con la necesidad de alternar entre pantallas y abrir las herramientas de desarrollo del navegador.

Además en el proceso también instalaremos _NPM (node package manager)_, que nos permitirá instalar un sin fin de bibliotecas que forman parte del repositorio open source más grande que hay.

## Como Descargar e Instalar Node.js

El primer paso es dirigirse al <a href="https://nodejs.org/en" target="_blank">sitio web oficial de Node.js</a>. Una vez allí, sigue los siguientes pasos.

Haz clic en el recuadro marcado en rojo para descargar la versión _LTS (Long Term Support)_. Esta elección garantiza que recibirás actualizaciones regulares, que incluyen correcciones de errores y mejoras de seguridad, entre otras.

![sitio web oficial de node.js](/articles/img/como-instalar-nodejs-y-npm/node_web_screen.png)

Una vez finalizada la descarga, ejecuta el instalador de Node.js. Entonces deberías ver el asistente de instalación.

Haz clic en el botón **Next**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_00.png" alt="ayudante de instalacion para node.js"/>

Acepta los términos y condiciones de uso y continúa haciendo clic en el botón **Next**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_01.png" alt="terminos y condiciones al instalar node.js"/>

A continuación, puedes elegir la ruta de instalación de Node.js. Si la ruta por defecto es adecuada para ti, puedes dejarla así. Si deseas cambiarla, siéntete libre de hacerlo, luego haz clic en el botón **Next**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_02.png" alt="ruta local de instalacion para node.js"/>

En este punto, comenzamos a explorar los módulos de instalación que se incluirán con Node.js.

Continúa haciendo clic en el botón **Next**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_03.png" alt="modulos que se instalan junto a node.js"/>

La siguiente ventana te brinda la opción de instalar la herramienta "Chocolatey," que facilita el trabajo con bibliotecas de Node.js que utilizan C/C++. Normalmente, esto se requiere para tareas complejas de bajo nivel. En mi caso, no lo necesitaré, así que dejaré esta opción desmarcada.

Continúa haciendo clic en el botón **Next**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_04.png" alt="herramientas adicionales a node.js"/>

Finalmente, llegarás a la pantalla final, que te ofrece una oportunidad para retroceder y cambiar alguna configuración, lo cual no es necesario en nuestro caso.

Continúa haciendo clic en el botón **Install**

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/setup_05.png" alt="instalacion usando el ayudante de instalacion"/>

Después de unos segundos, la instalación habrá finalizado. Ahora es el momento de verificar si todo se ha realizado correctamente.

Presiona las teclas **Windows + R** y busca _cmd (abreviatura de CoMmanD)_.

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/search.png" alt="cuadro de busqueda en windows"/>

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

<img class="img-default" src="/articles/img/como-instalar-nodejs-y-npm/output.png" alt="imprimiendo en la consola la version de node y npm"/>

## Conclusión

¡Listo! Ahora has instalado Node.js en tu dispositivo Windows. Ahora estás preparado para continuar con los demás módulos de la guía, donde utilizarás Node.js de forma constante para depurar tus scripts.

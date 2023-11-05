---
articleName : Tus primeros pasos con node.js

# Para las Cards

iconName: terminal
summary : Aprende como utilizar Node.js para ejecutar nuestros scripts en la terminal y en nuestro editor de codigo

# Metadatos

layout: ../../../layout/ArticleLayout.astro
title: Tus primeros pasos con Node.js | ILoveJS
description: En esta guía, exploraremos cómo utilizar Node.js para ejecutar nuestros scripts. Esta elección presenta ventajas significativas en comparación con el uso del navegador, ya que nos permite obtener resultados más rápidos y visualizar la salida de nuestros scripts directamente en la consola
keywords : ["runtime de node.js","como depurar con node.js","ejecutar un script en node.js","repl de node.js","como usar el repl de node.js" , "ejecutar javascript en node.js","tutorial basico de node.js","guia de node.js","node.js en vscode","node.js en la terminal"]

# Adjuntar

author: Juan Villegas
pubDate: 2023-11-05
---

### Relacionado

- [Todo lo que necesitas saber de node.js](./03-todo-lo-que-necesitas-saber-de-nodejs)
- [Como instalar y configurar node.js](./04-guia-para-instalar-y-configurar-nodejs-y-npm)

# Tus Primeros Pasos con Node.js

En esta guía, exploraremos cómo utilizar Node.js para ejecutar nuestros scripts. Esta elección presenta ventajas significativas en comparación con el uso del navegador, ya que nos permite obtener resultados más rápidos y visualizar la salida de nuestros scripts directamente en la consola.

## El REPL de Node.js

El *REPL (Read-Eval-Print Loop)* es una interfaz que podemos ejecutar en la línea de comandos para depuraciones rápidas en una sola línea de código. Aprenderemos cómo iniciarlo.

Para ejecutar el REPL, podemos utilizar cualquier terminal disponible en nuestro sistema. Además, cuando instalamos Node.js, este incluye un *tiempo de ejecución (runtime)* que podemos iniciar directamente. Al hacerlo, se abrirá una consola con Node.js en funcionamiento.

<img class="img-default" src="/articles/img/tus-primeros-pasos-con-nodejs/node_runtime.png" alt="aplicacion del runtime de node.js"/>

## Node.js en la Terminal

Para comenzar, abramos nuestra terminal. En el caso de Windows, podemos utilizar el cmd. Ejecutemos el comando node, y de inmediato, se iniciará nuestro tiempo de ejecución de Node.js. 

```bash
node
```

En este momento, podemos escribir alguna expresión en JavaScript para ver los resultados. Vamos a mostrar el clásico **"Hola Mundo"** en nuestro REPL

```javascript
console.log("Hola Mundo")
```

Si pulsamos enter en nuestro teclado podremos ver el resultado inmediatamente.

<img class="img-default" src="/articles/img/tus-primeros-pasos-con-nodejs/cmd_result.png" alt="resultado de la ejecucion de una expresion utilizando el REPL de node.js"/>

En resumen, el REPL tiene un propósito único, evaluar expresiones de una sola línea y mostrar los resultados de inmediato. Es una herramienta excelente cuando deseamos probar conceptos simples. Aunque es posible escribir declaraciones más extensas y complejas en múltiples líneas, el REPL se utiliza principalmente para tareas sencillas y rápidas.

## Node.js en nuestro editor de código

Ahora es el momento de ejecutar nuestro primer script de Node.js utilizando un editor de código. Esta será la forma en la que trabajaremos a lo largo de la guía, con algunas excepciones en las que necesitaremos el navegador.

> Para este ejemplo, utilizaré *Visual Studio Code (VSCode)*, uno de los editores de código más populares hasta la fecha, que cuenta con una amplia comunidad de desarrolladores creando extensiones para mejorar la experiencia de desarrollo.

Para comenzar, abramos VSCode utilizando una carpeta vacía. Allí crearemos nuestro script. En mi caso, lo nombraré **"app.js"**

Dentro de nuestro script, escribiremos nuevamente el clásico **"Hola Mundo"**

```javascript
console.log("Hola Mundo")
```

Ahora, para indicarle a Node.js que ejecute este script, abriremos una terminal. Podríamos utilizar nuevamente el cmd, pero optaremos por emplear la terminal integrada en VSCode. Para hacerlo, dirigiremos nuestro cursor hacia el panel superior y buscaremos el botón **"Terminal"**, luego seleccionaremos **"Crear nueva terminal"**

<img class="img-default" src="/articles/img/tus-primeros-pasos-con-nodejs/create_terminal.png" alt="boton para crear una terminal integrada en vscode"/>

Una vez que tengamos la terminal abierta, esta se ubicará automáticamente en la ruta de nuestro proyecto, lo cual es muy conveniente. Sin embargo, ten en cuenta que no debes ejecutar el comando node en este momento, ya que eso volvería a abrir el REPL. Lo que realmente deseamos es ejecutar nuestro script. Para lograrlo, usaremos el siguiente comando:


```bash
node app.js
```

<img class="img-default" src="/articles/img/tus-primeros-pasos-con-nodejs/final_result.png" alt="boton para crear una terminal integrada en vscode"/>

La consola mostrará el resultado de nuestro script. ¡Felicidades! Ahora sabes cómo ejecutar un script con Node.js y estás listo para continuar tu aprendizaje con el resto de guías en ILoveJS.



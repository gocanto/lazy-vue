# lazy-vue

<a href="https://gocanto.github.io/lazy-vue/"><img src="https://img.shields.io/badge/online-demo-green.svg" alt="Demo"></a>
<a href="https://www.npmjs.com/package/lazy-vue"><img src="https://img.shields.io/npm/v/lazy-vue.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/lazy-vue"><img src="https://img.shields.io/npm/dt/lazy-vue.svg" alt="Downloads"></a>
<a href="https://github.com/gocanto/lazy-vue/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/lazy-vue.svg" alt="License"></a>


lazy-vue is the easiest way to get a lazy image loader working within your vue projects. It is meant to be as simplest as possible,
so you do not have to be pulling complicated libraries to accomplish such a task.





# Requirements
You will have to install vue

```js
npm install vue
```
# Installation
To install this package you just need to open your console line and type ```npm install lazy-vue --save```. If there is a problem during the installation, you can try again using the ```force param```, as so ```npm i -f lazy-vue```


# Gettings started

You will have to import the component in your application entry point, so you will be able to call it as global when need it. Example:

```js
require('lazy-vue');
```

Take a look at the <a href="https://github.com/gocanto/lazy-vue/blob/master/src/js/demo/main.js" target="_blank">example</a> published.

# Implementing the directive in my HTML code

```HTML
<div v-for="avatar in images">
    <img src="demo/images/nopic.png" v-lazy = "avatar">
</div>
```

See the example <a href="https://github.com/gocanto/lazy-vue/blob/master/demo/index.html#L58-L66" target="_blank">here</a>


# Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.


# How can I thank you?
Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter? Spread the word!


Don't forget to [follow me on twitter](https://twitter.com/gocanto)!

Thanks!

Gustavo Ocanto.
gustavoocanto@gmail.com


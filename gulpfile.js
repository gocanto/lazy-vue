require('laravel-elixir-vue-2');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	//The demo js file.
	mix.webpack('demo/main.js', 'dist/demo.js')

		//the Directives files.
		.copy('src/js/lazy.js', 'dist/Directives/lazy.js')
		.copy('src/js/image.js', 'dist/Directives/image.js');
});

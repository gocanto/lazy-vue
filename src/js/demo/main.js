/**
 * The demo instance.
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/lazy-vue/blob/master/LICENSE
 */

require('./../lazy');
import Vue from 'vue';
const assets = require("json!./assets.json");

new Vue({

	el: '#demo',

	data:
	{
		images: null
	},

	mounted: function ()
	{
		this.images = assets.images;
	}

});
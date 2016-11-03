/**
 * The global directive.
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/lazy-vue/blob/master/LICENSE
 */

import Vue from 'vue';

Vue.directive(
	'lazy',
	require('./image')
);
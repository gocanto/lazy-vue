/**
 * Export the directive core code.
 *
 * @type {Object}
 */
module.exports = {

	bind: (el, binding) => {

		let img = new Image();
		img.src = binding.value;

		img.onload = () => {
			el.src = img.src;
			fadeIn(el);
		}
	}

};

/**
 * Apply a fade in effect to a given element.
 *
 * @param  {Object} el
 * @return {Void}
 */
function fadeIn(el)
{
	el.style.opacity = 0;
	el.style.display = "block";

	(function fadeIn() {
		let val = parseFloat(el.style.opacity);
		if (! ((val += .1) > 1)) {
			el.style.opacity = val;
			setTimeout(fadeIn, 40);
		}
	})();
}
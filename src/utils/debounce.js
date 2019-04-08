/**
 * Wait that functions calls run below a delay of @ms
 * to trigger the function @fn
 * @param {Function} fn - the function to debounce
 * @param {Number} ms - the delay (in ms) between each function call
 * @return {Function} that will execute no more frequently than specified delay
 */
export default (fn, ms, context) => {
	ms = ms || 250;
	return function (...args) {
		var ctx = context || window || global;
		clearTimeout(fn.hnd);
		fn.hnd = setTimeout(function () {
			fn.apply(ctx, args);
		}, ms);
	};
};

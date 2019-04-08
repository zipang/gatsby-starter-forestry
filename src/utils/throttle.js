/**
 * Regulate functions calls to be triggered every @threshold ms when under stress
 */
export default (fn, ms, context) => {
	ms = ms || 250;
	var last, deferTimer;

	return function (...args) {
		var ctx = context || window || global,
			now = Date.now();
		if (last && now < last + ms) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(ctx, args);
			}, ms);
		} else {
			last = now;
			fn.apply(ctx, args);
		}
	};
};

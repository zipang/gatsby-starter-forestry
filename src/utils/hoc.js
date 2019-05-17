
const hoc = {
	/**
	 * @param {Function|React.component} Component - the component to test
	 * @returns {Boolean} - true if the component is a (React) class component
	 */
	isClassComponent : (Component) => Boolean(Component.prototype && Component.prototype.isReactComponent),

	/**
	 * Apply an array of higher order components in the order they are given to the supplied component
	 * @param {Function|React.component} Wrapped - the component to wrap
	 * @param {Function[]} wrappers - Array of hoC to apply to Wrapped
	 */
	compose : (Wrapped, wrappers) => {

		if (!Array.isArray(wrappers)) {
			throw new TypeError(`You must pass an array of hoc functions as the second argument to compose !`);
		}
		return wrappers.reduce((prev, cur) => cur(prev), Wrapped);
	}
}

export default hoc;

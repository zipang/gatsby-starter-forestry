/**
 * Surround the children of a component (generally a section)
 * with a container (like in Bootstrap)
 * The use case is to apply a responsive width
 * @param {Function|Object} Section
 */
const withContainer = (Section) =>
	/**
	 * Define and intercept required params
	 * @param {Boolean} [hasContainer=false] - add a container around the children
	 * @param {String}  [containerClassName="container"] - container class name
	 */
	({
		hasContainer = true,
		containerClassName = "container",
		...props,
		children
	}) => {
		if (hasContainer) {
			return (
				<Section {...props}>
					<div className={containerClassName}>
						{children}
					</div>
				</Section>
			);

		} else {
			return (
				<Section {...props}>
					{children}
				</Section>
			);
		}
	};

export default withContainer;

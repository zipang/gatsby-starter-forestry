
const withContainer = (Section) => ({
	hasContainer = true,
	containerClassName = "container",
	...props,
	children }) => {
		if (hasContainer) {
			return (
				<Section {...props}>
					<div className={containerClassName}>
						(children)
					</div>
				</Section>
			)
		}
		return <Section {...props}>{children}</Section>
	};

export default withContainer;

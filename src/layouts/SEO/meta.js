/**
 * Helmet expect an array of attributes array to build the meta tags
 * We just extract the most basic property names for default meta tags
 */
export default (seo) =>
	["description", "robots"]
		.map((key) => ({
			name: `${key}`,
			content: seo[key],
		}))
		.filter((meta) => meta.content); // keep only non empty content

/**
 * Helmet expect an array of attributes array to build the meta tags
 * We just extract the relevant infos for Facebook Open Graph
 */
export default (seo) =>
	["title", "description", "url", "type", "image"]
		.map((key) => ({
			property: `og:${key}`,
			content: seo[key],
		}))
		.filter((meta) => meta.content); // keep only non empty content

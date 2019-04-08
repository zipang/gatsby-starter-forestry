/**
 * Helmet expect an array of attributes to build the meta tags
 * We just extract the relevant infos for Facebook Open Graph
 */
export default (seo) =>
	["site", "title", "description", "url", "image"]
		.map((key) => ({
			name: `twitter:${key}`,
			content: seo[key],
		}))
		.filter((meta) => meta.content) // keep only non empty content
		.concat({ name: "twitter:card", content: "summary_large_image" });

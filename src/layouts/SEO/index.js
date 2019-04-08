import React from "react";
import Helmet from "react-helmet";
import basicMetaData from "./meta";
import facebookOpenGraph from "./facebook";
import twitterMetaData from "./twitter";

/**
 * Render all the SEO and social meta tags inside the head of the page
 * @param {Object} pageInfo - the page being rendered
 * @param {Object} metadata - Global metadata informations on the site, lang, ..
 */
export default ({ pageInfo, metadata }) => {

	// Extract the relevant pieces of info
	const { title, description, path, sections: [{ bg_image }] } = pageInfo;
	const { site_title, site_description, site_url, lang = "en", ...etc } = metadata;

	// Merge page info and metadata (site) info
	const seo = Object.assign({
		url: `${new URL(path, site_url)}`,
		title: `${title} | ${site_title}`,
		description: description || site_description,
		image: `${new URL(bg_image, site_url)}`,
	}, etc);

	// Build social list of meta entries
	const metaDatas = []
		.concat(
			basicMetaData(seo),
			facebookOpenGraph(seo),
			twitterMetaData(seo)
		);

	return (
		<Helmet htmlAttributes={{ lang }} meta={metaDatas}>
			<title>{seo.title}</title>
			<link rel="canonical" href={seo.url} />
		</Helmet>
	);
};

import React, { useState } from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import UpdatePagePosition from "../components/UpdatePagePosition";

import "./layout-styles.less";

/**
 * A classic Header, Sections*, Footer layout
 * @param {Object} global  - global sites info (title, metadata, ..)
 * @param {Object} page    - current page data
 * @param {Array[Section]} - the sections components to include (from the page template)
 */
const HSFLayout = ({ global, page, children }) => {

	// Hook : We want to keep track of the scroll position to fix or not the page header
	const [pageScroll, updateScroll] = useState({
		scrollTop: 0,
		fixHeader: false,
	});

	return (
		<div className="ant-layout">
			<SEO metadata={global.site_metadata} pageInfo={page} />
			<UpdatePagePosition
				pageScroll={pageScroll}
				updateScroll={updateScroll}
				fixHeader={(scrollTop) => scrollTop > 50}
			/>
			<Header
				fixed={pageScroll.fixHeader}
				path={page.path}
				menu={global.header_navigation}
				{...global}
			/>
			<main className="ant-layout-content" role="main">
				{children}
			</main>
			<Footer {...global} />
		</div>
	);
};

export default HSFLayout;

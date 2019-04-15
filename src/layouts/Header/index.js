import React from "react";
import { Link } from "gatsby";
import { HamburgerMenu } from "../../components/HamburgerMenu";

import "./header-styles.less";

import logo from "./logo.png";

const extractPageName = (p) => p.split("/").pop();

/**
 *
 * @param {Array}  entries  - navigation entries (link + text)
 * @param {String} selected - the navigation link that is currently selected
 */
const buildNavigation = ({ entries = [] }, selected) =>
	entries.map((nav) => (
		<Link
			to={nav.link}
			role="menuitem"
			tabIndex="0"
			title={extractPageName(nav.link)}
			className={nav.link === selected ? "selected" : undefined}
		>
			{nav.text}
		</Link>
	));

/**
 *
 * @param {Object} menu - contains an array of {link, text} entries
 * @param {Object} site_metadata - contains an array of {link, text} entries
 * @param {String} path   - the current page path (to select in the navigation menu)
 * @param {Boolean} fixed - to fix the position of the header when scrolling down
 */
const Header = ({
	menu = {},
	site_metadata: { site_title },
	path,
	fixed,
}) => (
	<header id="main-header" className={fixed ? "fixed" : ""} tabIndex="0">
		<div className="logo">
			<Link to="/" tabIndex="0">
				<img src={logo} alt="(logo)" title={site_title} />
			</Link>
		</div>

		{menu.entries && (
			<HamburgerMenu
				id="main-navigation"
				navigationLinks={buildNavigation(menu.entries, path)}
			/>
		)}
	</header>
);

export default Header;

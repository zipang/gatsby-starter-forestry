import React from "react";
import { Link } from "gatsby";
import { HamburgerMenu } from "../../components/HamburgerMenu";

import "./header-styles.less";

import logo from "./logo.png";

const extractPageName = (p) => p.split("/").pop();
const buildNavigation = (navLinks, selected) => {
	return [
		...navLinks.map((nav) => (
			<Link
				to={nav.link}
				role="menuitem" tabIndex="0"
				title={extractPageName(nav.link)}
				className={nav.link === selected ? "selected" : undefined}
			>
				{nav.text}
			</Link>
		)),
	];
};

/**
 *
 * @param {Object} navigation - contains an array of {link, text} entries
 * @param {String} path - the current page path (to select in the navigation menu)
 * @param {Boolean} fixed - to fix the position of the header when scrolling down
 */
const Header = ({ navigation = [], path, fixed }) => (

	<header id="main-header" className={fixed ? "fixed" : ""} tabIndex="0">

		<div className="logo">
			<Link to="/" tabIndex="0">
				<img src={logo} alt="TIPA France (logo)" title="TIPA France" />
			</Link>
		</div>

		<HamburgerMenu
			id="main-navigation"
			navigationLinks={buildNavigation(navigation.entries, path)}
		>
			<div id="navigation-mobile">
				<a id="btn-free-trial-mobile" className="button" tabIndex="0"
					href="/pricing" title="pricing">無料体験</a>
				<a id="btn-login-mobile" className="button" tabIndex="0"
					href="/login" title="login">ログイン</a>
			</div>
		</HamburgerMenu>
	</header>
);

export default Header;

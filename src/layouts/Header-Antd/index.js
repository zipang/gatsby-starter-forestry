import React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";

import "./header-styles.less";

import logo from "./tipafrance-logo.png";

const extractPageName = (p) => p.split("/").pop();

const Header = ({ navigation, path, fixed }) => (
	<header
		id="main-header"
		className={"ant-layout-header" + (fixed ? " fixed" : "")}
	>
		<Link to="/">
			<div className="logo">
				<img src={logo} alt="TIPA France (logo)" title="TIPA France" />
			</div>
		</Link>
		<Menu
			id="main-navigation"
			theme="light"
			mode="horizontal"
			forceSubMenuRender={true}
			selectedKeys={[path]}
		>
			{navigation.entries.map((navItem) => (
				<Menu.Item
					key={navItem.link}
					title={extractPageName(navItem.link)}
				>
					<Link to={navItem.link}>{navItem.text}</Link>
				</Menu.Item>
			))}
			<Menu.Item key="pricing">
				<a className="button" id="btn-free-trial" href="/pricing" title="pricing">無料体験</a>
			</Menu.Item>
			<Menu.Item key="login">
				<a className="button" id="btn-login" href="/login" title="login">ログイン</a>
			</Menu.Item>
		</Menu>
	</header>
);

export default Header;

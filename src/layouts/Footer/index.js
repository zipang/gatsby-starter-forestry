import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import { Row, Col } from "antd";

import "./footer-styles.less";

const pageFooter = ({
	footer_navigation_right  = { entries: [] },
	footer_navigation_bottom = { entries: [] },
	site_metadata,
}) => (
	<footer id="main-footer" className="ant-layout-footer" tabIndex="O">
		<Row gutter={36} justify="center" align="bottom" type="flex">
			<Col id="footer-address" span={24} md={7}>
				<ReactMarkdown>{site_metadata.company_address}</ReactMarkdown>
			</Col>
			<Col span={24} md={10}>
				<nav id="footer-navigation-bottom">
					{footer_navigation_bottom.entries.map((navItem) => (
						<Link to={navItem.link} key={navItem.link}>{navItem.text}</Link>
					))}
				</nav>
				<div className="content">
					© {new Date().getFullYear()} {site_metadata.site_name} Tous droits
					réservés.
				</div>
			</Col>
			<Col span={24} md={7}>
				<nav id="footer-navigation-right">
					{footer_navigation_right.entries.map((navItem) => (
						<Link to={navItem.link} key={navItem.link}>{navItem.text}</Link>
					))}
				</nav>
			</Col>
		</Row>
	</footer>
);

export default pageFooter;

import React from "react";
import { Link } from "gatsby";

import "./button-styles.less";

const CallToActionButton = ({
	link_url,
	link_text,
	link_modifiers = ["primary"]
}) =>
	<Link to={link_url} className={`call-to-action button ${link_modifiers.join(' ')}`}>
		{link_text}
	</Link>

export default CallToActionButton;

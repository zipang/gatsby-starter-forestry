import React from "react";
import "./show-more-styles.less";
import defaultIcon from "./more.png";
import scrollTo from "./scroller";

const ShowMore = ({ nextSectionId, offset = 0, children }) => (
	<a
		className="show-more bouncing"
		href={"#" + nextSectionId}
		tabIndex="-1"
		onClick={scrollTo(nextSectionId, offset)}
	>
		{children ? children : <img alt="read next" src={defaultIcon} />}
	</a>
);

export default ShowMore;

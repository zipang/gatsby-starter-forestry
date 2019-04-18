import React from "react";
import "./show-more-styles.less";

const SVGIcon = ({ type, color = "white", size = 64 }) => (

	<svg xmlns="http://www.w3.org/2000/svg"
	viewBox={viewBox} stroke={color} fill="none" stroke-width="2">

	</svg>
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

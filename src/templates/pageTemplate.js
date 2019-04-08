import React from "react";
import Layout from "../layouts";
import SectionMapper from "../sections/SectionMapper";

const pageTemplate = ({ pageContext }) => (
	<Layout
		global={pageContext.global}
		page={pageContext.local}
	>
		{SectionMapper(pageContext)}
	</Layout>
);

export default pageTemplate;

module.exports = {
	siteMetadata: {
		title: "GASTBY FORESTRY STARTER",
		siteUrl: "https://gatsby-starter-demo.netlify.com",
	},
	plugins: [
		{
			resolve: "gatsby-plugin-less",
			options: {
				javascriptEnabled: true,
				modifyVars: {
					// @see https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
					"@primary-color": "#f46a20",
					"@highlight-color": "#40a4d5",
					"@font-family":
						"Montserrat, Georgia, serif",
					"@font-size-base": "18px",
					"@component-background": "transparent",
				},
			},
		},
		{
			resolve: "gatsby-plugin-antd",
			options: {
				style: true,
			},
		},
		{
			resolve: "gatsby-source",
			options: {
				path: `${__dirname}/content`,
				include: [".md"],
			},
		},
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "GATSBY FORESTRY STARTER DEMO",
				short_name: "GFSD",
				start_url: "/",
				background_color: "white",
				display: "standalone",
				theme_color: "#40a4d5",
				display: "minimal-ui",
				icon: "static/img/logo-blanc.png",
			},
		},
		"gatsby-plugin-offline",
		// "gatsby-plugin-accessibilityjs",
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		path: "${__dirname}/content",
		// 		name: "pages"
		// 	}
		// },
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		path: "${__dirname}/assets",
		// 		name: "assets"
		// 	}
		// },
		// {
		// 	resolve: "gatsby-transformer-remark",
		// 	options: {
		// 		plugins: [
		// 			{
		// 				resolve: "gatsby-remark-images",
		// 				options: {
		// 					maxWidth: 590
		// 				}
		// 			},
		// 			{
		// 				resolve: "gatsby-remark-responsive-iframe",
		// 				options: {
		// 					wrapperStyle: "margin-bottom: 1.0725rem"
		// 				}
		// 			},
		// 			"gatsby-remark-prismjs",
		// 			"gatsby-remark-copy-linked-files",
		// 			"gatsby-remark-smartypants"
		// 		]
		// 	}
		// },
		// "gatsby-transformer-sharp",
		// "gatsby-plugin-sharp",
		// {
		// 	resolve: "gatsby-plugin-google-analytics",
		// 	options: {
		// 		//trackingId: "ADD YOUR TRACKING ID HERE",
		// 	}
		// },
		// "gatsby-plugin-feed",
		// "gatsby-plugin-react-helmet",
		// {
		// 	resolve: "gatsby-plugin-typography",
		// 	options: {
		// 		pathToConfigModule: "src/utils/typography"
		// 	}
		// }
	],
};

import React from "react";
import SectionWithBackground from "../SectionWithBackground";
import EmbeddedVideoPlayer from "../../components/EmbeddedVideoPlayer";
import ReactMarkdown from "react-markdown";
import { Link } from "gatsby";
import { Row, Col } from "antd";

import "./two-columns-styles.less";

const isVideo = (link) => /^https:\/\/[youtu.be|vimeo.com]/.test(link);

const MediaColumn = ({ image, media_title, call_to_action, call_to_action: { link_text, link_url, link_modifiers }, media_link }) => {
	if (isVideo(media_link)) {
		return (
			<Col className="video" span={24} lg={10}>
				<EmbeddedVideoPlayer
					title={media_title}
					video_url={media_link}
					light={true}
				/>
			</Col>
		);
	} else if (call_to_action) {
		return (
			<Col className={`call_to_action ${link_modifiers.join(' ')}`} span={24} lg={10}>
				<Link className="button" to={link_url}>
					{link_text}
				</Link>
			</Col>
		);
	} else if (media_link) {
		return (
			<Col className="image" span={24} lg={10}>
				<a href={media_link} target="_blank" rel="noopener noreferrer">
					<img src={image} title={media_title} alt={media_title} />
				</a>
			</Col>
		);
	} else {
		return (
			<Col className="image" span={24} lg={10}>
				{image && <img src={image} title={media_title} alt={media_title} />}
			</Col>
		);
	}
};

/**
 * Two columns : text + media (image, video) or call to action (button)
 * @param {*} param0
 */
const TwoColumns = ({
	title,
	paragraph,
	text_position,
	image,
	media_title,
	call_to_action,
	image_link,
	bg_class,
	...section_background
}) => (
	<SectionWithBackground
		section_name="two-columns-text-image"
		bg_class={
			`${bg_class} ${text_position}` +
			(call_to_action ? " call_to_action" : "")
		}
		{...section_background}
	>
		<Row
			className="container"
			gutter={48}
			type="flex"
			align={call_to_action ? "bottom" : "middle"}
		>
			<Col className="text" span={24} lg={14}>
				{title && <h2>{title}</h2>}
				<ReactMarkdown>{paragraph}</ReactMarkdown>
			</Col>

			<MediaColumn
				image={image}
				media_title={media_title}
				call_to_action={call_to_action}
				image_link={image_link}
			/>
		</Row>
	</SectionWithBackground>
);

export default TwoColumns;

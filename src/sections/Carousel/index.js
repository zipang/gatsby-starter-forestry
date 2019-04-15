import React from "react";
import Swiper from "react-id-swiper";
import ReactMarkdown from "react-markdown";

import "../../../node_modules/react-id-swiper/src/styles/css/swiper.css";

import "./carousel-styles.less";

const slideId = (sectionId, i) =>
	`${sectionId}-slide-${(100 + i).toString().substr(1)}`;

/**
 * A carousel section based on Swiper
 * @param id {String} required - id of this section
 * @param slides {Array[]}
 */
const Carousel = ({ id, title, slides }) => (
	<section id={id} className="carousel" section_name="carousel">
		<Swiper lazy={true} loop={true} initialSlide={1}>
			{slides.map(({ image, text }, i) => (
				<div className="slide" key={slideId(id, i)}>
					<img className="swiper-lazy" src={image} alt={text} />

					{text && (
						<div className="text">
							<ReactMarkdown>{text}</ReactMarkdown>
						</div>
					)}
				</div>
			))}
		</Swiper>
	</section>
);

export default Carousel;

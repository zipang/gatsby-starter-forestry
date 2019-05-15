import React from "react";
import Swiper from "react-id-swiper";
import ReactMarkdown from "react-markdown";
import { createKey } from "../../utils/ReactTools";

import "../../../node_modules/react-id-swiper/src/styles/css/swiper.css";

import "./carousel-styles.less";

/**
 * A carousel section based on Swiper
 * @param id {String} required - id of this section
 * @param slides {Array[]}
 */
const Carousel = ({ id, title, slides }) => (
	<section id={id} className="carousel" section_name="carousel">
		<Swiper loop={true} initialSlide={1}>
			{slides.map(({ image, text }, i) => (
				<div className="slide"
					key={createKey("slide-", i)}
					style={{
						backgroundImage: `url('${image}')`
					}}>

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

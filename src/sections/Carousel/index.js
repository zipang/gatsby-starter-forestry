import React from "react";
import Swiper from 'react-id-swiper';
import ReactMarkdown from "react-markdown";
import "./carousel-styles.less";

const Carousel = ({ title, slides }) => (
	<section section_name="carousel">{
		slides.map((slide) => 
			<ReactMarkdown>{text}</ReactMarkdown>
		)
	}
	</section>
);

export default Carousel;

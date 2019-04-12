import React from "react";
import Swiper from 'react-id-swiper';
import ReactMarkdown from "react-markdown";
import "./carousel-styles.less";

const slideId = (sectionId, i) => `${sectionId}-slide-${(100+i).toString().substr(1)}`;

const Carousel = ({ id, title, slides }) => (
	<section id={id} section_name="carousel">
		<Swiper>{
			slides.map(({image, text}, i) => 
				<div className="slide" key={slideId(id, i)}>
					<img className="" data-src={image} alt={text} />
					<ReactMarkdown>{text}</ReactMarkdown>
				</div>
			)
		}</Swiper>
	</section>
);

export default Carousel;

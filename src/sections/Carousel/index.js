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
					<img className="swiper-lazy" data-src={image} alt={text} />
					{ text && <div className="text">
						<ReactMarkdown>{text}</ReactMarkdown>
					</div>
					}
				</div>
			)
		}</Swiper>
	</section>
);

export default Carousel;

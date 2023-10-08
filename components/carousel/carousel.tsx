"use client";
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div> 
			<h2>NextJs Carousel - GeeksforGeeks</h2> 
			<Carousel> 
				<div> 
					<img src="/photo1.JPG" alt="image1"/> 
					<p className="legend">Image 1</p> 

				</div> 
				<div> 
					<img src="/photo2.JPG" alt="image2" /> 
					<p className="legend">Image 2</p> 

				</div> 
			</Carousel> 
			</div> 
		); 
	} 
};

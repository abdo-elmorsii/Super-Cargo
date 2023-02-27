import React from 'react';
const ImageComp = ({ title, imgBg }) => {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${imgBg || '/carousel-1.jpg'})` }}
				className="image-comp">
				<h2>{title}</h2>

			
			</div>
		</>
	);
}

export default ImageComp;
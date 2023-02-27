import React from 'react'

const Card = ({icon, number, title, bgColor}) => {
	return (
		<div className='card' style={{backgroundColor: bgColor}}>
			{icon}
			<p>{number}</p>
			<h6>{title}</h6>
		</div>
	)
}

export default Card;
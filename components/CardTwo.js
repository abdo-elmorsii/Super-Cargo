import React from 'react'
import { Card } from 'react-bootstrap'
import Button from './Button'

const CardTwo = ({ name, image }) => {
  return (
    <div className='image-card'>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ color: "#2F3988" }}>{name}</Card.Title>
          <Card.Text style={{ color: "#212529" }}>
            Hello
          </Card.Text>

        </Card.Body>
      </Card>

    </div>
  )
}

export default CardTwo
import React from 'react';
import {Card} from "react-bootstrap"

function Ticket({index, style, data}) {
  return (
    <Card style={style}>
    <Card.Body>
    {index}
      <Card.Title>{data.Subject}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{data.Priority}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">{data.Status}</Card.Subtitle>
      <Card.Text>
      {data.desc}
      </Card.Text>
     
    </Card.Body>
  </Card>
    
  )
}

export default Ticket
import React from 'react';
import {Card, Button, Badge} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.scss";

function Ticket({index, style, data}) {
  const history = useHistory();
  function handleClick(index) {
    history.push(`/tickets/update/${index}`);
  }
  return (
    <Card style={style}>
    <Card.Body>
      <Card.Title className="text-capitalize">{data.subject} <Badge bg="secondary">{data.status}</Badge></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{data.priority}</Card.Subtitle>
      <Card.Text>
      {data.description}
      </Card.Text>
      <Button className="ms-auto d-block" variant="outline-primary" onClick={() => handleClick(index)}>Update Ticket</Button>
    </Card.Body>
  </Card>
    
  )
}

export default Ticket
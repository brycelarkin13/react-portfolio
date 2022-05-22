import React from 'react';
import {
    Card ,
    Button,
    // Container,
    // Col,
    // Row
} from 'react-bootstrap'

function Portfolio() {
    // const projects =[
            
    // ]
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Gambling Game</Card.Title>
    <Card.Text>
      A Yahtzee Blackjack hybrid inspired dice game built for fun as a group project idea.
    </Card.Text>
    <Button variant="primary">GitHub Link</Button>
  </Card.Body>
</Card>
    )
};

export default Portfolio;
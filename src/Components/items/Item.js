import React from 'react'
import {Card, Button} from 'react-bootstrap';
const Item = ({img, description, title, price, stock}) =>{

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{stock}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>     
    )
};

export default Item;
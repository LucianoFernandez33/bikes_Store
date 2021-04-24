import React from 'react';
import Counter from '../counter/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css"
import {Card} from 'react-bootstrap';

const Item = ({img, description, tittle, price, stock}) =>{

    return (
        <div className="container-card-child">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text> $ {price}</Card.Text>
                    <Card.Text>{stock}</Card.Text>
                    <Counter stock={stock}/>
                </Card.Body>
            </Card> 
        </div>   
    )
};

export default Item;
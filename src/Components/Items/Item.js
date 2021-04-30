import React from 'react';
import Counter from '../Counters/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css"
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({img, description, tittle, price, stock}) =>{

    return (
        <div className="container-card-child">
            <Card style={{ width: '20rem'}}>
                <div className="container-img-card">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text> $ {price}</Card.Text>
                    <Card.Text>{stock}</Card.Text>
                    <Link to={`/detalle-del-producto`}>
                        <Button className="button-Caraterist">Ver Caracteristicas</Button>
                    </Link>
                    <Counter stock={stock}/>
                </Card.Body>
            </Card> 
        </div>   
    )
};

export default Item;
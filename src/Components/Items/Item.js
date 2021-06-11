import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css"
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({img, description, tittle, price, stockTotal, id, descriptionTwo, descriptionThree, sizes}) =>{
    
    return (
        <div className="container-card-child">
            <Card style={{ width: '100%', height:'100%'}}>
                <div className="container-img-card">
                    <Card.Img variant="top" src={img} />
                </div>
                <Card.Body className="card-body">
                    <Card.Title className="card-tittle">{tittle}</Card.Title>
                    <Card.Text className="line-sizes">{sizes}</Card.Text>
                    <Card.Text className="card-price"> $ {price}</Card.Text>
                    <Link className="button-link" to={`/item/${id}`}>
                        <Button className="button-Caraterist">Ver Caracteristicas</Button>
                    </Link>
                </Card.Body>
            </Card> 
        </div>   
    )
};

export default Item;
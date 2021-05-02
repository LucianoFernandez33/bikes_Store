import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css"
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({img, description, tittle, price, stock, id}) =>{

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
                    <Link to={`/item/${id}`}>
                        <Button className="button-Caraterist">Ver Caracteristicas</Button>
                    </Link>
                    <ItemCount stock={stock}/>
                </Card.Body>
            </Card> 
        </div>   
    )
};

export default Item;
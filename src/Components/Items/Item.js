import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css"
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCountContainer from '../ItemCountContainer/ItemCountContainer';

const Item = ({img, description, tittle, price, stockTotal, id}) =>{

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
                    <Card.Text>{stockTotal}</Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button className="button-Caraterist">Ver Caracteristicas</Button>
                    </Link>
                </Card.Body>
                    <ItemCountContainer id={id} stockTotal={stockTotal}/>
            </Card> 
        </div>   
    )
};

export default Item;
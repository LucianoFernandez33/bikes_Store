import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import { getFiresTore } from "../../firebase";
import { CartContext } from '../../Context/CartContext';
import './Orders.css'

const Orders = ({orderId, items}) => {
    console.log(orderId)
    const {clear, printDiv} = useContext(CartContext)

    return (
        
            <div id="imprimeme" className="container-modal">
                <div className="container-modal-child" >
                    <Modal.Dialog >
                        <Modal.Header >
                            <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b>{orderId}</b></p>
                            <p>SE HA ENVIADO UN MAIL A SU CORREO CON LOS DATOS DE SU COMPRA Y EL CÓDIGO DE SEGUIMIENTO</p>
                            <p>SI LO PREFIERE PUEDE IMPRIMIR UN COMPROBANTE.</p>
                            <p>GRACIAS POR SU COMPRA!</p>
                        </Modal.Body>

                        <Modal.Footer>
                        <Link to={`/`} onClick={()=> clear()}><Button variant="secondary">CERRAR</Button></Link>
                            <Button onClick={()=>printDiv('imprimeme')} variant="primary">IMPRIMIR COMPROBANTE</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
    
    )
}

export default Orders
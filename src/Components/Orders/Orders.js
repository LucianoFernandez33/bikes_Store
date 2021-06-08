import React, {useContext,useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import {getFiresTore} from "../../firebase";
import { CartContext } from '../../Context/CartContext';
import './Orders.css'

const Orders = () => {
    const {clear, printDiv,orderUsser,cart} = useContext(CartContext)
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState();
    const [items, setItems] = useState();
    const [buyer, setBuyer] = useState([]);
    const [status, setStatus]= useState('');
    console.log(orderUsser)
    console.log(cart)
    
    useEffect(() => {
        const db = getFiresTore();
        const orderCollection = db.collection('orders').doc(orderUsser);
          orderCollection.get()
          .then(res=>{
              if(!res.exists){
                  setError(true)
              }
            setItems({orderUsser: res.data().items, total: res.data().total, status:res.data().status, date:res.data().date.toDate()})
            console.log(items)
            setBuyer(res.data().buyer[0])
            console.log(buyer)
            //setStatus(res.data().status)
           // console.log(status)
            //setLoading(true)
          })
            .catch((err)=>{
                console.log("Hubo problemas al cargar", err)
             })
             .finally(()=>setLoading(false))
          }, [orderUsser]);

    return (
            
            <div id="imprimeme" className="container-modal">
                <div className="container-modal-child" >
                    <Modal.Dialog >
                        <Modal.Header >
                            <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b>{}</b></p>
                            <ul className="buyers">
                                <li>
                                    <b>NOMBRE: {}</b> 
                                </li>
                                <li>
                                    <b>TELEFONO: {}</b> 
                                </li>
                                <li>
                                    <b>EMAIL: {}</b> 
                                </li>
                                <li>
                                    <b>FECHA: {}</b> 
                                </li>
                                <li>
                                    <b>DIRECCION DE ENTREGA: {}</b> 
                                </li>
                            </ul>
                                
                            {items.orderUsser.map(x=>
                                <ul className="container-order" key={x.id}>
                                        <li className="order-item">
                                            <span> PRODUCTO: {x.tittle} </span>
                                            <span> CANTIDADD: {x.cantidad}</span>
                                            <span> $ {x.total}</span>
                                        </li>
                                        <li className="order-total">
                                            <span>Total: </span> <span> $ {} </span>{" "}
                                        </li>
                                </ul>
                             )}
                        </Modal.Body>

                        <Modal.Footer className="modal-footer">
                            <p>SE HA ENVIADO UN MAIL A SU CORREO CON LOS DATOS DE SU COMPRA Y EL CÓDIGO DE SEGUIMIENTO</p>
                            <p>SI LO PREFIERE PUEDE IMPRIMIR UN COMPROBANTE.</p>
                            <p>GRACIAS POR SU COMPRA!</p>
                            <div className="container-button-orders">
                                <Link to={`/`} onClick={()=> clear()}><Button variant="secondary">CERRAR</Button></Link>
                                <Button onClick={()=>printDiv('imprimeme')} variant="primary">IMPRIMIR COMPROBANTE</Button>
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        
    )
}

export default Orders
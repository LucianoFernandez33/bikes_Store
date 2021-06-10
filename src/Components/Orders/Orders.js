import React, {useContext,useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import {getFiresTore} from "../../firebase";
import { CartContext } from '../../Context/CartContext';
import './Orders.css'

const Orders = () => {
    const {clear, printDiv,orderUsser} = useContext(CartContext)
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState();
    const [items, setItems] = useState([]);
    const [buyer, setBuyer] = useState([]);
    const [status, setStatus] =useState([])
    
           
    useEffect(() => {
        setLoading(true)
        const db = getFiresTore();
        const orderCollection = db.collection('orders').doc("x9DhdMjwYyK3fRxxdkf4");
          orderCollection.get()
          .then(res=>{
              if(!res.exists){
                  setError(true)
              }
            setItems({orderItem: res.data().items, total: res.data().total, status:res.data().status, date:res.data().date.toDate()})
            console.log(res.data().items)
            {items !=={} && console.log(items ,"items")}
            console.log(items)
            setBuyer(res.data().buyer)
            console.log(res.data().buyer.name,"buyer")
            setStatus(res.data().status)
            console.log(status)
            setLoading(true)
          })
            .catch((err)=>{
                console.log("Hubo problemas al cargar", err)
             })
             .finally(()=>setLoading(false))
          }, [orderUsser]);

          const fecha =(x)=>{
            if(x){
            return `${x.getDate()}/${(x.getMonth()+1)}/${x.getFullYear()} -${x.getHours()}:${x.getMinutes()} hs`
            }
        }
        useEffect(()=>{
            console.log(items,"items")
            console.log(items.orderItem,"itemsOrderItem")
        },[items])

    return (
            
            <div id="imprimeme" className="container-modal">
                <div className="container-modal-child" >
                    <Modal.Dialog >
                        <Modal.Header >
                            <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {buyer && 
                        <>
                            <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b>{orderUsser}</b></p>
                            <ul className="buyers">
                                <li>
                                   <b>NOMBRE : </b><span>{buyer.name}</span> 
                                </li>
                                <li>
                                    <b>TELEFONO : </b><span>{buyer.tel}</span>  
                                </li>
                                <li>
                                    <b>EMAIL : </b><span>{buyer.email}</span> 
                                </li>
                                <li>
                                    <b>DIRECCION DE ENTREGA : </b><span>{buyer.direccion} </span>
                                </li>
                                <li>
                                    <b>ESTADO DE COMPRA : </b><span>{status} </span>
                                </li>
                            </ul>
                                {items && 
                            <ul className="container-order">
                                <li>
                                    <b>PRODUCTO : </b> <span>{items.tittle}</span>
                                </li>
                                <li>
                                    <b>CANTIDAD : </b> <span>{}</span>
                                </li>
                                <li>
                                    <b>$ </b><span>{}</span>
                                </li>                                
                                <li className="order-total">
                                    <b>Total : </b> <span> $ {items.total} </span>
                                </li>
                                <li className="order-fecha">
                                    <b>FECHA : </b><span>{items && fecha(items.date)} </span>
                                </li>
                            </ul>}
                        </>  
                            }
                            
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
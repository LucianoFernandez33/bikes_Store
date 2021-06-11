import React, {useContext,useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import {getFiresTore} from "../../firebase";
import { CartContext } from '../../Context/CartContext';
import logo2 from '../../Assets/logo2.png'
import Loading from '../../Components/Loading/Loading'
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
        const orderCollection = db.collection('orders').doc(orderUsser);
          orderCollection.get()
          .then(res=>{
              if(!res.exists){
                  setError(true)
              }
            setItems({orderItem: res.data().items, total: res.data().total, status:res.data().status, date:res.data().date.toDate()})
            setBuyer(res.data().buyer)
            setStatus(res.data().status)
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
            
        },[items])

    return (
        <div>
        {loading ? <Loading /> :
            <div  className="container-modal">
                <div id="imprimeme" className="container-modal-child" >
                    <Modal.Dialog >
                        <Modal.Header className="modal-header-imprimime" >
                            <img src={logo2} className="App-logo" alt="logo" />
                            <Modal.Title>FACTURA DE COMPRA</Modal.Title>
                        </Modal.Header>
                        
                          {items.orderItem && 
                        <Modal.Body>
                            <h5>DATOS DEL COMPRADOR</h5>
                            <ul className="buyers">
                                <li>
                                   <b>NOMBRE : </b><span>{buyer.name}</span> 
                                </li>
                                <li>
                                   <b>APELLIDO : </b><span>{buyer.surname}</span> 
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
                            </ul>
                            <hr />
                            <h5>PRODUCTO/S COMPRADOS/S</h5>
                            <ul className="container-order">
                               {items.orderItem.map(x=>
                                <>
                                    <li>
                                        <b>PRODUCTO : </b> <span>{x.tittle}</span>
                                    </li>
                                    <li>
                                        <b>CANTIDAD : </b> <span>{x.cantidad}</span>
                                    </li>
                                    <li>
                                        <b>PRECIO :</b><span> $ {x.price}</span>
                                    </li>
                                    <hr style={{width:'50%'}} />
                                </> 
                                )}                             
                            </ul>
                            
                            <ul className="order-total">
                                <li >
                                    <b>Total A PAGAR : </b><span> $ {items.total} </span>
                                </li>
                                <li>
                                    <b>FECHA : </b><span>{items && fecha(items.date)} </span>
                                </li>
                                <li>
                                    <b>ESTADO DE COMPRA : </b><span>{status} </span>
                                </li>
                            </ul>
                                <p>NUMERO DE SEGUIMIENTO DE ORDEN : <b className="orderUsuarioId">{orderUsser}</b></p>
                        </Modal.Body>
                        } 
                        <Modal.Footer className="modal-footer">
                            <div style={{backgroundColor:'grey',padding:'5px',borderRadius:'17px'}}>
                                <p>SE HA ENVIADO UN MAIL A SU CORREO CON LOS DATOS DE SU COMPRA Y EL CÓDIGO DE SEGUIMIENTO</p>
                                <p>SI LO PREFIERE PUEDE IMPRIMIR UN COMPROBANTE.</p>
                                <p>GRACIAS POR SU COMPRA!</p>
                            </div>
                            <div className="container-button-orders">
                                <Link to={`/`} onClick={()=> clear()}><Button variant="danger">CERRAR</Button></Link>
                                <Button onClick={()=>printDiv('imprimeme')} variant="success">IMPRIMIR COMPROBANTE</Button>
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        }  
        </div>
    )
}

export default Orders
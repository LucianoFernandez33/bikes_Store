import React from 'react';
import {Card} from 'react-bootstrap';
import './About.css';
import nosotros01 from '../../Assets/nosotros01.jpg';
import nosotros03 from '../../Assets/nosotros03.png';
import nosotros05 from '../../Assets/nosotros05.jpg';

const About = () => {
    return (
        <div className="container-about">   
            <div >
                <Card className="container-card-one">
                    <Card.Img variant="top" src={nosotros01} />
                </Card>
            </div>
            <div>
                <Card className="container-card-two">
                    <Card.Body>
                        <Card.Text>
                        Somos una empresa ubicada en San Nicolás de los Arroyos, Provincia de Buenos Aires dedicada a la venta como agente oficial de la mejores marcas de bicicletas que se importan en nuestro País.
                        Contamos con un showrrom donde exhibimos todos nuestros productos disponibles.
                        Brindamos el mejor acesoramiento tecnico para la elección de tu bicicleta y conectarte con esta apacionante actividad.
                        Todos nuestro productos son originales tal cual vienen de fabrica de esta forma ofrecemos una garantia que nadie mas puede brindarte
                        </Card.Text>
                    </Card.Body>
                    <Card.Img  variant="bottom" src={nosotros03} />
                    <Card.Body>
                        <Card.Text>
                            Somos esa familia a la que querés pertenecer, con la que querés compartir tus experiencias, la que querés llevar con vos a todas partes.
                        </Card.Text>
                        <Card.Text>
                            Porque estamos en cada detalle, porque nuestra obsesión es darte lo que necesitás y cumplir tus sueños.
                        </Card.Text>
                        <Card.Text>
                            Pensamos en vos, ciclista de competición, que buscás la excelencia y querés superarte a vos mismo más que a tu compañero de carrera.
                        </Card.Text>
                        <Card.Text>
                            Queremos estar para vos, cicloturista, acompañándote en cada aventura y descubriendo juntos los lugares más asombrosos de este planeta.
                        </Card.Text>
                        <Card.Text>
                            Trabajamos para vos, que querés darle a tu familia la libertad de descubrir el campo, la ciudad, las calles de tu pueblo. Vos que necesitás la bici para ir a trabajar, o estudiar la carrera de tus sueños. Y también para vos, que querés sentir por primera vez la sensación de tus piernas llevándote a donde quieras ir.
                        </Card.Text>
                        <Card.Img  variant="bottom" src={nosotros05} />
                        <br/>
                        <Card.Text>
                            Queremos ser INSPIRACIÓN: para que corras detrás de tus sueños y te superes día a día.
                        </Card.Text>
                        <Card.Text>
                            Queremos contagiarte nuestros VALORES: La perseverancia, el esfuerzo, la humildad y el compañerismo que se vive en el deporte son nuestros pilares para mejorar constantemente.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>        
        </div> 
    )
}
export default About;
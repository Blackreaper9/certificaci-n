import React, { useState } from 'react';
import { Card, Container, Navbar, Nav, Form, Button, Modal, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import logo from './assets/ciberbloxlogo.png';
import ropaEstilo1 from './assets/ropaEstilo1.jpg';
import ropaEstilo2 from './assets/ropaEstilo2.jpg';
import ropaEstilo3 from './assets/ropaEstilo3.jpg';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setIsAuthenticated(true);
        console.log("Usuario:", username, "Contraseña:", password);
    };
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Registrarse - Usuario:", registerUsername, "Gmail:", registerEmail, "Contraseña:", registerPassword);
        setShowRegisterModal(false);
    };
    return (<>
            <Navbar className="navbar-custom" variant="light">
                <Container>
                    <img src={logo} alt="ciberbloxlogo.png" style={{ width: '150px', marginRight: '20px' }}/>
                    <Navbar.Brand to="/">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setShowRegisterModal(true)}>Regístrate</Nav.Link>
                        <Nav.Link onClick={() => navigate("/recetas")}>Recetas</Nav.Link>
                        {isAuthenticated && (<>
                                <Nav.Link onClick={() => navigate("/centros-ayuda")}>Centros de ayuda</Nav.Link>
                                <Nav.Link onClick={() => navigate("/profesionales")}>Profesionales</Nav.Link>
                            </>)}
                        {/* <center><AuthButton></AuthButton></center> */}
                    </Nav>
                </Container>
            </Navbar>
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title>"La ropa mas famosa y controvercial de este 2024 y recetas mas preparadas de este año"</Card.Title>
                    <Card.Text>

                        En esta pagina te mostraremos lo nuevo en ropa y moda mas controbercial del 2024 ademas de unas cuantas recetas de comida que deberias aprender
                    </Card.Text>
                </Card.Body>


                <Card className="mt-3">
                    <Card.Body>
                        <Card.Title>Inicia Sesión</Card.Title>
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="No ingreses tu nombre real" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mt-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </Form.Group>

                            <Button style={{ backgroundColor: 'pink', color: 'white', border: 'none' }} type="submit">
                                Iniciar Sesión
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Card>


            <section className="mt-5">
                <h2 className="text-center">Lo nuevo en ropa 2024</h2>
                <p className="text-center">Explora los estilos más populares y usados por mujeres en este 2024.</p>

                <Row className="mt-4">
                    <Col md={4}>
                        <Card className="mb-4">
                            <Image src={ropaEstilo1} fluid/>
                            <Card.Body>
                                <Card.Title>Vestido Floral</Card.Title>
                                <Card.Text>
                                    Un estilo fresco y casual, ideal para salidas diarias o reuniones al aire libre.
                                    Perfecto para combinar con accesorios sencillos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Image src={ropaEstilo2} fluid/>
                            <Card.Body>
                                <Card.Title>Blusa de Seda</Card.Title>
                                <Card.Text>
                                    La elegancia en su máxima expresión, esta blusa es perfecta para ocasiones formales o de trabajo.
                                    Suave y sofisticada.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Image src={ropaEstilo3} fluid/>
                            <Card.Body>
                                <Card.Title>Chaqueta Casual</Card.Title>
                                <Card.Text>
                                    Combinando moda y comodidad, esta chaqueta es perfecta para días más fríos o salidas informales.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
            <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrarse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleRegisterSubmit}>
                        <Form.Group controlId="registerUsername">
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type="text" placeholder="No ingreses tu nombre real" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="registerEmail" className="mt-3">
                            <Form.Label>Correo Electrónico (Gmail)</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo Gmail" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="registerPassword" className="mt-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required/>
                        </Form.Group>

                        <Button style={{ backgroundColor: 'pink', color: 'white', border: 'none' }} type="submit" className="mt-3">
                            Registrarse
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>);
};
export default Home;

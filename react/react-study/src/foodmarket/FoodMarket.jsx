import './FoodMarket.css'
import foodsData from './data/foodsData';
import { useState } from 'react';
import FoodCard from './components/FoodCard';


import { Dropdown, DropdownButton, Container, Nav, Navbar, Row, Col, Spinner, Button, Card } from 'react-bootstrap';

import banner_bg from "./img/banner_bg.jpg";
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';


export default function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);


    return (

        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* <img src={banner_bg}/>
        {/*<img src="https://images.pexels.com/photos/35046629/pexels-photo-35046629.jpeg"/> */}


            <div className="main-bg"></div>

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={4} xxl={3}>
                                    <FoodCard/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>



            {/* bootstrap 한줄 기준 : 12 */}
            {/* <Container>
                <Row>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>
                                    {foods[0].title}
                                </Card.Title>
                                <Card.Title>
                                    {foods[0].content}
                                </Card.Title>
                                <Card.Text>
                                    {foods[0].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>
                                    {foods[1].title}
                                </Card.Title>
                                <Card.Title>
                                    {foods[1].content}
                                </Card.Title>
                                <Card.Text>
                                    {foods[1].price}
                                </Card.Text>
                                <Button variant="primary">
                                    상세보기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>
                                    {foods[2].title}
                                </Card.Title>
                                <Card.Title>
                                    {foods[2].content}
                                </Card.Title>
                                <Card.Text>
                                    {foods[2].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}









































            {/*
            이미지 사용 (연결)
            
                html 연결 상대경로 연결
                <img href , src="./image/a.png">
                <img src="../../monday/coffe.jpg">

                React 방식 
                상대폴더경로 링크로 연결 X
                
                React 컴포넌트 방식에서 이미지 사용시
                1. import 이미지
                2. 외부 이미지 url 경로
                

            */}

            {/* <Button variant="warning">Warning</Button>
            <Button variant="outline-primary">Primary</Button>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}


        </div>
    )
}
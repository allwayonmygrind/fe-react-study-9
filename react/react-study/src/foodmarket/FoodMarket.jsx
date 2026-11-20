import './FoodMarket.css'
import foodsData from './data/foodsData';
import { useState } from 'react';
import FoodCard from './components/FoodCard';
import { Routes, Route, Link, useNavigate } from "react-router"

import { Dropdown, DropdownButton, Container, Nav, Navbar, Row, Col, Spinner, Button, Card, Form } from 'react-bootstrap';

import banner_bg from "./img/banner_bg.jpg";
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';
import CustomerService from './pages/CustomerService';
import Home from "./pages/Home";
import Detail from "./pages/Detail";



export default function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    /*
    url주소(접속경로) 이동
    <a href="경로">
    location.href = "경로"

    react-router이동
    > 현재 html 동일한 페이지 > url 주소 표기가 바뀌면 > 그 주소일 때 보여주는 화면 요소로 전환 (지웠다가 다시 그리기)

    Link to=경로
    navigate(주소)
    */

    let navigate = useNavigate();

    return (

        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate("/")}}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>Info</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/help")}}>고객센터</Nav.Link>
                        <Nav.Link href="/help">고객센터</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={<Home foods={foods} />} />
                <Route path="/help" element={<CustomerService />} />
                <Route path="/detail/:id" element={<Detail foods={foods}/>} />
                <Route path="/detail" element={<div><h1>Detail Page</h1></div>} />
                <Route path="/info" element={<div><h1>Info 페이지</h1></div>} />
                <Route path="/test" element={<div><h1>이곳은 테스트</h1></div>} />
                <Route path="/*" element={<div><h1>잘못된 접근입니다. 경로를 확인하세요</h1></div>} /> 
                {/* *는 정해둔 path 이외의 모든 경로를 뜻한다 */}
            </Routes>




            {/* <img src={banner_bg}/>
        {/*<img src="https://images.pexels.com/photos/35046629/pexels-photo-35046629.jpeg"/> */}






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
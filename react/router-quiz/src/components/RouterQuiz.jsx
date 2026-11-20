import './RouterQuiz.css'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, BrowserRouter } from "react-router"
import { Container, Nav, Navbar } from 'react-bootstrap'
import Info from '../pages/Info';



export default function RouterQuiz() {

    let navigate = useNavigate();

    return (

        <div style={{textAlign:'center'}}>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Cart Space</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate("/mainpage") }}>Main Page</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/info") }}>Info</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/mypage") }}>My Page</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/cart") }}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<div><h1>시작 페이지</h1></div>} />
                <Route path="/mainpage" element={<div><h1>메인페이지</h1></div>} />
                <Route path="/info" element={<Info/>} />
                <Route path="/mypage" element={<div><h1>마이페이지</h1></div>} />
                <Route path="/cart" element={<div><h1>카트</h1></div>} />
                <Route path="/*" element={<div><h1>잘못된 접근입니다. 돌아가라잉</h1></div>} />
            </Routes>

        </div>
    )
}
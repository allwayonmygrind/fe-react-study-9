import { useParams, useNavigate } from "react-router";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useEffect } from "react";

export default function Detail({ foods }) {


    /* 
    
    useEffect 훅 (Hooks)

    useEffect(실행할 함수, 의존성배열)

    useEffect(실행할 함수, []) 빈 배열 -> 생성시에만 실행
    useEffect(실행할 함수, []) 모든 로딩딜 때 실행 (생성,update)
    useEffect(생성할 함수, [count]) -> count 값이 바뀔 때 마다 실행
    useEffect(생성할 함수, [a, b, c) -> a,b,c 값이 셋 중 하나라도 바뀔시 실행

    
    useEffect(실행할 함수(){
        return ()=>{clean up function} //unmount시 실행할 함수
    }
    , 의존성배열)
    
    
    */

    let [orderCount, setOrderCount] = useState(0);
    let [test, setTest] = useState(0);

    useEffect(() => {
        console.log("useEffect 함수 실행. (의존성 배열 없음)");
        //의존성배열 X -> 매번 실행
    })

    useEffect(() => {
        console.log("useEffect 함수 실행. [] 빈 의존성 배열 의존")
    }, []) //빈배열 -> 생성/로딩시 1회 실행

    useEffect(() => {
        console.log("useEffect 함수 실행. [orderCount] : " + orderCount);

    }, [orderCount]) // 의존성배열에 있는 orderCount 값 -> 참고
    
    
    useEffect(() => {
        console.log("useEffect 함수 실행. [test] : " + test);

    }, [test]) // 의존성배열에 있는 orderCount 값 -> 참고

    useEffect(() => {
        console.log("useEffect 함수 실행. [test, orderCount] : ");
        
    }, [test, orderCount]) // 의존성배열에 있는 orderCount 값 -> 참고


    // -------------------------

    //상세보기를 눌렀을 떄
    //특정 상품의 상세정보를 보여주는 페이지

    //url 주소창 접속 경로 /detail/:id

    // /detail/fd001    /detail/fd008
    //상세보기를 누르면 -> /detail/id값
    //id 값으로 넘어온 값이 무엇이냐? ----> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002 fd008 ???

    // :id 위치에 있는 값 접근

    let { id } = useParams();
    console.log(id);


    //id하고 같은 id 가진 food 데이터 찾기

    //filter
    // let food = foods.filter((food, index) => {
    //     return food.id == id;
    // })

    // find, findIndex

    let food = foods.find((food, index) => {
        return food.id == id;
    })


    // let foodIndex = foods.findIndex((food, index) => {
    //     return food.id == id;
    // })

    console.log(food);

    let navigate = useNavigate();

    // 해당 id 상품을 찾지 못했을 경우 필터링
    if (food == undefined || food == null) {
        return (
            <div>
                <h1>존재하지 않는 상품입니다.</h1>
                <h2>잘못된 접근입니다.</h2>
                <button variant='info' onClick={() => {
                    navigate("/");
                }}>홈으로 돌아가기</button>
            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={import.meta.env.BASE_URL + food.imgPath} style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                    <h4>{food.title}</h4>
                    <p>{food.content}</p>
                    <p>{food.price}</p>

                    <div>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                        }}>-</Button>
                        <span> {orderCount} </span>
                        <Button variant="dark" onClick={() => {
                            setOrderCount(orderCount + 1);
                            console.log('onClick() 함수에서 출력 : ' + orderCount)
                        }}>+</Button>

                        {/* <button onClick={()=>{setTest(test+1);}}>test 값 증가</button> */}
                    </div>

                    <Button variant="primary">주문하기</Button>
                </Col>
            </Row>
        </Container>
    )

}
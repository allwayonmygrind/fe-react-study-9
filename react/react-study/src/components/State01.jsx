import { useState } from 'react';

function State01() {

    // React Hooks (리엑트 훅)
    // useState -> 상태를 저장하는 변수, 재랜더링 발생 기준, 재렌더링 상황에서 값이 계속 유지

    // 재렌더링 발생 기준
    // state 변수가 set 함수를 통해서 값이 변경 된 경우 --> 화면을 재렌더링 함(re-rendering)

    // const | let [변수명 , set함수명] = useState(초기 값);

    let [count, setCount] = useState(0); // count = 0;

    /*
    function setCount(m){
        보유하고 있는 count = n;
    }
    */


    let cnt = 0; // 함수에 선언한 일반변수
    //재렌더링 시점에 다시 호출되면서 값이 0으로 또 초기화 (값 유지 X)
    let [num, setNum] = useState(0);


    return (
        <div>
            <h1>State01</h1>

            <p>{cnt}</p>

            <button onClick={() => {
                console.log('cnt 증가 버튼 클릭');
                cnt++
                console.log(cnt);

                num++;
                console.log(num);

            }}>cnt 증가</button>

            <br /><br />

            <h2>count State 변수</h2>
            <p>{count}</p>

            <button onClick={() => {
                console.log('count 증가 버튼 클릭');
                //count++; //그냥 값 증가 -> 값 증가는 됨 but set함수를 통해 바꾼게 아니라 재렌더링 x
                // setCount(count = count + 1); 사용이 어색하다
                setCount(count+1); //재렌더링 발생 조건 충족 -> 인근에 있는 재렌더링 요소를 모아서 한번에 수행
                //  보유하고 있는 count = 매개변수를 넣겟다 > 어색함

                console.log(count);

            }}>count증가</button>

        </div >
    )
}

export default State01;
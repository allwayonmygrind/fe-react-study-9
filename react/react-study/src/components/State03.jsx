import { useState } from "react";

export default function State03() {

    // let arr = [1, 2, 3, 4, 5]; // 일반 배열 변수 , 값을 바꾼다 해서 랜더링 되지 않음

    // 변수 set함수 useState(초기값);
    let [arr, setArr] = useState([1, 2, 3, 4, 5]);


    // 참조변수 (주소)
    // 객체, 배열

    // {key:value} 객체
    // [x, y, z] 배열

    return (
        <div>

            <button onClick={() => {

                //배열에 값 추가 push unshift splice

                // [1,2,3,4,5]
                // arr.push(6) [1,2,3,4,5,6]

                // console.log(arr);
                // arr.push(6);
                // console.log(arr);

                // setArr(arr); // 뒤에 6이 추가된 arr 배열 변수
                // 주소값이 그대로 유지...

                // 참조변수의 주소자체가 바뀌지 않기 때문에 -> 재렌더링이 발생 X
                // state 변수의 값이 set함수를 통해서 기존의 값이 새로운 값으로 변경 되면 -> 재렌더링 조선
                // 깊은복사 -> 새로운 주소에 데이터 생성 ...
                // set함수(새로운주소);
                // let temp = arr; 얕은복사라서 X

                let temp = [...arr]; //깊은복사
                temp.push(6);
                setArr(temp); 
                //State변수 arr에 값(주소)이 새로운 주소로 변경 -> 재렌더링

            }}>배열변경버튼</button>

            {
                arr.map((val) => {
                    return (<p>{val}</p>)
                })

                // arr.map((val)=>(<p>{val}</p>)) 위와 동일함
            }




        </div>
    )
}
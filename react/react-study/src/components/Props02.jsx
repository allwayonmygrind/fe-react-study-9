import React from "react";
import Box from "./Box";
import { useState } from "react";

export default function Props02() {

    let [titleArr, setTitleArr] = useState(["아침", "점심", "저녁"]);
    let [detailArr, setDetailArr] = useState(['졸리다', '배부르다', '피곤하다']);


    return (
        <div>

            <button onClick={() => {
                // React
                // 데이터 기반으로 화면을 표시 / 조작
                // 버튼을 눌렀을 때, 화면에야식 정보가 추가 표시
                // 야식 정보 -> 배열에 추가 -> 배열의 데이터가 map으로 반복하면서 화면에 표시
                // (값 보존 + 재렌더링)
                
                //배열은 참조변수 -> 새로운 값으로 변경인식 -> 깊은 복사
                let temp = [...titleArr] // ...은 깊은복사
                temp.push("야식");
                setTitleArr(temp); // 재렌더링 발생 조건 충족

                let temp2 = [...detailArr];
                temp2.push("행복하다");
                setDetailArr(temp2);

                console.log(titleArr, detailArr);

            }}>야식추가버튼</button>
            {
                titleArr.map((value, index) => {
                    return (
                        <Box title={value} detail={detailArr[index]} key={index} />
                    )
                })
            }
        </div>
    )
}

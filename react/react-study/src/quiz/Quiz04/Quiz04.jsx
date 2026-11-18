import { useState } from 'react'
import './Quiz04.css'

export default function Quiz04() {

    let [addTheBox,setAddTheBox] = useState([]);

    return (
        <div>
            <button onClick={()=>{
                let temp = [...addTheBox]
                temp.push('박스');
                // let temp = [...addTheBox, '박스'] = let temp = [...addTheBox] , temp.push('박스');
                setAddTheBox(temp);
            }}>
                추가
                </button>
            <br/>
            <Boxes/>
            {
                addTheBox.map(( _ , index)=>{
                    return <Boxes key={index}/>
                })
            }

            {/* {
                [...Array(cnt)].map((value, index)=>{ //cnt만큼의 빈 배열 요소를 만들 수 있다
                    
                })
            } */}
        </div>
    )
}

function Boxes() {
    return (
        <div className="box" >
            <span>박스</span>
        </div>
    )
}

// ----------------------------------------------------
{/**/}
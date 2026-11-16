import {useState} from 'react';
import {increaseCnt} from "./Quiz01";
import './Quiz1.css';

function Button1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=> setCount(increaseCnt(count))}>짝수출력</button>
            {/* <span style={{color:'red'}}>{count}</span> */}
            <span className="quiz-font-red">{count}</span>
    </div>
    );
}

export default Button1
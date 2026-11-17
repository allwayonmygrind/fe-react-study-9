import { useState } from "react";

export default function Quiz02() {
    // const [value, setValue] = useState('하나');

    // return (
    //     <div style={{textAlign:"center"}}>
    //         <p>{value}</p>
    //         <button onClick={() => {
    //             if (value === '하나') {
    //                 setValue('둘');
    //             } else if (value === '둘') {
    //                 setValue('셋');
    //             } else if (value === '셋') {
    //                 setValue('하나');
    //             }
    //         }}>변경버튼</button>
    //     </div>
    // );

    // 2) flag 활용 + if else
    // 3) 배열, index 활용

    let textArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);

    const btn_click= () => {
        // index++;
        // if (index > 2)
        //     index = 0;
        // setIndex(index);

        // (index+1)%3 





    }

    return(
        <div>
            <p>{textArr[index]}</p>
            <button onClick={btn_click}></button>
        </div>
    )
        
}
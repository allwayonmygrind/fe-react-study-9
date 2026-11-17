import { useState } from "react";

export default function Quiz02() {
    const [value, setValue] = useState('하나');

    return (
        <div>
            {value}
            <br/>
            <button onClick={() => {
                if (value === '하나') {
                    setValue('둘');
                } else if (value === '둘') {
                    setValue('셋');
                } else if (value === '셋') {
                    setValue('하나');
                }
            }}>변경버튼</button>
        </div>
    );
}
import { useState } from "react"
import "./Quiz05.css"

export default function Quiz05() {

    let [frontBoxes, setFrontBoxes] = useState([]);

    let [backBoxes, setBackBoxes] = useState([]);


    let posit = ["앞", "뒤"];

    let colorss = [
        { name: "빨간", calssName: "redd" },
        { name: "파란", calssName: "bluee" },
        { name: "초록", calssName: "greenn" }
    ];



    return (

        <div className="mainBox">

            <div className="buttTon">

                {posit.map((posit) => {
                    return colorss.map((color) => {
                        return (
                            <button
                                key={posit + color.name}
                                onClick={() => {
                                    if (posit == "앞") {
                                        setFrontBoxes([...frontBoxes, color.calssName]);
                                    } else {
                                        setBackBoxes([...backBoxes, color.calssName]);
                                    }
                                }}
                            >
                                {posit}{color.name}박스추가
                            </button>
                        );
                    });
                })}

                <button onClick={() => {
                    let temp = [...frontBoxes]
                    temp.pop();
                    setFrontBoxes(temp);
                }}>
                    앞 박스 삭제
                </button>

                <button onClick={() => {
                    let temp = [...backBoxes]
                    temp.shift();
                    setBackBoxes(temp);
                }}>
                    뒷 박스 삭제
                </button>

            </div>

            <div>

                <Boxes className="redd" />

                <Boxes className="bluee" />

                <Boxes className="greenn" />

                {frontBoxes.map((color, index) => {
                    return <Boxes key={index} className={color} />;
                })}

                <Boxes className="black" />

                {backBoxes.map((color, index) => {
                    return <Boxes key={index} className={color} />;
                })}


            </div>

        </div>
    )
}


function Boxes({ className }) {
    return (
        <div className={`box ${className}`}></div>
    );
}


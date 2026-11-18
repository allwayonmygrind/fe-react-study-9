import "./NewBlog.css"
import { useState } from "react";
import Quizz from "./Quizz";



export default function Quiz000() {


    let quizz = ['어제의 뉴스', '오늘의 뉴스', '내일의 뉴스'];

    return (

        <div>

            <div>
                <div className="black-nav">
                    <h3>Blog Header</h3>
                    {/* <h3>Blog Header</h3> */}
                    <div style={{ color: "orange", fontSize: "20px", height : "150px", }}>React Study</div>
                </div>


                {
                    quizz.map((value, index) => {
                        return (
                            <Quizz title={value} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

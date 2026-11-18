import { useState } from "react";

export default function Quizz(quizz) {
    let [likeCount, setLikeCount] = useState(0);


    return (
        <div className="post-list">
            <h4 onClick={() => {
            }}>
                {quizz.title}


                <span onClick={(event) => {
                    event.stopPropagation();
                    setLikeCount(likeCount + 1);
                }}>♥</span>

                {likeCount}
            </h4>

            <p>내용 무</p>
        </div>
    )
}

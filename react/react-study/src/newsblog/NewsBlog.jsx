import "./NewBlog.css"
import { useState } from "react";
import Modal from "./Modal";

export default function NewsBlog() {

    // 제목 잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되어 있는) or 일반변수 or State변수
    let title = "Blog Header";
    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    let [news1, setNews1] = useState("어제의 뉴스");
    let [news2, setNews2] = useState("오늘의 뉴스");
    let [news3, setNews3] = useState("내일의 뉴스");

    let [news, setNews] = useState(["어제의 뉴스", "오늘의 뉴스", "내일의 뉴스"]);

    let [likeCount, setLikeCount] = useState(0);

    let [modalFlag, setModalFlag] = useState(false);

    //뉴스를 눌렀을 때 Moadl 창에 전달할 정보를 저장할 변수
    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    return (

        <div>
            <div className="black-nav">
                <h3>{title}</h3>
                {/* <h3>Blog Header</h3> */}
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>


            {/* <div className="post-list">
                <h4 onClick={() => {
                    //modalFlag 값 변경
                    // setModalFlag(true);

                    //켜졌다 꺼졌다
                    // if(modalFlag)
                    //     setModalFlag(false);
                    // else
                    //     setModalFlag(true);

                    // setModalFlag( modalFlag ? false : true);

                    setModalFlag(!modalFlag);
                    //재렌더링

                }}>{news[0]} <span onClick={(event) => {
                    // event.preventDefault(); 발생하는 이벤트의 기본 수행을 막는다.
                    event.stopPropagation(); // 이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                    setLikeCount(likeCount + 1); //재렌더링
                }}>♥</span>{likeCount}</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>

            <div className="post-list">
                <h4>news[2]</h4>
                <p>내용</p>
            </div> */}
            {
                // modalFlag == true ? <Modal /> : null
            }
            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => {

                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);
                                setModalFlag(!modalFlag);
                            }}>{news[index]} <span onClick={(event) => {
                                event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                let temp = [...likeCountArr];
                                temp[index] += 1;
                                setLikeCountArr(temp);  //재렌더링 조건 충족
                            }}>♥</span> {likeCountArr[index]}</h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }

            <div>
                <button onClick={() => {
                    let temp = [...news];
                    temp[0] = "Today 긴급 속보!!!";
                    setNews(temp);
                }}>
                    긴급제목 변경
                </button>
            </div>
            {
                modalFlag && <Modal title={selectedTitle} likeCount={selectedLikeCount} 
                news={news} setNews={setNews} bgColor="lightblue"/>
            }




        </div>
    )
}

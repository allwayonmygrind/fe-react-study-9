import "./Quiz06.css";
import { useState } from "react";
import Quiz01Modal from "./Quiz01Modal";

export default function Quiz06() {

    let [news, setNews] = useState(["어제의 뉴스", "오늘의 뉴스", "내일의 뉴스"]);

    let [likeCount, setLikeCount] = useState(0);


    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);
    //각 뉴스별 좋아요 갯수를 관리

    let [modalFlag, setModalFlag] = useState(false);

    //뉴스를 눌렀을때 Modal 창에 전달할 정보를 저장할 변수
    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    // input 요소에서 입력된 값을 저장하는 용도
    let [inputText, setInputText] = useState('');




    return (
        <div>
            <div className="black-nav">
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>



            {
                news.map((item, index) => {
                    return (

                        <div className="post-list">

                            <h4 onClick={() => {

                                setSelectedTitle(item); //제목전달

                                setSelectedLikeCount(likeCountArr[index]); //좋아요갯수전달
                                //어떤뉴스 눌렀는지 title, likeCount -> state변수저장 -> Model props 전달

                                setModalFlag(!modalFlag);   //모달창 표시여부 true/false
                            }}> {news[index]}

                                <span onClick={(event) => {
                                    event.stopPropagation();  //이벤트 발생을 추가로 전파/전달 하는 것을 stop!
                                    let temp = [...likeCountArr];
                                    temp[index] += 1;
                                    setLikeCountArr(temp);  //재렌더링 조건 충족
                                }}>❤️</span>

                                {likeCountArr[index]}</h4>
                            <p>내용 무</p>

                            <button
                                onClick={() => {

                                    let temp = [...news];
                                    temp.splice(index, 1);
                                    setNews(temp);

                                    let temp2 = [...likeCountArr];
                                    temp2.splice(index, 1);
                                    setLikeCountArr(temp2);
                                    
                                }}>
                                삭제
                            </button>

                        </div>
                    )
                })
            }

            <div>
                <button onClick={() => {
                    let temp = [...news];
                    temp[0] = "Today 긴급 속보!!!";
                    setNews(temp);
                }}>긴급제목변경</button>
            </div>

            <div>
                <input
                    type="text"
                    id="input_news_title"
                    value={inputText}
                    onChange={(event) => {
                        //매개변수 event : 키보드 이벤트정보
                        //event.target 이벤트가 발생한 요소 접근 

                        // input창에서 입력 발생 -> onChange 이벤트에 등록된 함수 수행 -> value값을 state변수에 저장해둠

                        console.log(event.target.value);
                        setInputText(event.target.value);
                    }} />

                <button onClick={() => {

                    // 문자 앞뒤에 있는 공백 (띄어쓰기) 제거
                    // 띄어쓰기만 있을 때 등록을 방지
                    // trim()
                    if (inputText.trim() === '') {
                        alert('뉴스 제목을 입력해주세요.')
                        setInputText(''); // 입력칸 초기화
                        return;
                    }

                    // input에서 입력되어 저장된 state변수값 -> news배열에 추가등록  -> 재렌더링+화면에표시
                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    let temp2 = [...likeCountArr];
                    temp2.push(0);
                    setLikeCountArr(temp2);

                    setInputText(''); // 입력값 저장하는 inputText state변수에 값을 초기화(clean)

                }}>뉴스발행</button>
            </div>

            {
                modalFlag && <Quiz01Modal title={selectedTitle} likeCount={selectedLikeCount}
                    news={news} setNews={setNews} bgColor="lightblue" />
            }


        </div>
    )
}
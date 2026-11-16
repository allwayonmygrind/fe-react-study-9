
export default function State02() {

    //요소들을 반복으로 화면에 표시

    let numArr = [1, 1, 1, 1];

    let msg = "hihi";

    let text = "";
    for (let i = 1; i <= 5; i++) {
        text += "<p>안녕하세요~~ text for문</p>"; //단순 텍스트만 모이는 상태
    }

    //element 요소를 모아둔 배열
    let eleArr = [];
    for(let i = 1; i<=5; i++){
        eleArr.push(<p>안녕하세요~!! eleArr for문</p>);
    }
    //실제 화면에 표시되도록 데이터를 사용하는 용도로 데이터 배열
    let msgArr = ["안녕", "하이", "반가워", "hello", "밥먹었니?"];
    return (


        <div>
            {
                //for(let i=0;) 사용x
            }

            {msg}
            {
                numArr.map(() => { // [99,99,99,99]
                    // return 99;

                    return (
                        <p>안녕하세요! numArr.map()</p>
                    )
                })
            }

            <hr/>
            {text}

            <hr/>
            {eleArr}

            <hr/>
            {
                msgArr.map((value)=>{
                    return (
                        <p>인삿말 : {value}</p>
                    )
                })
            }

            
        </div>



    )
}   

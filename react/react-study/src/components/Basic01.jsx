function Basic01() {

    // JS 코드 작성 영역

    let hello1 = '안녕하세요';
    let hello2 = 'hello';

    let hello3;
    if (1 == 2) {
        hello3 = '안녕'
    } else {
        hello3 = '잘가'
    }


    let flag = false;

    let himsg = '1'

    for (let i = 1; i <= 10; i++) {
        himsg += "반갑습니다.";
    }



    // jsx
    //return 내부에 html 태그 표기방식
    // js + xml


    return ( // if 문 같은 건 return 안에서 사용이 불가함
        <div>
            <h1>React Basic01</h1>
            <h2 className='font-red'>hello react</h2>
            <h3>안녕하세요</h3>
            <h3>{hello1}</h3>
            <h3>{hello2}</h3>
            <h3>{hello3}</h3>

            {
                // if(flag==true) // js 코드가 안먹힘
                // <p>{hello1}</p>
                // else //if else는 로직을 하는 것인데 jsx는 한번에 끝나는 걸 해야함
                // <p>{hello2}</p>
            }
            {
                flag == true ? <p>{hello1}</p> : <p>{hello2}</p>
            }
            {
                flag == true && <p>{hello1}</p>
            }
            {
                flat == false && <p>flag == false && {hello2}</p>
            }

            <h2 style={{color:'blue', fontSize: '26px'}}>{himsg}</h2>





        </div>

    )
}


export default Basic01;
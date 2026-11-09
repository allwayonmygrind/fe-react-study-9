// function 함수

// 동작, 기능을 나타낸 코드 뭉치
// 매개변수, 리턴

/*
    function 함수명 (매개변수) {
        실행코드;
        실행코드;
        실행코드;
        실행코드;
        return 리턴값;
    
    }

    옵션 
    매개변수가 있을 수도 있고 없을 수도 있고      
    return 값이 있을 수도 있고 없을 수도 있다 총 네가지 경우의 수
*/

// 매개변수 없고 리턴도 없는 애
function func01 (){

    console.log('func01 함수 실행됨');
    console.log('함수 실행 코드 01');

}

// 함수 호출 call
func01();
// 뒤에 괄호도 꼭 붙여야함


let fn01 = 50;
fn01 = 60;
console.log(fn01);

// 매개변수 o return x
function func02( name ){
    console.log('func02 함수 실행됨');
    console.log('매개변수 : ' + name);
}

func02(); //함수호출() 매개변수에 들어갈 값을 전달하지 x
func02(123);
func02('코카콜라');

function func_02 (a , b){ //매개변수 2개
    console.log('func02 함수 실행됨');
    console.log('매개변수 : ' + a + b);
}

func_02(123, 456);

//매개변수 x return o
function func03(){
    console.log('함수 실행됨');
    console.log('500 나간다잉');
    return 500;
}

let temp = func03();
console.log('func03의 return 값 : ' + temp)

console.log('func03의 return 값 : ' + func03())

//매개변수 0 return o
function func04(n){
    console.log('func04 함수실행');
    console.log('넘겨준 값을 * 10해서 돌려줌');
    return n*10;
}

func04(10);
let ship = func04(10);
console.log(ship);
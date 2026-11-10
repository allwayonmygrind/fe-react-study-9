
function func01() {
    console.log("func01()")
}

func01();

const func02 = function () {
    console.log("func02()");

}

func02();

const func03 = function func0303() {
    console.log("func03()");

}
func03();
//func0303(); 함수 인식이 안됨

// 화살표 함수 (Arrow Function)

const func04 = () => {
    console.log("func04()");
}

func04();

//---------------------------------------------------------------------

// 함수선언 + 매개변수

function func05(a, b) {
    console.log('fucn05()' + a + '' + b);
}
func05(10, 20);
func05('a', 'b');

const func06 = function (a, b) {
    console.log('fucn06()' + a + '' + b);
}
func06(12, 34);

const func07 = function func0707(a, b) {
    console.log('fucn07()' + a + '' + b);
}
func07(56, 78);

const func08 = (a, b) => {
    console.log('func08()' + a + '' + b);
}
func08('hello', 'hi');

//----------------------------
//함수 리턴

//두개의 매개변수를 받아서 두 값의 합을 반환
function sum1(a, b) {
    return a + b; //or let sum = a + b; return sum;

}

let r1 = sum1(10, 20);
console.log(r1);
console.log(sum1(55, 56));

const sum2 = function (a, b) {
    return a + b;
}

console.log(sum2(442, 756));

const sum3 = (a, b) => {
    return a + b;
}

console.log(sum3(111, 222));

//화살표 함수 => 뒤에 중괄호 없이 바로 나오는 값을 return 값으로 인식처리

const sum4 = (x, y) => x + y;
//   {return x+y,}

console.log(sum4(10, 9));

const sum5 = () => 1 + 2 + 3 + 4 + 5;
console.log(sum5);

//-----------------

{
    let w = 33000
}

{
    let q = 10;
}

for (let r = 1; r < 10; r++) {

}

//-------------------------

//호이스팅
//var

console.log(w);
var w = 30;

r = 3000;
var r;
console.log(r);

// 함수 호이스팅

function check() {
    console.log('check() !!!');
}

check();

//일회용 함수

(function onetime() {
    let x = 10;
    let y = 20;
    console.log('일회용 함수');
})
//(); // 일회용 함수 선언 및 바로 호출
//onetime(); // 호출 불가
{
    let x = 10;
    let y = 20;
    console.log('일회용 함수');
}
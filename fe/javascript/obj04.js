
// JS 배열 관련 함수

// 기본 배열
let arr = [10, 20, 30, 40];

// qksqhrans for , for in, for on, forEach

// 1) map

// 배열안의 요소들을 하나씩 접근하면서 반복실행, 수행 후 return 기능이 있다

arr.map(() => { //단순반복용... 요소의 숫자만큼
    console.log("arr map(");
})

//요소로 반복 : forEach
arr.forEach(() => {
    console.log("arr forEach()");
})

arr.map((item) => { //매개변수 1개짜리 콜백함수 선언 -> item 매개변수에는 배열 요소의 값 주입
    console.log('arr map()' + item) // ()안의 입력값을 arr의 index 갯수만큼 출력 (item)은 arr의 값을 받음
})

console.log('1---------------');

let result1 = arr.map(() => { // arr의 index 0123= 4 4번 반복 
    return 99;
}) // [ 99, 99, 99, 99]

console.log(result1);

console.log('2-------');

let result2 = arr.map((item) => {
    console.log(item);

});
console.log(result2); //undefined

console.log('3------------');

let result3 = arr.map((item) => {
    return (item + 100);
})
console.log(result3);

let result4 = arr.map((item, index) => {
    return 'index : ' + index + ' value : ' + item;
})
console.log(result4);

let menuArr = ['라면', '우동', '김밥'];

let result5 = menuArr.map((menu, index) => {
    return "<p>" + (index + 1) + "번" + menu + "<.p>";
})
console.log(result5);

let result6 = menuArr.map((menu, index) => "<p>" + (index + 1) + "번" + menu + "<.p>");
console.log(result6);

// 2) filter
// 실행 결과값(return)이 참인 요소만 모아서 return
arr = [10, 20, 30, 40];

let result7 = arr.filter((value) => {
    return true;
})

console.log(result7);

let result8 = arr.filter((value) => {
    // let temp = value > 25;
    // return temp;
    return (value > 25); // 벨류가 25보다 큰 것만 내보내겠다
})

console.log(result8);

arr = [1, 2, 3, 4, 3, 3, 2, 1, 2];

let result9 = arr.filter((value) => {
    return value == 3; // 3이 아닌 것만 내보내겠다
    // true ? false?
})

console.log(result9);

// 3) find
// return이 true인 요소를 찾는 기능 못찾으면 undefined
let result10 = arr.find((value) => {
    return value == 3;
});

console.log(result10);

// 4) findIndex find는 값을 찾는다면 얘는 index를 찾는거
// return이 true인 요소를 찾는 기능 못찾으면 -1
let result11 = arr.find((value) => {
    return value == 3;
});

console.log(result11);
if (result11 == -1)
    console.log('못찾았다. 그런거 없다');

// 구조분해할당 (Destructuring assignment)

let arr2 = [10, 20, 30];
console.log(arr2);
console.log(arr2[2]);
let [n1, n2, n3] = [77, 88, 99];
console.log(n1, n2, n3);
// console.log(n1[1]); 이미 기본 숫자형 데이터인 상태 (배열 x)

let [num, setNum] = [123, 456];

function func1() {
    console.log('func1() 함수 호출');
}
func1();

let [v, f] = [50, func1];

console.log(v);
f(); //함수

let obj = {
    num1: 30,
    num2: 50
};


console.log(obj.num1);
console.log(obj.num2);

let obj2 = obj;
console.log(obj2.num1);
console.log(obj2.num2);

let { num1, num2 } = obj;
console.log(num1, num2);

//-------------------

let [count, setCount] = uesState(0);

function useState(n) {
    let v = n;

    function serV(input) { //set 함수
        v = input;
    }

    return [v, setV];
}

console.log(count);
setcount(10);
console.log(count);
// Quiz 1

const realName = '홍길동';
const height = 175.5;
let age = 25;
let student = true;    //논리형 변수(True or False)는 앞에 is나 has를 붙이는 경우가 많다 isStudent
let liveAdress = '서울';

console.log('이름 : '+realName);
++age;
console.log('나이 : '+age);
console.log('키 : '+height);
console.log('학생 여부 : '+student);
console.log('거주 지역 : '+liveAdress);

// Quiz 1

console.log("---------"); // 출력 시 구분 선

// Quiz 2
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);

price = 1500;
quantity = 10;

console.log('-- 변경된 값--');

console.log(price);
console.log(quantity);

/*
productName = 딸기
console.log(productName);
*/

// ↑ 위 productname의 값을 재정의 할 경우 오류가 뜨는 이유는 
//             → const로 변경할 수 없는 값으로 쓰겠다는 상수선언을 했기 때문에 변경하려 시도하면 오류가 뜬다.

// Quiz 2

console.log("---------"); // 출력 시 구분 선

// Quiz 3

/*
다음 코드를 실행하기 전에 출력 결과를 예상해 보세요.

let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b);
*/

/* 답변
```
10
20
undefined

100
100
```
*/

let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b);

// 실제 실행 결과와 비교하세요 → 예상 결과와 실행 결과가 똑같다.

//  b = a가 어떤 의미인지 설명하세요. → =의 오른쪽에 있는 a의 값을 b로 정하겠다.

// c가 undefined로 출력되는 이유를 설명하세요. → c를 선언하기만 했을 뿐 값을 설정하진 않았기에 undefined로 출력된다
//                                          > 변수초기화 안된 상태

// Quiz 3

console.log("---------"); // 출력 시 구분 선

// Quiz 4

/*

다음 코드에는 JavaScript 변수명 규칙에 어긋나는 부분이 있습니다.

let 1name = "김철수";
let user age = 30;
let user-name = "이영희";
let const = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;
*/

// 잘못된 변수명을 찾아보세요. → 
// let 1name = "김철수"; | 식별자의 첫글자에는 영어 소문자 '_' '$' 만 올 수 있다.
// let user age = 30; | 식별자에는 띄어쓰기를 사용할 수 없다.
// let user-name = "이영희"; | 언더스코어'_' 와 달러 '$' 만 식별자에에 사용이 가능하다.
// let const = 100; | 식별자에는 키워드가 사용이 불가하다.

// 잘못된 변수명을 정상적인 변수명으로 수정하세요. → 
// let $name = "김철수";
// let user_age = 30;
// let userName = "이영희";
// let &const = 100;

// 수정한 모든 변수를 출력하세요.

let $name = "김철수";
let user_age = 30;
let userName = "이영희";
let $const = 100;       //constVariable Variable:변수 라는 뜻 var이라고 축약하기도 함
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log($name);
console.log(user_age);
console.log(userName);
console.log($const);
console.log(my_score);
console.log($price);
console.log(_count);

// Quiz 4
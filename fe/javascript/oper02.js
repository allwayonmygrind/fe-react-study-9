// oper02.js

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

//복합대입연산자
// 앞에 있는 값에 뒤에 있는 것을 연산해 재정의 한다
// x += 10
// 앞에 있는 x에 뒤에 있는 10을 + 연산해 재정의 한다

x += 10
// x에 10을 더해서 x값으로 재정의 한다
x -= 5;
x /= 3;


// 비교연산자

// = : 대입연산자
// == : 값이 같은가? 대조하는 뜻
// != : 값이 다른가? 대조하는 뜻
// > < >= <= 수학과 동일

x = 10;
let y = 10;
let z = '10';

console.log( x == y ); // true
console.log( x != y ); // false
console.log( x > 5 ); // true
console.log( x <= 20 ); //true

let r1 = x <= 20
console.log( r1 );

// == 값이 같은가
// === 값 + type(자료형)까지 같은가
console.log(x === z)
// → ==일 땐 둘다 10이라는 값이라서 True가 나오지만
// ===일 떈 x 정수값 10 , z 문자 '10' 이라서 Type이 다르기에 false가 나온다

// &&       ||      !
// and      or      not

/*
        조건 1    조건2    결과
&&      true     true    true      (두 조건이 모두 true여야 true)
        true     false   false
        false    true    false
        false    false   false

||      true     true    true      (true가 하나라도 있으면 true)
        true     false   true
        false    true    true
        false    false   false

1       true             false     (true면 false / false면 true   반전됨)
        false            true
*/





// true에 !를 붙이면 false가 되고 반대의 경우엔 true가 된다

x = 10;
y = 20;

console.log( x > 5 && y > 0);
//           true  && true  -> true
console.log( x == 1 || y === 20 );
//           false  || false -> false
console.log(!true);
//       !true   -> false

let b = false;
console.log(b);
//     false -> false
console.log(!b);
//     !false -> true

console.log( !(x > 5 && y > 0));
console.log( !(x > 5) && y > 0);

// 삼항연산자

// (조건식 {결과가 true or false}) 삼항연산자의 구조 [ 대상 ? 항목1 : 항목2 ; ]
//                                                  true    false  (true면 항목 1 출력 false면 항목 2 출력)
console.log( x == 10 ? '10이랑 같음' : '10이랑 다름');
//           x=10 참 이기에  '10이랑 같음 출력'
console.log( y == 10 ? '10이랑 같음' : '10이랑 다름');

let r2 = x + (x == 10 ? 10 : 20)
//
console.log(r2);


//---------------------
// 타입변환 (형변환)
// String()
// Number()
console.log("-------------")

let q = 10;
let w = '20';
let e = 30;

console.log( q + e );
console.log( q + w + e);

console.log( q + String(e))
// string에 묶인, 정수였던 E(30)가 문자 '30'이 됨
console.log( q + Number(w) + e);
// number에 묶인, 문자였던 W('20')가 숫자 20 이 됨
console.log(Number('13424'));
console.log(Number('134124.123123'));

//------------------------------

// && 조건식 처럼 사용

q = 10;
if ( q == 10){
        console.log('q가 10이더라');
}

q == 10 && console.log('q가 10이더라');
//앞이 true이면 &&의 뒷 내용도 실행
q == 11 && console.log('q가 10이더라');
q != 11 && console.log('q가 11이 아니더라');

console.log(10 == 10);
console.log(10 == 10.0);
console.log(10 === 10.0);
console.log('10' == '10.0');
console.log(Number(10) == Number(10.0));
console.log(Number(10) === Number(10.0));
console.log(); 
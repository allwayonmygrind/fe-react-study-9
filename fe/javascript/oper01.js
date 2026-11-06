// operator 연산자

let x = 10;
let y = 20;
let z = '30';

console.log(x);
console.log(x+10);
console.log( x + y );
console.log( x - y );
console.log( x * y );
console.log( x / y );
console.log( 10 % 4 );
console.log( 2 ** 3 );

console.log(x+x+y+y);

console.log(x); // x 는 10이 출력 됨
x = 20;
//let x =20; 이미 위에서 한번 x를 선언 했으므로 다시 선언은 안됨 
console.log(x); // x=20;이 반영 된 이후 이므로 20이 출력됨

x = x-5 //위에서 선언한 x 20의 값이 들어가 15가 출력 됨
//대입연산자는 우선 순위가 낮음


//문자가 포함된 + 연산 : 문자형태로 이어붙이기
console.log(x+y+z);
//         15 20 '30'
//         ㄴ35 + '30' = 3530
//          숫자 뒤에 더해지는 문자는 그냥 숫자 뒤에 문자가 붙는 연산 
console.log(z+x+y);
//        '30'+15+20
//         '30'과 15가 더해져 '3015'라는 문자가 되고 20이 오니 그냥 문자열인 '301520'이 됨
//---------------------------------------------------------------------------------
let q = 10;
// ++ -- +1 -1
console.log();
// ++q q++ --q q-- 넷 다 다르다 단항연산자
// + or -를 먼저하느냐 나중에 하느냐의 차이
// 변수원본 값이 변경됨

console.log(q);
console.log(q + 5);
console.log(q);
// ↑위는 그저 q + 5를 출력했기에 마지막 출력의 q 값이 10으로 달라지지 않았지만
// ↓아래는 q = q+5 라는 원본 값을 다르게 재정의 했기에 q 값이 재정의 된 값으로 출력된다
console.log(q);
q = q + 5;
console.log(q);

// q++
// → q=q+1 이라는 뜻
q++;
console.log(q);
q--;
console.log(q);
// q=q+5로 15였던 값이 q++;로 q+1이 되어 16으로 재정의 되어 출력되고 q--;로 또 q-1로 재정의 되어 q의 값은 다시 15가 된다

// q = 15
console.log(q++ + 10);
//          15 + 10 = 25
//   계산 후 시점에서는 q++로 인해 q 값이 16으로 재정의 됨
console.log(q);
//       a=16
console.log(++q + 10);
//   계산 전 시점부터 +1로 간주되어 16이 아닌 17+10으로 계산 됨       17  + 10 = 27
//         q=17 
console.log(q);
//         q=17

let w =5;
console.log(w); // 5
w = ++q - w; // 18 - 5 = 13
console.log(w); // 13         q=18
w= q-- + w; //18 + 13 = 31    1=17
console.log(w); // 31
console.log(q);
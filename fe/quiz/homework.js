// 1~10 --------------------------

//문제 1. let으로 age 변수를 선언하고 25를 저장한 후 출력하세요.

let age = 25;
console.log(age);

//문제 2. const로 userName 변수를 선언하고 "홍길동"을 저장한 후 출력하세요.

const userName = "홍길동"
console.log(userName);

//문제 3. let으로 price를 선언하고 1000을 저장하세요. 이후 2000으로 변경하고 출력하세요.

let price = 1000;
price = 2000;
console.log(price);

//문제 4. 값을 저장하지 않은 data 변수를 선언하고 출력하세요. 어떤 값이 출력되는지 확인하세요.

let soobin;
console.log(soobin);
undefined 가 출력 됨
console.log("-----------");

//문제 5. 이름 김철수, 나이 30, 키 178.5, 학생 여부 false를 각각 변수에 저장하고 출력하세요.

const realName = '김철수';
let nowAge = 30;
const height = 178.5;
let isStudent = false;
console.log(realName);
console.log(nowAge);
console.log(height);
console.log(isStudent);
console.log('----------');
/*

문제 6. let a = 10;

let b = a;
a = 30;
console.log(a);
console.log(b);

출력 결과를 예상하세요.*/

30
10

//문제 7. let score = 80; let score = 90; 코드의 오류 원인을 설명하고 수정하세요.

같은 변수이름으로 두번 선언했기 때문?
or
80; 으로 선언한 다음 
score = 90; 을 하려했는데 let을 적었기 때문?
or
let을 var로 바꿔야 하는데 let을 사용했기 때문?

let score = 80;
let score2 = 90;
Or
let score = 80;
score = 90;
Or
var score = 80;
var score = 90;

//문제 8. const maxValue = 100; maxValue = 200; 코드의 오류 원인을 설명하세요.
const는 값이 변할 수 없는 상수선언이기에 선언 이후 값을 변경하는 행위는 오류

//문제 9. 다음 변수명 중 사용할 수 없는 것을 찾고 수정하세요.

/*
let 1score = 100;
let myName = "홍길동";
let user age = 20;
let $money = 5000;
let user-name = "김철수";
*/

let score = 100; > 변수명 맨 앞에는 소문자 영문,$,_ 만 올 수 있음
let user_age = 20; > 변수명에는 띄어쓰기가 올 수 없음
let userName = "김철수"; > 변수명에는 "-"를 쓸 수 없음


/*문제 10. 다음 중 중복 선언이 가능한 코드를 찾으세요.
A: var a = 10; var a = 20;
B: let b = 10; let b = 20;
C: const c = 10; const c = 20;
*/

A (var은 중복 선언이 가능하다)

// 1 ~ 10 ---------------------------------

// 11 ~ 20 -----------------------------------

//문제 11. a=15, b=4를 선언하고 덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력하세요.
var a = 15;
var b = 4;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//문제 12. 100을 7로 나눈 나머지를 출력하세요.
console.log(100%7);

//문제 13. 2의 5제곱을 ** 연산자로 계산하여 출력하세요.
console.log(2**5);

//문제 14. a=10, b=3일 때 a / b와 a % b의 결과를 예상하세요.

3.33
1

//문제 15. console.log(10 + 5 * 2); 결과를 예상하세요.
20

//문제 16. console.log((10 + 5) * 2); 결과를 예상하세요.
30

//문제 17. console.log(20 - 4 * 3 + 10); 결과를 예상하세요.
18

//문제 18. console.log(2 ** 3 + 10 % 3 * 5); 결과를 예상하세요.
13

//문제 19. 사과 한 개 1200원, 5개 구매 시 총금액을 변수와 연산자로 계산하세요.

let apple = 1200;
console.log(apple*5);
6000

//문제 20. 125분을 시간과 분으로 나누어 출력하세요. /, %, Math.floor()를 사용하세요.

let minTime = 125;
let hours = Math.floor(minTime/60);
let minutes = Math.floor(minTime%60);
console.log(hours+"시간"+minutes+"분");
2시간 5분

// 11~20 ----------------------------------------------------

// 21~30 ----------------------------------------------------

//문제 21. console.log(10 + 20 + "30"); 결과를 예상하세요.
3030

//문제 22. console.log("10" + 20 + 30); 결과를 예상하세요.
102030

//문제 23. console.log(10 + "20" + 30); 결과를 예상하세요.
102030

//문제 24. console.log(10 + 20 + 30 + "원"); 결과를 예상하세요.
60원

//문제 25. console.log("합계: " + 10 + 20); 결과를 예상하세요.
합계: 1020

//문제 26. console.log("합계: " + (10 + 20)); 결과를 예상하세요.
합계: 30

//문제 27. a=5, b="10"일 때 a+b와 a*b의 결과를 예상하세요.

a+b = 510
a*b = 50

//문제 28. "100" - 20, "100" * 2, "100" / 4의 결과를 예상하세요.
80, 200, 25

//문제 29. 이름과 나이를 변수에 저장하고 "홍길동님의 나이는 25세입니다."를 문자열 결합으로 출력하세요.
const name1 = "홍길동"
let age1 = 25
console.log(name1+'님의 나이는 '+age1+'세입니다.')

/*문제 30. a=10, b=20, c="30"일 때 다음 결과를 예상하세요.
a+b+c
c+a+b
a+c+b
a*2+c
*/

3030
301020
103020
2030

// 21~30 ----------------------------------------------------

// 31~45 ----------------------------------------------------

//문제 31. let a=10; a++; console.log(a); 결과를 예상하세요.
11

//문제 32. let a=10; a--; a--; console.log(a); 결과를 예상하세요.
8

//문제 33. let a=5; console.log(a++); console.log(a); 결과를 예상하세요.
5, 6

//문제 34. let a=5; console.log(++a); console.log(a); 결과를 예상하세요.
6, 6

//문제 35. let a=10; console.log(a--); console.log(a); 결과를 예상하세요.
10, 9

//문제 36. let a=10; console.log(--a); console.log(a); 결과를 예상하세요.
9, 9

//문제 37. let a=10; let b=a++; console.log(a,b); 결과를 예상하세요.
11, 10

//문제 38. let a=10; let b=++a; console.log(a,b); 결과를 예상하세요.
11, 11

//문제 39. let a=5, b=10; let c=a++ + b; console.log(a,b,c); 결과를 예상하세요.
6, 10, 15

//문제 40. let a=5, b=10; let c=++a + b--; console.log(a,b,c); 결과를 예상하세요.
6, 9, 16

//문제 41. let a=10, b=3; let c=a-- - ++b; console.log(a,b,c); 결과를 예상하세요.
9, 4, 6

//문제 42. let x=5, y=10; x=++y - x++; console.log(x,y); 결과를 예상하세요.
6, 11

//문제 43. let a=10, b=20; a=a++ + ++b; console.log(a,b); 결과를 예상하세요.
31, 21

/*
문제 44. 
let a=5, b=10;
b=a++ + --b;
a=++a + b--;
console.log(a,b);

결과를 예상하세요.
*/

b = 5 + 9

a = 6
b = 14

a = 7 + 13

a = 21
b = 13

a,b =  21, 13

/*
문제 45. 
let x=10, y=5, z=3;
x=++y + z--;
y=x-- - ++z;
z=x++ + y--;
console.log(x,y,z);

결과를 예상하세요.
*/

x = 6 + 3

x = 9
y = 6
z = 2

y = 9 - 3

x = 8
y = 6
z = 3

z = 8 + 6 

x = 9
y = 5
z = 14

9, 5, 14

// 31~45 --------------------------------------------------------------------------------

// 46~55 --------------------------------------------------------------------------------

//문제 46. let a=10; a+=5; console.log(a); 결과를 예상하세요.
15

//문제 47. let a=20; a-=7; console.log(a); 결과를 예상하세요.
13 

//문제 48. let a=5; a*=4; console.log(a); 결과를 예상하세요.
20

//문제 49. let a=100; a/=4; console.log(a); 결과를 예상하세요.
25

//문제 50. let a=17; a%=5; console.log(a); 결과를 예상하세요.
2

//문제 51. let a=10; a+=5; a*=2; a-=8; console.log(a); 결과를 예상하세요.
22

//문제 52. let a=100; a/=2; a+=10; a%=7; console.log(a); 결과를 예상하세요.
4

/*
문제 53. 
다음 코드를 복합대입연산자로 바꾸세요.

let a=10;
a=a+20; 
a=a*3; 
a=a-15; 
a=a/5;
*/
let a = 10;
a += 20;
a *= 3;
a -= 15;
a /= 5;

//문제 54. 계좌 잔액 100000원에서 30000원 입금, 25000원 출금 후 잔액을 복합대입연산자로 출력하세요.
let wallet = 100000;
wallet += 30000;
wallet -= 25000;
console.log(wallet);
105000

//문제 55. 캐릭터 체력 100에서 30 감소, 20 회복, 15 감소 후 최종 체력을 복합대입연산자로 출력하세요.
let charHp = 100;
charHp -= 30;
charHp += 20;
charHp -= 15;
console.log(charHp);
75

// 46~55 ------------------------------------------------------------

// 56~65 ------------------------------------------------------------

//문제 56. 10 == 10과 10 != 10의 결과를 예상하세요.
true , false

//문제 57. 10 > 5, 10 < 5, 10 >= 10, 10 <= 9의 결과를 예상하세요.
true, false, true, false

//문제 58. 10 == "10"과 10 === "10"의 결과를 예상하세요.
true, false
//문제 59. 20 != "20"과 20 !== "20"의 결과를 예상하세요.
false, true

//문제 60. a=15, b=20일 때 a>b, a<b, a==b의 결과를 예상하세요.
false, true, false

//문제 61. age 변수를 선언하고 20세 이상인지 비교한 결과를 출력하세요.
let age; > (변수 값을 임의로 선언하라는 뜻?? / 아니면 지금 해놓은 것 처럼 선언만 해두기?)
console.log(age >= 20);

//문제 62. score 변수를 선언하고 60점 이상인지 비교한 결과를 출력하세요.
let score;
console.log(score >= 60);

//문제 63. a=10, b="10", c=20일 때 다음 결과를 예상하세요.
//a==b; a===b; a+10==c; a+b=="1010";
true, false, true, true

/*
문제 64. let a=5, b=10;

console.log(a++ == 5);
console.log(a);
console.log(++b == 11);
console.log(b);
결과를 예상하세요.
*/
true
6
true
11

//문제 65. a=100, b="100"의 값과 자료형이 모두 같은지 비교하는 코드를 작성하세요.
console.log(a === b);

// 56~65 ---------------------------------------------------------------------------------

// 66~75 ---------------------------------------------------------------------------------

//문제 66. 다음 && 결과를 예상하세요: true&&true, true&&false, false&&true, false&&false.
true, false, false, false

//문제 67. 다음 || 결과를 예상하세요: true||true, true||false, false||true, false||false.
true, true, true, false

//문제 68. !true, !false, !!true의 결과를 예상하세요.
false, true, true

//문제 69. a=10, b=20일 때 a>5 && b>10의 결과를 예상하세요.
true&&true=true

//문제 70. a=10, b=20일 때 a>15 || b>15의 결과를 예상하세요.
false||true=true

//문제 71. a=10, b=20일 때 !(a>5 && b>10)의 결과를 예상하세요.
!(true&&true=true) = !true
!true = false

/*
문제 72. 
a=10, b=20일 때 다음 결과를 예상하세요.
a==10 && b=="20"
a==10 || b==="20"
*/
true&&true = true
true||false = true

//문제 73. age=25일 때 나이가 20세 이상이면서 30세 이하인지 확인하는 논리식을 작성하세요.
let age = 25;
age >= 20 && age <= 30

//문제 74. score=75, attendance=90일 때 점수 60 이상이면서 출석률 80 이상인지 확인하세요.
let score = 75, attendance = 90;
score >= 60 && attendance >= 80;

/*
문제 75. 
a=10, b=20, c=30일 때 결과를 예상하세요.

a<b && b<c
a>b || c>b
!(a==10)
(a>5 && b<10) || c==30
!(a>5) && b>10
*/
1. true && true = true
2. false || true = true
3. !true = false
4. (true && false) || true
(false) || true = true
5. !(true) && true
false && true = false

// 66~75 ---------------------------------------------------------------------------------

// 76~85 ---------------------------------------------------------------------------------

//문제 76. age=20일 때 age>=19 ? "성인" : "미성년자"의 결과를 예상하세요.
성인

//문제 77. score=55일 때 score>=60 ? "합격" : "불합격"의 결과를 예상하세요.
불합격

//문제 78. 숫자 10이 양수인지 아닌지 삼항연산자로 판단하여 출력하세요.
let number = 10;
console.log(number > 0 ? '양수' : 'not양수');

//문제 79. a=10, b=20 중 더 큰 값을 삼항연산자로 출력하세요.
console.log(a > b ? a : b);

//문제 80. let a=10; let result = a==10 ? 100 : 200; console.log(result); 결과를 예상하세요.
a==10 ? 100 : 200 //100
100

//문제 81. let a=10, b=20; let result=a+(b>10 ? 5 : 15); 결과를 예상하세요.
10+(5)
15

//문제 82. num=17이 짝수인지 홀수인지 삼항연산자로 출력하세요.
console.log(num % 2 == 0 ? '짝수' : '홀수');

//문제 83. price=25000일 때 30000원 이상이면 "무료배송", 아니면 "배송비 발생"을 출력하세요.
let price = 25000;
console.log(price >= 30000 ? '무료배송' : '배송비 발생');

//문제 84. score=85일 때 다음 결과를 예상하세요.
//score>=90 ? "A" : score>=80 ? "B" : "C"
B

//문제 85. a=10, b=20일 때 다음 결과를 예상하세요.
//a>b ? a+5 : b+5
b+5
25

// 76~85 ---------------------------------------------------------------------------------

// 86~95 ---------------------------------------------------------------------------------

//문제 86. Number("100")의 결과를 예상하세요.
100

//문제 87. String(100)의 결과를 예상하세요.
'100'

//문제 88. 10 + "20"의 결과를 예상하세요.
'1020'

//문제 89. 10 + Number("20")의 결과를 예상하세요.
30

//문제 90. String(10) + 20의 결과를 예상하세요.
'1020'

//문제 91. a="100", b="200"일 때 a+b와 Number(a)+Number(b)의 결과를 예상하세요.
a+b = '100200'
Number(a)+Number(b) = 300

//문제 92. a=10, b="20", c=30일 때 a+b+c와 a+Number(b)+c의 결과를 예상하세요.
a+b+c = '102030'
a+Number(b)+c = 60

//문제 93. Number("3.14") + 2와 String(100) + String(200)의 결과를 예상하세요.
Number("3.14") + 2 = 5.14
String(100)+String(200) = '100200'

//문제 94. a="50", b=20일 때 a+b, Number(a)-b, Number(a)*b, Number(a)/b의 결과를 예상하세요.
a+b = '5020'
Number(a)-b = 30
Number(a)*b = 1000
Number(a)/b = 2.5

/*
문제 95. a="10", b=20, c="30"일 때 결과를 예상하세요.
a+b+c
Number(a)+b+Number(c)
String(b)+a
Number(a+b)
*/
a+b+c = '102030'
Number(a)+b+Number(c) = 60
String(b)+a = '2010'
Number(a+b) = 1020

// 86~95 ---------------------------------------------------------------------------------

// 96~100 --------------------------------------------------------------------------------

/*
문제 96. 쇼핑몰 결제: 상품 가격 15000원, 수량 3개, 배송비 3000원.
1) 상품 총금액 계산 
2) 배송비 포함 최종 결제금액 출력
3) 50000원 이상인지 비교 
4) 삼항연산자로 "고액 주문"/"일반 주문" 출력
*/

let itemPrice = 15000;
let deliveryFee = 3000;
let allPrice = itemPrice * 3;
let totalPrice = allPrice + deliveryFee;

1) 상품 총금액 = allPrice
2) console.log('상품 총 가격은 : (배송비 포함)' + totalPrice + '원')
3) totalPrice >= 50000;
4) console.log(totalPrice >= 50000 ? '고액 주문' : '일반 주문')

//--------------------------------------------------------------------------------

/*
문제 97. 시험 점수: 국어 85, 영어 90, 수학 75.
1) 총점 계산 
2) 평균 계산 
3) 평균 80 이상인지 비교
4) 삼항연산자로 "우수"/"보통" 출력
*/

let korLang = 85;
let engLang = 90;
let mathScore = 75;

let totalScore = korLang+engLang+mathScore;
let averageScore = totalScore/3


console.log('총 점수는 : ' + totalScore);
console.log('평균 점수는 : ' + averageScore);
console.log(averageScore >= 80);
console.log(averageScore >= 80 ? '우수' : '보통')


//--------------------------------------------------------------------------------

/*
문제 98. 은행 계좌: 초기 잔액 100000원.
1) 50000원 입금 
2) 30000원 출금 
3) 20000원 추가 출금
4) 복합대입연산자 사용 
5) 최종 잔액 출력
6) 잔액 100000원 이상인지 비교 
7) "잔액 충분"/"잔액 부족" 출력
*/

let bankWallet = 100000
bankWallet += 50000;
bankWallet -= 30000;
bankWallet -= 20000;

console.log('당신의 계좌 총 잔액은 : ' + bankWallet + '원 입니다.')
console.log(bankWallet >= 100000);
console.log(bankWallet >= 100000 ? '잔액 충분' : '잔액 부족');


//--------------------------------------------------------------------------------

/*
문제 99. 놀이공원: age=15, height=155, withParent=true.
입장 조건: 나이 14세 이상이고 키 150cm 이상이거나, 14세 미만이라도 보호자 동반이고 키 150cm 이상이면 입장 가능.
1) 논리식으로 입장 여부 계산 
2) 결과를 변수에 저장
3) 삼항연산자로 "입장 가능"/"입장 불가" 출력
4) 나이를 12로 변경해 재확인 
5) 보호자 동반을 false로 변경해 재확인
*/

let age = 15;
let height = 155;
let withParent = true;

let entryKid = (age >= 14 && height >= 150) || (age < 14 && withParent && height >= 150);
console.log(entryKid ? '입장 가능' : '입장 불가');

age = 12;
entryKid = (age >= 14 && height >= 150) || (age < 14 && withParent && height >= 150);
console.log(entryKid ? '입장 가능' : '입장 불가');

withParent = false;
entryKid = (age >= 14 && height >= 150) || (age < 14 && withParent && height >= 150);
console.log(entryKid ? '입장 가능' : '입장 불가');


//--------------------------------------------------------------------------------

/*
문제 100. 다음 코드의 모든 출력 결과를 예상하고 이유를 설명하세요.

요구사항 : 
1) 출력 순서 
2) 변수 변화
3) 전위/후위 증감 순서
4) 문자열 결합과 숫자 덧셈 구분 
5) 비교·논리 결과 
6) 삼항 선택 이유

let a = 10;
let b = 20;
let c = "30";

a += 5;
a = 15;

b--;
b = 19;

a = ++b + a--;
a = 20 + 15
a = 35

최종 값은
a = 35
b = 20
c = '30'
*/

///console.log(a);
35
위 최종 값

//console.log(b);
20
위 최종 값

//console.log(c);
'30'
위 최종 값

//console.log(a + b + c);
'5530'
c값이 문자열 이므로

//console.log(a + Number(c) + b);
85
Number로 문자열인 C를 숫자값으로 변경

//console.log(a > b);
true
최종 값에 의해

//console.log(a == "35");
true
==은 문자열로 작성된 숫자도 숫자값으로 인식하여 계산하기에 '35'는 35로 간주되어 35 == 35로 계산

//console.log(a === "35");
false
=== 은 타입까지 비교하기에 문자열 '35'와 a의 숫자 35는 다르므로 false

//let result1 = a > b && Number(c) > 20;
true && true = true

//let result2 = a < b || c == 30;
false || true = true

//console.log(result1);
true

//console.log(result2);
true 
|| 는 두 결과중 하나만 true여도 true로 간주

//let result3 = result1 ? a + b : a - b;
true ? 55 : 15

//console.log(result3);
55

// 96~100 -------------------------------------------------------------------------
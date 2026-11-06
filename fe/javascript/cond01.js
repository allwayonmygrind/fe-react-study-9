

// 조건문 if 문
// if 만약에~

// if (조건식) {실행할 코드} -> 조건식이 참(true)면 실행하겠다

let num = 15;

//전역변수 {전체영역에서 확인할 수 있는 변수}

if (num > 5) {
    console.log('num이 5보다 크다');
    console.log('if문 {} 안에 코드 실행');
}

if (num >= 10) {
    console.log('num이 10보다 크거나 같다.');
}

if (num == 10) //중괄호를 생략해도 속해있다는 판정이지만 한개만 인정된다
    console.log('num이 10과 다르다1');
console.log('num이 10과 다르다2');
console.log('num이 10과 다르다3');
//세 줄이 모두 종속되면 이 if는 false이기에 셋 다 출력되면 안되지만 다르다2와 다르다3은 출력이 되기에 다르다1만 종속된걸 알 수 있다

console.log(num);

let x = 3;
let y;

// 15>0 -> true
if (num > 0) {
    console.log('num이 0보다 크더라');

    // {} 영역은 인식되는 지역을 구분

    let x = 10; // 이 지역내의 x값
    console.log(x);
    x = 50;
    console.log(x);

    y = 33; // 이 지역내의 y값
    y = y + 7
    console.log(y);
}
console.log(x);
console.log(y);
// {} 범위에서 선언한 y는 중괄호 밖에선 아무런 영향이 없다

{
    {
        {
            {

            }
        }
    }
}

// if(조건식 < 결과가 true false) {}

x = 3
let b1 = (x < 10);

if (x < 10) {
    console.log('111');
}
if (b1 === true) {
    console.log('222');
}
if (b1) {
    console.log('333');
}
/*
택시 탑승 여부를 비교
if(늦게 일어났나? && 버스가 배차가 먼가? && 내가 다리를 다쳤나?){}

let 택시탑승여부 = 늦게 일어났나? && 버스가 배차가 먼가? && 내가 다리를 다쳤나?
if (택시탑승여부) {}
*/

// if else (if와 else중에 하나는 무조건 실행돼야 함)

let z = 10;

if(z >10){ //참이면
    console.log('z가 10보다 크다');
} else { //위 조건식이 거짓이면 실행
    console.log('z가 10보다 크지 않다') //z가 10이거나 0보다
}
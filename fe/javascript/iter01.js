// iteration 반복문
//iter

//console.log('배고프다');

/*
    for 문

    // 초기화식 1번 , 조건식 참이면 실행 2번 , 참이면 실행문 실행 3번 , 그리고 증강식 확인 조건식을 보고 참이면 실행 4번
    // 초기화는 초기 1번 / 조건>실행>증감 값이 false가 될 때 까지 무한 반복

    for(초기화식; 조건식; 증감식){
        실행문;
    }

*/
// i = 1 2 3 4 5 6 7 8 9 10 true
// i = 11 false
for (let i = 1; i <= 10; i++) {
    console.log('반복문 재밌다');
}

console.log('반복문 끝남');

/*

let i = 1;

if (i<=10)
    console.log('반복문 재밌다');
i++;

반복

*/

//for(let i = 1; 1<3; i++){
//    console.log('목마르다');
//}

for (let i = 35; i < 44; i++) {
    console.log('for 실행문');
}

// i 는 for문 안에서 선언하였기 때문에 이런식의 호출은 작동하지 않음
//console.log(i);

let i;

for (i = 10; i < 50; i = i + 5) {
    console.log('i가 5씩 증가하네');
}

//단순 5회 반복
for (i = 5; i > 0; i--) {
    console.log('다이어트 중');
}
for (i = 1; i <= 5; i++) {
    console.log('다이어트'+i+'일차');
}
//실제 내부 실행문에 활용할 목적으로 값을 조정하면서 사용

// 1 ~ 100 다 더하면 얼마
// 1~10 곱하기 > 초기값 1 , 1은 곱셈에 영향을 안주니까
let sum = 0;  //덧셈에 영향을 안주는 0
//sum = sum+1
//console.log(sum);
for(i=1; i<=10; i++){
    sum = sum + i;
}

//반복문 다 돌고 sum 변수에는 1~10까지의 누적 합
console.log(sum);


// 총합을 계산하고싶다
// 10부터 100이 될 때 까지 총합을 계산하다

for(i=10; i<=100; i=i+10){
    sum = sum + i;
}
console.log('sum : '+sum);

// 더하기 계산값 : 10 20 30 40 . . . 90 100
// 반복문 기준값 : 1 2 3 4 . . . 9 10
// 더할값 = 기준값 * 10

sum = 0;
for(i=1; 1<=10; i++){
    sum = sum + (i*10);
}
console.log('sum : ' + sum);

for(i=2; i<20; i=i*2){}

for (i=400; i>100; i=i-50){}

for(i=100; 1>=90; i--){}
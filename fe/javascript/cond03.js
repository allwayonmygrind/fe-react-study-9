

/*
    if()

    if()

    if()
    ...


    else 혼자 사용x

    if
    else
    세트로 와야한다

    참이면 if
    아니면 else if가 한번 더 붙을 수도 있음
    else if
    else if로 끝나도 되고
    else로 끝나도 됨

    else if도 혼자 사용 x 

    if
    else if

    if
    else는 둘 중 하나는 무조건 실행

    둘다 하나만 시행 됨
*/


// dice : 1~6 만 가능하다가 보장이 된다면 둘의 실행결과가 똑같음
// 근데 이 주사위가 1~8까지 나오는 주사위면 7, 8이 나오면 else if만 있는 구조는 아무 결과도 안나옴 
// 하지만 else문은 1~6을 제외한 모든 값이 else로 결과가 나옴
let dice = 5;

if (dice==1)
    console.log("한칸 전진");

if (dice==1)
    console.log('한칸 전진');
else
    console.log('두칸 전진');

if (dice==1) {
    console.log("한칸 전진");
} else if (dice ==2 ){
    console.log("두칸 전진");
} else if (dice ==3 ){
    console.log("세칸 전진");
} else if (dice ==4 ){
    console.log("네칸 전진");
} else if (dice ==5 ){
    console.log("다섯칸 전진");
} else if (dice == 6)

if (dice==1) {
    console.log("한칸 전진");
} else if (dice ==2 ){
    console.log("두칸 전진");
} else if (dice ==3 ){
    console.log("세칸 전진");
} else if (dice ==4 ){
    console.log("네칸 전진");
} else if (dice ==5 ){
    console.log("다섯칸 전진");
} else {

}

// if만 있으면 조건만 맞으면 다 실행이 될 수도 있음

if( dice == 1) {}
if( dice == 2) {}
if( dice == 3) {}
if( dice == 4) {}
if( dice == 5) {}
if( dice == 6) {}

// 조건식 -> 최종적으로 true false 논리형 결과

if ( dice > 10) {}

let result = dice == 3;

if (result) {}
if (result == true) {}

if (dice > 0 && dice <= 6) {} // 1~6 보장하는 조건을 걸었다

if(dice > 1 || dice > 6) {} // 1~6 범위를 벗어나면 뭘 하겠다.

if(!(dice < 1 || dice > 6)) {}
if((dice > 1 || dice > 6) == false ){}

// -------------------------------------------
// switch (비교하려는 대상)

dice = 3;

switch(dice){
    case 1:                     // dice ==1
        console.log('case 1');
        break;
    case 2:                     // dice == 2
        console.log('case 2');
        break;
    case 3:                     //dice == 3 예시
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    case 6:
        console.log('case 6');
        break;
} // 스위치문은 break가 없으면 맞은 지점부터 끝까지 실행해버린다


switch(dice){
    case 1:                     
        console.log('case 1');
        break;
    case 2:                     
        console.log('case 2');
        break;
    case 3:                   
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    //case 6 :
    default: // else 그게 아니면 이것을 실행하겠다 이라는 뜻
        console.log('case 6');
        break;
}

// ---------------------------------
/*
    출근시간 대비 해야할 일

    8시 청소
    9시 회의
    10시 업무
    11시 외근
*/

let showTime = 8;

if( showTime == 8){
    //청소 회의 업무 외근
} else if (showTime == 9) {
    // 회의 업무 외근
} else if (showTime == 10){
    // 업무 외근
} else {
    //외근
}

//8.5?? 8시 30분
if(showTime <= 8){
    // 청소 회의 업무 외근
}
else if (showTime <= 9){}
else if (showTime <= 10){}
else if (showTime <= 11){}
else {} // 결근 처리

if ( showTime <= 8) {
    //청소
}
if ( showTime <= 9) {
    //회의
}
if ( showTime <= 10) {
    //업무
}
if ( showTime <= 11) {
    //외근
}

// showTime이 9 이면 9 이후의 10 11이 모두 다 실행된다
switch(showTime) {
    case 8:
        //청소
    case 9:
        //회의
    case 10:
        //업무
    case 11:
        //외근
}
switch(showTime) {
    case 8:
        //청소
        //회의
        //업무
        //외근
        break;
    case 9:
        //회의
        //업무
        //외근
        break;
    case 10:
        //업무
        //외근
        break;
    case 11:
        //외근
        break;
}
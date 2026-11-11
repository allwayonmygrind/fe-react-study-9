let scores = [10, 20, 30, 40, 50];

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//-------------------

scores = [70, 80, 90, 60, 100];

let sum = 0;

for(let i=0; i<scores.length; i++){
    mult=sum+scores[i]*2;
    console.log(mult);
}

//-------------------------

scores = [70, 80, 90, 60, 100];

for(let i in scores){
    console.log(i + '번 인덱스 위치의 값 : ' + scores[i]);
}

//--------------------------------

let numbers = [1, 2, 3, 4, 5];

for(let i=4; i >= 0; i--){
    console.log(numbers[i])
}

//------------------------------------
console.log('-------------------------------------');


let fruits = ['사과', '바나나', '포도', '딸기'];

for(let i=0; i<fruits.length; i++){
    console.log(i);
    
}
//-------------------------------------

fruits = ['사과', '바나나', '포도', '딸기'];

for(let i in fruits){
    console.log(i + ':' + fruits[i])
}


//--------------------------------------


let prices = [1000, 2000, 3000, 4000];

for(let i of prices){
    console.log(i);
    
}

//----------------------------------------

numbers = [3, 6, 9, 12, 15];

for(let i of numbers){
    i = i+10;
    console.log(i);
}

//--------------------------------------------

scores = [50, 60, 70, 80, 90];

scores.forEach((value, index)=> {
    console.log(index + ':' + value);
})

//--------------------------------------------
let names = ['김철수', '이영희', '박민수'];

names.forEach((value, index)=> {
    console.log(index+1 + '번 '+ value);
})
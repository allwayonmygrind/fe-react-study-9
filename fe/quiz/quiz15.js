function getMealByTime(t) {

    if (t >= 6 && t <= 10) return '아침';
    if (t >= 11 && t <= 14) return '점심'
    if (t >= 17 && t <= 20) return '저녁'
    if (t >= 21 && t <= 23) return '야식'
    return '금식';
}


console.log(getMealByTime(5)); //출력값 : 금식
console.log(getMealByTime(8)); //출력값 : 아침
console.log(getMealByTime(13)); //출력값 : 점심
console.log(getMealByTime(16)); //출력값 : 금식
console.log(getMealByTime(19)); //출력값 : 저녁
console.log(getMealByTime(22)); //출력값 : 야식
console.log(getMealByTime(2)); //출력값 : 금식
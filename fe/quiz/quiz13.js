let year = 2000; // 출생년도
let num = 3; // 주민등록번호 뒷자리 첫 번째 숫자
let age = 2026 - year + 1;

if (year >= 1900 && year <= 2026) { // 생년월일은 1900~2026 범위
    if (num >= 1 && num <= 4) { // 뒷자리는 1~4 범위
        if (year < 2000 && num == 1) {
            console.log(age + '살 남자입니다.')
        } else if (year >= 2000 && num == 3) {
            console.log(age + '살 남자입니다.')
        } else if (year >= 2000 && num == 4) {
            console.log(age + '살 여자입니다.')
        } else if (year < 2000 && num == 2) {
            console.log(age + '살 여자입니다.')
        } else {
            console.log('잘못된 입력입니다.')
        }
    } else {
        console.log('잘못된 주민번호 뒷자리 입력입니다.')
    }
} else {
    console.log('잘못된 출생년도 입력입니다.')
}
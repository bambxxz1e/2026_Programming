// HTML -> JS
// 숫자 증가
// 숫자 표시

// 내가 짠 코드
// const h1 = document.getElementById("h1");
// const addBtn = document.getElementById("addBtn");

// addBtn.addEventListener('click', () => {
//     h1.innerText = Number(h1.innerText) + 1;
// })

// const resultH1 = document.querySelectorAll("h1")[0]

let count = 100;
const resultH1 = document.getElementById("result");

// ----------------------------------

// 1번
// const resultH1 = document.getElementsByTagName("h1")[0];
// const plusButton = document.getElementsByTagName("button")[0];

// plusButton.addEventListener("click", () => {
//         count++;
        
//         resultH1.innerHTML = count;
//     }   
// );

// -----------------------------------

// 2번
// const resultH1 = result
// const resultH1 = document.querySelector("#result")
// const resultH1 = document.getElementById("result");
// const plusButton = document.getElementsByClassName("plusBtn")[0];

// plusButton.onclick = () => {
//     count++;
        
//     resultH1.innerHTML = count;
// } ;

// -----------------------------------

// 3번

// function plus(){
//     count++;
        
//     resultH1.innerHTML = count;
// }

// -----------------------------------

// 추가

resultH1.innerHTML = count;
function plus(number = 1){
    count += number;

    resultH1.innerHTML = count;
}

// -----------------------------------

// 함수를 호출해버리면 안됨
// plusButton.addEventListener("click", 처리함수());
// function 처리함수(){
//      count++;
//      resultH1.innerHTML = count;
// }

// 익명 함수 실행
// (function (){
// })()


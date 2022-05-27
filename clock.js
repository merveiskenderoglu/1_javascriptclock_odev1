
let name = prompt('lütfen adınızı giriniz');

let nameInfo = document.querySelector('#myName');
let timeInfo = document.querySelector('#myClock');


function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}


function prtName(){
    nameInfo.innerHTML = `${name}`;
}

prtName();


function showTime(){ 

    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    // var today = new Date().getDate(); // 18.04.2022 ise 18'i veriyor
    let today = days[new Date().getDay()];

    let a = new Date();
    let hours = addZero(a.getHours());
    let minutes = addZero(a.getMinutes());
    let seconds = addZero(a.getSeconds());
    let time = `${hours} : ${minutes} : ${seconds}`;
              
    
    timeInfo.innerHTML = `${time}  ${today}`        
        
}

showTime();
setInterval(showTime,1000);











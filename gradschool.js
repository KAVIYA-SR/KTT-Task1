const days = document.querySelector("#day");
const hours = document.querySelector("#hour");
const minutes= document.querySelector("#minute");
const seconds= document.querySelector("#second");

function countdown() {
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;


    const interval=setInterval(()=>{
        const countdownDate = new Date('1/1/2025').getTime();
        console.log(countdownDate);
        const now=new Date().getTime();
        console.log(now)
        const distance =countdownDate-now;
        console.log(distance)

        days.innerText=formate(Math.floor((distance/day)));
        hours.innerText=formate(Math.floor((distance%day)/hour));
        minutes.innerText=formate(Math.floor((distance%hour)/minute));
        seconds.innerText=formate(Math.floor((distance%minute)/second));
    },1000)
}

countdown();

function formate(num){
    if(num<10){
        return '0'+num;
    }
    return num;
}
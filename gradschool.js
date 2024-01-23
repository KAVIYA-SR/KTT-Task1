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
        // console.log(countdownDate);
        const now=new Date().getTime();
        // console.log(now)
        const distance =countdownDate-now;
        // console.log(distance)

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

const tab1=document.getElementById('education');
const tab2=document.getElementById('management');
const tab3=document.getElementById('meeting');
const content1 =document.getElementById('content1');
const content2 =document.getElementById('content2');
const content3 =document.getElementById('content3');
const sq1=document.getElementById('square1');
const sq2=document.getElementById('square2');
const sq3=document.getElementById('square3');

tab1.addEventListener('click',()=>{
    content2.style.display='none';
    content3.style.display='none';
    content1.style.display='block';
   sq1.style.color='green'
    tab1.style.color='green';
    tab2.style.color = "#fff";
    tab3.style.color = "#fff";
})
tab2.addEventListener('click',()=>{
    content1.style.display='none';
    content3.style.display='none';
    content2.style.display='block';
    sq2.style.color='red';
    tab2.style.color='red';
    tab1.style.color='#fff';
    tab3.style.color = "#fff";
})
tab3.addEventListener('click',()=>{
    content1.style.display='none';
    content2.style.display='none';
    content3.style.display='block';
    sq3.style.color='blue';
    tab3.style.color='blue';
    tab1.style.color = "#fff";
    tab2.style.color = "#fff";
})

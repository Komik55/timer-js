let time = document.querySelector('.time');
const Btn = document.querySelector('.btn1');
const Btn2 = document.querySelector('.btn2');

time.textContent = `00:00:00`;
//let second = document.querySelector('.second__block');
//let millisecond = document.querySelector('.millisecond__block');
let min = 0;
let mil = 0;
let s = 0;
let zero1 = 0;
let zero2 = 0;
let zero3 = 0;
let checked = 0;
Btn.addEventListener('click',(e)=>{
    if(checked%1=== 0){
        Btn.classList.toggle('active');        
    }
    checked+=1;
    
    check()
});
Btn2.addEventListener('click',()=>{
this.location.reload();
})
const check = () =>{
    time.textContent = `${zero1}${min}:${zero2}${s}.${zero3}${mil}`;
    if(checked%2=== 0) {
        Btn2.style.display = "inline-block";
        return;
    }else{
        Btn2.style.display = "none";
         mil+=1;
    }

    if(mil > 9) zero3 = '';
    
    if(mil > 60){
        mil = 0;
        setTimeout(getSecond,100);
    } 
    setTimeout(check,10);
}
const getSecond = ()=>{
        s+=1;
        if(s > 9) zero2 = '';
        if(s > 60){
            s = 0;
            setTimeout(getMinute,1000); 
        }
}
const getMinute = ()=>{
    min+=1;
    if(min > 9) zero1 = '';
}

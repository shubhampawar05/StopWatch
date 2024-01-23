let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')

var timeinmilsecond ;
let id;
    let milisecond = 0;
    let second = 0;
    let minutes = 0;
    let hr = 0;
    let updatedVal=0;

start.addEventListener('click', startfuction) ;

function startfuction(){
    id = setInterval(()=>{
        timeinmilsecond=updatedVal; // 20
        timeinmilsecond += 10; // 1000 

        updatedVal = updatefuction(timeinmilsecond);
        // jo value updatefuctio return kr raha hai us value lo updatedVal me store kr rha hai
    
    },10);
    
    document.getElementById('start').disabled  = true;
    document.getElementById('pause').disabled = false;
}


function updatefuction(timeinmilsecond){
    if(timeinmilsecond==1000){
        second++;
        // console.log(timeinmilsecond);
        if(second == 59){
            minutes++;
            second = 0;
            
            if(minutes==59){
                hr++;
                minutes=0;
            }
        }
    }
    
    
    document.getElementById('mili').innerText = ((timeinmilsecond/10) <= 9 ? "0"+(timeinmilsecond/10): (timeinmilsecond/10));
    document.getElementById('sec').innerText = (second <= 9 ? "0"+second: second);
    document.getElementById('min').innerText = (minutes <= 9 ? "0"+minutes: minutes);
    document.getElementById('hr').innerText =(hr <= 9 ? "0"+hr: hr);
    return(timeinmilsecond===1000 ? 0 : timeinmilsecond)
}

pause.addEventListener('click',()=>{
    clearInterval(id)
    document.getElementById('start').disabled  = false;
    document.getElementById('pause').disabled = true;

})
reset.addEventListener('click',()=>{
    clearInterval(id)
   
     milisecond = 0;
     second = 0;
     minutes = 0;
     hr = 0;

    document.getElementById('mili').innerText=`00`;
    document.getElementById('sec').innerText =`00`
    document.getElementById('min').innerText =`00`
    document.getElementById('hr').innerText =`00`

    document.getElementById('start').disabled  = false;
    document.getElementById('pause').disabled = false;
})
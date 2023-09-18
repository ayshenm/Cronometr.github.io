let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let title = document.getElementById("title");
let text = document.getElementById("text");
// let h4 = document.getElementById("h4");


let seconds = 0;
let minute = 0;
let hours = 0;
let interval;

    

function counterRun(){
   

    if(btn.innerHTML == "Start"){
        btn.innerHTML = "Stop";
       interval = setInterval(function (){
            seconds++;
            if (seconds== 60){ seconds = 0; minute++}; 
			if (minute == 60){ minute = 0; hours++ };
           title.innerHTML =`${String(hours).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        },10);
    }else if(btn.innerHTML == "Stop"){
        // title.style.color = "white";
        // text.innerHTML += `<div style="background:${randomColor()};color: white;font-weight:bold;margin-bottom:5px;padding:10px">${title.innerHTML}</div>`
        btn.innerHTML = "Start";
        clearInterval(interval);
        
    }
    
}
function reset(){
    if(btn2.innerHTML == "Reset"){
        title.innerHTML = "00:00:00";
        clearInterval(interval);
        seconds = 0;
        minute = 0;
        hours = 0;
        btn.innerHTML = "Start";
    }
}

function scaneRun(){
    if(btn.innerHTML == "Stop"){
    title.style.color = "white";
     text.style.display = "block";
    
    text.innerHTML += `<div style="background:${randomColor()};color: white;font-weight:bold;margin-bottom:5px;padding:10px;width:789px">${title.innerHTML}</div>`
    }
    
}




function randomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
  
    const color = `rgb(${red}, ${green}, ${blue})`; 
  
    return color;
  }


  
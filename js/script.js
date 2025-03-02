

    


let date = new Date();
let convertedNewDate = {day:"numeric", month: 'long', year: 'numeric'}
let convertedDate = date.toLocaleDateString("en-GB", convertedNewDate);
document.getElementById('new-date').innerText = convertedDate;

const buttons = document.querySelectorAll(".completed-btn");
for(let btn of buttons){
    btn.addEventListener("click", function(event){
        event.preventDefault();
        let addSum = parseInt(document.getElementById("plus").innerText);
        
        let minusSum = parseInt(document.getElementById("minus").innerText);
        addSum++;
        minusSum--;
        document.getElementById("plus").innerText = addSum;
        document.getElementById("minus").innerText = minusSum;
        this.disabled = true;
        alert("board updated successfully");
        let allButtonDisabled = true;
        for(let btn of buttons){
            if(! btn.disabled){
                allButtonDisabled = false;
                break;
            }
        }
        if(allButtonDisabled){
            alert("congrates you have completed all the correct task")
        }
    } )
}

document.getElementById("btn-1").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("fix-mobile").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});

document.getElementById("btn-2").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("dark-mode").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});

document.getElementById("btn-3").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("home-page").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});

document.getElementById("btn-4").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("add-emoji").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});

document.getElementById("btn-5").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("open-ai").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});

document.getElementById("btn-6").addEventListener("click",function(event){
    event.preventDefault();
    const fixMobile =document.getElementById("job-searching").innerText;
    const container = document.getElementById("completed-container");

    
    const p = document.createElement("p");
    function convertedTime(){
        const nowTime = new Date();
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();
        let seconds = nowTime.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        p.innerText = `  you have complete the task fix ${fixMobile} button issue at Current Time: ${nowTime.getHours()}: ${minutes}: ${seconds}`;
    }
    convertedTime();

    container.appendChild(p);
});



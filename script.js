const changeTimeLeft =function(){
    let now = Date.now();
    console.log(now);
    let timeLeft =this.dateValue-now;
    if(timeLeft <= 0){
        this.changeYear();
        timeLeft = this.dateValue-now;
    }
    this.daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    this.hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    this.secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

const changeYear = function(){
    this.dateValue=this.dateValue+365.25*24*60*60*1000;
}

const TheDate = {
    dateValue: new Date('May 13, 2022 00:00:00').getTime(),
    daysLeft: 1,
    hoursLeft: 1,
    minutesLeft: 1,
    secondsLeft: 1,
    changeYear: changeYear,
    changeTimeLeft: changeTimeLeft
}

const updateTheDate = setInterval(()=>{
    TheDate.changeTimeLeft();

    document.querySelector("#days").innerText=TheDate.daysLeft+"d";
    document.querySelector("#hours").innerText=TheDate.hoursLeft+"h";
    document.querySelector("#minutes").innerText=TheDate.minutesLeft+"m";
    document.querySelector("#seconds").innerText=TheDate.secondsLeft+"s";

}, 1000)

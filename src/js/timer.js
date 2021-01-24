

class Countdown {
    constructor(date, selector) {
    
        this.targetDate = new Date(date);
        this.selector = selector;
        this.anchorTag = document.querySelector(this.selector);
        this.days = this.anchorTag.querySelector('[data-value="days"]');
        this.hours = this.anchorTag.querySelector('[data-value="hours"]');
        this.mins = this.anchorTag.querySelector('[data-value="mins"]');
        this.secs = this.anchorTag.querySelector('[data-value="secs"]');
    }
    
    startTimer() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate.getTime() - currentTime;

            this.updateClockface(this.calculateTime(deltaTime)); 
        }, 1000);
    }
       
    updateClockface({ days, hours, mins, secs }) {
        this.days.textContent = days;
        this.hours.textContent = hours;
        this.mins.textContent = mins;
        this.secs.textContent = secs;
    }

    calculateTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return ({ days, hours, mins, secs });
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const title = document.querySelector('.title');

let nameOfDay;

for (let i = 1; i < 2; i += 1) {
    nameOfDay = prompt('Please enter the name of the future event');  
    if (nameOfDay === '' || nameOfDay === null) {
        i -= 1;
    }
}

title.textContent = `${nameOfDay} will come in`;


let userDate;

for (let i = 1; i < 2; i += 1) {
    userDate = prompt('Please enter the date in format 02-05-2021(month-day-year');  
    if (userDate === ''|| userDate === null || isNaN(new Date(userDate).getTime()) === true || new Date(userDate).getTime() <= Date.now()) {
        i -= 1;
    }
}

const newYearTimer = new Countdown(userDate, "#timer-1");

newYearTimer.startTimer();
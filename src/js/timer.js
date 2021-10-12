import refs from './refs'

const { daysC, hoursC, minsC, secsC } = refs

let newDate = new Date()

// const myTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Dec 31, 2021'),
// });

class CountdownTimer {
    constructor(targetDate, markup) {
        this.markup = markup
        this.targetDate = targetDate
        this.intID = null;
        this.countTime = 0;
    }
    start() {
        this.intID = setInterval(() => {
            let currentTime = Date.now()
            this.countTime = this.targetDate - currentTime
            
            const days = this.pad(Math.floor(this.countTime / (1000 * 60 * 60 * 24)))
            const hours = this.pad(Math.floor((this.countTime  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            const mins = this.pad(Math.floor((this.countTime  % (1000 * 60 * 60)) / (1000 * 60)))
            const secs = this.pad(Math.floor((this.countTime % (1000 * 60)) / 1000))
            this.insertValues(days, hours, mins, secs)
        }, 1000);
        
    }
    stop() {
        clearInterval(this.intID)
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
    insertValues(day, hour, minute, second){
        const { daysC, hoursC, minsC, secsC } = this.markup
        daysC.textContent = day
        hoursC.textContent = hour
        minsC.textContent = minute
        secsC.textContent = second
    }
}

const markup = {
    daysC,
    hoursC,
    minsC,
    secsC,
}

const myTimer = new CountdownTimer(new Date('Dec 31, 2021'), markup);


// const myTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Dec 31, 2021'),
// });

myTimer.start()
// myTimer.stop()
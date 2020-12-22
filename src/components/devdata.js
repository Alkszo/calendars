const devdata = 
{
    id: 2,
    name: 'in developement',
    months: [
        {name: 'al-Muharram', number: 1, days: 30},
        {name: 'Safar', number: 2, days: 29},
        {name: 'Rabi al-Awwal', number: 3, days: 30},
        {name: 'Rabi ath-Thani', number: 4, days: 29},
        {name: 'Jumada al-Ula', number: 5, days: 30},
        {name: 'Jumada ath-Thaniyah', number: 6, days: 29},
        {name: 'Rajab', number: 7, days: 30},
        {name: 'Sha\'ban', number: 8, days: 29},
        {name: 'Ramadan', number: 9, days: 30},
        {name: 'Shawwal', number: 10, days: 29},
        {name: 'Du al-Qa\'dah', number: 11, days: 30},
        {name: 'Du al-Hijjah', number: 12, days: 29},
    ],
    leapMonths: [
        {name: 'al-Muharram', number: 1, days: 30},
        {name: 'Safar', number: 2, days: 29},
        {name: 'Rabi al-Awwal', number: 3, days: 30},
        {name: 'Rabi ath-Thani', number: 4, days: 29},
        {name: 'Jumada al-Ula', number: 5, days: 30},
        {name: 'Jumada ath-Thaniyah', number: 6, days: 29},
        {name: 'Rajab', number: 7, days: 30},
        {name: 'Sha\'ban', number: 8, days: 29},
        {name: 'Ramadan', number: 9, days: 30},
        {name: 'Shawwal', number: 10, days: 29},
        {name: 'Du al-Qa\'dah', number: 11, days: 30},
        {name: 'Du al-Hijjah', number: 12, days: 30},
    ],
    isLeap(year) {
        const longYears = [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29]
        const longMinusYears = [2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29]
        return year > 0 ? longYears.includes(year % 30) : longMinusYears.includes(Math.abs(year % 30))
    },     
    convertToJD(year, month, day) {
        const islamicEpoch = -451561
          let elapsedMonthDays = 0
          this.months.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.days})
          let count = year > 0 ? 1 : 0
          let elapsedYearDays = 0
          if (year > 0) {
                while (count < year) {
                  count++;
                  this.isLeap(count) ? elapsedYearDays += 355 : elapsedYearDays += 354;
                }
              } else {
                  while (count > year) {
                    count--;
                    this.isLeap(count) ? elapsedYearDays -= 355 : elapsedYearDays -= 354;
                  }
              }
          
          return(
              islamicEpoch + 
              elapsedYearDays +          
              elapsedMonthDays +                  
              day - 1              
          )            
    },     
    convertFromJD(jd) {
        const islamicEpoch = -451561
        let epochDay = jd - islamicEpoch
        if (epochDay >= 0) {
            epochDay++
        }   
                
        let year = 0
        let elapsedYearDays = 0
        if (epochDay < 0) {
            while (epochDay < elapsedYearDays) {
                year--;
                this.isLeap(year) ? elapsedYearDays -= 355 : elapsedYearDays -= 354;
            }
        } else {
            while (epochDay > elapsedYearDays) {
                year++;
                this.isLeap(year) ? elapsedYearDays += 355 : elapsedYearDays += 354;
            }
        }
        
        const yearDay = epochDay < 0 ? Math.abs(elapsedYearDays - epochDay) + 1 : (this.isLeap(year) ? 355 - Math.abs(elapsedYearDays - epochDay) : 354 - Math.abs(elapsedYearDays - epochDay))
                let elapsed = []
                let d = 0
                this.months.map(mon => {d = d + mon.days; elapsed.push(d)})
                let leapElapsed = []
                let leapD = 0
                this.leapMonths.map(mon => {leapD = leapD + mon.days; leapElapsed.push(leapD)})

                

        const month = this.isLeap(year) ? (leapElapsed.findIndex(el => yearDay <= el) + 1) : (elapsed.findIndex(el => yearDay <= el) + 1)

        const day = month === 1 ? yearDay : (this.isLeap(year) ? (yearDay - leapElapsed[month - 2]) : (yearDay - elapsed[month - 2]))
        
        return [year, month, day]       
    },
    
    testFunction(year) {
        const longYears = [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29]
        const longMinusYears = [2, 5, 7, 10, 13, 15, 18, 21, 24, 26, 29]
        return year > 0 ? longYears.includes(year % 30) : longMinusYears.includes(Math.abs(year % 30))
    },     
}

//ciągle nie działa convertfrom dla Juliana, chodzi o dodawanie i odejmowanie lat na pewno
/*
 {
        id: 1,
        name: 'Gregorian',
        months: [
            {name: 'January', number: 1, days: 31},
            {name: 'February', number: 2, days: 28},
            {name: 'March', number: 3, days: 31},
            {name: 'April', number: 4, days: 30},
            {name: 'May', number: 5, days: 31},
            {name: 'June', number: 6, days: 30},
            {name: 'July', number: 7, days: 31},
            {name: 'August', number: 8, days: 31},
            {name: 'September', number: 9, days: 30},
            {name: 'October', number: 10, days: 31},
            {name: 'November', number: 11, days: 30},
            {name: 'December', number: 12, days: 31},
        ],
        leapMonths: [
            {name: 'January', number: 1, days: 31},
            {name: 'February', number: 2, days: 29},
            {name: 'March', number: 3, days: 31},
            {name: 'April', number: 4, days: 30},
            {name: 'May', number: 5, days: 31},
            {name: 'June', number: 6, days: 30},
            {name: 'July', number: 7, days: 31},
            {name: 'August', number: 8, days: 31},
            {name: 'September', number: 9, days: 30},
            {name: 'October', number: 10, days: 31},
            {name: 'November', number: 11, days: 30},
            {name: 'December', number: 12, days: 31},
        ],
        isLeap(year) {
            return year > 0 ? ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) : ((year % 4 === -1) && (year % 100 !== -1)) || (year % 400 === -1)
        },
        convertToJD(year, month, day) {
            const gregorianEpoch = -678575
              let elapsedDays = 0
              this.months.filter(mon => mon.number < month).map(mon => {elapsedDays = elapsedDays + mon.days})
              if (year < 0) {
                year++
            }

              return(
                  gregorianEpoch + 
                  Math.floor((year - 1 ) * 365) +
                  Math.floor((year - 1 ) / 4) +
                  (-Math.floor((year - 1 ) / 100)) +
                  Math.floor((year - 1 ) / 400) +
                  (month <= 2 ? -1 : (this.isLeap(year) ? 0 : -1)) +
                  elapsedDays +                  
                  day                
              )            
        },     
        convertFromJD(jd) {
            const gregorianEpoch = -678575
            const epochDay = jd - gregorianEpoch            
            let year = 0
            let elapsedYearDays = 0
            while (epochDay > elapsedYearDays) {
                year++;
                this.isLeap(year) ? elapsedYearDays += 366 : elapsedYearDays += 365
            }
          return year         
        },
    }

*/


export default devdata;
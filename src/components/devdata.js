const devdata = 
{
    id: 4,
    name: 'in developement',
    months: [
        {name: 'Tishrei', number: 1, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Cheshvan', number: 2, days: 29, completeDays: 30, defectiveDays: 29},
        {name: 'Kislev', number: 3, days: 30, completeDays: 30, defectiveDays: 29},
        {name: 'Tevet', number: 4, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Shevat', number: 5, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Adar', number: 6, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Nisan', number: 7, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Iyar', number: 8, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Sivan', number: 9, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Tammuz', number: 10, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Av', number: 11, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Elul', number: 12, days: 29, completeDays: 29, defectiveDays: 29},        
    ],
    leapMonths: [
        {name: 'Tishrei', number: 1, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Cheshvan', number: 2, days: 29, completeDays: 30, defectiveDays: 29},
        {name: 'Kislev', number: 3, days: 30, completeDays: 30, defectiveDays: 29},
        {name: 'Tevet', number: 4, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Shevat', number: 5, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Adar', number: 6, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Adar II', number: 7, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Nisan', number: 8, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Iyar', number: 9, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Sivan', number: 10, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Tammuz', number: 11, days: 29, completeDays: 29, defectiveDays: 29},
        {name: 'Av', number: 12, days: 30, completeDays: 30, defectiveDays: 30},
        {name: 'Elul', number: 13, days: 29, completeDays: 29, defectiveDays: 29},
        
    ],
    isLeap(year) {
        const longYears = [0, 3, 6, 8, 11, 14, 17]
        const longMinusYears = [1, 3, 6, 9, 12, 14, 17]
        return year > 0 ? longYears.includes(year % 19) : longMinusYears.includes(Math.abs(year % 19))
    },
    yearType(year) {
      let d = year > 0 ? 2 : 3
      let h = year > 0 ? 5 : 7
      let ch = year > 0 ? 204 : 695
      let nextD = 0
      let nextH = 0
      let nextCh = 0
      let yearType = 'normal'
      if (year > 0) {
          let count = 1                
          while (count < year) {
              if (this.isLeap(count)) {
                  d = d + 5; h = h + 21; ch = ch + 589;
              } else {
                  d = d + 4; h = h + 8; ch = ch + 876;
              }
              if (!(1080 > ch)) {
                  ch = ch - 1080; h++;
              }
              if (!(24 > h)) {
                  h = h - 24; d++;
              }
              d > 7 ? d = d - 7 : d = d;            
              
              count++;
          }
      } else {
          let count = -1
          while (count > year) {
              if (this.isLeap(count - 1)) {
                  d = d - 5; h = h - 21; ch = ch - 589;
              } else {
                  d = d - 4; h = h - 8; ch = ch - 876;
              } 
              if (ch < 0) {
                  ch = 1080 - Math.abs(ch); h--;
              }
              if (h < 0) {
                  h = 24 - Math.abs(h); d--;
              }
              d <= 0 ? d = 7 - Math.abs(d) : d = d;

              count--;
          }
      }
      let roshHashanah = d
      h >= 18 ? roshHashanah++ : roshHashanah = roshHashanah;
      roshHashanah === 8 ? roshHashanah = 2 : roshHashanah = roshHashanah;
      if (roshHashanah === 1 || roshHashanah === 4 || roshHashanah === 6) {
          roshHashanah++;
      } 
      if (!this.isLeap(year) && d === 3 && h < 18 && ((h > 9) || (h === 9 && ch >= 204))) {
          roshHashanah = 5;
      }
      if (this.isLeap(year - 1) && d === 2 && h < 18 &&((h > 15) || (h === 15 && ch > 589))) {
          roshHashanah++;
      }
          if (this.isLeap(year)) {
              nextD = d + 5; nextH = h +21; nextCh = ch + 589;
          } else {
              nextD = d + 4; nextH = h + 8; nextCh = ch + 876;
          }
          if (!(1080 > nextCh)) {
              nextCh = nextCh - 1080; nextH++;
          }
          if (!(24 > nextH)) {
              nextH = nextH - 24; nextD++;
          }
          nextD > 7 ? nextD = nextD -7 : nextD = nextD;
          
              let nextRoshHashanah = nextD
              nextH >= 18 ? nextRoshHashanah++ : nextRoshHashanah = nextRoshHashanah;
              nextRoshHashanah === 8 ? nextRoshHashanah = 2 : nextRoshHashanah = nextRoshHashanah;
              if (nextRoshHashanah === 1 || nextRoshHashanah === 4 || nextRoshHashanah === 6) {
                  nextRoshHashanah++;
              } 
              if (!this.isLeap(year + 1) && nextD === 3 && nextH < 18 && ((nextH > 9) || (nextH === 9 && nextCh >= 204))) {
                  nextRoshHashanah = 5;
              }
              if (this.isLeap(year) && nextD === 2 && nextH < 18 &&((nextH > 15) || (nextH === 15 && nextCh > 589))) {
                  nextRoshHashanah++;
              }

          let dayDifferance = nextRoshHashanah - roshHashanah
          dayDifferance < 0 ? dayDifferance = 7 - Math.abs(dayDifferance) : dayDifferance = dayDifferance
          if (dayDifferance === 3) {
              yearType = 'defective'
          }
          if (dayDifferance === 0) {
              yearType = 'complete'
          }
          if (dayDifferance === 5) {
              if (this.isLeap(year)) {
                  yearType = 'defective'
              } else {
                  yearType = 'complete'
              }
          }
      return yearType
    },
    yearClass(year) {
        if (!this.isLeap(year) && this.yearType(year) === 'defective') {
            return 'a'
        } else if (!this.isLeap(year) && this.yearType(year) === 'normal') {
            return 'b'
        } else if (!this.isLeap(year) && this.yearType(year) === 'complete') {
            return 'c'
        } else if (this.isLeap(year) && this.yearType(year) === 'defective') {
            return 'd'
        } else if (this.isLeap(year) && this.yearType(year) === 'normal') {
            return 'e'
        } else if (this.isLeap(year) && this.yearType(year) === 'complete') {
            return 'f'
        }
    },
    elapsedYearDays(year) {
      let count = year > 0 ? 1 : -1
      let elapsedYearDays = year > 0 ? 0 : -384
      if (year > 0) {
            while (count < year) { 
                if (this.yearClass(count) === 'a') {
                    elapsedYearDays +=353
                  } else if (this.yearClass(count) === 'b') {
                    elapsedYearDays +=354
                  } else if (this.yearClass(count) === 'c') {
                    elapsedYearDays +=355
                  } else if (this.yearClass(count) === 'd') {
                    elapsedYearDays +=383
                  } else if (this.yearClass(count) === 'e') {
                    elapsedYearDays +=384
                  } else if (this.yearClass(count) === 'f') {
                    elapsedYearDays +=385
                  }
              count++;
            }
          } else {
              while (count > year) {
                count--;
                if (this.yearClass(count) === 'a') {
                    elapsedYearDays -=353
                  } else if (this.yearClass(count) === 'b') {
                    elapsedYearDays -=354
                  } else if (this.yearClass(count) === 'c') {
                    elapsedYearDays -=355
                  } else if (this.yearClass(count) === 'd') {
                    elapsedYearDays -=383
                  } else if (this.yearClass(count) === 'e') {
                    elapsedYearDays -=384
                  } else if (this.yearClass(count) === 'f') {
                    elapsedYearDays -=385
                  }
              }
          }
          return elapsedYearDays
    },    
    convertToJD(yearClass, daysGone, month, day) {
        const hebrewEpoch = -2052003
          let elapsedMonthDays = 0
          if (yearClass === 'a') {
            this.months.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.defectiveDays})
          } else if (yearClass === 'b') {
            this.months.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.days})
          } else if (yearClass === 'c') {
            this.months.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.completeDays})
          } else if (yearClass === 'd') {
            this.leapMonths.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.defectiveDays})
          } else if (yearClass === 'e') {
            this.leapMonths.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.days})
          } else {
            this.leapMonths.filter(mon => mon.number < month).map(mon => {elapsedMonthDays = elapsedMonthDays + mon.completeDays})
          } 
           
          return(
              hebrewEpoch + 
              daysGone +          
              elapsedMonthDays +                  
              day - 1              
          )            
    },     
    convertFromJD(jd) {
        const hebrewEpoch = -2052003
        let epochDay = jd - hebrewEpoch
        if (epochDay >= 0) {
            epochDay++
        }   
        console.log(epochDay)
          let d = epochDay > 0 ? 2 : 3
      let h = epochDay > 0 ? 5 : 7
      let ch = epochDay > 0 ? 204 : 695
      let yearClass = epochDay > 0 ? 'c' : 'e'
      let elapsedYearDays = epochDay > 0 ? 0 : -384
      let yearType       
      const getYearType = (year, d, h, ch) => {
        yearType = 'normal'
        let roshHashanah = d
        let nextD = 0
        let nextH = 0
        let nextCh = 0
      h >= 18 ? roshHashanah++ : roshHashanah = roshHashanah;
      roshHashanah === 8 ? roshHashanah = 2 : roshHashanah = roshHashanah;
      if (roshHashanah === 1 || roshHashanah === 4 || roshHashanah === 6) {
          roshHashanah++;
      } 
      if (!this.isLeap(year) && d === 3 && h < 18 && ((h > 9) || (h === 9 && ch >= 204))) {
          roshHashanah = 5;
      }
      if (this.isLeap(year - 1) && d === 2 && h < 18 &&((h > 15) || (h === 15 && ch > 589))) {
          roshHashanah++;
      }
          if (this.isLeap(year)) {
              nextD = d + 5; nextH = h +21; nextCh = ch + 589;
          } else {
              nextD = d + 4; nextH = h + 8; nextCh = ch + 876;
          }
          if (!(1080 > nextCh)) {
              nextCh = nextCh - 1080; nextH++;
          }
          if (!(24 > nextH)) {
              nextH = nextH - 24; nextD++;
          }
          nextD > 7 ? nextD = nextD -7 : nextD = nextD;
          
              let nextRoshHashanah = nextD
              nextH >= 18 ? nextRoshHashanah++ : nextRoshHashanah = nextRoshHashanah;
              nextRoshHashanah === 8 ? nextRoshHashanah = 2 : nextRoshHashanah = nextRoshHashanah;
              if (nextRoshHashanah === 1 || nextRoshHashanah === 4 || nextRoshHashanah === 6) {
                  nextRoshHashanah++;
              } 
              if (!this.isLeap(year + 1) && nextD === 3 && nextH < 18 && ((nextH > 9) || (nextH === 9 && nextCh >= 204))) {
                  nextRoshHashanah = 5;
              }
              if (this.isLeap(year) && nextD === 2 && nextH < 18 &&((nextH > 15) || (nextH === 15 && nextCh > 589))) {
                  nextRoshHashanah++;
              }
              let dayDifferance = nextRoshHashanah - roshHashanah
              dayDifferance < 0 ? dayDifferance = 7 - Math.abs(dayDifferance) : dayDifferance = dayDifferance
              if (dayDifferance === 3) {
                  yearType = 'defective'
              }
              if (dayDifferance === 0) {
                  yearType = 'complete'
              }
              if (dayDifferance === 5) {
                  if (this.isLeap(year)) {
                      yearType = 'defective'
                  } else {
                      yearType = 'complete'
                  }
              }
              return yearType
      } 
       const getYearClass = (year) => {
        if (!this.isLeap(year) && yearType === 'defective') {
            return 'a'
        } else if (!this.isLeap(year) && yearType === 'normal') {
            return 'b'
        } else if (!this.isLeap(year) && yearType === 'complete') {
            return 'c'
        } else if (this.isLeap(year) && yearType === 'defective') {
            return 'd'
        } else if (this.isLeap(year) && yearType === 'normal') {
            return 'e'
        } else if (this.isLeap(year) && yearType === 'complete') {
            return 'f'
        }
    }    
        let year = epochDay > 0 ? 0 : -1
        
        if (epochDay < 0) {
            while (epochDay < elapsedYearDays) {
              if (this.isLeap(year - 1)) {
                d = d - 5; h = h - 21; ch = ch - 589;
            } else {
                d = d - 4; h = h - 8; ch = ch - 876;
            } 
            if (ch < 0) {
                ch = 1080 - Math.abs(ch); h--;
            }
            if (h < 0) {
                h = 24 - Math.abs(h); d--;
            }
            d <= 0 ? d = 7 - Math.abs(d) : d = d;

            year--;
            yearType = (getYearType(year, d, h, ch))              
            yearClass = getYearClass(year)
            if (yearClass === 'a') {
              elapsedYearDays -=353
            } else if (yearClass === 'b') {
              elapsedYearDays -=354
            } else if (yearClass === 'c') {
              elapsedYearDays -=355
            } else if (yearClass === 'd') {
              elapsedYearDays -=383
            } else if (yearClass === 'e') {
              elapsedYearDays -=384
            } else if (yearClass === 'f') {
              elapsedYearDays -=385
            }
          }
               /* year--;
                yearType = getYearType(year, d, h, ch)
                yearClass = getYearClass(year)
                if (yearClass === 'a') {
                    elapsedYearDays -=353
                  } else if (yearClass === 'b') {
                    elapsedYearDays -=354
                  } else if (yearClass === 'c') {
                    elapsedYearDays -=355
                  } else if (yearClass === 'd') {
                    elapsedYearDays -=383
                  } else if (yearClass === 'e') {
                    elapsedYearDays -=384
                  } else if (yearClass === 'f') {
                    elapsedYearDays -=385
                  }
                  
                   if (this.isLeap(year)) {
                  d = d - 5; h = h - 21; ch = ch - 589;
              } else {
                  d = d - 4; h = h - 8; ch = ch - 876;
              } 
              if (ch < 0) {
                  ch = 1080 - Math.abs(ch); h--;
              }
              if (h < 0) {
                  h = 24 - Math.abs(h); d--;
              }
              d <= 0 ? d = 7 - Math.abs(d) : d = d;
            } */
        } else {
            while (epochDay > elapsedYearDays) {
                year++;
                yearType = getYearType(year, d, h, ch)
                yearClass = getYearClass(year)
                if (yearClass === 'a') {
                    elapsedYearDays +=353
                  } else if (yearClass === 'b') {
                    elapsedYearDays +=354
                  } else if (yearClass === 'c') {
                    elapsedYearDays +=355
                  } else if (yearClass === 'd') {
                    elapsedYearDays +=383
                  } else if (yearClass === 'e') {
                    elapsedYearDays +=384
                  } else if (yearClass === 'f') {
                    elapsedYearDays +=385
                  }
                   
              if (this.isLeap(year)) {
                  d = d + 5; h = h + 21; ch = ch + 589;
              } else {
                  d = d + 4; h = h + 8; ch = ch + 876;
              }
              if (!(1080 > ch)) {
                  ch = ch - 1080; h++;
              }
              if (!(24 > h)) {
                  h = h - 24; d++;
              }
              d > 7 ? d = d - 7 : d = d;
                
            }
             
        }
        console.log(yearClass, elapsedYearDays)
        let yearLength = 385

        if (yearClass === 'a') {
          yearLength = 353
        } else if (yearClass === 'b') {
          yearLength = 354
        } else if (yearClass === 'c') {
          yearLength = 355
        } else if (yearClass === 'd') {
          yearLength = 383
        } else if (yearClass === 'e') {
          yearLength = 384
        } 
        console.log(yearLength)
        //let elapsedF = []
                  //  let dF = 0
                  //  this.leapMonths.map(mon => {dF = dF + mon.completeDays; elapsedF.push(dF)})

        const yearDay = epochDay < 0 ? Math.abs(elapsedYearDays - epochDay) + 1 : yearLength - Math.abs(elapsedYearDays - epochDay)
                
                const elapsedA = [30, 59, 88, 117, 147, 176, 206, 235, 265, 294, 324, 353]
                const elapsedB = [30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 354]               
                const elapsedC = [30, 60, 90, 119, 149, 178, 208, 237, 267, 296, 326, 355]                
                const elapsedD = [30, 59, 88, 117, 147, 177, 206, 236, 265, 295, 324, 354, 383]               
                const elapsedE = [30, 59, 89, 118, 148, 178, 207, 237, 266, 296, 325, 355, 384]             
                const elapsedF = [30, 60, 90, 119, 149, 179, 208, 238, 267, 297, 326, 356, 385]
                

         console.log(yearDay)   
               

                

        let month 
        if (yearClass === 'a') {
            month = elapsedA.findIndex(el => yearDay <= el) + 1
          } else if (yearClass === 'b') {
            month = elapsedB.findIndex(el => yearDay <= el) + 1
          } else if (yearClass === 'c') {
            month = elapsedC.findIndex(el => yearDay <= el) + 1
          } else if (yearClass === 'd') {
            month = elapsedD.findIndex(el => yearDay <= el) + 1
          } else if (yearClass === 'e') {
            month = elapsedE.findIndex(el => yearDay <= el) + 1
          } else if (yearClass === 'f') {
            month = elapsedF.findIndex(el => yearDay <= el) + 1
          }
        //this.isLeap(year) ? (leapElapsed.findIndex(el => yearDay <= el) + 1) : (elapsed.findIndex(el => yearDay <= el) + 1)

        let day 
        if (month === 1) {
            day = yearDay
        } else if (yearClass === 'a') {
            day = yearDay - elapsedA[month - 2]
          } else if (yearClass === 'b') {
            day = yearDay - elapsedB[month - 2]
          } else if (yearClass === 'c') {
            day = yearDay - elapsedC[month - 2]
          } else if (yearClass === 'd') {
            day = yearDay - elapsedD[month - 2]
          } else if (yearClass === 'e') {
            day = yearDay - elapsedE[month - 2]
          } else if (yearClass === 'f') {
            day = yearDay - elapsedF[month - 2]
          }
        // month === 1 ? yearDay : (this.isLeap(year) ? (yearDay - leapElapsed[month - 2]) : (yearDay - elapsed[month - 2]))
        
        return [year, month, day]       
    },
    
    testFunction(year) {
      let d = year > 0 ? 2 : 3
      let h = year > 0 ? 5 : 7
      let ch = year > 0 ? 204 : 695
      let yearType
      let yearClass = year > 0 ? 'c' : 'e'
      let elapsedYearDays = year > 0 ? 0 : -384
      const getYearType = (year, d, h, ch) => {
        yearType = 'normal'
        let roshHashanah = d
        let nextD = 0
            let nextH = 0
            let nextCh = 0
      h >= 18 ? roshHashanah++ : roshHashanah = roshHashanah;
      roshHashanah === 8 ? roshHashanah = 2 : roshHashanah = roshHashanah;
      if (roshHashanah === 1 || roshHashanah === 4 || roshHashanah === 6) {
          roshHashanah++;
      } 
      if (!this.isLeap(year) && d === 3 && h < 18 && ((h > 9) || (h === 9 && ch >= 204))) {
          roshHashanah = 5;
      }
      if (this.isLeap(year - 1) && d === 2 && h < 18 && ((h > 15) || (h === 15 && ch > 589))) {
          roshHashanah++;
      }
          if (this.isLeap(year)) {
              nextD = d + 5; nextH = h +21; nextCh = ch + 589;
          } else {
              nextD = d + 4; nextH = h + 8; nextCh = ch + 876;
          }
          if (!(1080 > nextCh)) {
              nextCh = nextCh - 1080; nextH++;
          }
          if (!(24 > nextH)) {
              nextH = nextH - 24; nextD++;
          }
          nextD > 7 ? nextD = nextD -7 : nextD = nextD;
          
              let nextRoshHashanah = nextD
              nextH >= 18 ? nextRoshHashanah++ : nextRoshHashanah = nextRoshHashanah;
              nextRoshHashanah === 8 ? nextRoshHashanah = 2 : nextRoshHashanah = nextRoshHashanah;
              if (nextRoshHashanah === 1 || nextRoshHashanah === 4 || nextRoshHashanah === 6) {
                  nextRoshHashanah++;
              } 
              if (!this.isLeap(year + 1) && nextD === 3 && nextH < 18 && ((nextH > 9) || (nextH === 9 && nextCh >= 204))) {
                  nextRoshHashanah = 5;
              }
              if (this.isLeap(year) && nextD === 2 && nextH < 18 &&((nextH > 15) || (nextH === 15 && nextCh > 589))) {
                  nextRoshHashanah++;
              }
              let dayDifferance = nextRoshHashanah - roshHashanah
              dayDifferance < 0 ? dayDifferance = 7 - Math.abs(dayDifferance) : dayDifferance = dayDifferance
              if (dayDifferance === 3) {
                  yearType = 'defective'
              }
              if (dayDifferance === 0) {
                  yearType = 'complete'
              }
              if (dayDifferance === 5) {
                  if (this.isLeap(year)) {
                      yearType = 'defective'
                  } else {
                      yearType = 'complete'
                  }
              }
              return yearType
      } 
      const getYearClass = (year) => {
        if (!this.isLeap(year) && yearType === 'defective') {
            return 'a'
        } else if (!this.isLeap(year) && yearType === 'normal') {
            return 'b'
        } else if (!this.isLeap(year) && yearType === 'complete') {
            return 'c'
        } else if (this.isLeap(year) && yearType === 'defective') {
            return 'd'
        } else if (this.isLeap(year) && yearType === 'normal') {
            return 'e'
        } else if (this.isLeap(year) && yearType === 'complete') {
            return 'f'
        }
    }    
      if (year > 0) {
          let count = 1                
          while (count < year) {
            
            yearType = (getYearType(count, d, h, ch))              
            yearClass = getYearClass(count)
            if (yearClass === 'a') {
              elapsedYearDays +=353
            } else if (yearClass === 'b') {
              elapsedYearDays +=354
            } else if (yearClass === 'c') {
              elapsedYearDays +=355
            } else if (yearClass === 'd') {
              elapsedYearDays +=383
            } else if (yearClass === 'e') {
              elapsedYearDays +=384
            } else if (yearClass === 'f') {
              elapsedYearDays +=385
            }
            
              
              if (this.isLeap(count)) {
                  d = d + 5; h = h + 21; ch = ch + 589;
              } else {
                  d = d + 4; h = h + 8; ch = ch + 876;
              }
              if (!(1080 > ch)) {
                  ch = ch - 1080; h++;
              }
              if (!(24 > h)) {
                  h = h - 24; d++;
              }
              d > 7 ? d = d - 7 : d = d;            
              
              count++;
              
          }
      } else {
          let count = -1
          while (count > year) {
           
              if (this.isLeap(count - 1)) {
                  d = d - 5; h = h - 21; ch = ch - 589;
              } else {
                  d = d - 4; h = h - 8; ch = ch - 876;
              } 
              if (ch < 0) {
                  ch = 1080 - Math.abs(ch); h--;
              }
              if (h < 0) {
                  h = 24 - Math.abs(h); d--;
              }
              d <= 0 ? d = 7 - Math.abs(d) : d = d;

              count--;
              yearType = (getYearType(count, d, h, ch))              
              yearClass = getYearClass(count)
              if (yearClass === 'a') {
                elapsedYearDays -=353
              } else if (yearClass === 'b') {
                elapsedYearDays -=354
              } else if (yearClass === 'c') {
                elapsedYearDays -=355
              } else if (yearClass === 'd') {
                elapsedYearDays -=383
              } else if (yearClass === 'e') {
                elapsedYearDays -=384
              } else if (yearClass === 'f') {
                elapsedYearDays -=385
              }
              
          }
      }
      
      yearType = (getYearType(year, d, h, ch))              
      yearClass = getYearClass(year)

          
      return [yearClass, elapsedYearDays]
        
    },     
}


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
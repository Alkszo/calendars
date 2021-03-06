import React, { useState, useEffect } from 'react';

const Developement = ({ data, handleOmniCalc, currentTime }) => {
    
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [yearClass, setYearClass] = useState('')
    const [daysGone, setDaysGone] = useState(0)
    
    const setDate = () => {
        setYear(data.convertFromJD(currentTime)[0])
        setMonth(data.isLeap(Number(year)) ? data.leapMonths.filter(mon => mon.number === data.convertFromJD(currentTime)[1])[0].name : data.months.filter(mon => mon.number === data.convertFromJD(currentTime)[1])[0].name)
        setDay(data.convertFromJD(currentTime)[2])
    }

    const setYearStatus = () => {
        setYearClass(data.testFunction(year)[0])
        setDaysGone(data.testFunction(year)[1])
    }

    useEffect(() => 
      setDate(), [currentTime])

    useEffect(() =>
    setYearStatus(), [year])

    const currentMonth = () => data.isLeap(Number(year)) ? data.leapMonths.filter(mon => mon.name.includes(month)) : data.months.filter(mon => mon.name.includes(month))
    

    const handleYearChange = (e) => {    
        const re = /^(-|[1-9])\d*$/;
        const minusZero = /^-0\d*$/;
        if (e.target.value === '0') {
            setYear(1)
        } else if (minusZero.test(e.target.value)) {
            setYear(Number(e.target.value.replace(/^-0+/, -1)))
        } else if (e.target.value === '') {
            setYear(e.target.value)
        } else if (re.test(e.target.value)){ 
            setYear(Number(e.target.value))
        } else if (e.target.value.length > 6) {
            setYear(999999)
        }
       
                  
    }
    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }
    const handleDayChange = (e) => {
        const re = /^[1-9]\d*$/;   
        if (e.target.value === '' || (re.test(e.target.value) && e.target.value <= currentMonth()[0].days)) {
            setDay(e.target.value)
        } else {
            setDay(currentMonth()[0].days)
        }
        
    }    
    
    
    const date = () => data.convertToJD(yearClass, daysGone, currentMonth()[0].number, Number(day))
    
    
    return (
        <div>
            Kartoszka {data.name}
            <form>
                <input type="number" onChange={handleDayChange} value={day}/>                 
                <select value={month} onChange={handleMonthChange}>
                    {data.isLeap(year) ? data.leapMonths.map((month => <option value={month.name} key={month.name}>{month.name}</option>)) : data.months.map((month => <option value={month.name} key={month.name}>{month.name}</option>))}
                </select>
                <input type="number" max="999999" onChange={handleYearChange} value={year} /> 
                
            </form>

            
               

            <button onClick={() => handleOmniCalc(date())}>Calculate this date</button>

            <p>testy tutaj: klasa: {yearClass} days gone by: {daysGone}</p>
        </div>
    )
}

export default Developement;
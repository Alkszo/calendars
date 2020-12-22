import React from 'react';
import CalendarCard from './CalendarCard';

const CalendarList = ({ data, currentTime, handleOmniCalc }) => {
    
    return (
        <div>Lista Lista
            {data.map(calendar => <CalendarCard data={calendar} currentTime={currentTime} handleOmniCalc={handleOmniCalc} key={calendar.name}/>)}
        </div>
    )
}

export default CalendarList
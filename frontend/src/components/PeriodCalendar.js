import Calendar from 'react-calendar'
import { useState } from 'react'
import { usePeriodContext } from "../hooks/usePeriodContext.js"

const PeriodCalendar = () => {

	const {period,dispatch} = usePeriodContext()

	const periodDate = new Date(period[0].date)
    const [selectedDate, setSelectedDate] = useState(periodDate)

    const onClickDayHandler = (value, event) => {
        setSelectedDate(value);
    };

    const tileClassName = ({ date, view }) => {
        // Add a custom class for the initial date
        if (date.toDateString() === periodDate.toDateString()) {
          return 'initial-date';
        }
    
        // Add a custom class for the next day
        const nextDay = new Date(periodDate);
        nextDay.setDate(nextDay.getDate() + 1);
        if (date.toDateString() === nextDay.toDateString()) {
          return 'next-day';
        }
        
        const nnDay = new Date(periodDate);
        nnDay.setDate(nnDay.getDate() + 2);
        if (date.toDateString() === nnDay.toDateString()) {
          return 'nn-day';
        }
        
        const nnnDay = new Date(periodDate);
        nnnDay.setDate(nnnDay.getDate() + 3);
        if (date.toDateString() === nnnDay.toDateString()) {
          return 'nnn-day';
        }
        
        const nnnnDay = new Date(periodDate);
        nnnnDay.setDate(nnnnDay.getDate() + 4);
        if (date.toDateString() === nnnnDay.toDateString()) {
          return 'nnnn-day';
        }
    
        return null;
    };

  	return(
    	<div>
    	    {period && period.map((period) => (
    	        <Calendar
    	            onChange={setSelectedDate}
    	            value={selectedDate}
    	            onClickDay={onClickDayHandler}
    	            tileClassName={tileClassName}
    	            key={period._id}
    	        />
    	    ))}
    	</div>
	)
}

export default PeriodCalendar

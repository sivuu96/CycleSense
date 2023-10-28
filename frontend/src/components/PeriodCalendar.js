import Calendar from 'react-calendar'
import { useEffect, useState } from 'react'
import { usePeriodContext } from "../hooks/usePeriodContext.js"

const PeriodCalendar = () => {

	const {period,dispatch} = usePeriodContext()

	const periodDate = new Date(period[0].date)
	const[nextDate, setNextDate]  = useState(new Date(periodDate.setDate(periodDate.getDate() + period[0].length)))
	
    const [selectedDate, setSelectedDate] = useState(nextDate)
	const [status, setStatus] = useState('')
	const [showForm, setShowForm] = useState(false)

	const [symptoms, setSymptoms] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [menstrual_flow, setMenstrualFlow] = useState('')
	const [mood, setMood] = useState('')

    const onClickDayHandler = (value, event) => {
        setSelectedDate(value);
		setShowForm(true);
		setIsChecked(false);
		setSymptoms('');
		setMenstrualFlow('');
		setMood('');
    };

    const tileClassName = ({ date, view }) => {
		if (date.toDateString() === nextDate.toDateString()) {
			return 'initial-date';
		}
		
		const nextDay = new Date(nextDate);
		nextDay.setDate(nextDay.getDate() + 1);
		if (date.toDateString() === nextDay.toDateString()) {
		return 'next-day';
		}
		
		const nnDay = new Date(nextDate);
		nnDay.setDate(nnDay.getDate() + 2);
		if (date.toDateString() === nnDay.toDateString()) {
		return 'nn-day';
		}
		
		const nnnDay = new Date(nextDate);
		nnnDay.setDate(nnnDay.getDate() + 3);
		if (date.toDateString() === nnnDay.toDateString()) {
		return 'nnn-day';
		}
		
		const nnnnDay = new Date(nextDate);
		nnnnDay.setDate(nnnnDay.getDate() + 4);
		if (date.toDateString() === nnnnDay.toDateString()) {
		return 'nnnn-day';
		}
	}
		
	const getStatus = () => {
		const today = new Date()
		const nextDay = new Date(nextDate);
        nextDay.setDate(nextDay.getDate() + 1);

		const nnDay = new Date(nextDate);
        nnDay.setDate(nnDay.getDate() + 2);

		const nnnDay = new Date(nextDate);
        nnnDay.setDate(nnnDay.getDate() + 3);

		const nnnnDay = new Date(nextDate);
        nnnnDay.setDate(nnnnDay.getDate() + 4);
		
		if(today<nextDate){
			const timeDifference = nextDate.getTime() - today.getTime();
			const d = timeDifference / (1000 * 60 * 60 * 24);

			setStatus('You can expect your periods in ' +Math.ceil(d)+ ' days')
		}
		else {
			if(today.toDateString() === nextDate.toDateString()){
				setStatus('Your Periods have started')
			}
			if(today.toDateString() === nextDay.toDateString()){
				setStatus('You are on your Second Day of Periods')
			}
			if(today.toDateString() === nnDay.toDateString()){
				setStatus('You are on your Third Day of Periods')
			}
			if(today.toDateString() === nnnDay.toDateString()){
				setStatus('You are on your Fourth Day of Periods')
			}
			if(today.toDateString() === nnnnDay.toDateString()){
				setStatus('You are on your Fifth Day of Periods')
			}
		}
    };
	useEffect(()=>{
		getStatus();
	})

	const handleSubmit = async (e)=>{
		e.preventDefault();
		
		setShowForm(false)
		setIsChecked(false);
		setSymptoms('');
		setMenstrualFlow('');
		setMood('');
		setNextDate(new Date(selectedDate));
		getStatus()
	}

	const handleCheckChange = ()=>{
		setIsChecked(!isChecked)
	}

  	return(
    	<div className='home-details'>
			<div className='calendar-details'>
				{period && period.map((period) => (
					<Calendar
						onChange={setSelectedDate}
						value={selectedDate}
						onClickDay={onClickDayHandler}
						tileClassName={tileClassName}
						key={period._id}
					/>
				))}
				<div>
					<p className='period-status'>{status}</p>
				</div>
			</div>
			{showForm &&
				<div>
					<h4>What all did you experience on {selectedDate.toDateString()}</h4>
					<label className='checkbox-label'>Did you get your periods on this day?</label>
					<input 
						type='checkbox'
						checked={isChecked}
						onChange={handleCheckChange}
					/>
					{isChecked &&
						<form onSubmit={handleSubmit}>
							<label>Any Symptoms?</label>
							<input 
								type="text"
								onChange={(e) => setSymptoms(e.target.value)}
								value={symptoms}
							/>
							<label>How is your menstrual flow?</label>
							<input 
								type="text"
								onChange={(e) => setMenstrualFlow(e.target.value)}
								value={menstrual_flow}
							/>
							<label>How is your mood?</label>
							<input 
								type="text"
								onChange={(e) => setMood(e.target.value)}
								value={mood}
							/>
							<button>Submit</button>
						</form>
					}
				</div>
			}
    	</div>
	)
}

export default PeriodCalendar
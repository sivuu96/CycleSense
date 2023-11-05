import SideNav from "../components/SideNav"
import { useState } from "react"
import { usePeriodContext } from "../hooks/usePeriodContext.js";
import { useAuthContext } from "../hooks/useAuthContext";
import "../toggle.css"

const SetAlarm = () => {
    
    const { period, dispatch } = usePeriodContext();
    const { user } = useAuthContext();
    
    const [isToggle,setIsToggle] = useState(period[0].toggle)
    
    const handleToggle = async()=>{
        const toggle = !isToggle 
		setIsToggle(!isToggle)

        const updatedPeriod = {toggle}

		const response = await fetch('/period/update/' +period[0]._id,{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${user.token}`
			},
			body:JSON.stringify(updatedPeriod)
		})

		const json = await response.json()

		if(response.ok) {
			dispatch({type:'UPDATE_PERIOD', payload:json})
		}
	}

    const sendEmail = async()=>{
        const mail = user.email
        const response = await fetch('/period/sendemail',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({mail})
        })
    }
    if(isToggle){
        const periodDate = new Date(period[0].next_date);
        const twoDaysBefore = new Date(periodDate.setDate(periodDate.getDate() - 2));
        const today = new Date();

        console.log(twoDaysBefore,today)
        const timeDifference = today.getTime() - twoDaysBefore.getTime();
        const timeDifferenceInDays = timeDifference / (1000 * 60 * 60 * 24);

        console.log(timeDifferenceInDays)
        if (timeDifferenceInDays <= 2&& timeDifferenceInDays>0) {
            sendEmail()
        }
    }
    return(
        <div>
            <SideNav />
            <div className="downloadreport">
                <h1>Enable Alarms</h1>
                <p>Once alarm is enabled, we shall send you reminders 2 days prior to your periods.</p>
	            <fieldset className="alarmbox">
                    <div className="tgcontainer">
                        <input 
                            type="checkbox"
                            checked={isToggle}
                            onChange={handleToggle}
                        />
                        <span className="slider">&nbsp; Send Email remainder</span>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
export default SetAlarm
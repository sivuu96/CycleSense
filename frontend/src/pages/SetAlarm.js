import SideNav from "../components/SideNav"
import "../toggle.css"

const SetAlarm = () => {
    return(
        <div>
        <SideNav />
        <div className="downloadreport">
        <h1>Enable Alarms</h1>
        <p>Once alarm is enabled, we shall send you reminders 2 days prior to your periods.</p>
	    <fieldset className="alarmbox">
        <div className="tgcontainer">
        <input type="checkbox" id="email" name="email"/><span className="slider">&nbsp; Send Email remainder</span>
        
        </div>

        <div className="tgcontainer">
        <input type="checkbox" id="whatsapp" name="whatsapp" /><span className="slider">&nbsp;Send Whatsapp Reminder</span>
        
        </div>
        </fieldset>
        
        </div>
        
        </div>
    )
}
export default SetAlarm
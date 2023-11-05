import SideNav from "../components/SideNav"
import { usePeriodContext } from "../hooks/usePeriodContext.js"
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
    const {period} = usePeriodContext()
    const {user} = useAuthContext();
    const first_name = user.first_name
    const avg = period[0].length
    const last =new Date(period[0].date); 
    const nxt = new Date(period[0].next_date); 
    const ly = last.getFullYear() 
    const lm = last.getMonth()+1
    const ld = last.getDate()
    const ny = nxt.getFullYear() 
    const nm = nxt.getMonth()+1
    const nd = nxt.getDate()
    console.log(first_name)
    return(
        <div>
        <SideNav />
        <div className="downloadreport">
            <h1>Hi, {first_name}! </h1>

            <p>Welcome to your profile dashboard. We empower period wellness by catering 
               to you a one-stop montly wellness hub. </p>

               <ul>

            <li>You have an average cycle of <b>{avg}</b> days.</li>
            <li>Your last period was on <b>{ld}/{lm}/{ly}</b></li>
            <li>You may expect your next period on <b>{nd}/{nm}/{ny}</b>.</li>
            </ul>
        </div>
        </div>
    )
}
export default Profile
import SideNav from "../components/SideNav"
import { usePeriodContext } from "../hooks/usePeriodContext.js"
import { useAuthContext } from "../hooks/useAuthContext";
import {useLogout} from '../hooks/useLogout'

const DelProf = () => {
    const {period,dispatch} = usePeriodContext()
    const {user,dispatch:authDispatch} = useAuthContext();
    const {logout} = useLogout()

    const handleDelete = async() => {
        const response = await fetch('/period/delete/' + period[0]._id,{
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json();

        if(response.ok) {
            dispatch({type:'DELETE_PERIOD',payload:json});
        }

        const res = await fetch('/user/delete/' + user.id, {
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        }).catch(err => console.log(err))
        const json1 = await res.json();

        if(res.ok) {
            logout()
        }
    }
    return(
        <div>
            <SideNav />
            <div className="downloadreport">
                <h1>Delete your profile</h1>
                <p>Are you sure you want to delete the profile?</p>
	            <button type="button" className="deletebtn1" onClick={handleDelete}>Yes</button>
            </div>
        </div>
    )
}
export default DelProf
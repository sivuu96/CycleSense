import SideNav from "../components/SideNav"
import { usePeriodContext } from "../hooks/usePeriodContext.js"
import { useAuthContext } from "../hooks/useAuthContext";
import {useState} from 'react'

const EditProf = () => {
    const {period} = usePeriodContext()
    const {user,dispatch} = useAuthContext();

    const [email,setEmail] = useState(user.email)
    const [first_name,setFirstName] = useState(user.first_name)
    const [last_name,setLastName] = useState(user.last_name)
    const [phone,setPhone] = useState(user.phone)
    const [token,setToken] = useState(user.token)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch('/user/update/' + period[0].user_id,{
            method : 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,first_name,last_name,phone})
        })
        const json = await response.json()
        json.token = token
        
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:"UPDATE_USER", payload:json})
        }
    }
    return(
        <div>
            <SideNav />
            <form className="edit-form" onSubmit={handleSubmit}>
                <h3>Edit Profile</h3>
    
                <label>First Name:</label>
                <input 
                    type = "text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value = {first_name}
                />
                <label>Last Name:</label>
                <input 
                    type = "text"
                    onChange={(e) => setLastName(e.target.value)}
                    value = {last_name}
                />
                <label>Phone:</label>
                <input 
                    type = "text"
                    onChange={(e) => setPhone(e.target.value)}
                    value = {phone}
                />
                <label>Email:</label>
                <input 
                    type = "email"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                />
                <button>Submit</button>
            </form>
        </div>

    )
}
export default EditProf
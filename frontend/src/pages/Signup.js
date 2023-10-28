import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import {Link} from 'react-router-dom'
const Signup = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const {signup,error,isLoading} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        //console.log(email,password,first_name,last_name,phone)
        await signup(email,password,first_name,last_name,phone)
    }

    return(
        <div>
            <div className="overflow-container">
            <div className="circleBase circle3"></div>
            <div className="circleBase circle2"></div>
            <div className="circleBase circle1"></div>
            </div>
        <form className='signup' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

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
            <label>Password</label>
            <input 
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />

            <button disabled={isLoading}>Submit</button>
            {error &&<div className='error'>{error}</div>}
            <div>
            <p style={{display:"inline-block"}}>Already a Member?&nbsp;</p>
            <Link to = "/login">
            <p style={{display:"inline-block"}}>Log In</p>
            </Link>
            </div>
        </form>
        </div>
    )
}

export default Signup
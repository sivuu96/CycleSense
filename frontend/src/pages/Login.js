import {useState} from 'react'
import {useLogin} from '../hooks/useLogin'
import {Link} from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useLogin()
    
    const handleSubmit = async (e) =>{
        e.preventDefault()

        await login(email,password)
    }

    return(
        <div>
            <div className="overflow-container">
            <div className="circleBase circle3"></div>
            <div className="circleBase circle2"></div>
            <div className="circleBase circle1"></div>
            </div>
        <form className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Email:</label>
            <input 
                type = "email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>Password:</label>
            <input 
                type = "password"
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
            />

            <button disabled={isLoading}>Submit</button>
            {error && <div className='error'>{error}</div>}
            <div>
            <p style={{display:"inline-block"}}>Not a Member yet?&nbsp;</p>
            <Link to = "/signup">
            <p style={{display:"inline-block"}}>Sign Up</p>
            </Link>
            </div>
        </form>
        </div>
        
    )
}

export default Login
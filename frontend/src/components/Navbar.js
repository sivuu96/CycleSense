import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const NavBar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return(
        <header>
            <div className="container">
                <Link to = "/">
                    <h1>CycleSense</h1>
                </Link>
                <nav>
                    {user && (<div>
                        <span className='user-name'>{user.name}</span>
                        <button onClick = {handleClick}>Log out</button>
                    </div>)}
                    
                </nav>
            </div>
        </header>
    )
}

export default NavBar
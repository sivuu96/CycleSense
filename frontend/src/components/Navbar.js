import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const NavBar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    console.log(user)
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
<<<<<<< HEAD
                        <Link to = "/profile">
                            <span className='user-name'>{user.first_name}</span>
                        </Link>
=======
                        <span className='user-name'>{user.name}</span>
>>>>>>> 007dbac7432fc4f2aaa4d8db3b3c6022270d936b
                        <button onClick = {handleClick}>Log out</button>
                    </div>)}
                    
                </nav>
            </div>
        </header>
    )
}

export default NavBar
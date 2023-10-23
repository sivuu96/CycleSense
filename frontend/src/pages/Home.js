import { useEffect,useState } from "react"
import UserDetails from "../components/UserDetails.js"

const Home = () =>{

    const [user,setUser] = useState(null)
    useEffect(() =>{
        const fetchUsers = async () =>{
            const response = await fetch('/user/all')
            const  json = await response.json()

            if (response.ok){
                setUser(json)
            }
        }

        fetchUsers()
    },[])

    return(
        <div className="home">
            <div className="Users">
                {user && user.map((user) =>(
                    <UserDetails key={user._id} user = {user} />
                ))}
            </div>
        </div>
    )
}

export default Home
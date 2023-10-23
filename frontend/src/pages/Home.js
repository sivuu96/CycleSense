import { useEffect,useState } from "react"

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
                    <p key = {user._id}>{user.first_name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home
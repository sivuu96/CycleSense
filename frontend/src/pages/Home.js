import { useEffect,useState } from "react"
import PeriodDetails from "../components/PeriodDetails.js"

const Home = () =>{

    const [period,setPeriod] = useState(null)
    useEffect(() =>{
        const fetchPeriod = async () =>{
            const response = await fetch('/period/all')
            const  json = await response.json()

            if (response.ok){
                setPeriod(json)
            }
        }

        fetchPeriod()
    },[])

    return(
        <div className="home">
            <div className="Users">
                {period && period.map((period) =>(
                    <PeriodDetails key={period._id} period={period}/>
                ))}
            </div>
        </div>
    )
}

export default Home
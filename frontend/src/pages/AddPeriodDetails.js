import {useState} from "react";
import {usePeriodContext} from "../hooks/usePeriodContext"
import { useAuthContext } from "../hooks/useAuthContext";
import {useNavigate} from 'react-router-dom';

const AddPeriodDetails = () => {

    const navigate = useNavigate()
    const {dispatch} = usePeriodContext();
    const {user} = useAuthContext();

    const [date, setDate] = useState('');
    const [length, setLength] = useState(0);
    const [symptoms, setSymptoms] = useState('');
    const [menstrual_flow, setMenstrual_flow] = useState('');
    const [mood, setMood] = useState('');

    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!user) {
          setError('You must be logged in')
          return
        }

        const period = {date, length, symptoms, menstrual_flow, mood}

        const response = await fetch('/period',{
            method: 'POST',
            body: JSON.stringify(period),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setDate('')
            setLength(0)
            setSymptoms('')
            setMenstrual_flow('')
            setMood('')
            setError(null)
            setEmptyFields([])
            dispatch({type: 'ADD_PERIOD', payload: json})
        }

        navigate('/')
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Period Details</h3>

            <label>When did you have your last periods: </label>
            <input 
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className={emptyFields.includes('date') ? 'error' : ''}
            />

            <label>Cycle length:</label>
            <input 
                type="number"
                onChange={(e) => setLength(e.target.value)}
                value={length}
                className={emptyFields.includes('length') ? 'error' : ''}
            />

            <label>Usual Symptoms:</label>
            <input 
                type="text"
                onChange={(e) => setSymptoms(e.target.value)}
                value={symptoms}
                className={emptyFields.includes('symptoms') ? 'error' : ''}
            />

            <label>How is your Menstrual Flow:</label>
            <input 
                type="text"
                onChange={(e) => setMenstrual_flow(e.target.value)}
                value={menstrual_flow}
                className={emptyFields.includes('menstrual_flow') ? 'error' : ''}
            />

            <label>Usual Mood:</label>
            <input 
                type="text"
                onChange={(e) => setMood(e.target.value)}
                value={mood}
                className={emptyFields.includes('mood') ? 'error' : ''}
            />

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AddPeriodDetails
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import NavBar from './components/Navbar.js';
import AddPeriodDetails from './pages/AddPeriodDetails'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import DelProf from './pages/DelProf'
import DownRep from './pages/DownRep'
import EditProf from './pages/EditProf'
import SetAlarm from './pages/SetAlarm'

function App() {
	const {user} = useAuthContext();
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<div className='pages'>
					<Routes>
						<Route
							path = "/"
							element = {user? <Home />:<Navigate to="/login"/>}
						/>	
						<Route
							path = "/login"
							element = {!user?<Login />:<Navigate to="/"/>}
						/>	
						<Route
							path = "/signup"
							element = {!user?<Signup />:<Navigate to="/details"/>}
						/>	
						<Route
							path="/details"
							element ={user?<AddPeriodDetails/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/profile"
							element ={user?<Profile/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/aboutus"
							element ={user?<AboutUs/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/delprof"
							element ={user?<DelProf/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/downrep"
							element ={user?<DownRep/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/editprof"
							element ={user?<EditProf/>:<Navigate to="/signup" />} 
						/>
						<Route
							path="/setalarm"
							element ={user?<SetAlarm/>:<Navigate to="/signup" />} 
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

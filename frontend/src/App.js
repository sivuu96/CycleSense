import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import NavBar from './components/Navbar.js';
import AddPeriodDetails from './pages/AddPeriodDetails'

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
							element = {!user?<Signup />:<Navigate to="/"/>}
						/>	
						<Route
							path="/details"
							element ={user?<AddPeriodDetails/>:<Navigate to="/signup" />} 
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import NavBar from './components/Navbar.js';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<div className='pages'>
					<Routes>
						<Route
							path = "/"
							element = {<Home />}
						/>	
						<Route
							path = "/login"
							element = {<Login />}
						/>	
						<Route
							path = "/signup"
							element = {<Signup />}
						/>	
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

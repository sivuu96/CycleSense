import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
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
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;

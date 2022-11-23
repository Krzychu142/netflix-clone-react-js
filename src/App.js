import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

import "./App.css";

function App() {
	return (
		<div className='app'>
			<Router>
				<Routes>
					<Route exact path='/' element={<HomeScreen />}>
						{/* this is a root for the home screen */}
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

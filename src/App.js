import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

import "./App.css";
import { auth } from "./firebase";

function App() {
	const user = null;

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// Logged in
				console.log(userAuth);
			} else {
				// Logged out
			}
		}); //listener of authentication change
		return unsubscribe;
	}, []);

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route exact path='/' element={<HomeScreen />}>
							{/* this is a root for the home screen */}
						</Route>
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;

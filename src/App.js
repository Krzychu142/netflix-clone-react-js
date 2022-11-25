import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

import "./App.css";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import { login, logout, selectUser } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser); //this is give me user back
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout);
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

import React, { useState, useEffect } from "react";

import "./Nav.css";

function Nav() {
	const [show, setShow] = useState(false);

	const transitionNavBar = () => {
		//when u scroll more than 1 vh
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar); //cleanup function is special important when u touch a listener function
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className='nav__contents'>
				<img
					className='nav__log'
					src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
					alt='Netflix logo.'
				/>
				<img
					className='nav__avatar'
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt='Your avatar'
				/>
			</div>
		</div>
	);
}

export default Nav;

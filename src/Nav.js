import React from "react";

import "./Nav.css";

function Nav() {
	return (
		<div className='nav'>
			<div className='nav__contents'>
				<img
					className='nav__log'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
					alt='Netflix logo.'
				/>
				<img
					className='nav__avatar'
					src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
					alt='Your avatar'
				/>
			</div>

			<h1>NAV</h1>
		</div>
	);
}

export default Nav;

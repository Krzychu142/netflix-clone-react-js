import React from "react";

import "./SingUpScreen.css";

function SingUpScreen() {
	return (
		<div className='singupScreen'>
			<form>
				<h1>Sing In</h1>
				<input placeholder='Email' type='email' />
				<input placeholder='Password' type='password' />
				<button type='submit'>Sing In</button>
				<h4>
					<span className='singupScreen__gray'>New to Netflix? </span>
					<span className='singupScreen__link'>Sing up now.</span>
				</h4>
			</form>
		</div>
	);
}

export default SingUpScreen;

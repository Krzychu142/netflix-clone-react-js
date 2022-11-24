import React, { useState } from "react";

import "./LoginScreen.css";

function LoginScreen() {
	const [singIn, setSingIn] = useState(false);

	function setSingInToTrue() {
		setSingIn(true);
	}

	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img
					className='loginScreen__logo'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
					alt='Netflix logo'
				/>
				<button className='loginScreen__button' onClick={setSingInToTrue}>
					Sing in
				</button>
				<div className='loginScreen__gradient' />
			</div>
			<div className='loginScreen__body'>
				{singIn ? (
					<>
						<h1>test</h1>
					</>
				) : (
					<>
						<h1>Unlimited films, TV programmes, and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className='loginScreen__input'>
							<form>
								<input type='email' placeholder='Email Address' />
								<button
									className='loginScreen__getStarted'
									onClick={setSingInToTrue}>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;

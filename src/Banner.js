import React from "react";

import "./Banner.css";

function Banner() {

//
	
	function truncate(descriptionString, wordsNumber) {
		return descriptionString?.length > wordsNumber
			? descriptionString.substr(0, wordsNumber - 1) + "..."
			: descriptionString;
	}

	return (
		<header
			className='banner'
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
				backgroundPosition: "center center",
			}}>
			<div className='banner__contents'>
				<h1 className='banner__title'>Movie Name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(
						"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
						150
					)}
				</h1>
			</div>
			<div className='banner--fadeBottom' /* it's some kind of css trick */ />
		</header>
	);
}

export default Banner;

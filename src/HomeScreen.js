import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Requests";

import "./HomeScrenn.css";

function HomeScreen() {
	return (
		<div className='homeScreen'>
			<Nav />
			<Banner />
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
		</div>
	);
}

export default HomeScreen;

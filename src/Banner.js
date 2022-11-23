import axios from "./axios"; //important the local file, not a global
import React, { useState, useEffect } from "react";
import requests from "./Requests";

import "./Banner.css";

function Banner() {
	const [movie, setMovie] = useState([]);

	//fetch movie information
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

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
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //optional chaining (?.) - If the object is undefined or null, it returns undefined instead of throwing an error. - movie.?backdrop_path bcs in start it's not inicialized
				backgroundPosition: "center center",
			}}>
			<div className='banner__contents'>
				<h1 className='banner__title'>
					{movie?.name || movie?.title || movie?.orginal_name}
				</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
			<div
				className='banner--fadeBottom' /* it's some kind of nice css trick */
			/>
		</header>
	);
}

export default Banner;

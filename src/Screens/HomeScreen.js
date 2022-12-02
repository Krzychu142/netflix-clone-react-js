import React from "react";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";
import { useSelector } from "react-redux";

import "./HomeScrenn.css";

function HomeScreen() {
  const count = useSelector((state) => state.search.count);
  const fetch = useSelector((state) => state.search.request);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {count >= 1 && (
        <Row title="Searched" fetchUrl={fetch[Number(count) - 1].url} isLarge />
      )}
      <Row
        title="Netflix Orginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;

import React from 'react';
import './Apps.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import NavBar from './NavBar';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

function App() {
  return (
    <div className="app">

      {/* Navbar */}

      <NavBar />

      <Banner />

      <h1>This is A Netflix Clone.</h1>
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} 
        isLargeRow
      />
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title = "Romantic Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

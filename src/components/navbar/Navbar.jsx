import React, {useState} from 'react';
import "./navbar.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  const [activeNav, setActiveNav] = useState("#header");


  return (
    <nav>
      <h1 className="title">
      {/* <Link to="/">InfiniteNYC </Link> */}
      <a href="/">InfiniteNYC</a>
      </h1>
      <a id="logo" href="/">∞∞</a>
      <a className="survey-link" href="/">Survey</a>
      <a className="explore-link" href="/">Explore</a>
      <a className="resources-link" href="/resources-page">Helplines</a>


    </nav>
  )
}

export default Navbar
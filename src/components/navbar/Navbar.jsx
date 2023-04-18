import React, {useState} from 'react';
import "./navbar.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  const [activeNav, setActiveNav] = useState("#header");


  return (
    <nav>
      <h1 className="title">
      <Link to="/">InfiniteNYC </Link>
      {/* <a href="/">InfiniteNYC</a> */}
      </h1>
      <a id="logo" href="/">∞∞</a>
      <Link to="/" className="survey-link">Survey</Link>
      <Link to="/" className="explore-link">Explore</Link>
      <Link to="/resources-page" className="resources-link">Helplines</Link>


    </nav>
  )
}

export default Navbar
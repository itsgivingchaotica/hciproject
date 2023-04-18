import React, {useState} from 'react';
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({setFilteredResults,setSummaryBanner}) {
  const [activeNav, setActiveNav] = useState("#header");
  const navigate = useNavigate();

    const handleResultsLinkClick = () => {
    // Clear search results by updating state
    setFilteredResults([]);
    setSummaryBanner("");
    setSummaryBanner("Search ");

    // Navigate to Results page
    navigateTo("/results");
  };

  return (
    <nav>
      <h1 className="title">
      <Link to="/">InfiniteNYC</Link>
      {/* <a href="/">InfiniteNYC</a> */}
      </h1>
      <Link id="logo" to="/">∞∞</Link>
      <Link to="/survey" className="survey-link">Survey</Link>
      <Link to="/results/" className="explore-link" onClick={() => handleResultsLinkClick()}>Explore</Link>
      <Link to="/resources-page" className="resources-link">Helplines</Link>


    </nav>
  )
}

export default Navbar
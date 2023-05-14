import React, {useState} from 'react';
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

function Navbar({setFilteredResults,setSummaryBanner,setDaNeighborhood,setSearchTerm,handleNavbarLinkClick}) {
  const [activeNav, setActiveNav] = useState("#header");
  const navigateTo = useNavigate();

    const handleResultsLinkClick = () => {
    // Clear search results by updating state
    setFilteredResults([]);
    setSearchTerm("");
    setSummaryBanner("");
    setSummaryBanner("Search ");
    setDaNeighborhood("New York City")

    // Navigate to Results page
    navigateTo("/results");
  };

  return (
    <nav>
      <h1 className="title">
      <Link to="/" onClick={handleNavbarLinkClick}>InfiniteNYC</Link>
      {/* <a href="/">InfiniteNYC</a> */}
      </h1>
      <Link to="/" onClick={handleNavbarLinkClick}><FontAwesomeIcon id="infinity-logo" icon={faInfinity}/></Link>
      <Link to="/survey" className="survey-link" onClick={handleNavbarLinkClick}>Survey</Link>
      <Link to="/results/" className="explore-link" onClick={() => handleResultsLinkClick()}>Explore</Link>
      <Link to="/resources-page" className="resources-link" onClick={handleNavbarLinkClick}>Helplines</Link>
    </nav>
  )
}

export default Navbar
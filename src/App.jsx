
import React, { useEffect, useState } from 'react';
import ResultsPage from './ResultsPage/ResultsPage.jsx';
import { ResultDetails } from "./ResultsPage/Results/Result/ResultDetails/ResultDetails.jsx"
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { SearchBar } from './ResultsPage/SearchBar/SearchBar.jsx'
import { Banner } from './ResultsPage/Results/Banner.jsx'

// import React, { useState } from 'react'
// import './App.css'


import Navbar from "./components/navbar/Navbar.jsx";
import ResourcesPage from "./ResourcesPage";
import HomePage from "./HomePage";

// import {Routes, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import accordionItems from "./accordionItems.json";

function App() {

  const [results, setResults] = useState([]);

  const [reviewName, setReviewName] = useState('');
  const [photoOne, setPhoto1] = useState('');
  const [zipCode, setZipcode] = useState('');
  const [reviewLatitude,setReviewLatitude] = useState('40.63124780572077');
  const [reviewLongitude,setReviewLongitude]=useState('-73.95238020363617');

  const [directionMap,setDirectionMap] = useState(/** @typeof google.maps.Map */(null)); 


  function handleSetName(aname){
    setReviewName(aname);
    console.log(reviewName + " handled")
  }
//   const handleSetName = (reviewName) => {
//     setReviewName(reviewName);
//     console.log(reviewame + " handled");
// }

  useEffect(() => {
    fetch('/results.json')
      .then(response => response.json())
      .then(data => {
        const extractedData = data.results.map(result => ({
          id: result.id,
          name: result.name,
          alias: result.alias,
          latitude: result.latitude,
          longitude: result.longitude,
          zipcode: result.zipcode,
          rating: result.rating,
          photo1: result.photo1,
          photo2: result.photo2
        }));
        setResults(extractedData);
        console.log(" helloooo " + extractedData);
      });
  }, []);

    const [summaryBanner,setSummaryBanner] = useState("Results")
    const [searchTerm,setSearchTerm] = useState("parks");
    const [filteredResults,setFilteredResults] = useState(results);
    const [locationInquiry,setLocationInquiry] = useState([]);

    const options = {
      minMatchCharLength: 3,
      keys: ["name","alias","zipcode","latitude","longitude"]
  }

  console.log(results);
  return (
// <<<<<<< HEAD
    <div>
      <Navbar />
      <div>
        <div className="formatSearch">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredResults={filteredResults} setFilteredResults={setFilteredResults} options={options} results={results} setSummaryBanner={setSummaryBanner}setLocationInquiry={setLocationInquiry}/>
          </div>
          <div className="adjustBanner">
          <Banner summaryBanner={summaryBanner}searchTerm={searchTerm} locationInquiry={locationInquiry}/>
          </div>
      </div>
      <Routes>
        <Route path="*" element={<ResultsPage results={results} setReviewName={setReviewName} reviewName={reviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1}filteredResults={filteredResults}searchTerm={searchTerm}exact summaryBanner={summaryBanner}setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude}/>} />
        <Route path="/results/:id/" element={<ResultDetails reviewName={reviewName} photoOne={photoOne} zipCode={zipCode} setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude} directionMap={directionMap}setDirectionMap={setDirectionMap}/>}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/resources-page" element={<ResourcesPage accordionItems={accordionItems}/>}/>
      </Routes>
{/* ======= */}
    {/* <div className="App"> */}
      {/* <Navbar /> */}



{/* >>>>>>> 23328df (Home and resource page commit) */}
    </div>

  );
}

export default App

import React, { useEffect, useState } from 'react';
import ResultsPage from './ResultsPage/ResultsPage.jsx';
import { ResultDetails } from "./ResultsPage/Results/Result/ResultDetails/ResultDetails.jsx"
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { SearchBar } from './ResultsPage/SearchBar/SearchBar.jsx'
import { Banner } from './ResultsPage/Results/Banner.jsx'

function App() {

  const [results, setResults] = useState([]);

  const [reviewName, setReviewName] = useState('');
  const [photoOne, setPhoto1] = useState("");
  const [photoTwo, setPhoto2] = useState("");
  const [photoThree, setPhoto3] = useState("");
  
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
          photo2: result.photo2,
          photo3: result.photo3,
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
    <div>
      <div>
        <div className="formatSearch">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredResults={filteredResults} setFilteredResults={setFilteredResults} options={options} results={results} setSummaryBanner={setSummaryBanner}setLocationInquiry={setLocationInquiry}/>
          </div>
          <div className="adjustBanner">
          <Banner summaryBanner={summaryBanner}searchTerm={searchTerm} locationInquiry={locationInquiry}/>
          </div>
      </div>
      <Routes>
        <Route path="*" element={<ResultsPage results={results} setReviewName={setReviewName} reviewName={reviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1}setPhoto2={setPhoto2}setPhoto3={setPhoto3}filteredResults={filteredResults}searchTerm={searchTerm}exact summaryBanner={summaryBanner}setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude}/>} />
        
        <Route path="/results/:id/" element={<ResultDetails reviewName={reviewName} photoOne={photoOne} photoTwo={photoTwo} photoThree={photoThree} zipCode={zipCode} setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude} directionMap={directionMap}setDirectionMap={setDirectionMap}/>}/>
      </Routes>
    </div>

  );
}

export default App

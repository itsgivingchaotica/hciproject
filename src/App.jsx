import React, { useEffect, useState } from 'react';
// import ResultsPage from './ResultsPage/ResultsPage.jsx';
import { ResultDetails } from "./ResultsPage/Results/Result/ResultDetails/ResultDetails.jsx"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SearchBar } from './ResultsPage/SearchBar/SearchBar.jsx'
import { Banner } from './ResultsPage/Results/Banner.jsx'
import { Results } from './ResultsPage/Results/Results.jsx';

function App() {

  const [results, setResults] = useState([]);

  const [reviewName, setReviewName] = useState('');
  const [photoOne, setPhoto1] = useState("");
  const [photoTwo, setPhoto2] = useState("");
  const [photoThree, setPhoto3] = useState("");
  const [Address1,setAddress1] = useState("");
  const [Address2,setAddress2] = useState("");
  const [website,setWebsite] = useState("");
  const [telephone,setTelephone] = useState("");
  const [neighborhood,setNeighborhood] = useState("");
  const [tag,setTag] = useState("");
  const [blurb1,setBlurb1] = useState("");
  const [blurb2,setBlurb2] = useState("");
  const [blurb3,setBlurb3] = useState("");
  const [about,setAbout] = useState("");
  const [zipCode, setZipcode] = useState('');
  const [reviewLatitude,setReviewLatitude] = useState('40.63124780572077');
  const [reviewLongitude,setReviewLongitude]=useState('-73.95238020363617');

  const [directionMap,setDirectionMap] = useState(/** @typeof google.maps.Map */(null)); 

  //
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
          Address1: result.Address1,
          Address2: result.Address2,
          website: result.website,
          telephone: result.telephone,
          neighborhood: result.neighborhood,
          tag: result.tag,
          blurb1: result.blurb1,
          blurb2: result.blurb2,
          blurb3: result.blurb3,
          about: result.about
        }));
        setResults(extractedData);
        console.log(" helloooo " + extractedData);
      });
  }, []);
    //set the results summary banner "Banner" component
    const [summaryBanner,setSummaryBanner] = useState("Results")
    //the search term the user inputs and will show in Banner
    const [searchTerm,setSearchTerm] = useState("parks");
    //
    const [filteredResults,setFilteredResults] = useState(results);
    const [locationInquiry,setLocationInquiry] = useState([]);
//options to pass to fuse search to search against from json results[]
    const options = {
      minMatchCharLength: 3,
      keys: ["name","alias","zipcode","latitude","longitude","about","blurb1","blurb2","blurb3","tag","neighborhood","telephone","website","Address1","Address2"]
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
        {/* <Route path="*" element={<ResultsPage results={results} setReviewName={setReviewName} reviewName={reviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1}setPhoto2={setPhoto2}setPhoto3={setPhoto3}filteredResults={filteredResults}searchTerm={searchTerm}exact summaryBanner={summaryBanner}setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude}/>} /> */}
        <Route path="/results/" element ={<Results filteredResults={filteredResults} searchTerm={searchTerm} summaryBanner={summaryBanner} results={results} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout} setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude} reviewLatitude={reviewLatitude} reviewLongitude={reviewLongitude}/>}/>

        <Route path="/results/:id/" element={<ResultDetails reviewName={reviewName} photoOne={photoOne} photoTwo={photoTwo} photoThree={photoThree} zipCode={zipCode} Address1={Address1} Address2={Address2} website={website} telephone={telephone} neighborhood={neighborhood} tag={tag} blurb1={blurb1} blurb2={blurb2}blurb3={blurb3} about={about} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude} reviewLatitude={reviewLatitude} reviewLongitude={reviewLongitude} directionMap={directionMap} setDirectionMap={setDirectionMap}/>}/>
      </Routes>
    </div>

  );
}

export default App

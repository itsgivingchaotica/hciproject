
import React, { useEffect, useState} from 'react';
import { ResultDetails } from "./ResultsPage/ResultDetails/ResultDetails.jsx"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar.jsx'
import { Results } from './ResultsPage/Results/Results.jsx';
import QuestionsPage  from './QuestionsPage/QuestionsPage.jsx'
import Fuse from 'fuse.js';
import Navbar from "./components/navbar/Navbar.jsx";
import ResourcesPage from "./ResourcesPage/ResourcesPage.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import accordionItems from "./accordionItems.json";
import resultItems from "../results.json";

function App() {

  const [results, setResults] = useState([]);
  const [userResult, setUserResult] = useState("");
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
  const [reviewLongitude,setReviewLongitude]=useState('-73.95238020363617')
  const [filterType,setFilterType] = useState("near");
  const [daneighborhood,setDaNeighborhood] = useState("New York City");

  function handleSetName(aname){
    setReviewName(aname);
    console.log(reviewName + " handled")
  }

const handleUserResult = () => {

}

useEffect(() => {
    // Extract relevant data from `resultItems` using map
    const extractedData = resultItems.results.map(result => ({
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

    // Set the extracted data to state using `setResults`
    setResults(extractedData);
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
      minMatchCharLength: 4,
      threshold: 0.9,
      shouldSort: true,
      includeMatches: true,
      keys: [
        {
        name: "name",
        weight: 0.2
        },
        // {
        //   name: "alias",
        //   weight: 0.02
        // },
        // {
        //   name: "zipcode",
        //   weight: 0.01
        // },
        {
          name: "about",
          weight: 0.1
        },
        {
          name: "tag",
          weight: 0.6
        },
        // {
        //   name: "neighborhood",
        //   weight: 0.1
        // },
        // {
        //   name: "Address1",
        //   weight: 0.1
        // },
        // {
        // name: "Address2",
        // weight: 0.05
        // }
    ]
  }

  // keys: [
  //   {
  //     name: 'title',
  //     weight: 0.3
  //   },
  //   {
  //     name: 'author',
  //     weight: 0.7
  //   }
  // ]
  const [zipCodes, setZipCodes] = useState([]);
  const [zip,setZip] = useState("");

const handleQuizResult = (userResult) => {
  if (userResult != "") {
     const fuse = new Fuse(results,options);
        const frs = fuse.search(userResult).map((result) => result.item);
        setFilteredResults(frs);
        console.log("filteredresults: " + filteredResults);
        setSearchTerm(userResult);
        let ban = searchTerm;
        setSummaryBanner(ban);
  }
}
const handleSearchEngine = () => {
  setFilteredResults([]);
  let inquiry = `${searchTerm}`;
      if (filterType == "near"){
        inquiry += `${zip}`
        let ban = searchTerm;
        setSummaryBanner(ban);
        setZip(zip);
        // setSearchTerm(inquiry); 
        setLocationInquiry(inquiry);
        console.log("location inquiry: " + inquiry);
        const fuse = new Fuse(results,options);
        const frs = fuse.search(ban).map((result) => result.item);
        setFilteredResults(frs);
        setSearchTerm(ban);
      }
      else if (filterType == "in"){
        setZip("");
        setDaNeighborhood(neighborhood);
        inquiry += `${daneighborhood}`;
        let ban = searchTerm;
        setSummaryBanner(ban);
        setSearchTerm(inquiry); 
        setLocationInquiry(inquiry);
      console.log("THE INQUIRY: " + inquiry);
        const fuse = new Fuse(results,options);
        const frs = fuse.search(ban).map((result) => result.item);
        setFilteredResults(frs);
        console.log("filteredresults: " + filteredResults);
        setSearchTerm(ban);
      }
      else{
        let ban = searchTerm;
        setSummaryBanner(ban);
        setSearchTerm(inquiry); 
        setLocationInquiry(inquiry);
        console.log("THE INQUIRY: " + inquiry);
        const fuse = new Fuse(results,options);
        const frs = fuse.search(ban).map((result) => result.item);
        setFilteredResults(frs);
        console.log("filteredresults: " + filteredResults);
        setSearchTerm(ban);
      }
      
    }

  console.log(results);
  return (
    <div>
      <Navbar setFilteredResults={setFilteredResults} setSummaryBanner={setSummaryBanner} setDaNeighborhood={setDaNeighborhood} setSearchTerm={setSearchTerm}/>
      <div>
        <div className="formatSearch">
            <SearchBar filterType={filterType} setFilterType={setFilterType} neighborhood={daneighborhood} setNeighborhood={setNeighborhood} handleSearchEngine={handleSearchEngine} zipCodes={zipCodes} setZipCodes={setZipCodes} zip={zip} setZip={setZip} userResult={userResult} searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredResults={filteredResults} setFilteredResults={setFilteredResults} options={options} results={results} setSummaryBanner={setSummaryBanner} setLocationInquiry={setLocationInquiry}/>
          </div>
          {}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/survey/*" element={<QuestionsPage setUserResult={setUserResult} userResult={userResult} handleQuizResult={handleQuizResult} setSearchTerm={setSearchTerm} setSummaryBanner={setSummaryBanner}/>}/>

        <Route path="/results/" element ={<Results zip={zip}daneighborhood={daneighborhood}userResult={userResult} filteredResults={filteredResults} searchTerm={searchTerm} summaryBanner={summaryBanner} results={results} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout} setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude} reviewLatitude={reviewLatitude} reviewLongitude={reviewLongitude} locationInquiry={locationInquiry}/>}/>

        <Route path="/results/:id/" element={<ResultDetails reviewName={reviewName} photoOne={photoOne} photoTwo={photoTwo} photoThree={photoThree} zipCode={zipCode} Address1={Address1} Address2={Address2} website={website} telephone={telephone} neighborhood={neighborhood} tag={tag} blurb1={blurb1} blurb2={blurb2}blurb3={blurb3} about={about} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude} reviewLatitude={reviewLatitude} reviewLongitude={reviewLongitude} />}/>

        {/* <Route path="*" element={<ResultsPage results={results} setReviewName={setReviewName} reviewName={reviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1}filteredResults={filteredResults}searchTerm={searchTerm}exact summaryBanner={summaryBanner}setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude}/>} />
         */}
        <Route path="/results/:id/" element={<ResultDetails reviewName={reviewName} photoOne={photoOne} zipCode={zipCode} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude} reviewLatitude={reviewLatitude} reviewLongitude={reviewLongitude}/>}/>
        <Route path="/resources-page" element={<ResourcesPage accordionItems={accordionItems}/>}/>
      </Routes>
    </div>

  );
}

export default App

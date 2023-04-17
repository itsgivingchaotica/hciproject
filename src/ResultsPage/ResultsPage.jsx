import React, {useState} from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { Results } from './Results/Results.jsx';
import styles from './resultsPage.module.css';
import { useParams, Routes, Route } from 'react-router-dom';
import { ResultDetails } from './Results/Result/ResultDetails/ResultDetails.jsx'
const ResultsPage = ({results,reviewName,setReviewName,handleSetName,setZipcode,setPhoto1,searchTerm,filteredResults,summaryBanner,setSummaryBanner,setReviewLatitude,setReviewLongitude,reviewLatitude,reviewLongitude}) => {
    // const [summaryBanner,setSummaryBanner] = useState("Results")
    // const [searchTerm,setSearchTerm] = useState("");
    // const [filteredResults,setFilteredResults] = useState(results);

    // if (filteredResults && filteredResults.length > 0) {
    //     console.log(filteredResults[0].alias);
    //     console.log(filteredResults);
    //   } else {
    //     console.log('No results found');
    //   }
    // console.log(reviewLatitude);
    
    return (
        <>
        <Routes>
                    {/* <Route path="/results/:id" element={<ResultDetails filteredResults={filteredResults} />} /> */}
                    <Route path="/results/*" element ={<Results filteredResults={filteredResults} searchTerm={searchTerm} summaryBanner={summaryBanner}results={results} reviewName={reviewName}setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setSummaryBanner={setSummaryBanner}setReviewLatitude={setReviewLatitude}setReviewLongitude={setReviewLongitude}reviewLatitude={reviewLatitude}reviewLongitude={reviewLongitude}/>}/>
        </Routes>
        {/* <Results results={results}/> */}
        </>
    )
}

export default ResultsPage
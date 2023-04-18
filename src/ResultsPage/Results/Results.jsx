import React, { useMemo, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./results.module.css";
import { Result } from "./Result/Result.jsx";
import { MapLoader } from "../../Map/MapLoader.jsx";
import { HashRouter, Route, Link } from 'react-router-dom';
import { ResultDetails } from "./Result/ResultDetails/ResultDetails.jsx";
import { Routes, useParams } from 'react-router-dom';
import { Banner } from './Banner.jsx'


export function Results({zip,daneighborhood,userResult,results,filteredResults,business,searchTerm,setSummaryBanner,reviewName,setReviewName,handleSetName,setZipcode,setPhoto1,setPhoto2,setPhoto3,setAddress1,setAddress2,setWebsite,setTelephone,setNeighborhood,setTag,setBlurb1,setBlurb2,setBlurb3,setAbout,reviewLatitude,reviewLongitude,setReviewLatitude,setReviewLongitude,summaryBanner,locationInquiry}){
//set the find the alias from the filteredResults that matches. then store it 
//as setAlias(new_alias);

// if (!business || !business.length){
//     return (<div>No search results...</div>)
// }
//use hook 
const { id } = useParams();
const [alias,setAlias] = useState("");
const location = {
    lat:40.6602,
    lng:-73.96895
}

// const fetchData = async (alias) => {
//     try {
//       const rawData = await api.get("businesses/",alias);
//       console.log(rawData);
//       console.log(alias);
//       const res = await rawData.json();
//       console.log(res[0]);
//       return res[0];
//     } catch (e) {
//       console.log(e);
//     }
//   };

    return (
        <div>
            <div>
                {/* <div className={styles.banner}>
                    <div className={styles.summary}>
                        <h2><strong>{summaryBanner}</strong> near Prospect Park</h2>
                        <p>Showing 10 results</p>
                    </div>
                </div> */}
                <div className={styles.mapped}>
                <div>
                <div className="adjustBanner">
          <Banner summaryBanner={summaryBanner} searchTerm={searchTerm} locationInquiry={locationInquiry} numberResults={filteredResults.length} zip={zip} daneighborhood={daneighborhood}/>
          </div>
          <br></br>
                    {filteredResults == "" ? (results.map(result => (
                        // <Link to={`/results/${result.id}`} key={result.id} className={styles.link}>
                            <Result key={result.id} result={result} setAlias={setAlias} alias={alias} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} 
                            setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout}
                            setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude}/>
                        // {/* </Link>     */}
                    ))) :(
                    filteredResults.map(result => (
                        // <Link to={`/results/${result.id}`} key={result.id} className={styles.link}>
                            <Result key={result.id} result={result} setAlias={setAlias} alias={alias} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} 
                            setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout}
                            setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude}/>
                        // {/* </Link>     */}
                    )))}
                </div>
                <div className={styles.width}><MapLoader latitude={reviewLatitude} longitude={reviewLongitude} focus={12}/></div>
                </div>
            </div>
       </div>
    )
}
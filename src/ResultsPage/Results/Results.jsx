import React, { useMemo, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./results.module.css";
import { Result } from "./Result/Result.jsx";
import { MapLoader } from "../../Map/MapLoader.jsx";
import { HashRouter, Route, Link } from 'react-router-dom';
import { ResultDetails } from "./Result/ResultDetails/ResultDetails.jsx";
import { Routes, useParams } from 'react-router-dom';


export function Results({filteredResults,business,searchTerm,setSummaryBanner,reviewName,setReviewName,handleSetName,setZipcode,setPhoto1,reviewLatitude,reviewLongitude,setReviewLatitude,setReviewLongitude}){
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
                    {filteredResults == "" ? (<div>No results Please try a new search!<br/></div>) :(
                    filteredResults.map(result => (
                        // <Link to={`/results/${result.id}`} key={result.id} className={styles.link}>
                            <Result key={result.id} result={result} setAlias={setAlias} alias={alias} reviewName={reviewName}setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setSummaryBanner={setSummaryBanner}setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude}/>
                        // {/* </Link>     */}
                    )))}
                </div>
                <div className={styles.width}><MapLoader latitude={reviewLatitude} longitude={reviewLongitude} focus={12}/></div>
                </div>
            </div>
       </div>
    )
}
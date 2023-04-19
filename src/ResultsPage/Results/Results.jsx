import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./results.module.css";
import { Result } from "./Result/Result.jsx";
import { MapLoader } from "../../Map/MapLoader.jsx";
import { Banner } from './Banner.jsx'


export function Results({zip,daneighborhood,userResult,results,filteredResults,business,searchTerm,setSummaryBanner,reviewName,setReviewName,handleSetName,setZipcode,setPhoto1,setPhoto2,setPhoto3,setAddress1,setAddress2,setWebsite,setTelephone,setNeighborhood,setTag,setBlurb1,setBlurb2,setBlurb3,setAbout,reviewLatitude,reviewLongitude,setReviewLatitude,setReviewLongitude,summaryBanner,locationInquiry}){

const { id } = useParams();
const [alias,setAlias] = useState("");

    return (
        <div>
            <div>
                <div className={styles.mapped}>
                <div>
                {filteredResults == "" ? (<div classNgime="adjustBanner">
              
          <Banner summaryBanner={summaryBanner} searchTerm={searchTerm} locationInquiry={locationInquiry} numberResults={results.length} zip={zip} daneighborhood={daneighborhood}/>
          </div>):(<div className="adjustBanner">
              
          <Banner summaryBanner={summaryBanner} searchTerm={searchTerm} locationInquiry={locationInquiry} numberResults={filteredResults.length} zip={zip} daneighborhood={daneighborhood}/>
          </div>)}  
                
          <br></br>
                    {filteredResults == "" ? (results.map(result => (
                            <Result key={result.id} result={result} setAlias={setAlias} alias={alias} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} 
                            setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout}
                            setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude}/>
                    ))) :(
                    filteredResults.map(result => (
                            <Result key={result.id} result={result} setAlias={setAlias} alias={alias} reviewName={reviewName} setReviewName={setReviewName} handleSetName={handleSetName} setZipcode={setZipcode} setPhoto1={setPhoto1} setPhoto2={setPhoto2} setPhoto3={setPhoto3} 
                            setAddress1={setAddress1} setAddress2={setAddress2} setWebsite={setWebsite} setTelephone={setTelephone} setNeighborhood={setNeighborhood} setTag={setTag} setBlurb1={setBlurb1} setBlurb2={setBlurb2} setBlurb3={setBlurb3} setAbout={setAbout}
                            setSummaryBanner={setSummaryBanner} setReviewLatitude={setReviewLatitude} setReviewLongitude={setReviewLongitude}/>
                    )))}
                </div>
                <div className={styles.width}><MapLoader latitude={reviewLatitude} longitude={reviewLongitude} focus={12}/></div>
                </div>
            </div>
       </div>
    )
}
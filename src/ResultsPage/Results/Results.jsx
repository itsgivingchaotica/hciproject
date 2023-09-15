import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./results.module.css";
import { MapLoader } from "../../components/map/MapLoader.jsx";
import { Banner } from "../../components/banner/Banner.jsx";
import Result from "../../components/result/Result";

export function Results({
  zip,
  daneighborhood,
  userResult,
  results,
  filteredResults,
  business,
  searchTerm,
  setSummaryBanner,
  reviewName,
  setReviewName,
  handleSetName,
  setZipcode,
  setPhoto1,
  setPhoto2,
  setPhoto3,
  setAltText1,
  setAltText2,
  setAltText3,
  setAddress1,
  setAddress2,
  setWebsite,
  setTelephone,
  setNeighborhood,
  setTag,
  setBlurb1,
  setBlurb2,
  setBlurb3,
  setAbout,
  reviewLatitude,
  reviewLongitude,
  setReviewLatitude,
  setReviewLongitude,
  summaryBanner,
  locationInquiry,
}) {
  const [alias, setAlias] = useState("");
  const [withTop, setWithTop] = useState(150);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setWithTop(80); // update top attribute
      } else {
        setWithTop(180); // reset top attribute
      }
    }
    window.addEventListener("scroll", handleScroll); // add event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // remove event listener
    };
  }, []);

  return (
    <div>
      <div>
        <div className={styles.mapped}>
          <div>
            {filteredResults == "" ? (
              <div className="adjustBanner">
                <Banner
                  summaryBanner={summaryBanner}
                  searchTerm={searchTerm}
                  locationInquiry={locationInquiry}
                  numberResults={results.length}
                  zip={zip}
                  daneighborhood={daneighborhood}
                />
              </div>
            ) : (
              <div className="adjustBanner">
                <Banner
                  summaryBanner={summaryBanner}
                  searchTerm={searchTerm}
                  locationInquiry={locationInquiry}
                  numberResults={filteredResults.length}
                  zip={zip}
                  daneighborhood={daneighborhood}
                />
              </div>
            )}

            <br></br>
            {filteredResults == ""
              ? results.map((result) => (
                  <Result
                    className={styles.place}
                    key={result.id}
                    result={result}
                    setAlias={setAlias}
                    alias={alias}
                    reviewName={reviewName}
                    setReviewName={setReviewName}
                    handleSetName={handleSetName}
                    setZipcode={setZipcode}
                    setPhoto1={setPhoto1}
                    setPhoto2={setPhoto2}
                    setPhoto3={setPhoto3}
                    setAltText1={setAltText1}
                    setAltText2={setAltText2}
                    setAltText3={setAltText3}
                    setAddress1={setAddress1}
                    setAddress2={setAddress2}
                    setWebsite={setWebsite}
                    setTelephone={setTelephone}
                    setNeighborhood={setNeighborhood}
                    setTag={setTag}
                    setBlurb1={setBlurb1}
                    setBlurb2={setBlurb2}
                    setBlurb3={setBlurb3}
                    setAbout={setAbout}
                    setSummaryBanner={setSummaryBanner}
                    setReviewLatitude={setReviewLatitude}
                    setReviewLongitude={setReviewLongitude}
                  />
                ))
              : filteredResults.map((result) => (
                  <Result
                    className={styles.place}
                    key={result.id}
                    result={result}
                    setAlias={setAlias}
                    alias={alias}
                    reviewName={reviewName}
                    setReviewName={setReviewName}
                    handleSetName={handleSetName}
                    setZipcode={setZipcode}
                    setPhoto1={setPhoto1}
                    setPhoto2={setPhoto2}
                    setPhoto3={setPhoto3}
                    setAltText1={setAltText1}
                    setAltText2={setAltText2}
                    setAltText3={setAltText3}
                    setAddress1={setAddress1}
                    setAddress2={setAddress2}
                    setWebsite={setWebsite}
                    setTelephone={setTelephone}
                    setNeighborhood={setNeighborhood}
                    setTag={setTag}
                    setBlurb1={setBlurb1}
                    setBlurb2={setBlurb2}
                    setBlurb3={setBlurb3}
                    setAbout={setAbout}
                    setSummaryBanner={setSummaryBanner}
                    setReviewLatitude={setReviewLatitude}
                    setReviewLongitude={setReviewLongitude}
                  />
                ))}
          </div>
          <div className={styles.width} style={{ top: `${withTop}px` }}>
            <MapLoader
              latitude={reviewLatitude}
              longitude={reviewLongitude}
              focus={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

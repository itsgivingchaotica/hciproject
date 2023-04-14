import React, { useMemo } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./results.module.css";
import { Result } from "./Result/Result.jsx";
import { MapLoader } from "../../Map/MapLoader.jsx";
import { HashRouter, Route, Link } from 'react-router-dom';
import { ResultDetails } from "./Result/ResultDetails.jsx";
import { Routes, useParams } from 'react-router-dom';

export function Results({filteredResults, options}){
//use hook 
const { id } = useParams();

const location = {
    lat:40.6602,
    lng:-73.96895
}

    return (
        <div>
            <div>
                <div className={styles.banner}>
                    <div className={styles.summary}>
                        <h2><strong>parks</strong> near Prospect Park</h2>
                        <p>Showing 10 results</p>
                    </div>
                </div>
                <div className={styles.mapped}>
                <div>
                   {/* replace results with searchResults */}
                    {filteredResults && filteredResults.map(result => (
                        <Link to={`/results/${result.id}`} key={result.id} className={styles.link}>
                            <Result result={result}/>
                        </Link>    
                    ))}
                    <Routes>
                    <Route path="/results/:id" element={<ResultDetails filteredresults={filteredResults} />} />
                    </Routes>
                </div>
                <div><MapLoader latitude={location.lat} longitude={location.lng}/></div>
                </div>
            </div>
       </div>
    )
}
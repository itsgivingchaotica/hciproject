import React, {useState} from 'react';
import Fuse from 'fuse.js';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { Results } from './Results/Results.jsx';
import styles from './resultsPage.module.css';
import { useParams, Routes, Route } from 'react-router-dom';
import { ResultDetails } from './Results/Result/ResultDetails.jsx'

const ResultsPage = ({results}) => {
    const [searchTerm,setSearchTerm] = useState("Prospect Park");
    const [filteredResults,setFilteredResults] = useState([]);
    const options = {
        minMatchCharLength: 3,
        keys: [
          "id",
          "name",
          "alias",
          "latitude",
          "longitude",
          "zipcode",
        ]
    }
    
    return (
        <>
        <div className={styles.searchBar}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredResults={filteredResults}setFilteredResults={setFilteredResults} options={options} results={results}/>
           
        </div>
        <Routes>
                    <Route path="/results/:id" element={<ResultDetails filteredResults={filteredResults} />} />
                    <Route path="/results" element ={<Results filteredResults={filteredResults}/>}/>
        </Routes>
        {/* <Results results={results}/> */}
        </>
    )
}

export default ResultsPage
import React from 'react';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { Results } from './Results/Results.jsx';
import styles from './resultsPage.module.css';

const ResultsPage = () => {
    return (
        <>
        <div className={styles.searchBar}>
            <SearchBar/>
           
        </div>
        <Results/>
        </>
    )
}

export default ResultsPage
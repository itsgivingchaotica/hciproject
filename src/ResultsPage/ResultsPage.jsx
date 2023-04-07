import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import styles from './resultsPage.module.css';

const ResultsPage = () => {
    return (
        <div className={styles.searchBar}>
            <SearchBar/>
        </div>
    )
}

export default ResultsPage
import React, { useEffect, useState } from 'react';
import ResultsPage from './ResultsPage/ResultsPage.jsx';
import {ResultDetails } from "./ResultsPage/Results/Result/ResultDetails.jsx"
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

function App() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/results.json')
      .then(response => response.json())
      .then(data => {
        const extractedData = data.results.map(result => ({
          id: result.id,
          name: result.name,
          alias: result.alias,
          latitude: result.latitude,
          longitude: result.longitude
        }));
        setResults(extractedData);
      });
  }, []);


  return (
    <div className="goodnight">
      <Routes>
        <Route path="*" element={<ResultsPage results={results} exact/>} />
      </Routes>
    </div>
    
  );
}

export default App

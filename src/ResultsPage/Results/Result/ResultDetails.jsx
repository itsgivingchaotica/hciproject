import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './result.module.css';
import { Banner } from "../../Results/Banner.jsx"

export function ResultDetails({results}){
  const { id } = useParams();

  const result = results.find(r => r.id === parseInt(id));

  return (
    
    <div>
    <Banner/>
      <h2>{result.name} hello</h2>
      <p>{result.alias}</p>
    </div>
  );
}
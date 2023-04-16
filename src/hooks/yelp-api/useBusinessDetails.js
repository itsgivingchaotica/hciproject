import { useState, useEffect } from 'react';
import * as api from './api.js';

export function useBusinessDetails(alias){
    const [business,setBusiness] = useState([]);
    const [searchParams, setSearchParams] = useState(alias);

    useEffect(() => {
        setBusiness([]);
        const fetchData = async () => {
            try{
                const rawData = await api.get(`/businesses/${searchParams}`);
                const res = await rawData.json();
                setBusiness(res);
                console.log(res + " is the response")
                console.log(business);
            } catch(e){
                console.log(e);
            }
        };
        fetchData();
    },[searchParams]);
    return [business,searchParams,setSearchParams];

} 
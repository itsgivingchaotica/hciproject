import {API_BASE_URL, BEARER_TOKEN} from "./config.js";
import queryString from 'query-string';

export function get(path,queryParams){
    const token = "U9Ec12hTzd4KCyqB7tGUyPOpHgwUTaGPZ416sSR2Dp-DQI1emadbiaq_C8i1D3I5zL1YT4LfSS4YUtYtsb5PuV5wFpgejwjK40YvLpPROM404IOPCKwBSpFhkvAyZHYx";
    console.log(token);
    console.log(queryParams)
    //const rawData = await api.get(`/businesses/${alias}`);
    return fetch(`${API_BASE_URL}${path}${queryParams}`,{
        headers: {
            Authorization: `Bearer ${token}`,
            Origin:'localhost',
            withCredentials: true,
        }
    });
}
import { data } from "autoprefixer";

const API_KEY = '44e61520f66dcd2cc376f4faad0a45f0';
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:
    API_KEY});
    
    return fetch(url)
    .then((res) => res.json())
};



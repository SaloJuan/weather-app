import "./styles.css";

import {getCityKey} from "./apiCalls.js";

//today fcast
const buscarCiudad = document.querySelector('.city-form');
const buscarCiudadBarra = document.querySelector('.city-search-bar');

let cityName = document.querySelector('.city-name');
let cityTemperature = document.querySelector('.city-temperature');
let skyStatusDay = document.querySelector('.city-day-sky');
let skyStatusNight = document.querySelector('.city-night-sky');

let cityTemperatureMin = document.querySelector('.min-temperature-elemp');
let cityTemperatureMax = document.querySelector('.max-temperature-elemp');

//5 day fcast

let efDays = document.querySelectorAll('.extended-fcast-day');
let efSkyDay = document.querySelectorAll('.extended-sky-day');
let efSkyNight = document.querySelectorAll('.extended-sky-night');
let efMinTemp = document.querySelectorAll('.extended-min-temp');
let efMaxTemp = document.querySelectorAll('.extended-max-temp');



buscarCiudad.addEventListener('submit', (ev) =>{

    ev.preventDefault();
    
    let cityInputName = buscarCiudadBarra.value;
    //llamada a la fn que consulta las api con ciudadBuscada. Esa fn luego llamara al forecast api y de ahi se renderiza en html

    getCityKey(cityInputName)        
        //.then() que llame otra fn que ordene los datos, los mismos están en infociudad;  
    
})


export {cityName, cityTemperature, skyStatusDay, skyStatusNight, cityTemperatureMax, cityTemperatureMin,
efDays,efSkyDay, efSkyNight, efMinTemp, efMaxTemp};






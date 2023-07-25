import "./styles.css";

import {getCityKey} from "./apiCalls.js";
import personalApiKey from "./apiCalls";
import selectedCityData from "./apiCalls";


//weather API hay que hacerle un get al location API para la key y eso meterlo en una variable para luego usarlo en el forecast API api buenos aires argentina > "7894"


// let form buscador

let ciudadBuscada;
let informacionCiudad;

const buscarCiudad = document.querySelector('.city-form');
const buscarCiudadBarra = document.querySelector('.city-search-bar');  


buscarCiudad.addEventListener('submit', (ev) =>{

    ev.preventDefault();
    
    let searchInput = buscarCiudadBarra.value;

    ciudadBuscada = searchInput;
   
    getCityKey(ciudadBuscada)        
        //.then() que llame otra fn que ordene los datos, los mismos están en infociudad;


    
    
})


//llamada a la fn que consulta las api con ciudadBuscada







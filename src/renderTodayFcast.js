import {selectedCityName} from "./apiCalls.js";
import "./index.js";


let cityName = document.querySelector('.city-name');
let cityTemperature = document.querySelector('.city-temperature');
let cityTemperatureMin = document.querySelector('.min-temperature-elemp');
let cityTemperatureMax = document.querySelector('.max-temperature-elemp');






let ciudadNombre;
let ciudadCieloDia, ciudadCieloNoche;
let ciudadPrecipDia, ciudadPrecipNoche;
let ciudadMinTemp, ciudadMaxTemp;

async function renderTodayFcast (parsedResponse){    

    ciudadMinTemp = parsedResponse.DailyForecasts[0].Temperature.Minimum.Value;
    ciudadMaxTemp = parsedResponse.DailyForecasts[0].Temperature.Maximum.Value;

    ciudadCieloDia = parsedResponse.DailyForecasts[0].Day.IconPhrase;
    ciudadCieloNoche = parsedResponse.DailyForecasts[0].Night.IconPhrase;

    ciudadPrecipDia = parsedResponse.DailyForecasts[0].Day.HasPrecipitation;
    ciudadPrecipNoche = parsedResponse.DailyForecasts[0].Night.HasPrecipitation;

    //console.log(parsedResponse);
                                    //obtenida del import
    console.log(`Para la ciudad ${selectedCityName} el clima es --->>> Temp. Minima: ${ciudadMinTemp}, Temp. Maxima: ${ciudadMaxTemp}, cielo de dia: ${ciudadCieloDia}, cielo de noche: ${ciudadCieloNoche}, Dia lluvia?=${ciudadPrecipDia}, Noche lluvia?=${ciudadPrecipNoche}`)


    cityTemperature.textContent = ciudadMaxTemp-2;


    cityTemperatureMin.textContent = "Temperatura minima: " + ciudadMinTemp;
    cityTemperatureMax.textContent = "Temperatura Maxima: " + ciudadMaxTemp;





    

    
}


export {renderTodayFcast}
export {ciudadNombre, ciudadCieloDia, ciudadCieloNoche, ciudadMinTemp, ciudadMaxTemp, ciudadPrecipDia, ciudadPrecipNoche};

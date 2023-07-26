import {selectedCityName} from "./apiCalls.js";
import {renderFiveDayFcast} from "./renderFiveDayFcast.js";
import {cityName, cityTemperature, skyStatusDay, skyStatusNight, cityTemperatureMax, cityTemperatureMin} from "./index.js";

let ciudadNombre;
let ciudadCieloDia, ciudadCieloNoche;
let ciudadPrecipDia, ciudadPrecipNoche;
let ciudadMinTemp, ciudadMaxTemp;

function renderTodayFcast (parsedResponse){      
    
    //capturando cada dato del json una variable
    ciudadMinTemp = parsedResponse.DailyForecasts[0].Temperature.Minimum.Value;
    ciudadMaxTemp = parsedResponse.DailyForecasts[0].Temperature.Maximum.Value;

    ciudadCieloDia = parsedResponse.DailyForecasts[0].Day.IconPhrase;
    ciudadCieloNoche = parsedResponse.DailyForecasts[0].Night.IconPhrase;

    ciudadPrecipDia = parsedResponse.DailyForecasts[0].Day.HasPrecipitation;
    ciudadPrecipNoche = parsedResponse.DailyForecasts[0].Night.HasPrecipitation; 

    //agregando los datos a los elementos html del actual forecast
    cityName.textContent = selectedCityName;

    cityTemperature.textContent =  `La temperatura actual es: ${Math.round(ciudadMaxTemp-2)}`;
    
    
    skyStatusDay.textContent = "Clima durante el día: " + ciudadCieloDia;
    skyStatusNight.textContent = "Clima durante la noche: " + ciudadCieloNoche;

    //agregando los datos a los elementos html del forecast a lo largo del dia

    cityTemperatureMin.textContent = "Temperatura mínima: " + ciudadMinTemp;
    cityTemperatureMax.textContent = "Temperatura máxima: " + ciudadMaxTemp;      
    
}


export {renderTodayFcast}
//export {ciudadNombre, ciudadCieloDia, ciudadCieloNoche, ciudadMinTemp, ciudadMaxTemp, ciudadPrecipDia, ciudadPrecipNoche};

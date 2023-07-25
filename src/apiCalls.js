import "./index.js";
import {renderTodayFcast} from "./renderTodayFcast.js";

let selectedCityData; 
let selectedCityName;
const personalApiKey = "LM3AuSR7bMoTFCDD9KE8ov0khihyXrUZ";   

                                //llamada a la fn con la apiKey y la ciudad a buscar
async function getCityKey(city){

    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${personalApiKey}&q=${city}`,{mode:"cors"})
    
    let parsedResponseKey = await response.json();
   
    let cityLocationKey = parsedResponseKey[0].Key    


        //con esta variable tengo el nombre de la ciudad, que se exporta y se usa en renderTodayFcast. No tiene otra funcion esto. Y esto es así porque en este punto, se tiene la info de la ciudad (locationKey, nombre, pais, etc). En el paso siguiente ya se trabaja sobre la informacion del fcast con la locationkey obtenida acá. sí, re larga la expliacción para algo que solo yo voy a leer y que probablemente no me vuelva a generar dudas, por lo que todo este comentario es al p2. Por qué sigo escribiendo? no sé.
    selectedCityName = parsedResponseKey[0].AdministrativeArea.EnglishName;

   

    getForecast(cityLocationKey)

    //return ?

}


async function getForecast(locationKey){

    //esta va a consultar la forecastAPI
    let response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${personalApiKey}&metric=true`);

    //acá ya tengo el json del forecast para la ciudad elegida. Hay que recorrerlo y recavar cada dato solicitado (temperatura, clima, etc)
    let parsedResponse = await response.json();    

    renderTodayFcast(parsedResponse);
}





export {selectedCityName};
export {getCityKey};
export {getForecast};
export {personalApiKey};
export {selectedCityData};

 
/*
{
    "Headline": {
        "EffectiveDate": "2023-07-24T20:00:00+01:00",
        "EffectiveEpochDate": 1690225200,
        "Severity": 5,
        "Text": "Expect showers Monday evening",
        "Category": "rain",
        "EndDate": "2023-07-25T02:00:00+01:00",
        "EndEpochDate": 1690246800,
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-07-24T07:00:00+01:00",
            "EpochDate": 1690178400,
            "Temperature": {
                "Minimum": {
                    "Value": 11.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 17.2,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 39,
                "IconPhrase": "Partly cloudy w/ showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us"
        }
    ]
}*/
// DailyForecasts[0].Temperature[0].Minimum.Value;

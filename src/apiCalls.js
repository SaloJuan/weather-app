import "./index.js";
import {renderFiveDayFcast} from "./renderFiveDayFcast.js";
import {renderTodayFcast} from "./renderTodayFcast.js";

let selectedCityName;
const personalApiKey = "LM3AuSR7bMoTFCDD9KE8ov0khihyXrUZ";   

          //llamada a la fn con la apiKey y la ciudad a buscar
async function getCityKey(cityName){

    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${personalApiKey}&q=${cityName}`,{mode:"cors"})
    
    let parsedResponseKey = await response.json();
   
    let cityLocationKey = parsedResponseKey[0].Key    


        //con esta variable tengo el nombre de la ciudad, que se exporta y se usa en renderTodayFcast. No tiene otra funcion esto. Y esto es así porque en este punto, se tiene la info de la ciudad (locationKey, nombre, pais, etc). En el paso siguiente ya se trabaja sobre la informacion del fcast con la locationkey obtenida acá. sí, re larga la expliacción para algo que solo yo voy a leer y que probablemente no me vuelva a generar dudas, por lo que todo este comentario es al p2. Por qué sigo escribiendo? no sé.
    selectedCityName = parsedResponseKey[0].AdministrativeArea.EnglishName;   

    getForecast(cityLocationKey)
    

}


async function getForecast(cityLocationKey){

    //esta va a consultar la forecastAPI 
    //response1 contiene el forecast del DIA de la locacion elegida
    let response1 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityLocationKey}?apikey=${personalApiKey}&metric=true`);

    //acá ya tengo el json del forecast para la ciudad elegida. Hay que recorrerlo y recavar cada dato solicitado (temperatura, clima, etc)
    let parsedResponse1 = await response1.json();   

    //response2 trae el forecast para 5 dias
    let response2 = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityLocationKey}?apikey=${personalApiKey}&metric=true`);

    let parsedResponse2 = await response2.json();

    console.log("parsed2");
    console.log(parsedResponse2);


    renderTodayFcast(parsedResponse1);
    renderFiveDayFcast(parsedResponse2);
}





export {selectedCityName};
export {getCityKey};
export {getForecast};
export {personalApiKey};

 
/*

{
    "Headline": {
        "EffectiveDate": "2023-07-26T19:00:00-03:00",
        "EffectiveEpochDate": 1690408800,
        "Severity": 7,
        "Text": "Cool tonight",
        "Category": "cold",
        "EndDate": "2023-07-27T07:00:00-03:00",
        "EndEpochDate": 1690452000,
        "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2023-07-26T07:00:00-03:00",
            "EpochDate": 1690365600,
            "Temperature": {
                "Minimum": {
                    "Value": 6.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 16.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 14,
                "IconPhrase": "Partly sunny w/ showers",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2023-07-27T07:00:00-03:00",
            "EpochDate": 1690452000,
            "Temperature": {
                "Minimum": {
                    "Value": 8.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 12,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 6,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2023-07-28T07:00:00-03:00",
            "EpochDate": 1690538400,
            "Temperature": {
                "Minimum": {
                    "Value": 9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 13.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2023-07-29T07:00:00-03:00",
            "EpochDate": 1690624800,
            "Temperature": {
                "Minimum": {
                    "Value": 11,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 15.9,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2023-07-30T07:00:00-03:00",
            "EpochDate": 1690711200,
            "Temperature": {
                "Minimum": {
                    "Value": 12.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 17.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 4,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=5&unit=c&lang=en-us"
        }
    ]
}




*/

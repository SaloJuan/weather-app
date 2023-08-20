import {efDays, efSkyDay, efSkyNight, efMinTemp, efMaxTemp} from "./index.js";

let sunnyDays = [1,2,3,4,5,6,30,31];
let rainyyDays = [12,13,14,15,16,17,18,19,25,26,29,39,40,41,42,43,44];
let cloudyDays = [7,8,11,32,34,35,36,38];

let fiveForecasts;

function renderFiveDayFcast(parsedResponse){

    console.log(parsedResponse);

    fiveForecasts = Array.from(parsedResponse.DailyForecasts);  

            //val es cada div con sus 4 children

    let counter = 0;
    
    for (let day of efDays){
            //array de los hijos de DAY, es decir un array de 4 elementos
        let elemArr = Array.from(day.children);

        elemArr[0].textContent = parsedResponse.DailyForecasts[counter].Date[8] + parsedResponse.DailyForecasts[counter].Date[9];

        //aca meter algun if y fn que valide el icon comun, poara saber el numerito y de ahi meter un emoji o fotito de acuerdo al clima
        elemArr[1].textContent = parsedResponse.DailyForecasts[counter].Day.IconPhrase;

        elemArr[2].textContent = parsedResponse.DailyForecasts[counter].Temperature.Minimum.Value;

        elemArr[3].textContent = parsedResponse.DailyForecasts[counter].Temperature.Maximum.Value;

        counter++;        
    }

    
    
    
    
    
}



/*
for (let info of fiveForecasts){

        let counter = 1;

        let diaNum = info.Date;

        let weather = info.Day.IconPhrase;

        let minTemp = info.Temperature.Minimum.Value;

        let maxTemp = info.Temperature.Maximum.Value;


        console.log(`informacion del dia ${diaNum}: weather> ${weather}, Mintemp>${minTemp}, Maxtemp>${maxTemp}`);


        efDays.forEach((elem) =>{


            elem.children.forEach()

            
            
            

        })
        
        
        
        
    }

*/




export {renderFiveDayFcast};
export {fiveForecasts};
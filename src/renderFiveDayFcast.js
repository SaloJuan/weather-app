import {efDays, efSkyDay, efSkyNight, efMinTemp, efMaxTemp} from "./index.js";

function renderFiveDayFcast(parsedResponse){    
    //se arma un array del json para mas comodidad e iterabilidad
    

    let fiveForecasts = Array.from(parsedResponse.DailyForecasts);
    console.log(fiveForecasts);



    for (let i=0; i<fiveForecasts.length; i++){

        //calculateFiveDaysFcast();
        efDays[i].textContent = "clima para el día: " + fiveForecasts[i].Date[8] + fiveForecasts[i].Date[9]; 
               

        efSkyDay[i].textContent = "Clima en el dia: " + fiveForecasts[i].Day.IconPhrase;
        efSkyNight[i].textContent = "Clima en la noche: " + fiveForecasts[i].Night.IconPhrase;

        efMinTemp[i].textContent = "Minima: " + fiveForecasts[i].Temperature.Minimum.Value; 
        efMaxTemp[i].textContent = "Maxima: " + fiveForecasts[i].Temperature.Maximum.Value;     
        
        


    
    }  

    
}


function calculateFiveDaysFcast(i){

}


export {renderFiveDayFcast};
    //const queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&id=524901&APPID=6b4526dddac9fb5dfc5b7c699ccebe2d";
    
$(document).ready(function(){
    const queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=07109,us&id=524901&APPID=6b4526dddac9fb5dfc5b7c699ccebe2d";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            console.log(response);
            console.log(JSON.stringify(response.weather));
            console.log(response.weather[0].description);
            $("#weatherApi").text(response.weather[0].description);
       });	
})

    //const queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&id=524901&APPID=6b4526dddac9fb5dfc5b7c699ccebe2d";

    $(document).ready(function() {
        const queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=07109,us&id=524901&APPID=6b4526dddac9fb5dfc5b7c699ccebe2d";
        const timeURL = "http://api.timezonedb.com/v2/get-time-zone?key=1GSEP2W1V3KQ&format=json&by=zone&zone=America/Chicago"        
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
        $.ajax({
                url: timeURL,
                method: "GET"
            })
            .done(function(response) {
                console.log(response);
                console.log(response.formatted);
                $("#timeApi").text(response.formatted);
            });
    })
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca70a5eeebmsh9e6ef3b358f328cp1dfc5cjsn1dfd5eaeb623',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const getWeather3 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather3()

const getWeather4 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather4()

const getWeather5 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise5.innerHTML = response.sunrise
            sunset5.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather5()

const getWeather6 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise6.innerHTML = response.sunrise
            sunset6.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather6()

const getWeather7 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise7.innerHTML = response.sunrise
            sunset7.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather7()

const getWeather8 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct8.innerHTML = response.cloud_pct
            temp8.innerHTML = response.temp
            feels_like8.innerHTML = response.feels_like
            humidity8.innerHTML = response.humidity
            min_temp8.innerHTML = response.min_temp
            max_temp8.innerHTML = response.max_temp
            wind_speed8.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise8.innerHTML = response.sunrise
            sunset8.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather8()

const getWeather9 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct9.innerHTML = response.cloud_pct
            temp9.innerHTML = response.temp
            feels_like9.innerHTML = response.feels_like
            humidity9.innerHTML = response.humidity
            min_temp9.innerHTML = response.min_temp
            max_temp9.innerHTML = response.max_temp
            wind_speed9.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise9.innerHTML = response.sunrise
            sunset9.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather9()

const getWeather10 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Singapore',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct10.innerHTML = response.cloud_pct
            temp10.innerHTML = response.temp
            feels_like10.innerHTML = response.feels_like
            humidity10.innerHTML = response.humidity
            min_temp10.innerHTML = response.min_temp
            max_temp10.innerHTML = response.max_temp
            wind_speed10.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise10.innerHTML = response.sunrise
            sunset10.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather10()

const getWeather11 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct11.innerHTML = response.cloud_pct
            temp11.innerHTML = response.temp
            feels_like11.innerHTML = response.feels_like
            humidity11.innerHTML = response.humidity
            min_temp11.innerHTML = response.min_temp
            max_temp11.innerHTML = response.max_temp
            wind_speed11.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise11.innerHTML = response.sunrise
            sunset11.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather11()

const getWeather12 = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing',options)
        .then(response => response.json())
        .then(response => {   
            console.log(response)
            cloud_pct12.innerHTML = response.cloud_pct
            temp12.innerHTML = response.temp
            feels_like12.innerHTML = response.feels_like
            humidity12.innerHTML = response.humidity
            min_temp12.innerHTML = response.min_temp
            max_temp12.innerHTML = response.max_temp
            wind_speed12.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            sunrise12.innerHTML = response.sunrise
            sunset12.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

getWeather12()
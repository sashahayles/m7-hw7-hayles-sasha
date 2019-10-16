//var primHeader = document.getElementById ('welcome');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var apiResult = JSON.parse(this.responseText);

    //Code Dealing With The API Data Goes Here
    var userCity = document.createTextNode(apiResult.name);
    var userWeather =document.createTextNode(apiResult.weather[0].description);

    var weatherCity = document.getElementById('welcome');
    var weatherTemp =document.getElementById('current-weather');

     weatherCity.appendChild(userCity);
     weatherTemp.appendChild(userWeather);







  //  console.log (apiResult);
  //  console.log (apiResult.name);
  //  console.log (apiResult.weather);

  }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33578,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();

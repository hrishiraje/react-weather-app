var gatherWeather = (key, city, callback) => {
  $.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
    appid: key,
    q: `${city},us`
  })
  .done((data) => {
    if(callback){
      callback(data);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.gatherWeather = gatherWeather;
var gatherWeather = (city, callback) => {
  $.get('https://api.openweathermap.org/data/2.5/forecast/daily', {
    appid: 'd59578edc6395145e5a089c521629d80',
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
var TodaysWeather = ({today}) => {

  //today = farenheit(today.list[0].temp.day);

  var farenheit = function(K){
    var f = (K-273.15)*1.8000 + 32;
    return Math.round(f);
  };

  return(
    <div>
      <h2>{today.city.name}</h2>
      <div id="todaysWeather">
        <h3>Today</h3>
        <img src={`https://openweathermap.org/img/w/${today.list[0].weather[0].icon}.png`} />
        <div className='mainTemp'>{farenheit(today.list[0].temp.day)}&deg;</div>
        <div className='minTemp'><span className='orange'>Min:</span> {farenheit(today.list[0].temp.min)}&deg;</div>
        <div className='maxTemp'><span className='orange'>Max:</span> {farenheit(today.list[0].temp.max)}&deg;</div>
      </div>
    </div>
  )
};

window.TodaysWeather = TodaysWeather;
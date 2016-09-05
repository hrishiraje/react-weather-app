var WeekdayWeather = ({day}) => {

  var farenheit = (K) => {
    let f = (K-273.15)*1.8000 + 32;
    return Math.round(f);
  };

  var getDay = (d) => {
    let day = new Date(d * 1000);
    let numDay = day.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[numDay];
  }

  return(
    <li>
      <h4>{getDay(day.dt)}</h4>
      <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} />
      <div className='mainTemp'>{farenheit(day.temp.day)}&deg;</div>
    </li>
  );
};

window.WeekdayWeather = WeekdayWeather;
var WeeksWeather = ({week}) => {

  return (
    <ul id='weeksWeather' className='clearfix'>
      {week.map((day) =>
        <WeekdayWeather day={day} />
      )}
    </ul>
  );
};

window.WeeksWeather = WeeksWeather;
var Search = (props) => {
  var val;

  var handleClick = () => {
    props.getWeather(val);
  }

  var getVal = (e) => {
    val = e.target.value;
  }


  return(
    <div id='search' className='clearfix'>
      <input type='text' placeholder='Type city name here...' onChange={getVal}/>
      <input type='submit' value='Go' onClick={handleClick} />
    </div>
  )
}

window.Search = Search;
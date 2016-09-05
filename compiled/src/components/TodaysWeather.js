'use strict';

var TodaysWeather = function TodaysWeather(_ref) {
  var today = _ref.today;


  //today = farenheit(today.list[0].temp.day);

  var farenheit = function farenheit(K) {
    var f = (K - 273.15) * 1.8000 + 32;
    return Math.round(f);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h2',
      null,
      today.city.name
    ),
    React.createElement(
      'div',
      { id: 'todaysWeather' },
      React.createElement(
        'h3',
        null,
        'Today'
      ),
      React.createElement('img', { src: 'http://openweathermap.org/img/w/' + today.list[0].weather[0].icon + '.png' }),
      React.createElement(
        'div',
        { className: 'mainTemp' },
        farenheit(today.list[0].temp.day),
        '°'
      ),
      React.createElement(
        'div',
        { className: 'minTemp' },
        React.createElement(
          'span',
          { className: 'orange' },
          'Min:'
        ),
        ' ',
        farenheit(today.list[0].temp.min),
        '°'
      ),
      React.createElement(
        'div',
        { className: 'maxTemp' },
        React.createElement(
          'span',
          { className: 'orange' },
          'Max:'
        ),
        ' ',
        farenheit(today.list[0].temp.max),
        '°'
      )
    )
  );
};

window.TodaysWeather = TodaysWeather;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvZGF5c1dlYXRoZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsT0FBYTtBQUFBLE1BQVgsS0FBVyxRQUFYLEtBQVc7OztBQUUvQjs7QUFFQSxNQUFJLFlBQVksU0FBWixTQUFZLENBQVMsQ0FBVCxFQUFXO0FBQ3pCLFFBQUksSUFBSSxDQUFDLElBQUUsTUFBSCxJQUFXLE1BQVgsR0FBb0IsRUFBNUI7QUFDQSxXQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSyxZQUFNLElBQU4sQ0FBVztBQUFoQixLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssSUFBRyxlQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsbUNBQUssMENBQXdDLE1BQU0sSUFBTixDQUFXLENBQVgsRUFBYyxPQUFkLENBQXNCLENBQXRCLEVBQXlCLElBQWpFLFNBQUwsR0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUEyQixrQkFBVSxNQUFNLElBQU4sQ0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixHQUE3QixDQUEzQjtBQUFBO0FBQUEsT0FIRjtBQUlFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUF5QjtBQUFBO0FBQUEsWUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxTQUF6QjtBQUFBO0FBQStELGtCQUFVLE1BQU0sSUFBTixDQUFXLENBQVgsRUFBYyxJQUFkLENBQW1CLEdBQTdCLENBQS9EO0FBQUE7QUFBQSxPQUpGO0FBS0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQXlCO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFNBQXpCO0FBQUE7QUFBK0Qsa0JBQVUsTUFBTSxJQUFOLENBQVcsQ0FBWCxFQUFjLElBQWQsQ0FBbUIsR0FBN0IsQ0FBL0Q7QUFBQTtBQUFBO0FBTEY7QUFGRixHQURGO0FBWUQsQ0FyQkQ7O0FBdUJBLE9BQU8sYUFBUCxHQUF1QixhQUF2QiIsImZpbGUiOiJUb2RheXNXZWF0aGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvZGF5c1dlYXRoZXIgPSAoe3RvZGF5fSkgPT4ge1xuXG4gIC8vdG9kYXkgPSBmYXJlbmhlaXQodG9kYXkubGlzdFswXS50ZW1wLmRheSk7XG5cbiAgdmFyIGZhcmVuaGVpdCA9IGZ1bmN0aW9uKEspe1xuICAgIHZhciBmID0gKEstMjczLjE1KSoxLjgwMDAgKyAzMjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmKTtcbiAgfTtcblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIDxoMj57dG9kYXkuY2l0eS5uYW1lfTwvaDI+XG4gICAgICA8ZGl2IGlkPVwidG9kYXlzV2VhdGhlclwiPlxuICAgICAgICA8aDM+VG9kYXk8L2gzPlxuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHt0b2RheS5saXN0WzBdLndlYXRoZXJbMF0uaWNvbn0ucG5nYH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5UZW1wJz57ZmFyZW5oZWl0KHRvZGF5Lmxpc3RbMF0udGVtcC5kYXkpfSZkZWc7PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW5UZW1wJz48c3BhbiBjbGFzc05hbWU9J29yYW5nZSc+TWluOjwvc3Bhbj4ge2ZhcmVuaGVpdCh0b2RheS5saXN0WzBdLnRlbXAubWluKX0mZGVnOzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4VGVtcCc+PHNwYW4gY2xhc3NOYW1lPSdvcmFuZ2UnPk1heDo8L3NwYW4+IHtmYXJlbmhlaXQodG9kYXkubGlzdFswXS50ZW1wLm1heCl9JmRlZzs8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG53aW5kb3cuVG9kYXlzV2VhdGhlciA9IFRvZGF5c1dlYXRoZXI7Il19
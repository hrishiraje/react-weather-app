'use strict';

var WeeksWeather = function WeeksWeather(_ref) {
  var week = _ref.week;


  return React.createElement(
    'ul',
    { id: 'weeksWeather', className: 'clearfix' },
    week.map(function (day) {
      return React.createElement(WeekdayWeather, { day: day });
    })
  );
};

window.WeeksWeather = WeeksWeather;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dlZWtzV2VhdGhlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsU0FBZixZQUFlLE9BQVk7QUFBQSxNQUFWLElBQVUsUUFBVixJQUFVOzs7QUFFN0IsU0FDRTtBQUFBO0FBQUEsTUFBSSxJQUFHLGNBQVAsRUFBc0IsV0FBVSxVQUFoQztBQUNHLFNBQUssR0FBTCxDQUFTLFVBQUMsR0FBRDtBQUFBLGFBQ1Isb0JBQUMsY0FBRCxJQUFnQixLQUFLLEdBQXJCLEdBRFE7QUFBQSxLQUFUO0FBREgsR0FERjtBQU9ELENBVEQ7O0FBV0EsT0FBTyxZQUFQLEdBQXNCLFlBQXRCIiwiZmlsZSI6IldlZWtzV2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBXZWVrc1dlYXRoZXIgPSAoe3dlZWt9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgaWQ9J3dlZWtzV2VhdGhlcicgY2xhc3NOYW1lPSdjbGVhcmZpeCc+XG4gICAgICB7d2Vlay5tYXAoKGRheSkgPT5cbiAgICAgICAgPFdlZWtkYXlXZWF0aGVyIGRheT17ZGF5fSAvPlxuICAgICAgKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxud2luZG93LldlZWtzV2VhdGhlciA9IFdlZWtzV2VhdGhlcjsiXX0=
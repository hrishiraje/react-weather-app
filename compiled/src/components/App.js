'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    var that = _this;
    _this.state = {
      'weeksData': null,
      'todayData': null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getWeather('Boston');
    }
  }, {
    key: 'getWeather',
    value: function getWeather(city) {
      var _this2 = this;

      this.props.gatherWeather(city, function (data) {
        _this2.setState({
          'weeksData': data.list,
          'todayData': data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.weeksData && this.state.todayData) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(Search, { getWeather: this.getWeather.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(TodaysWeather, { today: this.state.todayData }),
            React.createElement(WeeksWeather, { week: this.state.weeksData })
          )
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(Search, { getWeather: this.getWeather.bind(this) })
          )
        );
      }
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUVKLGVBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHVGQUNWLEtBRFU7O0FBRWhCLFFBQUksWUFBSjtBQUNBLFVBQUssS0FBTCxHQUFhO0FBQ1gsbUJBQWEsSUFERjtBQUVYLG1CQUFhO0FBRkYsS0FBYjtBQUhnQjtBQU9qQjs7Ozt3Q0FFa0I7QUFDakIsV0FBSyxVQUFMLENBQWdCLFFBQWhCO0FBQ0Q7OzsrQkFFVSxJLEVBQUs7QUFBQTs7QUFDZCxXQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLElBQXpCLEVBQStCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZDLGVBQUssUUFBTCxDQUFjO0FBQ1osdUJBQWEsS0FBSyxJQUROO0FBRVosdUJBQWE7QUFGRCxTQUFkO0FBSUQsT0FMRDtBQU1EOzs7NkJBRU87QUFDTixVQUFHLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsS0FBSyxLQUFMLENBQVcsU0FBdEMsRUFBZ0Q7QUFDOUMsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxNQUFELElBQVEsWUFBWSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBcEI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsZ0NBQUMsYUFBRCxJQUFlLE9BQU8sS0FBSyxLQUFMLENBQVcsU0FBakMsR0FERjtBQUVFLGdDQUFDLFlBQUQsSUFBYyxNQUFNLEtBQUssS0FBTCxDQUFXLFNBQS9CO0FBRkY7QUFKRixTQURGO0FBV0QsT0FaRCxNQVlLO0FBQ0gsZUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxNQUFELElBQVEsWUFBWSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBcEI7QUFERjtBQURGLFNBREY7QUFPRDtBQUVGOzs7O0VBL0NlLE1BQU0sUzs7QUFtRHhCLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAnd2Vla3NEYXRhJzogbnVsbCxcbiAgICAgICd0b2RheURhdGEnOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmdldFdlYXRoZXIoJ0Jvc3RvbicpO1xuICB9XG5cbiAgZ2V0V2VhdGhlcihjaXR5KXtcbiAgICB0aGlzLnByb3BzLmdhdGhlcldlYXRoZXIoY2l0eSwgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAnd2Vla3NEYXRhJzogZGF0YS5saXN0LFxuICAgICAgICAndG9kYXlEYXRhJzogZGF0YVxuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGlmKHRoaXMuc3RhdGUud2Vla3NEYXRhICYmIHRoaXMuc3RhdGUudG9kYXlEYXRhKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNlYXJjaCBnZXRXZWF0aGVyPXt0aGlzLmdldFdlYXRoZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VG9kYXlzV2VhdGhlciB0b2RheT17dGhpcy5zdGF0ZS50b2RheURhdGF9IC8+XG4gICAgICAgICAgICA8V2Vla3NXZWF0aGVyIHdlZWs9e3RoaXMuc3RhdGUud2Vla3NEYXRhfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTZWFyY2ggZ2V0V2VhdGhlcj17dGhpcy5nZXRXZWF0aGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gIH1cblxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=
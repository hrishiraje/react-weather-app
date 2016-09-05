'use strict';

var Search = function Search(props) {
  var val;

  var handleClick = function handleClick() {
    props.getWeather(val);
  };

  var getVal = function getVal(e) {
    val = e.target.value;
  };

  return React.createElement(
    'div',
    { id: 'search', className: 'clearfix' },
    React.createElement('input', { type: 'text', placeholder: 'Type city name here...', onChange: getVal }),
    React.createElement('input', { type: 'submit', value: 'Go', onClick: handleClick })
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQUMsS0FBRCxFQUFXO0FBQ3RCLE1BQUksR0FBSjs7QUFFQSxNQUFJLGNBQWMsU0FBZCxXQUFjLEdBQU07QUFDdEIsVUFBTSxVQUFOLENBQWlCLEdBQWpCO0FBQ0QsR0FGRDs7QUFJQSxNQUFJLFNBQVMsU0FBVCxNQUFTLENBQUMsQ0FBRCxFQUFPO0FBQ2xCLFVBQU0sRUFBRSxNQUFGLENBQVMsS0FBZjtBQUNELEdBRkQ7O0FBS0EsU0FDRTtBQUFBO0FBQUEsTUFBSyxJQUFHLFFBQVIsRUFBaUIsV0FBVSxVQUEzQjtBQUNFLG1DQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLHdCQUEvQixFQUF3RCxVQUFVLE1BQWxFLEdBREY7QUFFRSxtQ0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxJQUEzQixFQUFnQyxTQUFTLFdBQXpDO0FBRkYsR0FERjtBQU1ELENBbEJEOztBQW9CQSxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaCA9IChwcm9wcykgPT4ge1xuICB2YXIgdmFsO1xuXG4gIHZhciBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5nZXRXZWF0aGVyKHZhbCk7XG4gIH1cblxuICB2YXIgZ2V0VmFsID0gKGUpID0+IHtcbiAgICB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgfVxuXG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgaWQ9J3NlYXJjaCcgY2xhc3NOYW1lPSdjbGVhcmZpeCc+XG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1R5cGUgY2l0eSBuYW1lIGhlcmUuLi4nIG9uQ2hhbmdlPXtnZXRWYWx9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIHZhbHVlPSdHbycgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=
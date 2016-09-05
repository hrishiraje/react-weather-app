class App extends React.Component{

  constructor(props){
    super(props);
    var that = this;
    this.state = {
      'weeksData': null,
      'todayData': null
    }
  }

  componentDidMount(){
    this.getWeather('Boston');
  }

  getWeather(city){
    var key = this.props.API_KEY;
    this.props.gatherWeather(key, city, (data) => {
      this.setState({
        'weeksData': data.list,
        'todayData': data
      });
    })
  }

  render(){
    if(this.state.weeksData && this.state.todayData){
      return(
        <div>
          <div>
            <Search getWeather={this.getWeather.bind(this)}/>
          </div>
          <div>
            <TodaysWeather today={this.state.todayData} />
            <WeeksWeather week={this.state.weeksData} />
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <div>
            <Search getWeather={this.getWeather.bind(this)}/>
          </div>
        </div>
      )
    }

  }

}

window.App = App;


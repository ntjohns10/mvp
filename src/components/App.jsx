import React from 'react';
import axios from 'axios';
import config from '../../config.js';
import List from './list.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: false
    };
  }

  componentDidMount() {
    const success = position => {
      this.setState({ lat: position.coords.latitude, long: position.coords.longitude }, () => this.getSandwiches())
    }
    navigator.geolocation.getCurrentPosition(success);
  }

  getSandwiches() {
    console.log(config.TOKEN)
    axios.get(`${'https://corsanywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: `Bearer ${config.TOKEN}`
        },
      params: {
        term: 'banh mi',
        latitude: `${this.state.lat}`,
        longitude: `${this.state.long}`,
        limit: 5
        }
    }).then((res) => {
      this.setState({restaurants: res.data.businesses})
    }).catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div className="app">
        {this.state.restaurants ? <List restaurants={this.state.restaurants}/> : null}
      </div>
    )
  }
}

export default App;
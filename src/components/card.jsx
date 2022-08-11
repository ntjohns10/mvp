import React from 'react';
import ReactStars from "react-rating-stars-component";
import Visit from './visit.jsx';
import axios from 'axios';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visitView: false,
      visitCount: false
    }
    this.onClick = this.onClick.bind(this)
    this.getVisitCount = this.getVisitCount.bind(this)
  }

  getDistance(meters) {
    return Math.round(meters*0.000621371192);
}

  componentDidMount(){
    this.getVisitCount();
  }

  getVisitCount(){
    axios.get('/count', {params : {restaurant_id: this.props.restaurant.id}})
    .then((count) => this.setState({visitCount: count.data}))
  }

  onClick(e) {
    e.preventDefault();
    var view = this.state.visitView;
    this.setState({visitView: !view})
  }



render() {
  const distance = this.getDistance(this.props.restaurant.distance)
  const pic = <div onClick={this.onClick}style={{
    backgroundImage: `url(${this.props.restaurant.image_url})`,
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '200px',
    borderRadius: '1%',
  }}></div>

  const visit = <Visit id={this.props.restaurant.id} onClick={this.onClick} getVisitCount={this.getVisitCount}/>

  return(
    <div className="card" >

          {this.state.visitView ? visit : pic}
         <div className="name">{this.props.restaurant.name}</div>
         <div className="distance">About {distance} miles away</div>
         <div className="stars">
         <ReactStars count={this.props.restaurant.rating} edit={false} color={`#ffd700`} half={true} classNames={"name"}/>
         </div>
         {this.state.visitCount ? <div>{this.state.visitCount} previous visits</div> : null }



    </div>

  )
}
}

export default Card;
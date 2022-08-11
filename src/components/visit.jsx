import React from 'react';
import axios from 'axios';
class Visit extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      restaurant_id: this.props.id
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault(e);

    axios.post('http://localhost:3000/visit', this.state)
    .then((res)=> {console.log('visit logged')})
    .then(() => {this.props.onClick(e)})
    .catch((err) => {
      console.log('unable to log visit')
    })
  }

  onClick(e) {
    e.preventDefault();
    this.props.onClick(e)
  }


  render(){
    return(
      <form>
        <label>Comments</label>
        <textarea onChange={this.onChange} id="comments" type="text"  autoComplete="off"></textarea>
        <label>Rating</label>
        <input onChange={this.onChange} id="review_value"type="number" min="0" max="5" autoComplete="off"></input>
        <input onClick={this.onSubmit} type="submit" value="Submit"></input>
        <input onClick={this.onClick} type="submit" value="Cancel"></input>
        </form>
    )
  }
}

export default Visit;
import React from 'react';
import Card from './card.jsx';
import Welcome from './welcome.jsx';

var list = (props) => {
  const items = props.restaurants.map((restaurant) =>
    <Card restaurant={restaurant} key={restaurant.id}/>
  )

  return(
    <>
    <Welcome />
    <div className="item">
      {items}
    </div>
    </>
  )
}

export default list;
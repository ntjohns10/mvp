import React from 'react';

var card = ({restaurant}) => {

  var getDistance = (meters) => {
    return Math.round(meters*0.000621371192);
}
  var distance = getDistance(restaurant.distance)



  return(
    <div className="card">
      <div style={{
        backgroundImage: `url(${restaurant.image_url})`,
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '200px',
        borderRadius: '1%',
      }}>
         </div>
         <div className="name">{restaurant.name}</div>
         <div className="distance">About {distance} miles away</div>

    </div>

  )
}

export default card;
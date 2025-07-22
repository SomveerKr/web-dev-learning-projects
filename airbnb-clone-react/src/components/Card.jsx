import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 ? (
        <div className="card-badge">SOLD OUT</div>
      ) : (
        props.location === 'Online' && <div className="card-badge">ONLINE</div>
      )}
      <img src={`images/${props.coverImg}`} alt="katie-img" />
      <p>
        <img src="images/star.png" alt="katie-img" className="starIcon" />
        <b>{props.stats.rating}</b>
        <span className="textAfterStar">
          ({props.stats.reviewCount}) · {props.location}
        </span>
      </p>
      <p className="card-title">{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  )
}

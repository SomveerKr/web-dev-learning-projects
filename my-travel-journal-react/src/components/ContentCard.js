import React from "react";
export default function ContentCard(props) {
  return (
    <div className="contentCard">
      <img className="cardImg" src={props.imageURL} alt="img" />
      <div className="photoSideContent">
        <p className="location">
          <img src="images/location.png" alt="location-icon" width="20px" />
          <b className="country">{props.location}</b>
          <a href={props.googleMap}>View on Google Maps</a>
        </p>
        <h1 className="title">{props.title} </h1>
        <h4>
          {" "}
          {props.startDate} - {props.endDate}
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

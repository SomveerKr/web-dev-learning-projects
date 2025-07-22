import React from "react";
import Header from "./Header";
import ContentCard from "./ContentCard";
import travelData from "./TravelData";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      {travelData.map((singleTravelData) => {
        return <ContentCard key={singleTravelData.id} {...singleTravelData} />;
      })}
      <Footer />
    </div>
  );
}

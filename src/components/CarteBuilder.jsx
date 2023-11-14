import React from 'react';
import Boutton from '../components/Boutton';

function CardBuilder({ titre, description, image, prix }) {
  const cardStyle = {
    card: {
      width: "60%",
      backgroundColor: "#e6e6e6", 
      border: "2px solid #000",
      borderRadius: "20px", 
      boxShadow: "4px 4px 0 #000",
      margin: "0 auto",
      marginTop: "20%",
      marginBottom: "2%",
      borderSpacing: "5px 1rem;",
    },
    filmStrip: {
      width: "95px", 
      height: "8px",
      backgroundColor: "#000",
      margin: "0 auto", 
      marginBottom: "8px", 
      boxShadow: "8px 0 8px #000",

    },
  };
  
  return (
    <div className="rounded-xl p-8 dark:bg-slate-800" style={cardStyle.card}>
      <div className="p-4">
        <img src={image} alt={titre} className="w-68 h-24 object-cover rounded-sm ring-2 ring-white mx-auto bg-black" />
        <h2 className="text-xl font-semibold text-gray-800 text-center my-4">{titre}</h2>
        
        <div style={cardStyle.filmStrip}></div>
        <p className="text-gray-600">{description}</p>
        <p className="text-black text-center font-bold">{prix}</p>
        <Boutton />
      </div>
    </div>
  );
}

export default CardBuilder;

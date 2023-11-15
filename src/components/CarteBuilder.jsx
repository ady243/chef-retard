import React from 'react';


function CardBuilder({ titre, description, image, prix }) {
  const cardStyle = {
    card: {
      width: "60%",
      backgroundColor: "#e6e6e6", 
      border: "2px solid #000",
      borderRadius: "20px", 
      fontSize: "16px",
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
    boutton: {
      width: "100%", 
      padding: "10px", 
      backgroundColor: "#4CAF50",
      color: "white", 
      border: "none",
      borderRadius: "5px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px", 
      margin: "4px 2px",
      cursor: "pointer",
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
        <button style={cardStyle.boutton}>Votre Texte de Bouton</button>
      </div>
    </div>
  );
}

export default CardBuilder;

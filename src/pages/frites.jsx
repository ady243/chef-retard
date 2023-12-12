// components/Salade.js

import React from 'react';

const recipeStyle = {
  fontFamily: 'Arial, sans-serif',
  lineHeight: 1.6,
  margin: '20px',

  h2: {
    color: '#333',
  },

  ul: {
    marginLeft: '20px',
  },

  li: {
    marginBottom: '10px',
  },

  strong: {
    color: '#333',
  },
};

const Frites = () => {
  return (
    <div style={recipeStyle}>
    

      <h2>Recette des Frites à la Burger King :</h2>
      <ul>
        <li>Pommes de terre, pelées et coupées en bâtonnets</li>
        <li>Huile de cuisson (comme l'huile de maïs ou l'huile d'arachide)</li>
        <li>Sel</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Préparation des pommes de terre :</strong>
          <ul>
            <li>Laver et éplucher les pommes de terre, puis les couper en bâtonnets de taille similaire.</li>
          </ul>
        </li>
        <li>
          <strong>Cuisson des frites :</strong>
          <ul>
            <li>Préchauffer le four à 220°C.</li>
            <li>Placer les bâtonnets de pommes de terre sur une plaque de cuisson recouverte de papier sulfurisé.</li>
            <li>Arroser les bâtonnets d'huile de cuisson et les saupoudrer de sel selon tes préférences.</li>
            <li>Placer la plaque au four et faire cuire pendant environ 25-30 minutes, en les retournant à mi-cuisson, jusqu'à ce qu'elles soient dorées et croustillantes.</li>
          </ul>
        </li>
        <li>
          <strong>Service :</strong>
          <ul>
            <li>Retirer du four et servir immédiatement.</li>
            <li>Accompagner les frites de ta sauce préférée.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Frites;

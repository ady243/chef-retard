// components/KebabRecipe.js

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

const Kebab = () => {
  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>Viande de votre choix (agneau, poulet, bœuf), coupée en morceaux</li>
        <li>Yaourt nature</li>
        <li>Jus de citron</li>
        <li>Ail émincé</li>
        <li>Cumin en poudre</li>
        <li>Coriandre en poudre</li>
        <li>Paprika</li>
        <li>Sel et poivre, selon le goût</li>
        <li>Pain pita ou tortillas</li>
        <li>Légumes frais (tomates, concombres, laitue, oignons) pour la garniture</li>
        <li>Sauce au choix (tzatziki, sauce à l'ail, sauce piquante)</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Marinade de la viande :</strong>
          <ul>
            <li>Mélanger le yaourt, le jus de citron, l'ail émincé, le cumin, la coriandre, le paprika, le sel et le poivre dans un bol.</li>
            <li>Ajouter les morceaux de viande dans la marinade et bien mélanger. Laisser mariner pendant au moins 1 heure, idéalement toute une nuit au réfrigérateur.</li>
          </ul>
        </li>
        <li>
          <strong>Cuisson de la viande :</strong>
          <ul>
            <li>Enfiler les morceaux de viande marinée sur des brochettes.</li>
            <li>Faire cuire les brochettes sur un grill chaud pendant environ 10-15 minutes, en les retournant pour assurer une cuisson uniforme.</li>
          </ul>
        </li>
        <li>
          <strong>Assemblage des kebabs :</strong>
          <ul>
            <li>Réchauffer le pain pita ou les tortillas.</li>
            <li>Placer les morceaux de viande cuite sur le pain.</li>
            <li>Garnir de légumes frais et de la sauce de ton choix.</li>
          </ul>
        </li>
        <li>
          <strong>Service :</strong>
          <ul>
            <li>Servir les kebabs chauds et savourer !</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Kebab;

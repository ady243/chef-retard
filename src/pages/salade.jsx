

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

const Salade = () => {
  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>Poitrines de poulet désossées et sans peau</li>
        <li>Œufs battus</li>
        <li>Farine</li>
        <li>Chapelure</li>
        <li>Mélange de laitue (laitue iceberg, épinards, roquette, etc.)</li>
        <li>Tomates cerises, coupées en deux</li>
        <li>Concombres, tranchés</li>
        <li>Carottes râpées</li>
        <li>Fromage feta, émietté</li>
        <li>Vinaigrette de ton choix</li>
        <li>Sel et poivre, selon le goût</li>
        <li>Huile pour la friture</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Cuisson du poulet pané :</strong>
          <ul>
            <li>Assaisonner les poitrines de poulet avec du sel et du poivre.</li>
            <li>Tremper chaque morceau de poulet dans la farine, puis dans les œufs battus, et enfin dans la chapelure.</li>
            <li>Chauffer l'huile dans une poêle et faire frire les morceaux de poulet jusqu'à ce qu'ils soient bien dorés et cuits à l'intérieur. Égoutter sur du papier absorbant.</li>
            <li>Couper les morceaux de poulet pané en tranches.</li>
          </ul>
        </li>
        <li>
          <strong>Préparation de la salade :</strong>
          <ul>
            <li>Mélanger les différents types de laitue dans un grand saladier.</li>
            <li>Ajouter les tomates cerises, les tranches de concombre, les carottes râpées et le fromage feta émietté.</li>
          </ul>
        </li>
        <li>
          <strong>Assemblage de la salade :</strong>
          <ul>
            <li>Disposer les tranches de poulet pané sur le dessus de la salade.</li>
          </ul>
        </li>
        <li>
          <strong>Assaisonnement et service :</strong>
          <ul>
            <li>Arroser la salade de vinaigrette juste avant de servir.</li>
            <li>Servir la salade au poulet pané garnie de votre choix d'assaisonnements.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Salade;

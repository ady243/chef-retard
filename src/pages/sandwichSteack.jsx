// components/SteakSandwichRecipe.js

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

const SandwichSteack = () => {
  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>Steaks de bœuf</li>
        <li>Pain à sandwich</li>
        <li>Fromage au choix</li>
        <li>Laitue</li>
        <li>Tomates, tranchées</li>
        <li>Oignons, tranchés</li>
        <li>Mayonnaise</li>
        <li>Moutarde</li>
        <li>Ketchup</li>
        <li>Cornichons, tranchés (facultatif)</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Cuisson des steaks :</strong>
          <ul>
            <li>Cuire les steaks selon tes préférences (à la poêle, au grill, etc.).</li>
          </ul>
        </li>
        <li>
          <strong>Préparation des ingrédients :</strong>
          <ul>
            <li>Couper la laitue, les tomates, les oignons et les cornichons en tranches.</li>
          </ul>
        </li>
        <li>
          <strong>Assemblage du sandwich :</strong>
          <ul>
            <li>Griller légèrement les tranches de pain.</li>
            <li>Étaler de la mayonnaise sur une tranche de pain et de la moutarde sur l'autre.</li>
            <li>Placer le steak cuit sur la tranche de pain avec la mayonnaise.</li>
            <li>Ajouter du fromage, de la laitue, des tomates, des oignons et des cornichons selon tes préférences.</li>
            <li>Placer la deuxième tranche de pain par-dessus pour former le sandwich.</li>
          </ul>
        </li>
        <li>
          <strong>Dégustation :</strong>
          <ul>
            <li>Savoure ton délicieux sandwich au steak avec des frites ou une salade.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default SandwichSteack;

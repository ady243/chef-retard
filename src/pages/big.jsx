import React from 'react';

const Big = () => {
  const recipeStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    margin: '20px',

    h2: {
      color: '#333',
    },

    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },

    li: {
      marginBottom: '10px',
    },

    ol: {
      marginTop: '10px',
    },

    p: {
      marginBottom: '20px',
    },
  };

  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>Pain à burger (avec trois parties)</li>
        <li>500 g de bœuf haché (assaisonné de sel et poivre)</li>
        <li>8 tranches de fromage américain</li>
        <li>1 tasse de laitue iceberg, finement coupée</li>
        <li>1 tasse de cornichons en tranches</li>
        <li>1/2 tasse d'oignons finement hachés</li>
        <li>3 cuillères à soupe de mayonnaise</li>
        <li>2 cuillères à soupe de ketchup</li>
        <li>1 cuillère à soupe de moutarde</li>
        <li>1 cuillère à soupe de vinaigre blanc</li>
        <li>1 cuillère à café de sucre</li>
        <li>Huile pour la cuisson</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          Prépare la sauce spéciale : Dans un bol, mélange la mayonnaise, le ketchup, la moutarde, le vinaigre blanc et le sucre. Réserve la sauce au réfrigérateur pendant que tu prépares le reste.
        </li>
        <li>
          Cuisson des steaks : Divise la viande hachée en six portions égales et façonne-les en galettes fines. Assaisonne chaque galette avec du sel et du poivre. Dans une poêle chaude avec un peu d'huile, fais cuire les steaks pendant environ 2-3 minutes de chaque côté, ou jusqu'à ce qu'ils soient bien cuits.
        </li>
        <li>
          Assemblage des burgers : Toaste légèrement les parties inférieure et supérieure des pains à burger. Sur la partie inférieure, ajoute une cuillerée de sauce spéciale. Place une galette de bœuf cuite par-dessus, puis ajoute une tranche de fromage. Répète cette étape avec une deuxième galette et une deuxième tranche de fromage. Sur la deuxième galette, ajoute de la laitue, des cornichons et des oignons hachés. Enfin, ajoute la partie supérieure du pain.
        </li>
        <li>
          Répète l'opération : Répète le processus pour créer les autres burgers.
        </li>
        <li>
          Dégustation : Savoure ton Big Mac maison avec des frites et un soda, si tu le souhaites.
        </li>
      </ol>
    </div>
  );
};

export default Big;

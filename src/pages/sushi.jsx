

import React from 'react';

const Sushi = () => {
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

    ol: {
      marginLeft: '20px',
    },

    li: {
      marginBottom: '10px',
    },

    strong: {
      color: '#333',
    },
  };

  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>2 tasses de riz à sushi</li>
        <li>1/2 tasse de vinaigre de riz</li>
        <li>2 cuillères à soupe de sucre</li>
        <li>1 cuillère à café de sel</li>
        <li>Feuilles d&apos;algues nori</li>
        <li>Saumon frais, coupé en fines tranches</li>
        <li>Avocat, coupé en fines lamelles</li>
        <li>Concombre, coupé en fines lanières</li>
        <li>Sauce soja pour tremper</li>
        <li>Wasabi et gingembre mariné (facultatif)</li>
        <li>Un natte en bambou pour rouler les sushis (makisu)</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Préparation du riz :</strong>
          <ul>
            <li>Rincer le riz à l&apos;eau froide jusqu&apos;à ce que l&apos;eau soit claire.</li>
            <li>Cuire le riz selon les instructions sur l&apos;emballage.</li>
            <li>Dans une petite casserole, mélanger le vinaigre de riz, le sucre et le sel. Chauffer à feu doux jusqu&apos;à ce que le sucre et le sel soient complètement dissous.</li>
            <li>Lorsque le riz est cuit, transférer dans un grand bol en bois ou en plastique. Ajouter le mélange de vinaigre sur le riz cuit et mélanger délicatement pour bien enrober chaque grain. Laisser refroidir.</li>
          </ul>
        </li>
        <li>
          <strong>Préparation des ingrédients :</strong>
          <ul>
            <li>Couper le saumon, l&apos;avocat et le concombre en fines lamelles.</li>
          </ul>
        </li>
        <li>
          <strong>Assemblage des sushis :</strong>
          <ul>
            <li>Placer une feuille de nori sur le natte en bambou.</li>
            <li>Mouiller vos mains pour éviter que le riz ne colle, puis prendre une poignée de riz et l&apos;étaler uniformément sur la moitié inférieure de la feuille de nori.</li>
            <li>Disposer des lamelles de saumon, d&apos;avocat et de concombre sur le riz.</li>
          </ul>
        </li>
        <li>
          <strong>Rouler les sushis :</strong>
          <ul>
            <li>En utilisant le natte en bambou, commencez à rouler les sushis à partir du côté avec les ingrédients vers le côté avec seulement du riz. Roulez fermement, mais doucement.</li>
            <li>Sceller le bord avec un peu d&apos;eau pour que la feuille de nori adhère.</li>
          </ul>
        </li>
        <li>
          <strong>Couper les sushis :</strong>
          <ul>
            <li>Utiliser un couteau bien aiguisé légèrement humidifié pour couper les rouleaux en morceaux de la taille désirée.</li>
          </ul>
        </li>
        <li>
          <strong>Servir :</strong>
          <ul>
            <li>Disposer les sushis sur une assiette et les servir avec de la sauce soja, du wasabi et du gingembre mariné.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Sushi;

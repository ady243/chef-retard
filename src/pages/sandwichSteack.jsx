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

const SandwichPoulet = () => {
  return (
    <div style={recipeStyle}>
      <h2>Ingrédients :</h2>
      <ul>
        <li>Filets de poulet désossés et sans peau</li>
        <li>Marinade au choix (mélange de yogourt, jus de citron, ail, herbes)</li>
        <li>Pain à sandwich (baguette, pain ciabatta, pain complet, etc.)</li>
        <li>Laitue</li>
        <li>Tomates, tranchées</li>
        <li>Fromage au choix (facultatif)</li>
        <li>Mayonnaise</li>
        <li>Moutarde</li>
        <li>Tranches de cornichons (facultatif)</li>
        <li>Tranches d&apos;oignons rouges (facultatif)</li>
        <li>Sel et poivre, selon le goût</li>
      </ul>

      <h2>Instructions :</h2>
      <ol>
        <li>
          <strong>Mariner le poulet :</strong>
          <ul>
            <li>Tremper les filets de poulet dans la marinade de ton choix et laisser mariner pendant au moins 30 minutes.</li>
          </ul>
        </li>
        <li>
          <strong>Cuisson du poulet :</strong>
          <ul>
            <li>Faire cuire les filets de poulet marinés dans une poêle chaude jusqu&apos;à ce qu&apos;ils soient bien cuits et dorés des deux côtés.</li>
          </ul>
        </li>
        <li>
          <strong>Préparation du sandwich :</strong>
          <ul>
            <li>Griller légèrement le pain à sandwich.</li>
            <li>Étaler de la mayonnaise sur une tranche de pain et de la moutarde sur l&apos;autre.</li>
            <li>Disposer une feuille de laitue sur la tranche de pain avec la mayonnaise.</li>
            <li>Ajouter le filet de poulet cuit, des tranches de tomates, du fromage (si désiré), des cornichons et des oignons rouges.</li>
            <li>Assaisonner avec du sel et du poivre selon le goût.</li>
            <li>Placer la deuxième tranche de pain par-dessus pour former le sandwich.</li>
          </ul>
        </li>
        <li>
          <strong>Dégustation :</strong>
          <ul>
            <li>Servir le sandwich au poulet avec des frites ou une salade.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default SandwichPoulet;

import React from 'react';

const style = {
  recetteContainer: {
    margin: '20px',
    padding: '20px',

  },
  recetteList: {
    listStyle: 'none',
    padding: '0',
  },
  recetteListItem: {
    margin: '10px 0',
  },
  recetteLink: {
    textDecoration: 'none',
    color: 'green',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'color 0.3s ease-in-out',
  },
  recetteLinkHover: {
    color: '#e44d26',
  },
};

const Recette = () => {
  return (
    <div style={style.recetteContainer}>
      <ul style={style.recetteList}>
        <li style={style.recetteListItem}><a href="/sushi" style={style.recetteLink}>Sushi</a></li>
        <li style={style.recetteListItem}><a href="/big" style={style.recetteLink}>BIG TASTY™ - 2 VIANDES</a></li>
        <li style={style.recetteListItem}><a href="/frites" style={style.recetteLink}>Frites</a></li>
        <li style={style.recetteListItem}><a href="/kebab" style={style.recetteLink}>Kebab</a></li>
        <li style={style.recetteListItem}><a href="/sandichSteack" style={style.recetteLink}>Sandwich Steak Haché</a></li>
        <li style={style.recetteListItem}><a href="/sandwichPoulet" style={style.recetteLink}>Sandwich au poulet</a></li>
        <li style={style.recetteListItem}><a href="/double" style={style.recetteLink}>Double WHOPPER® Cheese</a></li>
        <li style={style.recetteListItem}><a href="/salade" style={style.recetteLink}>Salade César au poulet pané</a></li>
      </ul>
    </div>
  );
};

export default Recette;

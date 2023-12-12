import React from 'react';
import Link from 'next/link';

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
        <li style={style.recetteListItem}>
          <Link href="/sushi">
            <p style={style.recetteLink}>Sushi</p>
          </Link>
        </li>
        <li style={style.recetteListItem}>
          <Link href="/big">
            <p style={style.recetteLink}>BIG TASTY™ - 2 VIANDES</p>
          </Link>
        </li>
        <li style={style.recetteListItem}>
          <Link href="/sandwichSteack">
            <p style={style.recetteLink}>Sandwich Steak</p>
          </Link>
        </li>

        <li style={style.recetteListItem}>
          <Link href="/sandwichPoulet">
            <p style={style.recetteLink}>Sandwich Poulet</p>
          </Link>
        </li>

        <li style={style.recetteListItem}>
          <Link href="/double">
            <p style={style.recetteLink}>Double WHOPPER® Cheese</p>
          </Link>
          </li>

          <li style={style.recetteListItem}>
          <Link href="/frites">
            <p style={style.recetteLink}>Frites burger king</p>
          </Link>
          </li>

          <li style={style.recetteListItem}>
          <Link href="/kebab">
            <p style={style.recetteLink}>Kebabe</p>
          </Link>
          </li>

          <li style={style.recetteListItem}>
          <Link href="/salade">
            <p style={style.recetteLink}>Salade César au poulet pané</p>
          </Link>
          </li>

      </ul>
    </div>
  );
};

export default Recette;

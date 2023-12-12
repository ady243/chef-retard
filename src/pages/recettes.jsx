
import React from 'react';
import Recette from '../components/Recettes';

const RecettesPage = () => {

    const style = {
        h1: {
            
            color: '#3B82F6',
            fontSize: '2.5rem',
        },
        div: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };
  return (
    <div style={style.div}>
      <h1 style={style.h1}>Liste des recettes</h1>
      <Recette />
    </div>
  );
};

export default RecettesPage;

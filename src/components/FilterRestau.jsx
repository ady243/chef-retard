import React from 'react';
import './component.css';
import CardBuilder from './CardBuilder';


const styleFilter = {
  backgroundColor: '',
  color: '#1F2937',
  borderRadius: '0.5rem',
  padding: '1rem',
  width: '50%',
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'left',
  fontSize: '1rem',
  fontWeight: '600',
  lineHeight: '1.5',
  letterSpacing: '0.00938em',
};

const FilterRestau = () => {
  return (
    <div className="border-2 border-gray-300 bg-white relative rounded-lg p-4 shadow-lg filter-restau-container" style={styleFilter}>
   
      <ul className='flex '>
        {restaurants.map((restaurant, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }} className='active:bg-gray-700 h-full text-center'>
            <a href="#" style={{
              color: '#1F2937',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              cursor: 'pointer',
            }}>
              {restaurant}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterRestau;

import React from 'react';
import { useRouter } from 'next/router';
import { restaurants } from '../../data';
import Link from 'next/link';
import Image from 'next/image';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const restaurantData = restaurants.find((restaurant) => restaurant.id === parseInt(id));

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem',
    },
    title: {
      fontSize: '1.875rem',
      textAlign: 'center',
      color: '#3B82F6',
      marginBottom: '1.25rem',
    },
    image: {
      width: '30%', 
      height: '30%', 
      objectFit: 'cover', 
      marginBottom: '1.25rem',
      border: '2px solid black',
      boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.2)',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: '1.25rem',
      borderBottom: '1px solid #374151',
      color: '#374151',
      marginBottom: '0.5rem',
    },
    link: {
      fontSize: '1.25rem',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
      border : '1px solid white',
      backgroundColor: 'black',
      width: '120%',
    textAlign: 'center',
    borderRadius: '10px',
    },
  };

  if (!restaurantData) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div style={style.container}>
      <h1 style={style.title}>{restaurantData.title}</h1>
      <div style={style.details}>
        <Image style={style.image} src={restaurantData.imageUrl} alt={restaurantData.title} width={200} height={200}/>
        <p style={style.text}>Prix: {restaurantData.price}</p>
        <p style={style.text}>Restaurant: {restaurantData.restaurantName}</p>
        <p style={style.text}>Service de livraison: {restaurantData.livreur}</p>
      </div>
      <Link href={restaurantData.link}>
          <p style={style.link}>Commander</p>
        </Link>
    </div>
  );
};

export default DetailsPage;
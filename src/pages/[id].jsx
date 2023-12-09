import React from 'react';
import { useRouter } from 'next/router';
import { restaurants } from '../data';

const RestaurantDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const restaurant = restaurants.find((restaurant) => restaurant.id === Number(id));

  if (!restaurant) {
    return <p>Restaurant non trouvé</p>;
  }

  return (
    <div>
      <img src={restaurant.imageUrl} alt={restaurant.title} />
      <h2>{restaurant.title}</h2>
      <p>{restaurant.price}</p>
      <p>{restaurant.restaurantName}</p>
      <p>{restaurant.livreur}</p>
      <a href={restaurant.link}>Commander maintenant</a>
    </div>
  );
};

export default RestaurantDetail;
import React from 'react';
import CardBuilder from '../components/CardBuilder';
import BienvenueComponent  from "../components/BienvenueComponent"
import { restaurants } from "../data";

const Home = () => {
  return (
    <>

    <BienvenueComponent data={restaurants}/>
        
    <div className='mt-12 ml-4 flex flex-wrap -m-0 mt-24'>
      {restaurants.slice(0, 9).map((restaurantData) => (
        <div key={restaurantData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 mr-0">
          <CardBuilder {...restaurantData} />
        </div>
      ))}
    </div></>

  );
};

export default Home;
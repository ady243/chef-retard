import React from 'react';
import Link from 'next/link';

const CardBuilder = ({ imageUrl, title, price, link, restaurantName, livreur }) => {
    return (
      <div className="relative m-10 flex w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md sm:mr-12">
    
        <img className="object-cover h-[200px] w-full" src={imageUrl} alt={title} />
   
        <span className="absolute ml-2 top-0 rounded-full bg-green-600 px-2 text-center text-sm font-medium text-white mt-2">{livreur}</span>

        <span className="absolute top-0 left-0 m-2 mt-8 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{restaurantName}</span>
    
        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
  
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">{price}</span>
              <span className="text-sm text-slate-900 line-through">{price}</span>
            </p>
          
          </div>
          <div>
            
          </div>

          <Link href={link} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            En savoir plus
          </Link>
        </div>
      </div>
    );
  };
  
  export default CardBuilder;
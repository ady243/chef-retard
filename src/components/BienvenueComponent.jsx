import './component.css'
import Link from 'next/link';



const BienvenueComponent = ({ data }) => {


  return (
    <div className="h-full flex flex-col items-center justify-center welcome">
      <img src="https://zupimages.net/up/23/49/yxmv.png" alt="Logo" className="logo"/> {/* Ajout de l'image de logo */}

      <h1 className="text-center font-bold mb-4 mt-12  text-black">Bienvenue sur Chef Retard - Votre Destination Gourmande Express !</h1>
      <h2 className="text-center mb-8">Découvrez une expérience culinaire sans pareil avec chefretard.tech, le site de référencement de restaurants conçu pour les gourmets pressés en quête de délices à portée de clic.</h2>

      <Link href="/recettes">
  <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    Voir toutes les recettes
  </button>
</Link>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white ul_titre">
          {data.map((item) => (
            <li key={item.id} className='li_title'>
              <a href="#" className="me-4  md:me-6">{item.title}</a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BienvenueComponent;
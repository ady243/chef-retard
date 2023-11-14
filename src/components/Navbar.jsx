
// import React,{useState} from 'react';

// function Navbar({ isNavbarOpen, toggleNavbar }) {

//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-3xl font-semibold">Mon Cartoon Navbar</div>
//         <button onClick={toggleNavbar}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//         <ul className={`lg:flex lg:space-x-6 text-lg text-white mt-4 lg:mt-0 ${isNavbarOpen ? 'block' : 'hidden'}`}>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Accuei
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Galerie
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-yellow-500">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

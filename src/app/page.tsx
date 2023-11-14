import CarteBuilder from '../components/CarteBuilder';



export default function Home() {
  const dataCarte = [
    {
      titre: 'Sandwich',
      description: 'ton et pain',
      image: '/chemin/vers/mon-image-1.jpg',
      prix:"22€"
    },
    {
      titre: 'Patte',
      description: 'Patte bolognaise',
      image: '/jdj',
      prix:"11€"
    },
    {
      titre: 'Poisson',
      description: 'Posson et frites',
      image: '/jdj',
      prix:"10€",
    },
    {
      titre: 'Poulet',
      description: 'Description de la carte ',
      image: '/jdj',
      prix:"23€"
    },

  ];

  const styleCard = {
    width:"130%",
    position:"relative",
    textAlign:"center",
    justifyContent:"center"
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"> 
        {dataCarte.map((carte, index) => (
          <div key={index}>
            <CarteBuilder
              titre={carte.titre}
              description={carte.description}
              image={carte.image}
              prix={carte.prix}
            />
          </div>
        ))}
      </div>
    
    </>
  );
}


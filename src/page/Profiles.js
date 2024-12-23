import 'bootstrap/dist/css/bootstrap.min.css'
import ListeProfils from './ListeProfils';
import FormulaireProfil from './FormulaireProfil';
import { useState } from 'react';
import NavBar from '../Components/NavBar';
import { ThemeContext } from "../page/ThemeContext";
import { useContext } from 'react';



function Profiles() {
  const { theme } = useContext(ThemeContext); // Access theme from context
  const [profils, setProfil]= useState([
    {
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Bob',
      age: 30,
      profession: 'Designer',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Jack',
      age: 22,
      profession: 'Artist',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  },
  {
      nom: 'Anouar',
      age: 50,
      profession: 'barista',
      image: 'https://cdn.ebaumsworld.com/mediaFiles/picture/718392/86147753.jpg'
  }
  ])

  const AjouterProfil=(profil)=>{
    const newProfil=[...profils, profil];
    setProfil(newProfil);
  }

  const supprProfil = (index) => {
    const newProfil = profils.filter((_, i) => i !== index);
    setProfil(newProfil);
    };
  return (
    <>
    <NavBar/>
    <br /><br />
      <h1 className='text-center bb'>Ajouter Profil</h1>
      <FormulaireProfil AjouterProfil={AjouterProfil}/>
      <hr /> <br />
      <h1 className="text-center bb">Liste des Profils</h1>
      <ListeProfils profils={profils} supprProfil={supprProfil}/>
      <style>
        {`
        h1 {
          color: ${theme === "dark" ? "white" : "black"};
        }
        `}
      </style>
    </>
  );
}

export default Profiles;

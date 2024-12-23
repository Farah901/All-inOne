import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FormulaireProfil({ AjouterProfil }) {
  const [nom, setNom] = useState(''); 
  const [age, setAge] = useState(''); 
  const [profession, setProfession] = useState(''); 
  const [image, setImage] = useState(''); 

  const submet = (event) => {
    event.preventDefault();
        
    const newProfil = { nom, age, profession, image };

    AjouterProfil(newProfil);

    setNom('');
    setAge('');
    setProfession('');
    setImage('');
  };

  return (
    <motion.form 
      className="formulaire-profil" 
      onSubmit={submet}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <label>Nom:</label>
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Profession:</label>
        <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Ajouter Profil</button>
      <style>
        {`
        .formulaire-profil {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: auto;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          background-color: #007bff;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }
        `}
      </style>
    </motion.form>
  );
}

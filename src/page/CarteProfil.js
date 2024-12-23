import React from 'react'

export default function CarteProfil({nom, age, profession, image}) {

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '280px',
    margin: '20px auto',
    textAlign: 'center'
  };

  const imgStyle = {
    borderRadius: '10px',
    height: '150px',
    width: '100%',
    objectFit: 'cover'
  };

  const titleStyle = {
    fontSize: '1.5em',
    margin: '10px 0'
  };

  const textStyle = {
    fontSize: '1em',
    margin: '5px 0'
  };

  return (
      <div style={cardStyle}>
        <img src={image} style={imgStyle} alt=""/>
        <h1 style={titleStyle}>Nom: {nom}</h1>
        <p style={textStyle}>Age: {age}</p>
        <p style={textStyle}>Profession: {profession}</p>
      </div>
  )
}

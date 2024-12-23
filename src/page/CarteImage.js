import React from 'react'

export default function CarteImage({img, titre, description}) {
  return (
    <div style={{width: '300px', border: '1px solid #ddd', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <img src={img} style={{borderRadius: '10px', height: '150px', width: '100%', objectFit: 'cover'}} alt=""/>
        <h1 style={{fontSize: '1.5em', margin: '10px 0'}}>{titre}</h1>
        <p style={{fontSize: '1em', color: '#555'}}>{description}</p>
    </div>
  )
}

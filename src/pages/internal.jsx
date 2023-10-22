import React, { useState } from 'react';
import { Button } from '@mui/material';
import { LoremIpsum } from 'lorem-ipsum';


import NavBar from '../components/nav_bar';
import Icono from '../assets/usuario.png';

export const InternalPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  const items = [
    { id: 1, name: 'Bitácora nº1', date: new Date('2023-10-11'), description: 'Descripción corta 1', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
    { id: 2, name: 'Bitácora nº2', date: new Date('2023-10-12'), description: 'Descripción corta 2', longDescription: lorem.generateParagraphs(1), estado: 'Bueno' },
    { id: 3, name: 'Bitácora nº3', date: new Date('2023-10-13'), description: 'Descripción corta 3', longDescription: lorem.generateParagraphs(1), estado: 'Justo' },
    { id: 4, name: 'Bitácora nº4', date: new Date('2023-10-14'), description: 'Descripción corta 4', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
    { id: 5, name: 'Bitácora nº5', date: new Date('2023-10-15'), description: 'Descripción corta 5', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
    { id: 6, name: 'Bitácora nº6', date: new Date('2023-10-16'), description: 'Descripción corta 6', longDescription: lorem.generateParagraphs(1), estado: 'Reprobado' },
    { id: 7, name: 'Bitácora nº7', date: new Date('2023-10-17'), description: 'Descripción corta 7', longDescription: lorem.generateParagraphs(1), estado: 'Justo' },
    { id: 8, name: 'Bitácora nº8', date: new Date('2023-10-18'), description: 'Descripción corta 8', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
    { id: 9, name: 'Bitácora nº9', date: new Date('2023-10-19'), description: 'Descripción corta 9', longDescription: lorem.generateParagraphs(1), estado: 'Bueno' },
    { id: 10, name: 'Bitácora nº10', date: new Date('2023-10-20'), description: 'Descripción corta 10', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
    { id: 11, name: 'Bitácora nº11', date: new Date('2023-10-21'), description: 'Descripción corta 11', longDescription: lorem.generateParagraphs(1), estado: 'Exelente' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1 className='page__title'>Hipótesis 4</h1>
      <div className='page'>
        <NavBar />
        <div className='content'>
          <div className='left-content'>
            <div className='user-info'>
              <img src={Icono} height={100} alt='user-icon' />
              <h3>Juan Carlos Bodoque 🧑‍💻</h3>
              <h3>Calificación promedio actual: 3.18 (Bueno)</h3>
              <h3>Estado del estudiante: aprobando</h3>
              <h3>Estado de la práctica: en curso (23% completada)</h3>
            </div>
          </div>
          <div className='right-content'>

            <div className='content'>
            <div className='item-list'>
                <ul>
                  {items.map((item) => (
                    <li key={item.id} className='list-item'>
                      <div className='item-info'>
                        <h3>{item.name}</h3>
                        <h4>Fecha: {item.date.toDateString()}</h4>
                        <button onClick={() => handleItemClick(item)}>Más información</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
           
              {selectedItem ? (
                <div className='item-description'>
                  <h3>{selectedItem.name}</h3>
                  <p>{selectedItem.longDescription}</p>
                  <h3>{selectedItem.estado}</h3>
                </div>
              ) : (
                <div className='item-description-placeholder'>
                  <p>Seleccione un elemento para ver su contenido en detalle.</p>
                </div>
                
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalPage;

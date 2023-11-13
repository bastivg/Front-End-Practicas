import React, { useState } from 'react';
import { Button } from '@mui/material';
import { LoremIpsum } from 'lorem-ipsum';


import NavBar from '../components/nav_bar';
import Icono from '../assets/usuario.png';
import Acer from '../assets/Acer.png';
import HP from '../assets/HP.png';
import Soprole from '../assets/Soprole.png';
import Nescafe from '../assets/nescafe.png';
import Usm from '../assets/usm.png';

export const ListPractice = () => {
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
    { id: 1, image: Soprole ,name: 'Practica Soprole', date: new Date('2023-10-11'), description: 'Se necesita practicante en Soprole para el area de compras', longDescription: lorem.generateParagraphs(1), estado: 'Industrial' },
    { id: 2, image: HP ,name: 'Practica Hp', date: new Date('2023-10-12'), description: 'Necesitamos una pagina chica sin paga', longDescription: lorem.generateParagraphs(1), estado: 'Profesional' },
    { id: 3, image:  Nescafe ,name: 'Practica en Nescafe', date: new Date('2023-10-13'), description: 'Descripción corta 3', longDescription: lorem.generateParagraphs(1), estado: 'Industrial'},
    { id: 4, image:  Acer ,name: 'Practica en Acer', date: new Date('2023-10-14'), description: 'Descripción corta 4', longDescription: lorem.generateParagraphs(1), estado: 'Profesional'},
    { id: 5, image:  Usm ,name: 'Practica en USM', date: new Date('2023-10-15'), description: 'Descripción corta 5', longDescription: lorem.generateParagraphs(1), estado: 'Industrial'},
    { id: 6, image:  Acer ,name: 'Practicas en Acer', date: new Date('2023-10-16'), description: 'Descripción corta 6', longDescription: lorem.generateParagraphs(1), estado: 'Industrial'},
    { id: 7, image:  Acer, name: 'Practicas en Acer', date: new Date('2023-10-17'), description: 'Descripción corta 7', longDescription: lorem.generateParagraphs(1), estado: 'Industrial'},
    { id: 8, image:  HP , name: 'Practicas en HP', date: new Date('2023-10-18'), description: 'Descripción corta 8', longDescription: lorem.generateParagraphs(1), estado: 'Industrial' },
    { id: 9, image:  Acer, name: 'Practicas en Acer', date: new Date('2023-10-19'), description: 'Descripción corta 9', longDescription: lorem.generateParagraphs(1), estado: 'Profesional' },
    { id: 10, image:  Nescafe , name: 'Practicas en Nescafe', date: new Date('2023-10-20'), description: 'Descripción corta 10', longDescription: lorem.generateParagraphs(1), estado: 'Profesional' },
    { id: 11, image:  HP , name: 'Practicas en HP', date: new Date('2023-10-21'), description: 'Descripción corta 11', longDescription: lorem.generateParagraphs(1), estado: 'Profesional' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1 className='page__title'>Practicas Disponibles</h1>
      <div className='page'>
        <NavBar />

        <div className='content'>

          <div className='left-content'>
            <div className='user-info'>
              <img src={Icono} height={100} alt='user-icon' />
              <h3>Juan Carlos Bodoque</h3>
            </div>
          </div>

          <div className='right-content'>
            <div className='item-list-pdispon'>
              <ul>
                {items.map((item) => (
                  <li key={item.id} className='list-item'>
                    <div className='item-info'>
                      <img src={item.image} width={50} height={50} />
                          <h3>{item.name}</h3>
                          <h4>Fecha: {item.date.toDateString()}</h4>
                          {/* <button onClick={() => handleItemClick(item)}>Más información</button> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default ListPractice;
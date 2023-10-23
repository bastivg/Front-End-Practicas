import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import Icono from '../assets/usuario.png';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export const InternalPage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { id: 1, name: 'Juan Perez Soto', details: 'Realizando Practica Industral en: Nescafe', nota: "58", bitacoras: lorem.generateWords(500) },
    { id: 2, name: 'Claudio Aros', details: 'Realizando Practica Industral en: Soprole', nota: "88", bitacoras: lorem.generateWords(500) },
    { id: 3, name: 'Cristobal Martinez', details: 'Realizando Practica Industral en: HP', nota: "99", bitacoras: lorem.generateWords(500) },
    { id: 4, name: 'Valeria Rivas', details: 'Realizando Practica Industral en: Acer', nota: "46", bitacoras: lorem.generateWords(500) },
  ];

  return (
    <div>
      <h1 className='page__title'>Estado Practicas Alumnos</h1>

      <div className='page'>
        <NavBar />
        <div className='content'>
          <div className='left-content'>

            
            <div className='listnames-content'>
            
              <ul>
              <h2>Lista de Alumnos</h2>
                {students.map((student) => (
                  <li key={student.id}>
                    <button
                      onClick={() => setSelectedStudent(student)}
                      style={{ fontSize: '15px', marginBottom: '40px', background: "orange", color: "white", borderColor: "orange" }}
                    >
                      {student.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          <div className='right-content'>
            {selectedStudent && (
              <div className="student-details">
                <h2>Estado practica de {selectedStudent.name}</h2>
                <p>{selectedStudent.details}</p>
                <h2>Bitacoras</h2>
                {selectedStudent.showBitacoras ? (
                  <p>{selectedStudent.bitacoras}</p>
                ) : (
                  <button
                    onClick={() => setSelectedStudent({ ...selectedStudent, showBitacoras: true })}
                    style={{ background: 'gray', color: 'white', marginBottom: '10px'}}
                  >
                    Ver Bitacoras
                  </button>
                )}
                <h2>Nota Actual {selectedStudent.nota}</h2>
                <button onClick={() => setSelectedStudent(null)}>Cerrar</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalPage;

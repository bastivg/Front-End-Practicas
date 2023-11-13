import React from 'react'
import NavBar from '../components/nav_bar'
import Icono   from '../assets/usuario.png'
import { useNavigate } from 'react-router-dom';

export const access = () => {
    // Obtiene la función de navegación
    const navigate = useNavigate();
  
    // Función para manejar el clic en el botón de ingreso alumno
    const handleAlumnoClick = () => {
      // Aquí puedes agregar la lógica que necesitas antes de navegar
      // En este ejemplo, simplemente navegamos a la página '/list'
      navigate('/alumno');
    };
  
    // Función para manejar el clic en el botón de ingreso profesor
    const handleProfesorClick = () => {
      // Aquí puedes agregar la lógica que necesitas antes de navegar
      // En este ejemplo, simplemente navegamos a la página '/internal'
      navigate('/profesor');
    };
    return (
        <div>
        <h1 className='page__title'> Bienvenido a Practicas USM </h1>
        <div className='page'>
            <div className='content'>
                <button onClick={handleAlumnoClick}>Ingreso Alumno</button>
                <button onClick={handleProfesorClick}>Ingreso Profesor</button>
            </div>

        </div>
        </div>
    )
}

export default access

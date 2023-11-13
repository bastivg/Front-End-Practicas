import React from 'react'
import NavBar from '../components/nav_bar2'
import Icono   from '../assets/usuario.png'

export const home_profesor = () => {
  return (
    <div>
      <h1 className='page__title'> Inicio </h1>

      <div className='page'>
        <NavBar />
        <div className='content'>
          
          <div className='left-content'>
            <div className='user-info'>
                <img src={Icono} height={100} alt='user-icon' />
                <h3>Luis Chevia</h3>
            </div>
          </div>

          <div className='right-content'>
            <h2>Página de Inicio</h2>
          </div>

        </div>

      </div>
    </div>
  )
}

export default home_profesor

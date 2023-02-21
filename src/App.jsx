import { useEffect, useState } from 'react'
import{AddAPhoto, ExitToAppRounded, FavoriteRounded, Person} from "@mui/icons-material"
import { Modal } from './components/Modal';
import { IconButton } from '@mui/material';
import MenuContenedor from './components/MenuContenedor'
import Pin from './components/Pin'
import './App.css'


function App() {
  useEffect (()=>{
    const allIcon= document.querySelectorAll(".iconContenedor");

    function activarMenuActive () {
      allIcon.forEach((n) =>n.classList.remove("active"));
      this.classList.add ("active")
    }

    allIcon.forEach((n) =>n.addEventListener("click", activarMenuActive));
  }, []);
  
  return (
    <div className="App">

     
     
      <div className='contenedorMenu'>
      
        <img src="https://i.ibb.co/GRXcWmx/pinterest.png" alt="" className="logo" />

        <div className="subMenu">
          <div>
          <IconButton><MenuContenedor icon={<Person/>}/></IconButton>
          </div>
          <IconButton><MenuContenedor icon={<AddAPhoto/>}/></IconButton>
         
          <IconButton><MenuContenedor icon={<FavoriteRounded/>}/></IconButton>
          <div>
           
          </div>
          <div>
          <IconButton type='file'><MenuContenedor icon={<ExitToAppRounded/>}/></IconButton>
          </div>
        </div>
      </div>
      
      
      <div className='main'>

        <div className="buscadorBox">
          
          <input type="text" placeholder='Buscador.. '/>
          
          <div className="buscador">
            <img src="https://i.ibb.co/wh1NVxp/circulo-de-flecha.png" alt='' className='flecha'/>
          </div>
        </div>
        
        <div className="contenedorMain">
            <Pin pinSize={'small'}/>
            <Pin pinSize={'medium'}/>
            <Pin pinSize={'large'}/>
            <Pin pinSize={'small'}/>
            <Pin pinSize={'medium'}/>
            <Pin pinSize={'large'}/>
           
        </div>

      </div>

    </div>
  );
}

export default App

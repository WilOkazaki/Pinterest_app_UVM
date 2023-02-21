import React from 'react'
import{AddAPhoto, ExitToAppRounded, FavoriteRounded, Person} from "@mui/icons-material"
import MenuContenedor from './MenuContenedor'

import { IconButton } from '@mui/material';

function Pin({ pinSize }) {
  return (
    <div className={`pin ${pinSize}`}>
        
        <img className='mainPic' src='https://cdn.pixabay.com/photo/2019/10/31/06/58/path-4591121_1280.jpg' alt=''/>

        <div className='contenidoPin'>
            <h3>IMAGEN</h3>
            <div className="busqueda">
              <IconButton className='favorito'><MenuContenedor icon={<FavoriteRounded/>}/></IconButton>
            </div>
        </div>
    </div>
  )
}

export default Pin
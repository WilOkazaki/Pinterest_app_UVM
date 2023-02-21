import React from 'react'
import './modal_styles.css'
import{AddAPhoto, ExitToAppRounded, FavoriteRounded, Person} from "@mui/icons-material"
import MenuContenedor from './MenuContenedor'

export const Modal = () => {
  return (
    <div className='add_pin_modal'>
        <div className="add_pin_container">
            <div className="side" id='left_side'>

                <div className="section2">
                    <label htmlFor="upload_img" id='upload_img_label'>
                        <input type='file' name='upload_img' id='upload_img'/>
                            <div id='dotted_border'>
                                <MenuContenedor icon={<FavoriteRounded/>}/>
                                <div>Click to upload</div>
                                
                            </div>
                    </label>
                </div>

                <div className="section3">

                </div>

                <div className="section4">
                    
                </div>

            </div>

            <div className="side" id='right_side'>
                
            </div>
        </div>

    </div>
  )
}

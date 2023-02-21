import React from 'react'

function Pin({ pinSize }) {
  return (
    <div className={`pin ${pinSize}`}>

        <img className='mainPic' src='https://cdn.pixabay.com/photo/2019/10/31/06/58/path-4591121_1280.jpg' alt=''/>
    </div>
  )
}

export default Pin
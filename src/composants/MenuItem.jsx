import React from 'react'
import '../styles/MenuItem.css'
import { FaSpoon } from 'react-icons/fa6'

const MenuItem = (props) => {
  const {nom,prix,type,image }=props
  

  return (
    <div >
      <li>
          <div className='content-image'>
              <img src={image} alt={`${image}`} className='image-item'/>
              
          </div>
          <span className='menu-nom'>{nom}</span>
          <div className='menu-apart-nom'>
              <p className='prix-menu'><span style={{fontSize:"20px"}}>💶</span> {prix}$</p>
                <i className='fa fa-spoon' style={{marginLeft:"5px"}}></i><FaSpoon/> <span className='type-menu'> {type}</span>
          </div>
      </li>
      
    </div>
  )
}

export default MenuItem

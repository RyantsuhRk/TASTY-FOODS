import React,{useState} from 'react'
import Panier from './composants/Panier'
import Menu from './composants/Menu'
import './styles/AppResto.css'
import Contact from './composants/Contact'
import NavBar from './composants/NavBar'
import Copyring from './composants/Copyring'
import { Toaster } from 'react-hot-toast'

const AppResto = () => {
   const [panier,updatePanier]= useState([])

   const AddToPanier=(nom,prix)=>{
       const currentMenuAdd=panier.find((menu)=>menu.nom===nom)
       if(currentMenuAdd){
          const panierFilterMenu=panier.filter((menu)=>menu.nom !==nom)
          updatePanier([...panierFilterMenu, {nom,prix, amount:currentMenuAdd.amount +1}])
       }else{
          updatePanier([...panier, {nom, prix, amount:1}])
       }
       
   }



  return (
   <div className='Nos-resto'>
     <Toaster/>
     <div className='Header-App-Resto'>
       <NavBar/>
       <div className='Header-resto'>
           <div className='Panier-menu'>
              <div className='header-panier'>
                  <Panier panier={panier} updatePanier={updatePanier}/>
              </div>
              <div className='Menu-hidden'>
                 <div className='header-Menu '>
                    <Menu panier={panier} updatePanier={updatePanier} AddToPanier={AddToPanier}/>
                 </div>
              </div>
           </div>
           <div className='header-contact'>
               <Contact/>
           </div>
       </div>
       
       
     </div>
     <Copyring/>
   </div>
  )
}

export default AppResto

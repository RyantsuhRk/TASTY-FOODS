import React, { useState } from 'react'
import '../styles/Panier.css'

const Panier = (props) => {
    
  const [toogleMenu,setToogleMenu]= useState(true)
  const {panier,updatePanier} =props

  const total= panier.reduce((acc,menuType)=>acc+menuType.amount*menuType.prix, 0)

  const [addition,setAddition]=useState("")

    const ValiderCommande=()=>{
       const details=({
          panier:panier,
          total :total,
       })
       localStorage.setItem("Mes-Commande",JSON.stringify(details))
      setAddition(details)
      console.log(details)
      updatePanier([])
    }
 
  return (
    toogleMenu? (
    <div className='Panier-resto'>
     {panier.length > 0? (
      <div>
          <button onClick={()=>setToogleMenu(false)} className='btn btn-fermer-cart' >Fermer</button>
          <h2 className='panier-titre'>Mon Addition</h2>
          {panier.map(({nom,prix,amount})=>(
             <div key={nom} className='liste-de-commande'>
                
                <p><span className='menu-amount'>{amount}</span> {nom} de <span className='prix-cart'>{prix}$</span> </p>
                
             </div>   
          ))}
          <p className='Panier-total'>Total 💵+💵: <span className='total-prix'>{total}$</span> </p>
          <button onClick={()=>updatePanier([])} className='btn btn-vider-panier'>Vider le panier</button>

        <div className='btn-accepte-commande'>  
           <button className='btn btn-success btn-valider-cart' onClick={ValiderCommande} >Valider la Commande</button>
        </div>
      </div>
      ):(
         <h2 className='panier-faire-commande'>Faire votre Commande</h2>
       )
     }
    </div>
    ):(
    <div className='Panier-resto'>
             <button onClick={()=>setToogleMenu(true)} className='btn btn-ouvrer-cart' >Ouvrer</button>
             <h2 className='panier-fermer-titre'>Panier Fermer</h2>
    </div>

    )
  )
}

export default Panier 

import { useState } from 'react'
import { ListMenu } from '../datas/ListMenu'
import MenuItem from './MenuItem'
import '../styles/Menu.css'
import Categorie from './Categorie'



const Menu = (props) => {
  const {AddToPanier} =props;
  const [activeCategory, setActiveCategory] = useState('')

	const categories = ListMenu.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

  return (
    <div className='Menu-resto'>
         <Categorie categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        <div className='Menu-list'>
           <ul>
            {ListMenu.map(({id,nom,prix,type,image,category})=>
              !activeCategory || activeCategory === category? (
               <div key={id} className='menu-item'>
                 <MenuItem 
                   nom={nom} 
                   prix={prix} 
                   type={type} 
                   image={image}
                   AddToPanier={AddToPanier}
                   />
                  <div className='button-ajoute'>
                      <button className='btn btn-info-plus btn-sm' >Plus d'nfo</button>
                      <button className='btn-ajouter btn btn-sm px-2 btn-success' onClick={()=>AddToPanier(nom,prix)}>Ajouter</button>
                      
                  </div>
               </div>
              ):null
            )} 
           </ul>
        </div>
    </div>
  )
}

export default Menu

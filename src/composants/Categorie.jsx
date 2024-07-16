import React from 'react'
import '../styles/category.css'

const Categorie = (props) => {

   const  {setActiveCategory,categories,activeCategory} = props;
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='category-content text-center '>
      <div className='category-form'>
       <form  onSubmit={handleSubmit}>
          <div className='select-form'>
          <select className=' py-1 select-form' value={activeCategory} onChange={(e)=> setActiveCategory(e.target.value)}>
            <option value=''>Category</option>
              {categories.map((cat)=>(
                  <option key={cat}>
                       {cat}
                  </option>
              ))}
           </select>
          </div>
          <button type="submit" className='btn-reinitialiser-category '  onClick={() => setActiveCategory('')}>Réinitialiser</button>
          
       </form>
      </div>
    </div>
  )
}

export default Categorie

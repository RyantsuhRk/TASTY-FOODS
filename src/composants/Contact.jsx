import React, { useState } from 'react'
import '../styles/Contact.css'
import hotel from '../assets/hotelFond1.jpg'
import  {FaPhoneAlt} from 'react-icons/fa'
import toast from 'react-hot-toast'

const Contact = () => {

  const [details, setDetails]= useState({
      email:"",
      message:""
  })

  const handleChange=(e)=>{
     const {name,value}=e.target;
    setDetails({...details, [name]:value})
  }

   const handleSubmit=(e)=>{
     e.preventDefault()
     if(!details.email || !details.message){
      toast.error('un champ est vide');
     }else if(!details.email.includes('@')){
      toast.error('Adress Email non valide');
     }
     else
     {
      console.log(details);
     e.target.reset()
    }
   }
   
  return (
    <div className='hotel-contact'>
         <div className='footer-resto'>
            <div className='contact-content'>
              <p className='image-hotel-contact'><img src={hotel} alt="hotel"/></p>
               <h3 style={{color:'green'}}>Chez Notre Hôtel</h3>
               <p > ANTANANARIVO, Madagascar</p>
               <p > Itaosy, TANA 102</p>
               <p ><FaPhoneAlt style={{color:"blue",fontSize:'20px'}}/><a href="tel:+261 34 51 517 31" style={{textDecoration:'none'}}> 034 51 51 ...</a></p>
               <h4>Pour nous les gourmandes</h4>
              
          
            </div>
            <form className='form-contact' onSubmit={handleSubmit}>
                <p>Laisser ici votre Commentaire ainsi que votre Adresse e-mail</p>
               <div className='contact-input'>
                    <input type="mail" name="email" placeholder='votre Adress E-mail' className='form-control' onChange={handleChange}/>
               <textarea rows={4} placeholder='Votre message' name="message" className='form-control' onChange={handleChange}></textarea>
                    <button type="submit" className='btn btn-success form-control'>Valider</button>
               </div>
            </form>
         </div>
    </div>
  )
}

export default Contact

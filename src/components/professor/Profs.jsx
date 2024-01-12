import React from 'react'
import Cards from './Card';
import './profs.css'
import ProfsItem from './Data';

const Profs = () => {
  const list = ProfsItem.map((item)=>{
    return(
      <Cards 
        key={item.id} 
        name={item.name} 
        details={item.details} 
        photo={item.photo}
        link={item.link}
      />
    )
  })
  
  return (
    <div>
      <h1 className='heading'>Professors</h1>
      <div className='profs-container'>
        {list}
    </div>
    </div>
    

  )
}

export default Profs;

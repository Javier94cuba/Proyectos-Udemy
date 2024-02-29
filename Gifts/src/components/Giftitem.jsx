import React from 'react'

function Giftitem({item}) {
  return (
    <div className="border-2 p-4 mb-10 mt-10">
     <li className="mt-10 ">
     <p className='text-sm mb-10 mr-20'>{item.title}</p>
     <img className=' h-64' src={item.url} alt={item.title} /> 
     </li>
     </div> 
  )
}

export default Giftitem
import React from 'react'
import { useState } from 'react';
import Addcategory from './components/Addcategory';
import Giftgrid from './components/Giftgrid';
function GiftExpertApp() {

const [categories, setCategories] = useState(["One punch"]);

  return (
    <>
    <h2 className='text-center text-5xl mt-10'>App de Gift</h2>
  
    <h2>
      <Addcategory setCategories={setCategories}/>
    </h2>
    <div className=''>
        {
            categories.map(category => (
                <Giftgrid key={category} category={category}>
                </Giftgrid>
                ))
        }
    </div>
    </>
  )
}

export default GiftExpertApp


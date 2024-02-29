import React, { useState } from 'react'

function Addcategory({setCategories}) {

const [value, setvalue] = useState("")

const  handleinput = (e) =>{
setvalue(e.target.value);
}

const handlesubmit = (e) =>{
e.preventDefault();

if(value.trim().length > 2) {
    setCategories( cate => [value,...cate]);
    setvalue("");
}


}
  return (
    <form className='text-center' onSubmit={handlesubmit} action="">
    <input className='border-2 border-slate-700 mt-10 p-2 text-slate-900' 
    type="text"
    value={value}
    onChange={ handleinput} />
    </form>
  )
}

export default Addcategory
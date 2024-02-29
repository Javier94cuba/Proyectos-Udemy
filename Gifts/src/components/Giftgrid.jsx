import React, { useState,useEffect } from 'react'
import Giftitem from './Giftitem';

function Giftgrid({category}) {

useEffect(() => {
  getgifts();
}, [])

const [images, setimages] = useState([])

const getgifts = async () => {
const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=y2YBlX0lHV7H34rdR7d1TyeuWyf51kCt`
const resp= await fetch (url);
const {data}= await resp.json();

const gifs = data.map( img => {
    return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
}
})

setimages(gifs);
}
  return (
    <div>
        <h3 className='text-3xl mt-10 text-center'>{category}</h3>
                {           
                images.map( item => (
                    <div key={item.id} className=' p-3 w-96 inline-grid ml-20 items-center text-center'>
                    <Giftitem item={item}/>
                    </div>                 
                ))
                }   
        </div>
        )
}

export default Giftgrid
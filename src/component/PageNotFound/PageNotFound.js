import React from 'react';
 import { setTile } from '../Utilities/Titles';
const PageNotFound = () => {
    setTile("ScrapMetalSystem | Not Found Page")
 return (
<div>
  <div className='container my-5'>
  <h1 className='text-center text-capitalize'>error:404</h1>
  <p className='text-center text-lg'>
   <span className='text-md' style={{color:"red",fontSize:34}}>!oops</span> PageNotFound 
  <i class="fa fa-info-circle" aria-hidden="true"></i></p>
  <p className='text-center font-weight-bolder'>try to write page url correctly.</p>
  </div>
</div>
  )
}

export default PageNotFound

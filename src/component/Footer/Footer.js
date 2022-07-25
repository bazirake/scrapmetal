import React from 'react'
import './Footer.css';
import FontAwesome from 'react-fontawesome'
const Footer = ()=>{
return(
 <footer>
<section>

<div class="banner hidden-xs hidden-sm"> <img src="https://nyambika.com/public/photos/products/banner-long.jpg" alt=""  class="img-fluid"/></div>

</section>
<footer className='site-footer'>
 <div className='container'>
   <div className='row mb-5'>
   <div className='col-md-3'>
       <h2>Customer service</h2>
    <ul className='list-unstyled footer-link'>
     <li> <a href='#'>Help</a> </li>
     <li> <a href='#'>Contact us</a> </li>
     <li> <a href='#'>Delivery Information</a></li>
     <li> <a href='#'>Privacy &amp; Policy</a> </li>
     <li> <a href='#'>Advertisement</a> </li>
     <li> <a href='#'>Blog articles</a></li>
    </ul>
   </div>

   <div className='col-md-3'>
    <h2> Contact &amp; address</h2>
    <ul className='list-unstyled footer-link'>
    <li className='d-flex'>
        <span className='me-3'> Address</span>
        <span > 28 Avenu, Kigali, Rwanda</span>
    </li>
    <li className='d-flex'>
        <span className='me-3'> Tel:</span>
        <span > +250787124101</span>
    </li>
    <li className='d-flex'>
        <span className='me-3'> Email:</span>
        <span>bazirakeric1@gmail.com</span>
    </li>
    </ul>
   </div>
   <div className='col-md-3'>
       <h2>MY ACCOUNT</h2>
    <ul className='list-unstyled footer-link'>
     <li> <a href='#'>Seller login</a></li>
     <li> <a href='#'>Buyer Login</a></li>
     <li> <a href='#'>Seller Registration</a> </li>
     <li> <a href='#'>Buyer Registration</a> </li>
     
    </ul>
   </div>

    <div className='col-md-3'>
    <h2>Scrap metal system</h2>
    <ul className='list-unstyled'>
     <li> <a href='#'>About us</a></li>
     <li> <a href='#'>History</a></li>
     <li> <a href='#'>Scrap metal</a></li>
     <li> <a href='#'>Home</a></li>
     <li> <a href='#'>Site map</a></li>
     <div className='d-flex social'>
     <span>Follow us:</span>
     <li><a href={""}><span><FontAwesome  name='facebook'/></span></a></li>
     <li><a href='#'><span><FontAwesome  name='twitter'/></span></a></li>
     <li><a href='#'><span><FontAwesome  name='instagram'/></span></a></li>
     <li><a href='#'><span><FontAwesome  name='linkedin'/></span></a></li>
     <li><a href='#'><span><FontAwesome  name='youtube'/></span></a></li>
     <li><a href='#'><span><FontAwesome  name='whatsapp'/></span></a></li>
     </div>
    </ul>
    </div>
   </div>
   
  </div> 
</footer>
<section className='section-footer clearfix'>
<div className='container'>
  <div className='row justify-content-center align-items-center'>
    <div className='col pull-left'>
     <p className=' font-14'>
      Copyright &copy;2022  &nbsp;&nbsp;<span>Alrights reserved by <a href='https://https://universalbridge.rw.rw' className='text-white'>
      REMA </a></span> 
     </p>
    </div>
    <div className='col'>
    <ul class="list-unstyled d-flex payment pull-right">
            <li>
               <a href={"https://universalbridge.rw"}><img style={{height: 50}} src="https://nyambika.com/public/photos/content/card.png" /></a>
               </li>
               <li>
               <a href={"https://universalbridge.rw"}><img style={{height: 50}} src="https://nyambika.com/public/photos/content/visa.png" /></a>
             </li>
             <li>
              <a href={"https://universalbridge.rw"}><img style={{height: 50}} src="https://nyambika.com/public/photos/content/discover.png" /></a>
             </li>
             <li>
               <a href={"https://universalbridge.rw"}><img style={{height: 50}} src="https://nyambika.com/public/photos/content/american.png" /></a>
             </li>
             <li>
               <a href={"https://universalbridge.rw"}><img style={{height: 50}} src="https://nyambika.com/public/photos/content/paypal.png" /></a>
             </li>
            </ul>
    </div>
  </div>  
</div>
</section>
</footer>
  )
}
export default Footer

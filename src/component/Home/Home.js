import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
const Home = () => {
  return(
    <div>
<section>
<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <a href=''>
      <img src='./image/im1.jpg' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 >First scrap metal type</h1>
      </div>
      </a>
    </div>
    <div class="carousel-item">
      <a href=''>
      <img src='./image/im6.jpg' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Second scrap metal type</h1>
      </div>
      </a>

    </div>
    <div class="carousel-item">
      <a href=''>
      <img src='./image/im3.jpg' class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1>Second scrap metal type</h1>
      </div>
      </a>
    </div>
  </div>
  <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
</section>
<section>
<div class='container-fluid'>
   <div class='row my-2'>
     <div className='col-md-12'>
     <h4 class=" rounded border border-1  metal_header">FEATURED SCRAP METALS</h4>
     </div>
   </div>
   <div class='row g-3 my-1'>
  <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card box-shadow text-decoration-none  rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href='./image/im1.jpg'  className='card box-shadow text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card box-shadow text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card  bg-body rounded text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>

</div>


<div class='row g-3 my-1'>
  <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card box-shadow text-decoration-none  rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href='./image/im1.jpg'  className='card box-shadow text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card box-shadow text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
   <div className='col-12 col-md-6 col-lg-3'>
    <a href=''  className='card box-shadow text-decoration-none rounded-3'>
    <div className='card-body'>
     <h5 className='card-tile text-center'>picture1</h5>
     <img src='./image/im1.jpg' class='card-img-top'/>
      <p className='card-text d-flex flex-column'>
        <span class='font-italic'>This is zinc metal and it is quality</span>
        <span className='text-success'>10 piece(s)</span>
         </p>
      <span className='btn-info '>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
  </div>
  </a>
   </div>
</div>
<div class='row my-2 '>
  <div className='container'>
  <div className='row '>
  <div class="col-4 text-center"><h4 className='pl-5'><a href='' className='text-decoration-none metal_header '>CHOOSE YOUR SELLER PROVINCE</a></h4></div>
  <div class="col"><hr/></div>
  </div>
  <div className='row'>
   <div className='col'>
    <div>
      <ul className='d-flex flex-nowrap list_container g-0'>
    <li > 
    <img src='./image/f6.jpg' className='image_w image_h'/>
     <a className='anc' href=''>Western</a>
      </li> 
    <li>
      <img src='./image/f2.png' className='image_w image_h'/>
        <a href='' className='anc'>Eastern</a>
      </li> 
      <li>
      <img src='./image/f3.png' className='image_w image_h'/>
      <a href='' className='anc'>
        Southern
      </a>
      </li> 
      <li>
      <img src='./image/f5.png' className='image_w image_h'/>
         <a href='' className='anc'>
       Northern
      </a>
      </li> 
      <li>
      <img src='./image/f0.png' className='image_w image_h'/>
         <a href='' className='anc'>
        Kigali
      </a>
      </li> 
      </ul>

    </div>
   </div>
 </div>

  </div>
  </div>
</div>
</section>
</div>

)
}

export default Home

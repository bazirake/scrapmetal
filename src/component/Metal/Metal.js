import React from 'react';
import './Metal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Custom.css';
const Metal = () => {
  return (
   <div className='container main'>
    <div className='row'>
      <div className='container mt-5'>
        <div className='col-md-12'>
         <div className='row'>
           <div className='col-md-5 col-sm-6 col-xs-12'>
             <div className='slider-pro'>
               <div class="big-img" >
                <img src='./image/im1.jpg' />
              </div>
           </div>
          </div>
           <div className='col-md-7 col-sm-6 col-xs-12 '>
            <ul className=' breadcrumb breadcrumbs' >
            <li><a href="/" style={{color:'white'}}>
            <i><i class="fa fa-home"></i> Home</i></a></li>
            <li class="active" style={{color:'white',fontWeight:'bold'}}>
           <i><i class="fa fa-circle-o"></i> Details</i></li>
           </ul>
                 <div className='panel panel panel-default'>
                  <div className='panel-heading'>
                     <p className='font-14 mar-bot-0 my-word'>
                     <a class="btn my-btn" href="#" data-toggle="modal" data-target="#modal-order-confirm" style={{marginTop:2 ,marginRight:4}}>
                     <i class="fa fa-shopping-cart"></i></a>
                      <a data-toggle="modal" data-target="#not-login-modal" class="btn btn-infos" style={{marginRight:4}}>
                     <i class="fa fa-heart"></i></a>
                      <a class="btn my-btn" href="#" data-toggle="modal" data-target="#bulk-order" style={{marginTop: 0, marginRight: 10}}><i class="fa fa-list">
                        </i></a>  
                      <a id="prod-name" className='text-decoration-none font-bold' href="#" data-toggle="modal" data-target="#modal-order-confirm">Best Metal</a>        
                     </p>
                  </div>
                  <div className='panel-body'>
                    <div className='row'>
                      <div className='col-md-6'>
                      <div className='panel panel-default'>
                       <div className='panel-heading'>
                         Details
                      </div>
                     <div className='panel-body'>
                     <i class="fa fa-chevron-right"></i>
                      Total price:4454Frw
                      <p><i class="fa fa-chevron-right"></i> Category :<a href="/search/category/44">
                        <span id="prod-subcat" class="pink">&nbsp;Zinc</span></a></p>
                     </div>
                      </div>

                      <div className='panel panel-default'>
                       <div className='panel-heading'>
                         Content
                      </div>
                     <div className='panel-body'>
                       <span>Best Metal</span>
                     </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                     <div className='panel panel-default'>
                      <div className='panel-heading'>
                             Seller
                      </div>
                      <div className='panel-body'>
                      <p><i class="fa fa-chevron-right"></i>Seller:<span class="pink">&nbsp;Rutabingwa Regis<br/></span></p>
                        <p> <i class="fa fa-chevron-right"></i>Contact us:<span class="pink">&nbsp;0787124101</span></p>
                        <p> <i class="fa fa-chevron-right"></i>Mail us:<span class="pink">&nbsp;bazirake@gmail.com</span></p>
                        <center>
                        <a class="btn my-btn text-capitalize" href="#" data-toggle="modal" data-target="#modal-order-confirm">
                         <i class="fa fa-shopping-cart"></i> Add cart item</a>
                         <br/> 
                         <br/> 
                         <a href="/" class="btn-link ">Visit our store</a>
                        </center>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
               </div>

              <div className='row mb-2'>
                 <div className='container'>
                  <div className='feature clearfix'>
                  <p class="font-18 text-capitalize deals pull-left">
                      <span class="font-bold my-word ">Related Metals</span>
                       &nbsp;<a title="Scrap metal system" href="/" class="btn ml-34 my-btn text-capitalize">
                           <i class="fa fa-shopping-cart">
                      </i> View whole collection</a></p>
                  </div>
                 </div>
                </div>
                <hr/>

                <div class='row  g-3 my-1'>
                <div className='col-12 col-md-6 col-lg-3'>
               <a href='/metal'  className='card box-shadow text-decoration-none  rounded-3'>
                <div className='card-body'>
                <h5 className='card-tile text-center'>picture1</h5>
               <img src='./image/im1.jpg' class='card-img-top img-23'/>
              <p className='card-text d-flex flex-column'>
             <span class='font-italic'>This is zinc metal and it is quality</span>
            <span className='text-success'>10 piece(s)</span>
         </p>
            <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
             </div>
              </a>
               </div>

               <div className='col-12 col-md-6 col-lg-3'>
               <a href='/metal'  className='card box-shadow text-decoration-none  rounded-3'>
                <div className='card-body'>
                <h5 className='card-tile text-center'>picture1</h5>
               <img src='./image/im1.jpg' class='card-img-top img-23'/>
              <p className='card-text d-flex flex-column'>
             <span class='font-italic'>This is zinc metal and it is quality</span>
            <span className='text-success'>10 piece(s)</span>
            </p>
           <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
             </div>
            </a>
           </div>
           <div className='col-12 col-md-6 col-lg-3'>
               <a href='/metal'  className='card box-shadow text-decoration-none  rounded-3'>
                <div className='card-body'>
                <h5 className='card-tile text-center'>picture1</h5>
               <img src='./image/im1.jpg' class='card-img-top img-23'/>
              <p className='card-text d-flex flex-column'>
             <span class='font-italic'>This is zinc metal and it is quality</span>
            <span className='text-success'>10 piece(s)</span>
            </p>
           <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
             </div>
            </a>
           </div>
          
           <div className='col-12 col-md-6 col-lg-3'>
               <a href='/metal'  className='card box-shadow text-decoration-none  rounded-3'>
                <div className='card-body'>
                <h5 className='card-tile text-center'>picture1</h5>
               <img src='./image/im1.jpg' class='card-img-top img-23'/>
              <p className='card-text d-flex flex-column'>
             <span class='font-italic'>This is zinc metal and it is quality</span>
            <span className='text-success'>10 piece(s)</span>
            </p>
           <span className='btn-info'>Shop now<FontAwesomeIcon icon={faArrowRight} /></span>
             </div>
            </a>
           </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Metal

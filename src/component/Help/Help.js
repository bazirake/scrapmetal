import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTile } from '../Utilities/Titles';
import './Help.css';
import { faArrowRight,faBaseball} from '@fortawesome/free-solid-svg-icons';
const Help = () => {
  setTile("ScrapMetalSystem | Contact us")
  return (
    <div class='container-fluid'>
      <div className='container'>
        <div className='row'>
         <span className='contact'>Contact us</span>
        </div>
        <div className='row'>
         <div className='col-md-6'>
             <div className='d-flex flex-column'>
              <section>
              <p>Our contacts</p>
               <ul>
                <li  className='list-unstyled '><i className='fa fa-globe text-info '></i><span className='list-space'>scrapmetalrecycling.com</span></li>
                <li  className='list-unstyled '><i className='fa fa-facebook text-info'></i> <span className='list-space'>scrapmetalrecycling</span></li>
                <li  className='list-unstyled '> <i className='fa fa-phone text-info'></i><span className='list-space'>+250787124101</span> </li>
                <li  className='list-unstyled '><i className='fa fa-youtube text-info'></i> <span className='list-space'>scrapmetal</span></li>
                <li  className='list-unstyled '><i className='fa fa-twitter text-info'></i> <span className='list-space'>scrapmetals</span></li>
                <li  className='list-unstyled '><i className='fa fa-linkedin text-info'></i> scrapmetal</li>
              </ul>
              </section>
              <section>
                <p>Location</p>
                <ul >
                <li className='list-unstyled'>Kigali, Rwanda</li>
                <li className='list-unstyled'>Nyamirambo</li>
                <li className='list-unstyled'>Voisine House,1stfloor</li>
                <li className='list-unstyled'>Opposite to King sport ltd</li>
              </ul>
              </section>
             </div>
         </div>
         <div className='col-md-6'>
         <ul className=' breadcrumb breadcrumb-help' >
            <li><a href="/" style={{color: 'white'}}>
            <i><i class="fa fa-home"></i> Home</i></a></li>/
            <li class="active" style={{color: 'white',fontWeight: 'bold'}}>
           <i><i class="fa fa-question-circle-o" aria-hidden="true"></i>Help</i></li>
           </ul>
      <div class="my-title">
       <i class="fa fa-envelope"></i>Leave a message</div>
        <hr/>
        <div>
          <form method='post' className='row'>
           <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
             
            <input type='text' name='name' placeholder='Name' className='form-control mb-2'/>
            <input type='email' name='name' placeholder='Email' className='form-control mb-2'/>
         </div>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <input type='phone' name='name' placeholder='Phone' className='form-control mb-2'/>
            <input type='text' name='name' placeholder='Subject' className='form-control mb-2'/>
         </div>
         <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <textarea className='form-controls' placeholder='Text message here'>
          </textarea>
           </div>
           <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="pull-right">
             <button type="button" class="btn my-btn small"><i class="fa fa-paper-plane-o"></i> Send</button>
             </div>
           </div>
        </form>
        </div>
       </div>
        </div>
      </div>
      </div>
  )
}
export default Help

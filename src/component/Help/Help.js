import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Help.css';
import { faArrowRight,faBaseball} from '@fortawesome/free-solid-svg-icons';
const Help = () => {
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
                <li  className='list-unstyled '><i className='fa fa-globe'></i>scrapmetalrecycling.com</li>
                <li  className='list-unstyled '><i className='fa fa-facebook'></i> scrapmetalrecycling</li>
                <li  className='list-unstyled '> <i className='fa fa-phone'>+250787124101</i></li>
                <li  className='list-unstyled '><i className='fa fa-youtube'></i> scrapmetal</li>
                <li  className='list-unstyled '><i className='fa fa-twitter'></i> scrapmetal</li>
                <li  className='list-unstyled '><i className='fa fa-linkedin'></i> scrapmetal</li>
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

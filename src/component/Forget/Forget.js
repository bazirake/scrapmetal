import React from 'react';
import { setTile } from '../Utilities/Titles';
import './Forget.css';
const Forget = () => {
  setTile("ScrapMetalSystem | Forgetpassword")
  return(
  <div className='container'>
   <div className='row'>
     <div className='col-lg-4 mx-auto col-md-6 col-sm-12 col-xs-12 my-4'>
      <div className='panel panel-default'>
       <div className='panel-body'>
         <div className='row'>
          <center>
           <div class="user-icon-login"><i class="fa fa-user"></i></div>
            <div class="my-title">User</div>
            </center>
          </div>
          <br/>
         <form id="forgot_password" action="search" class="row" name="contactform" method="post">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <input type="email" name="usermail" id="usermail" class="form-control form-input" placeholder="Email" required=""/><br/>
            </div>
             <div class="clearfix"></div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div id="errorBoxForgot"></div>
                     <br/>
                    <a href="/login" className='text-decoration-none'><span class="label label-default defaults" style={{fontSize:11}}><span class="fa  fa-question " aria-hidden="true"></span> Remember password?</span></a>
                        <div class="pull-right">
                            <button id="customerForgot" type="button" class="btn-custom btn-primary btn-md">
                                <i class="fa fa-envelope"></i> Send
                            </button>
                        </div>
                    </div>
                  <div class="alert alert-default pull-right" style={{fontSize:11}}>
                <span class="fa fa-info-sign" aria-hidden="true"></span>  I am not yet registered, 
              <a href="/register"><label class="links" style={{fontSize:14}}><span class="fa fa-pencil" aria-hidden="true"></span>  Register Now</label></a></div>
             </form>
          </div>
       </div>
    </div>
  </div>
 </div>
  )
}

export default Forget

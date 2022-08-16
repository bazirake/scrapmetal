import React from 'react';
import { setTile } from '../Utilities/Titles';
import { useParams } from 'react-router-dom';
import './Login.css';
const Login = () =>{
  const {title}=useParams();
 setTile("ScrapMetalSystem | SignIn")
  return (

    <div className='container'>
            <ul className=' breadcrumb breadcrumb-login' >
            <li><a href="/" style={{color: 'white'}}>
            <i><i class="fa fa-home"></i>Home</i></a></li>
            <li class="active" style={{color: 'white',fontWeight: 'bold'}}>
           <i><i class="fa fa-question-circle-o" aria-hidden="true"></i>Login</i></li>
           </ul>
        
    <div className='row px-3'>
     <div className='col-lg-5 col-xlg-5 my-4 card cards flex-row mx-auto px-0'>
       <div className='card-body card_b  '>

        <center>
          <div class="user-icon-login"><i class="fa fa-user"></i></div>
          <div class="my-title">Account</div>
        </center>
          <form className='form-box px-3'>
            <div className='form-input'>
            <span><i className='fa fa-envelope-o'></i></span>
            <input type='email' name='email' placeholder='Email'tabIndex='10' required />
            </div>
           <div className='form-input'>
            <span><i className='fa fa-key'></i></span>
            <input type='password' name='password' placeholder='Password' tabIndex='10' required />
            </div>
            <div className='mb-2'>
              <div className='custom-control custom-checkbox'>
                <input type='checkbox' className='custom-control-input' id='cb1' name=''/>
                <label className='custom-control-label' for='cb1'>Remember me</label>
              </div>
            </div>
            <div className='mb-2'>
              <button type='submit' className='btn btn-block '>
              <span><i className='fa fa-sign-in'></i></span> Login
              </button>
            </div>
            <div className='text-right'>
               <a href='/forget-password' className='forget-link'>Forget password?</a>
            </div>
            <div className='text-center mb-2'> or login </div>
            <div className='row mb-2 gutter-0 d-flex flex-row'>
              <div className='col-4'>
                <a href='facebook.com' className='btn  btn-social btn-facebook'>
                  <i className='fa fa-facebook'>Facebook</i>
                </a>
              </div>
              <div className='col-4'>
                <a href='google.com' className='btn  btn-social btn-google'>
                <i className='fa fa-google'>Google</i>
                </a>
              </div>
              <div className='col-4'>
                <a href='twitter.com' className='btn  btn-social btn-twitter'>
                <i className='fa fa-twitter'>Twitter</i>
                </a>
              </div>
            </div>
            <hr className='my-2'/>
            <div className='text-center mb-2'>
                Don't have  account?
                <a href='/register' className='register-link'>Create account</a>
            </div>
          </form>
       </div>
     </div>
    </div>
  </div>
  )
}

export default Login

import React,{useEffect,useState,useRef} from 'react';
import { setTile } from '../Utilities/Titles';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './Register.css';
const Register=()=>{   
  const {title}=useParams();
setTile("ScrapMetalSystem | Register")
const phoneRef =useRef(null);
const cpasswordRef=useRef(null);
const passwordRef = useRef(null);
const emailRef= useRef(null);
const nameRef= useRef(null);
const genderRef= useRef(null);
const regionRef=useRef(null);
const [serverResponse,setRespo]=useState({})
const[formError,setError]=useState({});
const[isSubmit,setSubmit]=useState(false);
const[userData,setUserData]=useState({
   role:"",
   region:"",
   gender:"",
   phone:"",
   names:"",
   usermail:"",
   password:"",
   confpassword:""
  });

  function handleData(e){
   const newData={...userData};
   newData[e.target.id]=e.target.value
   setUserData(newData);
  }
  
  const validateForm=(values)=>{
  const errors={};
    if(!values.role){
      errors.role="*Role is required";
     }
    if(!values.region){
      errors.region="*Region is required";
    }
    if(!values.phone){
       errors.phone="*Phone is required";
    }
    else if(values.phone.length <10){
      errors.phone="*Phone should not be less than 10 digits";
    }
    else if(values.phone.length >10){
      errors.phone="*Phone should not be greater than 10 digits";
    }
    else if(!validatePhone(values.phone))
     {
       errors.phone="* Invalid Phone please! ";
     }
    if(!values.names){
       errors.names="*Name is required";
    }
    if(!values.confpassword)
    {
      errors.confpassword="*Confirm password is required";
    }
    else if(values.password !== values.confpassword){
      errors.confpassword="*Password does not match";
    }
    if(!values.usermail){                 
      errors.usermail="*Email is required";
    }
    else if(!validateEmail(values.usermail)){
      errors.usermail="* invalid  Email  please!";
    }
    if(!values.gender){                 
      errors.gender="*Gender is required";
    }
    if(!values.password){
      errors.password="*Password is required";
    }
    else if(values.password.length < 4)
    {
      errors.password="*Password  can not be less than 4 characters";
    }
    else if(values.password.length > 8)
    {
      errors.password="*Password  can not be greater than 8 characters";
    }
    return errors;
  }

  useEffect((e)=>{
   if(Object.keys(formError).length===0 && isSubmit)
     {
   
     }

    },[formError,isSubmit]);
   const validateEmail=(email)=>
    {
    return /\S+@\S+\.\S+/.test(email);
    }
    const validatePhone=(phone)=>{
      const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
      return regex.test(phone);
    }
    const submitUser=(e)=>{
     e.preventDefault();
     setError(validateForm(userData));  
     setSubmit(true); 
     let numErr=Object.keys(validateForm(userData)).length;
     if(numErr===0)
     {
        emailRef.current.value="";
        passwordRef.current.value="";
        cpasswordRef.current.value="";
        nameRef.current.value="";
        genderRef.current.value="";
        phoneRef.current.value="";
        regionRef.current.value="";
        const reMessage={};
       Axios.post("/user",userData).then((res)=>{
        reMessage.message=res.data
        setRespo(reMessage)
         })
       .catch((err)=>{
         reMessage.message=err.response.data
        setRespo(reMessage)
       }
    
       )
        setUserData({});
     }
   }

  return(
    <div className='container'>
     <ul className=' breadcrumb breadcrumb-register' >
         <li><a href="/" style={{color:'white'}}>
         <i><i class="fa fa-home"></i>Home</i></a></li>
         <li class="active" style={{color: 'white',fontWeight: 'bold'}}>
         <i><i class="fa fa-question-circle-o" aria-hidden="true"></i>Register</i></li>
      </ul>
    <div className='row'>
     <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12 mx-auto my-3'>
       <div className='panel panel-default'>
    <div className='panel-heading'>
    <div class="row rows">
     <div class="col-md-7"><h4 className='user-account'><i class="fa fa-user"></i>User Registration</h4></div>
    <div class="col-md-5">
     <div class="pull-right">
      <span class="fa fa-info-circle" aria-hidden="true">
      </span>  I am already registered, <a href="/login" className='text-decoration-none'>
          <span class="label label1 label-default">
      <span class="fa fa-sign-in" aria-hidden="true"></span>  Login Now</span></a></div>
         </div>
       </div>
       </div>
       <div className='panel-body'>
        <form className='row' onSubmit={submitUser}>
         <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
          <div className='row'>
           <div className='col-md-6'>
           <div className='panel panel-default'>
             <div className='panel-heading'>
               Personal Information
               </div>
              <div className='panel-body'>
                <div className='row g-0 mb-2'>
                  <label className='col-4'>TradeRole:</label>
                   <div className='col-8'>
                  <label for='buyer'><input type='radio' id='role'  onChange={(e)=>handleData(e)} value='buyer' name='user'/> <span className='p-2'>Buyer</span></label>
                  <label for='seller'><input type='radio' id='role'  onChange={(e)=>handleData(e)} value='seller' name='user'/><span className='p-2'>Seller</span> </label>
                  <label for='both'><input type='radio' id='role'  onChange={(e)=>handleData(e)} value='both' name='user'/><span>Both</span> </label>
                  </div>
                   <span className='error'>{formError.role}</span>
                  </div>   
                 <select ref={regionRef} name="region" id="region" onChange={(e)=>handleData(e)} class="form-control form-inputs">
                   <option value="">Select Region</option>
                   <option value="West">West</option>
                   <option value="East">East</option>
                   <option value="North">North</option>
                   <option value="South">South</option>
                   <option value="Kigali">Kigali</option>
                  </select>
                    <span className='error'>{formError.region}</span>
                   <br/>
                 <input ref={nameRef} type="text" name="names" onChange={(e)=>handleData(e)} id="names" value={userData.names} class="form-control form-inputs" placeholder="Your names"/>
                 <span className='error'>{formError.names}</span>
                 <br/>
                  <select ref={genderRef} name="gender" id="gender" onChange={(e)=>handleData(e)} class="form-control form-inputs">
                  <option value="">Select gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                  <option value="Other">Other</option>
                   </select>
                     <span className='error'>{formError.gender}</span>
                   <br/>
                    <input ref={phoneRef} type="text" name="phone" id="phone" onChange={(e)=>handleData(e)} value={userData.phone} class="form-control form-inputs" placeholder="Phone"/>  
                    <span className='error'>{formError.phone}</span>             
                   </div>
                  </div>
              </div>
              <div className='col-md-6'>
               <div className='card '>
               <div className='card-header'>
                Account Information
              </div>
             <div className='card-body'>
             <input ref={emailRef} type="text" name="usermail"  onChange={(e)=>handleData(e)}
             id="usermail" class="form-control form-inputs" placeholder="Email"/>
             <span className='error'>{formError.usermail}</span>
             <br/>
             <input ref={passwordRef} type="password" name="password" onChange={(e)=>handleData(e)}
             id="password" class="form-control form-inputs" placeholder="Password"/>
             <span className='error'>{formError.password}</span>  
             <br/>
             <input ref={cpasswordRef} type="password" name="passwords"  onChange={(e)=>handleData(e)}
             id="confpassword" class="form-control form-inputs" placeholder="Comfirm Password"/>
             <span className='error'>{formError.confpassword}</span>
             </div>
             </div>
             </div>
             </div>   
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <input type="checkbox" name="accept" checked required="" className='my-3'/>
                 <span className='mx-3'>Iaccept</span>
                 <a href="terms" className='text-decoration-none term'>Terms and Conditions</a>
                </div>
              <div id="errorBoxCustomer">
                 {serverResponse.message}
              </div>
              <div class="pull-right">
              <button type="submit" class="btn-custom btn-primary btn-md">
                <span class="fa fa-pencil" aria-hidden="true"></span> Register
                </button>
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

export default Register

import React,{useState} from 'react'
import {validateEmail} from '../Shared/Helper'
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import { useDispatch } from 'react-redux';
import { USER_TYPES } from '../store/types';

function login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [emailError, setEmailError] = useState('');
    const [pwdError, setPwdError] = useState('');

    const validateData = () =>{
            if(email === ''){
                setEmailError('Field cannot be empty');
            } else if(!validateEmail(email)) {
                setEmailError('Invalid email');
            } else {
                setEmailError('');
            }
            if(pwd === ''){
                setPwdError('Field cannot be empty');
            } else {
                setPwdError('');
            }
            submitData();
    }

    const submitData = () =>{
        if(emailError === '' && pwdError === '' ){
            console.log('Login method', email ,' ', pwd);
            //login method
            //notification
            //page forward

            let userdata ={
                email:email,
            }

            dispatch({
                type: USER_TYPES.SET_USER,
                payload: {
                  isAuthenticated: true,
                  user: userdata,
                },
              });
              window.location.href = '/';
            
        } else{
            return;
        }
    };

  return (
      <>
        <Navbar />
        <div className='m-auto justfy-center w-10/12  md:w-1/2'>
          <h1 className='m-2 text-2xl'>Login</h1>
          <div className=' flex flex-col'>
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={email}
                  type='text'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)} />
              {emailError && <p className='m-2 text-red-600'>{emailError}</p>}
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={pwd}
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPwd(e.target.value)} />
              {pwdError && <p className='m-2 text-red-600'>{pwdError}</p>}
              <button
                  className=' text-white mx-16 my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500'
                  type='submit'
                  onClick={() => validateData()}>Login</button>
          </div>
          <div className='w-full text-center md:text-right'>
              <Link href={'/register'} passHref>New User Register From Here...!!</Link> </div>
      </div></>
  )
}

export default login
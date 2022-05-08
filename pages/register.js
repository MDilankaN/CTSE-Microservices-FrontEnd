import React,{useState} from 'react'
import Link from 'next/link';
import {validateEmail} from '../Shared/Helper'
import Navbar from '../Components/Navbar';

function register() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [rePwd, setRePwd] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');


    const [emailError, setEmailError] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [rePwdError, setRePwdError] = useState('');
    const [fnameError, setFNameError] = useState('');
    const [lnameError, setLNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [addressError, setAddressError] = useState('');

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

            if(rePwd === ''){
                setRePwdError('Field cannot be empty');
            } else if (rePwd === pwd) {
                setRePwdError(`Passwords aren't matching`);
            } else {
                setRePwdError('');
            }

            if(fname === ''){
                setFNameError('Field cannot be empty');
            } else {
                setFNameError('');
            }
            if(lname === ''){
                setLNameError('Field cannot be empty');
            } else {
                setLNameError('');
            }


            if(age === ''){
                setAgeError('Field cannot be empty');
            } else {
                setAgeError('');
            }
            if(address === ''){
                setAddressError('Field cannot be empty');
            } else {
                setAddressError('');
            }
            submitData();
    }

    const submitData = () =>{
        if(emailError === '' && rePwdError === '' && fnameError === ''  && lnameError=== '' && ageError === '' && addressError === ''){
            console.log('Login method', email ,' ', pwd);
            //register method
            //notification
            //page forward
        } else{
            return;
        }
    };

  return (
      <>
      <Navbar />
      <div className='m-auto justfy-center w-1/2'>
          <h1 className='m-2 text-2xl'>Register</h1>
          <div className=' flex flex-col'>
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={fname}
                  type='text'
                  placeholder='First Name'
                  onChange={(e) => setFName(e.target.value)} />
              {fnameError && <p>{fnameError}</p>}
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={lname}
                  type='text'
                  placeholder='Last Name'
                  onChange={(e) => setLName(e.target.value)} />
              {lnameError && <p>{lnameError}</p>}
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={age}
                  type='number'
                  placeholder='Age'
                  onChange={(e) => setAge(e.target.value)} />
              {ageError && <p>{ageError}</p>}
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={address}
                  type='text'
                  placeholder='Address'
                  onChange={(e) => setAddress(e.target.value)} />
              {addressError && <p>{addressError}</p>}

              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={email}
                  type='text'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)} />
              {emailError && <p>{emailError}</p>}

              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={pwd}
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPwd(e.target.value)} />
              {pwdError && <p>{pwdError}</p>}
              <input
                  className='m-2 rounded-md border-2 border-blue-400 p-2'
                  value={rePwd}
                  type='password'
                  placeholder='Re-enter Password'
                  onChange={(e) => setRePwd(e.target.value)} />
              {rePwdError && <p>{rePwdError}</p>}
              <button
                  className=' text-white mx-16 my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500'
                  type='submit'
                  onClick={() => validateData()}>Login</button>
          </div>

          <div className='w-full text-right'>
              <Link href={'/login'} passHref>Already a User Login From Here...!!</Link> </div>
      </div></>
  )
}

export default register
import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Notification({Header,Message,type, Show}) {

  const [display, setdisplay] = useState(Show);

  const closePopUp = () =>{
    setdisplay(false);
  }



  return (
    <div className={display ? 'block fixed top-2 right-2 p-4 bg-white rounded border border-black-600' : 'hidden'}>
        <div className={`relative ${type == 'success' ? 'text-blue-800' : 'text-rose-800'}`}>
            <div className='absolute -top-4 -right-2' onClick={closePopUp}><FontAwesomeIcon icon={faXmark}/></div>
            <div>{Header}</div>
            <div>{Message}</div>
        </div>

    </div>
  )
}

export default Notification
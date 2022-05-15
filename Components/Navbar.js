import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';


function Navbar() {
  
  const { user } = useSelector((store) => store?.user);

  useEffect(() => {
    setloggedIn(user?.isAuthenticated);
  }, [user])
  

  const [loggedIn, setloggedIn] = useState(user?.isAuthenticated)

  return (
    <div className='flex flex-row px-8 py-4 bg-sky-700 justify-between text-white mb-4'>
        <div className='cursor-pointer'>
          <Link href={'/'}>Logo</Link></div>

    {loggedIn ? (
            <div className='flex flex-row'>
              <div className='mx-2 cursor-pointer'>
                <Link href={'/profile'}>Profile</Link>
              </div>
              <div className='mx-2 cursor-pointer'> 
                <Link href={'/cart'}>Cart</Link>
              </div>
            </div>
    ) : (
      <div>
        <div> 
          <Link href={'/login'}>Login</Link>
        </div>
      </div>
    )}

    </div>
  )
}

export default Navbar
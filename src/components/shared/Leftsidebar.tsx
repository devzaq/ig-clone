import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext'


const Leftsidebar = () => {
  const {mutate: signOut, isSuccess} = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();
  useEffect(
    ()=>{
      if(isSuccess) navigate(0)  
    },[isSuccess]
  )

  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
        <Link to="/" className='flex gap-3 items-center'>
            <img
              src="/assets/images/logo.svg"
              alt='logo'
              width={170}
              height={36}
            />
          </Link>
          <Link to={`/proflie/${user.id}`} className='flex gap-3 items-center' >
            <img
              src={user.imageUrl || "/assets/images/profile.png"} 
              alt='profile' 
              className='h-14 w-14 rounded-full'
              />
            <div className='flex flex-col'>
                <p className='body-bold'>
                  {user.name}
                </p>
            </div>
          </Link>
      </div>
    </nav>
  )
}

export default Leftsidebar
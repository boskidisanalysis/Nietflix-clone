'use client';

import React, { useCallback, useState } from 'react'
import Input from '../components/Input'
// import Image from 'next/image';
import axios from 'axios';


const Page = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant]= useState('login')
  const toggleVariant = useCallback(()=> {
    setVariant((currentVariant)=> currentVariant == 'login'? 'register' : 'login')
  }, [])

  const register = useCallback(
    async () => {
      try {
        await axios.post('/api/register', {
          email,
          name,
          password
        })
      } catch (error) {
        console.log(error)
      }
    },
    [email, name, password],
  )
  

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
        <div className="bg-black h-full w-full lg:bg-opacity-50">
            <nav className="px-12 py-7">
                {/* <Image src="/images/logo.png" alt="logo" width={60} height={60}/> */}
                <img src="/images/logo.png" alt="logo" className='h-8 w-24 ml-4' />
            </nav>
            <div className="flex justify-center">
              <div className='bg-black bg-opacity-70 px-16 py-12 self-center mt-2 lg:w-2/5 lg:max-w-md rounded w-full'>
                <h2 className="text-white text-4xl mb-8 font-semibold">{variant==='login'?'Login':'Register'}</h2>
                <div className='flex flex-col gap-4'>
                  {variant=='register' && (
                  <Input 
                    label='Username'
                    onChange={(e :any) => setName(e.target.value)}
                    id='name'
                    
                    value={name}
                  />
                  )}
                   <Input 
                    label='Email'
                    onChange={(e :any) => setEmail(e.target.value)}
                    id='email'
                    type='email'
                    value={email}
                  />
                   <Input 
                    label='Password'
                    onChange={(e :any) => setPassword(e.target.value)}
                    id='password'
                    type='password'
                    value={password}
                  />
                </div>
                <button onClick={register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                  {variant == 'login'? 'Sign In': 'Create an account'}
                </button>
                <p className="text-neutral-500 mt-12">
                  {variant=='login'? 'First time using Nietflix?' : 'Already have an account?'}
                  <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                  {variant != 'login'? 'Sign In': 'Create an account'}
                  </span>
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Page
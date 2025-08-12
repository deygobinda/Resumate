import {  SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex justify-center items-center my-20'>
      <SignUp
      signInUrl='/auth/sign-in'
      />
    </div>
  )
}

export default SignUpPage

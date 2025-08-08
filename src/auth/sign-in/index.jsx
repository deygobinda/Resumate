import { Button } from '@/components/ui/button'
import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SingInPage = () => {
  return (
    <div className='flex justify-center items-center my-20'>
      <SignIn/>
    </div>
  )
}

export default SingInPage

import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'

const Home = () => {
  
  return (
    <div >
      <Header/>
      Landing Screen
      <Button>
        <SignOutButton/>
      </Button>
    </div>
  )
}

export default Home

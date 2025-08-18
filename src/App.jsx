import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'

function App() {

  const {user , isSignedIn,isLoaded} = useUser()

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sign-in'}/>
  }

  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster />
    </>
  )
}

export default App

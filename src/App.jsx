import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react'

function App() {

  const {user , isSignedIn,isLoaded} = useUser()

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sing-in'}/>
  }

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App

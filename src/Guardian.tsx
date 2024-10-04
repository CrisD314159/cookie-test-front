
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useStatusStore } from "./store/store";
import {Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard.tsx'
import SignUp from './pages/SignUp.tsx'
import Login from "./Login.tsx";




const ProtectedRoutes = ({children}:{children: JSX.Element}) =>{
  const isAuthenticaded = useStatusStore((state)=> state.authStatus)
  console.log(isAuthenticaded);
  if(!isAuthenticaded){
    return <Navigate to={'/login'} replace/>
  }

  return children
}
const RedirectRoutes = ({children}:{children: JSX.Element}) =>{
  const isAuthenticaded = useStatusStore((state)=> state.authStatus)
  console.log(isAuthenticaded);
  if(isAuthenticaded){
    return <Navigate to={'/'} replace/>
  }

  return children
}



export default function Guardian() {
  const isLoading = useStatusStore((state)=> state.isLoading)
  const checkAuthStatus = useStatusStore((state)=> state.checkAuthStatus)
  useEffect(()=>{
    checkAuthStatus()
  },[checkAuthStatus])

  if(isLoading){
    return <h1>Loading...</h1>
  }
  return <div>
    <Routes>
      <Route  path="/" element={
        <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>}>
      </Route>
      
      <Route path="/login" element={
        <RedirectRoutes>
          <Login />
        </RedirectRoutes>
        } />

      <Route path="/signUp" element={
        <RedirectRoutes>
          <SignUp />
        </RedirectRoutes>
        } />

    
      </Routes>
  </div>

}


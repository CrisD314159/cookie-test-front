

import './App.css'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { login } from './api/queries'
import { useStatusStore } from './store/store'




function Login() {
  const navigate = useNavigate()
  const {setIsLoggedIn} = useStatusStore()

  const mutation = useMutation({
    mutationFn: login,
    onSuccess:()=>{
      console.log('login success');
      setIsLoggedIn()
      
    },
    onError:()=>{
      console.log('login error');
    }
  })

  const handleClick = () => {
    mutation.mutate()
    navigate('/')

  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Iniciar Sesión DEMO</button>

      </div>
    </>
  )
}

export default Login

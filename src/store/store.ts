import { create } from "zustand";

interface authState {
  authStatus: boolean,
  isLoading: boolean,
  error: Error | string ,
  checkAuthStatus: ()=>Promise<void>
  setIsLoggedIn: ()=>void
}

export const useStatusStore =create<authState>((set)=>({
  authStatus: false,
  isLoading:false,
  error:"No errors",

  checkAuthStatus: async ()=>{
    set({isLoading:true})
    try {
      const response = await fetch('https://stiff-willi-testing-account-a1354a74.koyeb.app/api/check-auth',{
        credentials: 'include'
      })
      if (response.status === 200) {
        set({authStatus:true, isLoading:false})
      } else {
        set({authStatus:false, isLoading:false})
      }
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({authStatus:false, isLoading:false})
      
    }
    
  },
  setIsLoggedIn: ()=>{
    set({authStatus:true})
  }
}))
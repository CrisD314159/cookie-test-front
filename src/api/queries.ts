export const getAuthStaus = async ()=>{
  try {
    const response = await fetch('https://stiff-willi-testing-account-a1354a74.koyeb.app/api/check-auth')
    console.log(response);
    console.log(await response.json());
    if (response.status === 200) {
      return true
    } else {
      return false
    }
    
  } catch (error) {
    console.log(error);
    return false 
    
  }
}


export const login = async ()=>{
  try {
    const response = await fetch('https://stiff-willi-testing-account-a1354a74.koyeb.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: 'root',
        password: 'admin'
      }),
      credentials: 'include'
    })
    console.log(response);
    const cont = await response.json()
    if (response.status === 201) {
      return cont
    } else {
      throw new Error('Error')
    }
    
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return error.message;
    } else {
      return 'An unknown error occurred';
    }
    
  }
}
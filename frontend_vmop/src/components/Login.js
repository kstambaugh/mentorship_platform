import React from 'react'


export const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input id='username_input' type='text' placeholder='username' required></input>
            <input id='usersecret_input'  type='text' placeholder='password' required></input>
            <button>Login</button>
        </form>

       
        <button> <h3>Or Sign Up</h3></button>
        
        </div>
  )
}

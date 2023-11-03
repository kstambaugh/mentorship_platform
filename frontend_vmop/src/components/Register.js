import React from 'react'

export const Register = () => {
  return (
    <div id='register'>
        <h1>Register</h1>
        <div>
        <form id='register-form'>
            <input type='text' id='first-name-input' placeholder='Enter First Name'></input>

            <input type='text' id='last-name-input' placeholder='Enter Last Name'></input>
    
            <input type='email' id='email-input' placeholder='Enter Contact Email'></input>
 
            <input type='password' id='user-secret-input' placeholder='Enter Password'></input>

            <input type='password' id='user-secret-input-confirm' placeholder='Re-enter Password'></input>
            <h3> Please Select One or Both</h3>
            <input type='checkbox' id='mentee-select' name='mentee'></input>
            <label for='mentee-select'>mentee</label>
            <input type='checkbox' id='mentor-select' name='mentor'></input>
            <label for='mentor-select'>mentor</label>
            <button>Submit</button>
        </form>
        </div>
        
        </div>
  )
}

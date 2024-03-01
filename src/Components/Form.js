import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    let userInfo = {
      userName,
      password,
      email
    }

    fetch('https://moji-react-table-form-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      
      body: JSON.stringify(userInfo)
    }).then(res => console.log(res))
      .catch(err => console.log(err))

      clearInput();

  }

  const clearInput = () =>{
    setUserName('');
    setPassword('');
    setEmail('');
  }

  return (
    <>
      <form className='Form' onSubmit={submitHandler}>
        <input type="text"
          placeholder='Enter your username'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input type="email"
          placeholder='Enter your Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Form
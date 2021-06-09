import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const history = useHistory()

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props

  const onemailchange = (e) => {
    setEmail(e.target.value)
    localStorage.setItem('user', e.target.value)
  }
  const tosignup = () => {
    history.push('/Signup')
  }

  const [confirmPassword, setConfirmPassword] = useState('')
  const onTextChanged = (event) => {
    setPassword(event.target.value)
    localStorage.setItem('password', event.target.value)
  }
  const onNewPassword = (event) => {
    setConfirmPassword(event.target.value)
    localStorage.setItem('confirmPassword', event.target.value)
  }

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={onemailchange}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={onTextChanged}
        />

        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          <button onClick={handleLogin}>Sign in</button>
          <p>
            Don't have an account? <span onClick={tosignup}>Sign up</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login

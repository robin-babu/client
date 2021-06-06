import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import Login from './Login'
import Hero from './Hero'
import { Route, BrowserRouter, Switch, useHistory } from 'react-router-dom'
import firebaseDb from './firebase'
import Signup from './components/Signup'

function App() {
  //   return (
  //     <div className="row">
  //       <div className="col-md-8 offset-md-2">
  //         <Signup ></Signup>
  //       </div>
  //     </div>
  //   );
  // }

  // const App = () => {

    const history = useHistory()
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)
    const [mobilenoerror, setMobileNoerror] = useState('')
  
    const clearInputs = () => {
      setEmail('')
      setPassword('')
    }
  
    const clearErrors = () => {
      setEmailError('')
      setPasswordError('')
    }
  
    const handleLogin = () => {
      clearErrors()
      console.log("123")
      firebaseDb
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("456")
          // history.push('/welcome')
          window.location.href="/welcome"
        })
        .catch((err) => {
          switch (err.code) {
            case 'auth/invalid-email':
            case 'auth/user-disabled':
            case 'auth/user-not-found':
              setEmailError(err.message)
              break
            case 'auth/wrong-password':
              setPasswordError(err.message)
              break
          }
        })
    }
  
  
  const handleLogout = () => {
    firebaseDb.auth().signOut()
  }

  return (
    <BrowserRouter className="App">
      <br></br>
      <center>Virtual Queue</center>
      <br></br>
      <Switch>
        <Route exact path="/">
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </Route>
        <Route exact path="/Signup"><Signup/></Route>
        <Route exact path="/welcome">
          <Hero handleLogout={handleLogout}></Hero>
          {/* <Hero></Hero> */}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import SignupForm from './SignupForm'
import firebaseDb from '../firebase'
import { useHistory } from 'react-router-dom'
// import Signup from "./components/Signup";

const Signup = () => {
  var [currentId, setCurrentId] = useState('')
  var [contactObjects, setContactObjects] = useState({})

  const history = useHistory()

  //Once components load complete
  useEffect(() => {
    firebaseDb
      .database()
      .ref()
      .child('main')
      .on('value', (snapshot) => {
        if (snapshot.val() != null) {
          setContactObjects({
            ...snapshot.val(),
          })
        }
      })
  }, [])

  const add = (obj) => {
    if (obj.password == obj.confirmpassword) {
      const a = obj.email
      const b = a.replace(/[.]/g, '-')
      console.log(obj)
      const Values = {
        cat: `${obj.cat}`,
        mobNo: `${obj.mobNo}`,
        uname: `${obj.email}`,
        desc: `${obj.desc}`,
        mapLink: `${obj.mapLink}`,
        company: `${obj.company}`,
      }

      firebaseDb
        .database()
        .ref()
        .child('main/company/' + b)
        .set(Values, (err) => {
          if (err) console.log(err)
          else setCurrentId('')
        })
      // .auth()

      firebaseDb
        .auth()
        .createUserWithEmailAndPassword(obj.email, obj.password)
        .then(() => {
          history.push('/')
        })
        .catch((err) => {
          console.log(err)

          // switch (err.code) {
          //   case 'auth/email-already-in-use':
          //   case 'auth/invalid-email':
          //     setEmailError(err.message)
          //     break
          //   case 'auth/weak-password':
          //     setPasswordError(err.message)
          //     break
          // }
        })
    }
  }

  return (
    <>
      <div className="row">
       
          <SignupForm {...{ currentId, contactObjects, add }}></SignupForm>

          {/* <ContactForm {...{ add }}></ContactForm> */}
        </div>
    
    </>
  )
}

export default Signup

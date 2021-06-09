import React, { useState, useEffect } from 'react'
import DepartmentForm from './DepartmentForm'
import firebaseDb from './firebase'
import { useHistory } from 'react-router-dom'
// import Signup from "./components/Signup";

const Department = () => {
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
      const a = obj.email
      const b = a.replace(/[.]/g, '-')
      console.log(obj)
      const Values = {
        activenow: Boolean(obj.activenow),
        avgt: parseInt(obj.avgt),
        email: `${obj.email}`,
        currenttoken: parseInt(obj.currenttoken),
        descript: `${obj.descript}`,
        et: `${obj.et}`,
        maxtokens: parseInt(obj.maxtokens),
        name: `${obj.name}`,
        ogDeptname:  `${obj.ogDeptname}`,
        nextavailabletoken: parseInt(obj.nextavailabletoken) ,
        st:  `${obj.st}`,
      }
      const Credentials = {
        companyID: `${obj.email}`,
        depID: `${obj.name}`,       
      }
      firebaseDb
        .database()
        .ref()
        .child('main/unverified/' + b+'/'+obj.name)
        .set(Values, (err) => {
          if (err) console.log(err)
          else setCurrentId('')
        })

      firebaseDb
      .database()
      .ref()
      .child('main/unverified/' + b+'/'+obj.name+'/Credentials')
      .set(Credentials, (err) => {
        if (err) console.log(err)
        else setCurrentId('')
      })
  }

  return (
    <>
      <div className="row">       
          <DepartmentForm {...{ currentId, contactObjects, add }}></DepartmentForm>
        </div>    
    </>
  )
}

export default Department

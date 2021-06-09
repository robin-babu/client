// import React, { useState, useEffect } from 'react'

// import firebaseDb from './firebase'
// // import { useHistory } from 'react-router-dom'
// // import Signup from "./components/Signup";

// // const DepSignup = () => {

// //Once components load complete
// // useEffect(() => {

// //   firebaseDb
// //     .database()
// //     .ref()
// //     .child('main')
// //     .on('value', (snapshot) => {
// //       if (snapshot.val() != null) {
// //         setContactObjects({
// //           ...snapshot.val(),
// //         })
// //       }
// //     })
// // }, [])

// // .auth()
// // }
// // }

// const DepSignupForm = () => {
//   const add = (obj) => {
//     console.log(obj)

   
//     const user = localStorage.getItem('user')
//     const newuser = user.replace(/[.]/g, '-')
//     firebaseDb
//       .database()
//       .ref()
//       .child('unverified/' + newuser + '/' + obj.ogDeptName + '/Credentials')
//       .set(Values, (err) => {
//         if (err) console.log(err)
//         else setCurrentId('')
//       })

//     const Values = {
//       activenow: `${obj.activenow}`,
//       avgt: `${obj.avgt}`,
//       currenttoken: `${obj.currenttoken}`,
//       descript: `${obj.descript}`,
//       et: `${obj.et}`,
//       maxtokens: `${obj.maxtokens}`,
//       name: `${obj.name}`,
//       nextavailabletoken: `${obj.nextavailabletoken}`,
//       ogDeptName: `${obj.ogDeptName}`,
//       st: `${obj.st}`,
//       VerifiedAt: `${obj.VerifiedAt}`,
//       VerifiedBy: `${obj.VerifiedBy}`,
//     }
//   }
//     const initialFieldValues = {
//       activenow: '',
//       avgt: '',
//       currenttoken: '',
//       descript: '',
//       et: '',
//       maxtokens: '',
//       name: '',
//       nextavailabletoken: '',
//       ogDeptName: '',
//       st: '',
//       VerifiedAt: '',
//       VerifiedBy: '',
   
//   }
//   // var [currentId, setCurrentId] = useState('')
//   // var [contactObjects, setContactObjects] = useState({})
//     var [values, setValues] = useState(initialFieldValues)

//     useEffect(() => {
//       if (props.currentId === '') setValues({ ...initialFieldValues })
//       else
//         setValues({
//           ...props.contactObjects[props.currentId],
//         })
//     }, [props.currentId, props.contactObjects])

//     const handleInputChange = (e) => {
//       var { name, value } = e.target
//       setValues({
//         ...values,
//         [name]: value,
//       })
//     }

//     const handleFormSubmit = (e) => {
//       e.preventDefault()
//       props.add(values)
//     }

//     return (
//       <>
//         <div className="row">
//           <form autoComplete="off" onSubmit={handleFormSubmit}>
//             <div className="signupContainer">
//               <div>
//                 <input
//                   className="form-control"
//                   name="activenow"
//                   placeholder="Active now"
//                   value={values.activenow}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="avgt"
//                   placeholder="AVGT"
//                   value={values.avgt}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   className="form-control"
//                   name="currenttoken"
//                   placeholder="Current Token "
//                   value={values.currenttoken}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="descript"
//                   placeholder="Description"
//                   value={values.descript}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="et"
//                   placeholder="et"
//                   value={values.et}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 {' '}
//                 <input
//                   className="form-control"
//                   name="maxtokens"
//                   placeholder="Max Tokens"
//                   value={values.maxtokens}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 {' '}
//                 <input
//                   className="form-control"
//                   name="name"
//                   placeholder="Name"
//                   value={values.name}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 {' '}
//                 <input
//                   className="form-control"
//                   name="nextavailabletokens"
//                   placeholder="nextavailabletokens"
//                   value={values.nextavailabletokens}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="ogDeptName"
//                   placeholder="ogDeptName"
//                   value={values.ogDeptName}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   className="form-control"
//                   name="st"
//                   placeholder="st"
//                   value={values.ogDeptName}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="verifiedAt"
//                   placeholder="verified At"
//                   value={values.verifiedAt}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div>
//                 <input
//                   className="form-control"
//                   name="verifiedBy"
//                   placeholder="verified By"
//                   value={values.VerifiedBy}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   type="submit"
//                   // value={props.currentId == '' ? 'Sign Up' : 'Update'}
//                   value={Sign Up}
//                   className="btn btn-primary btn-block"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       </>
//     )
//   }


// export default DepSignupForm

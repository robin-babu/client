import React, { useState, useEffect } from 'react'

const SignupForm = (props) => {
  const initialFieldValues = {
    cat: '',
    mobNo: '',
    email: '',
    desc: '',
    mapLink: '',
    company: '',
    password: '',
    confirmpassword: ''

  }

  var [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    if (props.currentId == '') setValues({ ...initialFieldValues })
    else
      setValues({
        ...props.contactObjects[props.currentId],
      })
  }, [props.currentId, props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.add(values)
  }

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="signupContainer">
      <div>
        <input
          className="form-control"
          name="cat"
          placeholder="Category"
          value={values.cat}
          onChange={handleInputChange}
        />
      </div>
      

      <div>
        <input
          className="form-control"
          name="company"
          placeholder="Company name"
          value={values.company}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          className="form-control"
          name="mobNo"
          placeholder="Mobile"
          value={values.mobNo}
          onChange={handleInputChange}
        />
      </div>

     
      <div>
        <input
          className="form-control"
          name="mapLink"
          placeholder="Location"
          value={values.mapLink}
          onChange={handleInputChange}
        />
      </div>

      

      <div>
        <input
          className="form-control"
          name="desc"
          placeholder="Description"
          value={values.desc}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {' '}
        <input
          className="form-control"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        {' '}
        <input
          className="form-control"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputChange}
        />
      </div>

      <div>
        {' '}
        <input
          className="form-control"
          name="confirmpassword"
          placeholder="Confirm Password"
          value={values.confirmpassword}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == '' ? 'Sign Up' : 'Update'}
          className="btn btn-primary btn-block"
        />
      </div></div>
    </form>
  )
}

export default SignupForm

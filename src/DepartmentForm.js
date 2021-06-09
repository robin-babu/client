import React, { useState, useEffect } from 'react'

const DepartmentForm = (props) => {
  const initialFieldValues = {
    activenow: '',
    avgt: '',
    email: '',
    currenttoken: '',
    descript: '',
    et: '',
    ogDeptname: '',
    maxtokens: '',
    name:'',
    nextavailabletoken:'',
    st:''
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
            type="boolean"
            className="form-control"
            name="activenow"
            placeholder="Active Now"
            value={values.activenow}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input 
            className="form-control"
            
            name="avgt"
            placeholder="AVGT"
            value={values.avgt}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="currenttoken"
            type="number"
            placeholder="current token"
            value={values.currenttoken}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="descript"
            placeholder="Description"
            value={values.descript}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            className="form-control"
            name="et"
            placeholder="et"
            value={values.et}
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
            name="maxtokens"
            type="number"
            placeholder="Max Tokens"
            value={values.maxtokens}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {' '}
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {' '}
          <input
            className="form-control"
            name="onDeptname"
            placeholder="onDeptName"
            value={values.onDeptname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {' '}
          <input
            className="form-control"
            name="st"
            placeholder="st"
            value={values.st}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {' '}
          <input
            className="form-control"
            name="nextavailabletoken"
            type="number"
            placeholder="Next Available Token"
            value={values.nextavailabletoken}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={props.currentId == '' ? 'Sign Up' : 'Update'}
            className="btn btn-primary btn-block"
          />
        </div>
      </div>
    </form>
    
  )
}

export default DepartmentForm

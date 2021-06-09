import React from 'react'
import './App.css'
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css'
//Calling Firebase config setting to call the data
import firebaseDb from './firebase'

class Apps extends React.Component {
  constructor(props) {
    super(props)

    this.state = { departmentdetails: [] }
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const newuser = user.replace(/[.]/g, '-')

    firebaseDb
      .database()
      .ref('main/company/' + newuser + '/department' )
      .on('value', (snapshot) => {
        let departmentdetails = []
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          departmentdetails.push(snap.val())
        })
        this.setState({ departmentdetails: departmentdetails })
      })
  }

  render() {
    return (
      <div className="container">

        {/* <h2><center>{this.state.departmentdetails[3]}</center></h2>
        <table id="example" class="display table">
          <thead class="thead-dark">
          {this.state.departmentdetails.map((data) => {
            return(
            <tr>
            <td>{data.ogdeptname}</td>
            </tr>
          )
          })}
          </thead> */}
          
        {/* </table> */}
          {console.log(this.state.departmentdetails)}
       <center><b><text color="white">{this.state.departmentdetails[0]?.ogDeptName}</text></b> </center>
        <center><br></br><br></br>
        <table id="example" class="display table">
          <thead class="thead-dark">
            <tr>
            <th>Department Id</th>
              <th>Current Token</th>
              <th>Description</th>
              
              
              
             
            </tr>
          </thead>
          <tbody>
          {this.state.departmentdetails.map((data) => {
              return (
                <tr>{console.log(this.state.departmentdetails)}
                  <td>{data.name}</td>
                  <td>{data.currenttoken}</td>
                  <td>{data.descript}</td>
                  
                  
                  
                  
                </tr>
              )
            })}
          </tbody>
        </table></center>


        <a href="/" className="logout" >
     
        Logout </a>
      </div>
    )
  }
}
export default Apps

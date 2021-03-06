import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css';
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css'
//Calling Firebase config setting to call the data
import firebaseDb from './firebase'
// import Hero from './Hero'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { company: [] }
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const newuser = user.replace(/[.]/g, '-')
    firebaseDb
      .database()
      // .ref('main/company')
      .ref('main/company/' + newuser)
      // .child('company10@gmail-com')
      .on('value', (snapshot) => {
        let company = []
        snapshot.forEach((snap) => {
          company.push(snap.val())
        })
        this.setState({ company: company })
      })
  }

  Hero = ({ handleLogout }) => {
    return (
      <button className="logout" onClick={handleLogout}>
        <Link to="/"> Logout</Link>
      </button>
    )
  }

  render() {
    return (
      <div className="MainDiv">
        <a className="adddept" href={'/Department'}>
          <center>Add department</center>
        </a>
        {this.Hero(this.props.handleLogout)}
        <h2>
          <center><b>{this.state.company[1]}</b> </center>
        </h2>
        <div className="container">
          <br></br>
          <br></br>
          <center>{this.state.company[3]}</center>
          <br></br>
          <div class="description">
            <div className="deptable">
              <table id="example" class="display table">
                <thead class="thead-dark">
                  <tr>
                    <th><center>department</center></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <center>
                      {console.log(this.state.company)}
                      {this.state.company.length > 0 &&
                        Object.keys(this.state.company[2]).map((d) => (
                          <div className="dep">
                            <a href={'/' + d}>{d}</a>
                          </div>
                        ))}
                    </center>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

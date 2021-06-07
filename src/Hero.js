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
    firebaseDb
      .database()
      .ref('main/company')
      .child('company10@gmail-com')
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
      
       
         
          <button onClick={handleLogout}>
            <Link to="/"> Logout</Link>
          </button>
        
      
   )
   }

  render() {
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          <h3>Welcome</h3>
          
          {/* {
            <button onClick={handleLogout}>
              <Link to="/"> Logout</Link>
            </button>
          }
           */}
        </div>

        <div className="container">
       

          <table id="example" class="display table">
            <thead class="thead-dark">
              <tr>
                <th>company</th>
                {/* <th>category</th>
                <th>description</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.company.map((data) => {
                return (
                  <tr>
                    <td>{data.uname}</td>
                    {/* <td>{data.cat}</td>
                    <td>{data.desc}</td> */}
                  </tr>
                )
              })}
            </tbody>
          </table>

          {this.Hero(this.props.handleLogout)}
        </div>
      </div>
    )
  }
}

export default App

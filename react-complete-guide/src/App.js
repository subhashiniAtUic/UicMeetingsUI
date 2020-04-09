import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Customers from './components/customers/customers';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Customers />
      </header>
    </div>
  );
}

export default App; */
class App extends Component{
  constructor(){
    super();
    this.state = {name:'',email:''}
  }

    handleChange = event =>{
      this.setState({ [event.target.name]:event.target.value })    
    }
    handleSubmit = event =>{
      event.preventDefault();
      console.log(this.state)
      const url ='http://localhost:3001/addpost';
      const data = { name:this.state.name, email:this.state.email };

      fetch(url, { method: 'POST', //mode:'no-cors', // or ‘PUT’
      // body:'"name":"vinod","email":"vinod@gmail.com"',
      body: JSON.stringify(data), // data can be `string` or {object}!        
      headers:{'Content-Type': 'application/json' } ,
      }).then((res) => res.json())
      .catch((error) => {console.error('Error:', error);})    
      .then((data) => {console.log('Success:', data);}); 
    }
    render(){
        return(      
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" onChange={this.handleChange}  required />
        <br/>
        <input type="email" name="email" onChange={this.handleChange} required />
        <br/>
        <input type="submit" value="Add user" /> </form>

       
        );      
      }

}

export default App;
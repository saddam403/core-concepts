import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafar','Alamgir','Salman'];
  const products=[{name:"Photoshop",price:"$299.99"},
  {name:"Illustrator" ,price:"$199.99"},
  {name:"Adobe XD" ,price:"$109.99"},
  ]
   const friends = [{name:"Saddam",age:22},
   {name:"Prima",age:21},
   {name:"Tasnim",age:24}
   ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done b d <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>


        {friends.map(fd=><Friend friend = {fd}></Friend>)
        }


        <ul>
          {nayoks.map( nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd=><Product product={pd}> </Product>)
        }
        <Product product={products[0]}> </Product>
        
        <Person name={nayoks[0]}></Person>
        <Person name={nayoks[1]} nayika="Afima Naim"></Person>
        <p>My first react paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Users() {
  const [users,setUsers] = useState([]);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Daynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}











function Counter() {
  const [count, setCount] = useState(0);
  const handleDecrease = ()=>{
    if (count > 0) {
      setCount(count - 1);
    }
    }
  const handleIncrease = ()=> setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease} style={{cursor:"pointer"}}>Decrease</button>
      <button style={{cursor:"pointer"}} onClick={handleIncrease}>Increase</button>
    </div>
  )
}













function Product(props) {
  const productStyle = {
    border:"1px solid gray",
    borderRadius: "5px",
    backgroundColor:"light-gray",
    height: "250px",
    weight:"400px",
    float:"left",
    margin:"10px",
    padding: "10px"
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>Name:{name} </h2>
      <h1>Price: {price}</h1>
      <button style={{cursor:"pointer"}}>Buy Now</button>
    </div>
  )
}
function Friend(props) {
  const {name,age} = props.friend;
  const friendstyle = {
    height:"200px",
    width:"300px",
    border:"2px solid tomato",
    margin:"10px",
    padding:"10px"
  }
  return(
    <div style={friendstyle}>
      <h1>name:{name} </h1>
      <h3>Age: {age}</h3>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border:"2px solid red",
    margin:"10px",
    width: "400px"
    
  }
  return(
  <div style={personStyle}>
    <h1>name: {props.name}</h1>
    <h3>Heroin: {props.nayika}</h3>
  </div>
  )
}


export default App;

import './App.css';
import { useEffect, useState } from 'react';
import {createStore} from "redux";
import axios from 'axios';






function App() {
  let [users, setUsers]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/')
    .then(response => response.data)
    .then(data => setUsers(()=>data))
    .catch(error => console.error(error));
  },[])




  return (
    <div className="App">
      
        
          {users.map(user=>console.log(user))}
      
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList]=useState([]);
  
  
  const addUserHandler=(userName, userAge)=>{
    setUsersList((previousUsersList)=>{
      return [...previousUsersList, {name:userName, age:userAge, id:Math.random().toString()}]
    });
  };
  return (
  <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
  </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

import FormikSignup from "./components/Signup";
import UserCard from "./components/UserCard";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const displayForm = () => (setShowForm(!showForm));
  const Display = () => {
    if (showForm) {
      return (
        <main>
          <FormikSignup setShowForm={setShowForm} setUsersList={setUsersList} usersList={usersList}></FormikSignup>
          <h2>Employee List</h2>
          {usersList.map(user => {
            return <UserCard user={user}></UserCard>
          })}
        </main>
      )
    }
    return (
      <main>
        <h2>Employee List</h2>
        {usersList.map(user => {
          return <UserCard user={user} ></UserCard>
        })}
      </main>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Home Page</h2>
        <p>If your name is not already displayed on this page below then press the form button to enter your information</p>
        <button onClick={() => { displayForm() }}>Enter Data</button>
      </header>
      {Display()}
    </div>
  );
}

export default App;

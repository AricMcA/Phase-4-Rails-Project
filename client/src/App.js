import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from  './Components/Home';
import { UserProvider } from './Context/user'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Spells from './Components/Spells'
import Users from './Components/Users';
import UsersSpells from './Components/UsersSpells';

function App(props) {
  return (
    <div className="App">
      <UserProvider>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/spells" element={<Spells />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/users/:id/spells" element={<UsersSpells />} />
          </Routes>
        </Router>
      </UserProvider>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Navigation from './components/start/Navigation';
import Start from "./pages/Start";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<Start />}/>
        {/* <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/" element={<Home />}/> 
        <Route path="/contents/:id" element={<ContentDetail/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

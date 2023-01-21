import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Start from "./pages/Start";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Planform from "./pages/Planform";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/:id" element={<Planform />} />

        <Route path="/" element={<Home />} />

        {/* <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />} />
        <Route path="/service" element={<Service />}/>
        <Route path="/profile" element={<Profile />}/>
     
        <Route path="/contents/:id" element={<ContentDetail/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

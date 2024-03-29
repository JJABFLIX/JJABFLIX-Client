import React from 'react'
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Planform from "./pages/Planform";
import Signup2 from "./pages/Signup2";
import Signup3 from "./pages/Signup3";
import SelectPayment from "./components/SelectPayment";

const Routepages = () => {
  return (
    <div>
        <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup2" element={<Signup2 />} />
            <Route path="/signup3" element={<Signup3 />} />
            <Route path="/signup/:id" element={<Planform />} />
            <Route path="/selectpayment" element={<SelectPayment />} />
            <Route path="/" element={<Home />} />

            {/* <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/account" element={<Account />} />
            <Route path="/service" element={<Service />}/>
            <Route path="/profile" element={<Profile />}/>
        
            <Route path="/contents/:id" element={<ContentDetail/>}/> */}
         </Routes>
    </div>
  )
}

export default Routepages;
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/contents/:id" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;

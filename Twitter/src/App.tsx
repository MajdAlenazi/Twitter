import "./App.css";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return <>
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
  </>;
}

export default App;

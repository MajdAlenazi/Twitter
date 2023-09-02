import "./App.css";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/favorite" element={<Favorite/>}></Route>
  </Routes>
  </>;
}

export default App;

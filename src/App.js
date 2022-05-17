import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Css/responsive.css";
import "./Css/style.min.css";
import Home from "./Pages/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

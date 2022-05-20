import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./Css/style.min.css";
import "./Css/responsive.css";
import Home from "./Pages/Home";
import Page from "./Pages/Page";
import { createContext, useState } from "react";

export const ModalContext = createContext();
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (event) => {
    event.preventDefault()
    setShow(true);
  };
  return (
    <div className="App">
      <Router>
        <ModalContext.Provider value={{ show, handleClose, handleShow }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="page/:ms_id/:page_id" element={<Page />} />
          </Routes>
        </ModalContext.Provider>
      </Router>
    </div>
  );
}

export default App;

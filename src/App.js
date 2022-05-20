import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./Css/style.min.css";
import "./Css/responsive.css";
import Home from "./Pages/Home";
import Page from "./Pages/Page";
import { createContext, useEffect, useState } from "react";
import Contact from "./Pages/Contact";

export const DataContext = createContext([]);
export const ModalContext = createContext();

function App() {
  
  const [data, setData] = useState([]);
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch("https://icircles.app/api/medicalassociation/home/166")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        let ms_id = data.data.ms_id;
        fetch(
          `https://icircles.app/api/medicalassociation/membersearch/${ms_id}`
        )
          .then((response) => response.json())
          .then((data) => setMembers(data.data))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };
  return (
    <div className="App">
      <Router>
        <DataContext.Provider value={{ data, members }}>
        <ModalContext.Provider value={{ show, handleClose, handleShow }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="page/:ms_id/:page_id" element={<Page />} />
            <Route exact path="blog/:ms_id/:page_id/:" element={<Page />} />
          </Routes>
        </ModalContext.Provider>
        </DataContext.Provider>
      </Router>
    </div>
  );
}

export default App;

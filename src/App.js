import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import Contact from "./Components/Pages/Contact";
import NewProject from "./Components/Pages/NewProject";
import Container from "./Components/Layout/Container";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import Projects from "./Components/Pages/Projects";
import Project from "./Components/Pages/Project";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Company" element={<Company/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/NewProject" element={<NewProject/>} />
        <Route path="/project/:id" element={<Project/>} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Details from './pages/Details';
import NavBar from './components/NavBar';
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="about" element={<About/>} >
          <Route path="services" element={<h1>Services</h1>} />
        </Route>
        <Route path="details" exact element={<Details/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<h1>404: No Routes matched</h1>} />
      </Routes>
    </>
  );
}

export default App;

// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Mint from './Pages/Mint';
import NavBar from './components/NavBar';

const App = () => {
 return (
    <>
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Mint" element={<Mint />} />
       </Routes>
    </>
 );
};

export default App;
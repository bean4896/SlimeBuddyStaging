// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Mint from './Pages/Mint';
import Login from './Pages/Login';
import Inventory from './Pages/Inventory';
import Store from './Pages/Store';
import NavBar from './components/NavBar';

const App = () => {
 return (
    <>
    <div className='bg-black min-h-screen'>
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Mint" element={<Mint />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Store" element={<Store />} />
       </Routes>
       </div>
    </>
 );
};

export default App;
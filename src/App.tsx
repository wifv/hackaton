import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Model from './assets/pages/Model';
import Landing from './assets/pages/Landing';
import Navbar from './assets/pages/Navbar';
import './App.css'
import Panorama from './assets/pages/Panorama';

const App = () => {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/models/:id' element={<Model/>}></Route>
          <Route path='/panoramas/:id' element={<Panorama/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
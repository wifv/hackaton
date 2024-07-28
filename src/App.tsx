import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './assets/pages/Landing';
import Navbar from './assets/pages/Navbar';
import Model from './assets/pages/Model';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/models/:id' element={<Model/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
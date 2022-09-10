

import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;



import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Products from './Component/Product/Products';
import UploadProducts from './Component/UploadProducts/UploadProducts';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/uploadproduct' element={<UploadProducts></UploadProducts>}></Route>
     </Routes>
    </div>
  );
}

export default App;

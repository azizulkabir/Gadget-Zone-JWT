

import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
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
      <Route path='/products' element={<PrivateRoute><Products></Products></PrivateRoute>}></Route>
      <Route path='/uploadproduct' element={<PrivateRoute><UploadProducts></UploadProducts></PrivateRoute>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;

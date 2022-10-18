import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import CreateProduct from './page/CreateProduct';
import GetAllProduct from './page/GetAllProduct';
import UpdateProduct from './page/UpdateProduct';

function App() {
  return (
    <>
       <NavBar />
       <Routes>
        
           <Route path='/' element={<GetAllProduct/>}  /> 
          <Route path='/create' element={<CreateProduct/>} />

          <Route path='/update/:id'  element={<UpdateProduct/>}/>
       </Routes>
    </>
  );
}

export default App;

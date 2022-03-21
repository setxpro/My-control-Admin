import { Routes, Route } from 'react-router-dom';
import Schedule from './Pages/Agenda';
import Contact from './Pages/Contato';
import Dashboard from './Pages/Dashboard';
import Product from './Pages/Product';
import Repository from './Pages/Repository';
import Tecnology from './Pages/Tecnologia';


export default function RotasSideBar () {
    return(
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/repository' element={<Repository/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/tecnology' element={<Tecnology/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
}
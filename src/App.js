import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import Customer from './component/Customer';
import Address from './component/Address';
import City from './component/City';
export default function App() {
    return (
      <BrowserRouter>
        <div>
            {/* header */}
            <h1 className='text-green-300'>Sakila Project</h1>
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/Country">country</Link></li>
              <li><Link to="/Customer">Customer</Link></li>
              <li><Link to="/City">City</Link></li>
              <li><Link to="/Address">Address</Link></li>
            </ul>
            <hr />

            {/* content -------------------------------------------- */}
            <Routes>
              <Route path='/' element={<Home/>} />  {/* 라우터 -> 컴포넌트 */}
              <Route path='/Country' element={<Country/>}/>
              <Route path='/Customer' element={<Customer/>}/>
              <Route path='/City' element={<City/>}/>
              <Route path='/Address' element={<Address/>}/>
              {/* <Route path='/CountryOne/:countryId' element={<CountryOne/>}/> */}
            </Routes>

            {/* ---------------------------------------------------- */}

            {/* footer */}
            <hr />

            <div>
            Copyright@ GDJ91
            </div>
        </div>
      </BrowserRouter>
    );
}

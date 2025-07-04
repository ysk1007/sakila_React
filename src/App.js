import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import CountryOne from './component/CountryOne';
import AddCountry from './component/AddCountry';
import EditCountry from './component/EditCountry';

import Customer from './component/Customer';
import CustomerOne from './component/CustomerOne';
import AddCustomer from './component/AddCustomer';
import EditCustomer from './component/EditCustomer';

import Address from './component/Address';
import AddressOne from './component/AddressOne';
import AddAddress from './component/AddAddress';
import EditAddress from './component/EditAddress';

import City from './component/City';
import CityOne from './component/CityOne';
import AddCity from './component/AddCity';
import EditCity from './component/EditCity';

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto bg-gray font-ft text-black border border-border m-32">
        {/* Header */}
        <header className="bg-blue text-white font-ft border-b border-black">
          <div className="p-2">
            <h1 className="text-lg font-bold">
              <Link to="/" className="text-white hover:underline">
                SAKILA_PROJECT
              </Link>
            </h1>
          </div>

          <div className="bg-gray text-black flex gap-0 px-auto py-auto border-t border-black">
            <Link className="btn" to="/Country">나라</Link>
            <Link className="btn" to="/City">도시</Link>
            <Link className="btn" to="/Address">주소</Link>
            <Link className="btn" to="/Customer">고객</Link>
          </div>
        </header>

        {/* Content */}
        <main className="p-4 bg-gray border-t border-b border-border">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* country CRUD */}
            <Route path='/Country' element={<Country />} />
            <Route path='/CountryOne/:countryId' element={<CountryOne />} />
            <Route path='/AddCountry' element={<AddCountry />} />
            <Route path='/EditCountry/:countryId' element={<EditCountry />} />

            {/* customer CRUD */}
            <Route path='/Customer' element={<Customer />} />
            <Route path='/CustomerOne/:customerId' element={<CustomerOne />} />
            <Route path='/AddCustomer' element={<AddCustomer />} />
            <Route path='/EditCustomer/:customerId' element={<EditCustomer />} />

            {/* city CRUD */}
            <Route path='/City' element={<City />} />
            <Route path='/CityOne/:cityId' element={<CityOne />} />
            <Route path='/AddCity' element={<AddCity />} />
            <Route path='/EditCity/:cityId' element={<EditCity />} />

            {/* address CRUD */}
            <Route path='/Address' element={<Address />} />
            <Route path='/AddressOne/:addressId' element={<AddressOne />} />
            <Route path='/AddAddress' element={<AddAddress />} />
            <Route path='/EditAddress/:addressId' element={<EditAddress />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="p-2 text-center text-sm bg-gray border-t border-border">
          Copyright© GDJ91
        </footer>
      </div>
    </BrowserRouter>
  );
}

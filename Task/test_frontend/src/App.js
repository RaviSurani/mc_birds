import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import AddressComponent from './Components/AddressComponent';
import ThankyouComponent from './Components/ThankyouComponent.js';

function App() {
  return (
    <div >


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomeComponent />} />
          <Route path="/address" element={<AddressComponent />} />
          <Route path="/thankyou" element={<ThankyouComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

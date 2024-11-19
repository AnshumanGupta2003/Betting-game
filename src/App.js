import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './pages/Chart';
import MyHistory from './pages/myHistory';
import History from './pages/History';
import Home from './pages/Home';
import Account from './pages/Account'
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Account' element={<Account/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/MyHistory' element={<MyHistory/>} />
        <Route path='/Chart' element={<Chart/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Withdraw' element={<Withdraw/>} />
        <Route path='/Deposit' element={<Deposit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

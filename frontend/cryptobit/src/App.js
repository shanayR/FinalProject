import {  BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/header/header';
import Loader from './components/loader/loader';
import Index from './components/index/index';
import Market from './components/market/market';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Loader />
        <Header />
        <Routes>
          <Route path="/"element={<Index />}></Route>
          <Route path="/market" element={<Market/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </div>
  );
}

export default App;

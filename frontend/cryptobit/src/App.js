import Header from './components/header/header';
import Loader from './components/loader/loader';
import Index from './components/index/index';
import Market from './components/market/market';
import Footer from './components/footer/footer';

import {  BrowserRouter as Router,  Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Loader />
      <Header />
      <Router>
        <Routes>
          <Route path="/"element={<Index />}></Route>
          <Route path="/market" element={<Market/>}></Route>
        </Routes>
      </Router>
      <Footer />
      

    </div>
  );
}

export default App;

import Header from './components/header/header';
import Loader from './components/loader/loader';
import Index from './components/index/index';
// import Banner from './components/index/banner';
// import Coins from './components/index/coins';
// import Tokens from './components/index/tokens';
// import News from './components/index/news';
// import Subscribe from './components/index/subcribe';
// import Visa from './components/index/visa';
// import About from './components/index/about';
// import {  BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Loader />
      <Index />
      {/* < Router>
      <Routes>
        <Route path="/"element={<Index />}>
        <Route path="home" element={<Banner />}/>
        <Route path="coins" element={<Coins />}/>
        <Route path="tokens" element={<Tokens />}/>
        <Route path="about" element={<About />}/>
        <Route path="visa" element={<Visa />}/>
        <Route path="news" element={<News />}/>
        <Route path="subscribe" element={<Subscribe />}/>
        </Route>
      </Routes>
    </Router> */}
    <Footer />
      

    </div>
  );
}

export default App;

import './App.css';
import Home from './main_page/Home';
import { BorderBeam } from "./@/components/magicui/border-beam";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Footer from './main_page/footer';
// import Card1 from './template/Card1';


function App() {
  return (

    <Router>
    <BorderBeam size={350} duration={12} delay={9} />
    <Header />
    <div className="App bg-black-bg bg-fixed bg-cover bg-center text-white  ">
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/card" element={<Card1 />} /> */}
      </Routes>

    </div>
    <Footer />
    
    </Router>
  );
}

export default App;

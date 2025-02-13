import './App.css';
import Home from './main_page/Home';
import { BorderBeam } from "./@/components/magicui/border-beam";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './page/Header';
import Footer from './main_page/footer';


function App() {
  return (

    <Router>
    <BorderBeam size={350} duration={12} delay={9} />
    <Header />
    <div className="App bg-black-bg bg-fixed bg-cover bg-center text-white py-12 ">
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>

    </div>
    <Footer />
    
    </Router>
  );
}

export default App;

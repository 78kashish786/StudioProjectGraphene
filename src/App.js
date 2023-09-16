
import './App.css';
import Uppernav from './comp/Uppernav.js';
import Footer from './comp/Footer.js'
import Navbar from './comp/Navbar';
import GetInTouch from './comp/GetInTouch';
import Banner from './comp/Banner';
import Card from './comp/Card';
import Product from './comp/Product';
function App() {
  return (
    <div className="App ">
      <Uppernav/>
       <Navbar/>
      <Product/>
      <GetInTouch/>
      <Footer/> 
    </div>
  );
}

export default App;

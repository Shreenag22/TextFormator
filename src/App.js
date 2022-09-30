// import logo from './logo.svg';
// import Navbar from '../components/Navbar';
import './App.css';
import About from './components/About';
import Crousr from './components/Crousr';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// let name = "Naga"
function App() {
  return (
   <>
{/* <Navbar title="TextUtils"  aboutText = "About Us"/> */}
<Navbar/>
<Crousr/>



<div className="container my-3">
{/* <TextForm heading="Enter the text to analyse below" / > */}
<About/>
</div>


   </>
  );
}

export default App;

import InfoCard from "./Info";
import About from "./About";
import Interests from "./Interest";
import Footer from "./Footer";
import './App.css';
function App() {
  return (
    <div className="div-container">
      <InfoCard />
      
        <About />
        <Interests />
 

      <Footer />
    </div>
  );
}

export default App;

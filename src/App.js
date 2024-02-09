import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Plans from './components/plans/Plans';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;

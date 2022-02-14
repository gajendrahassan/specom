import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Team from './components/team'
import Services from './components/service'



function App() {
  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Services />} />
    </Routes>

    </div>
  );
}

export default App;

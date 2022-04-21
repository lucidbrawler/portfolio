import Bar from "./navbar";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./routes/landing";
import { render } from "react-dom";
import Contact from "./routes/contact";
import Websites from "./routes/websites";
import Resume from "./routes/resume";

function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  >
        <Route path="/" element={<Landing />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
}

  
const Home = () => (
  
  <Bar />
  
  );
    
    

export default App;

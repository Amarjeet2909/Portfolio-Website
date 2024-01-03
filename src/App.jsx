import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Gallery,
} from "./components";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <Routes>
            <Route path="/" element={<>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </>} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
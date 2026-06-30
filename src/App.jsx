import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Destinations from "./Pages/Destination";
import Booking from "./Pages/Booking";
import Packages from "./Pages/Packages";
import Domestic from "./Pages/Domestic";
import International from "./Pages/International";
import Adventure from "./Pages/Adventure";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />

        {/* Nested Routing */}
        <Route path="/packages" element={<Packages />}>
          <Route path="domestic" element={<Domestic />} />
          <Route path="international" element={<International />} />
          <Route path="adventure" element={<Adventure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

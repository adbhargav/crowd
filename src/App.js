import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Vote from "./pages/Vote";
import Home from "./pages/Home";
import ResultsChart from "./components/ResultsChart";



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<ResultsChart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};
export default App;

/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Book from "../src/pages/books";
import Exams from "../src/pages/exams";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqimizda" element={<About />} />
        <Route path="/kurslar" element={<Book />} />
        <Route path="/kurs/:id" element={<Book />} />
        <Route path="/dersler" element={<Exams />} />
        <Route path="/elaqe" element={<Contact />} />
        <Route path="/news" element={<Contact />} />
        <Route path="/news/:id" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

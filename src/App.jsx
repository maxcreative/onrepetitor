/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Book from "../src/pages/books";
import Exams from "../src/pages/exams";
import Contact from "./pages/contact";
import Courses from "./pages/course";
import Course from "./pages/course/detail";
import News from "./pages/news";
import NewsDetail from "./pages/news/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqimizda" element={<About />} />
        <Route path="/kurslar" element={<Courses />} />
        <Route path="/kurslar/:id" element={<Course />} />
        <Route path="/dersler" element={<Courses />} />
        <Route path="/elaqe" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

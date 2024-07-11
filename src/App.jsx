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
import PaymentLogin from "./pages/payment/login"
import PaymentSelect from "./pages/payment/select"
import PaymentSuccess from "./pages/payment/success"
import AdminDashboard from "./pages/admin/index"
import AdminLogin from "./pages/admin/login"

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
        <Route path="/payment/login" element={<PaymentLogin />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/select" element={<PaymentSelect />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// pages.
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Home from "../pages/Home";

// react components.
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to="books" />} />
        <Route path="books" element={<Home />} />
        <Route path="books/add" element={<Add />} />
        <Route path="books/edit/:bookId" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default MainLayout;

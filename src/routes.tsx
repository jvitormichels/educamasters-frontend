import { Routes, Route } from "react-router-dom";

import Layout from "./components/layouts/Layout";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Administration from "./pages/administration";
import CreateCoursePage from "./pages/course-create";
import ListCourses from "./pages/administration/ListCourses";
import EditCoursePage from "./pages/course-edit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="administration/" element={<Administration />}>
          <Route index element={<ListCourses />} />
          <Route path="courses" element={<CreateCoursePage />} />  
          <Route path="courses/:id" element={<EditCoursePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes
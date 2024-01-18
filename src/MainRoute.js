import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Photo from "./components/Photo";
import WorkDetails from "./components/WorkDetails";
import Contentt from "./components/Contentt";

//! устанавливаем библиотеку npm i react-router-dom
// ! Обернуть App в BrowserRouter index.js
// ! Создаем файл MainRoutes в src (пока в src)
// ! Настраиваем роуты
// ! Navbar  потом

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/experience" element={<Experience />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="*" element={<NotFound />} />
      <Route path="workdetails/:id" element={<WorkDetails />} />
      <Route path="/" element={<Contentt />}></Route>
    </Routes>
  );
};

export default MainRoute;

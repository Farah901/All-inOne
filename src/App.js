import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Profiles from "./page/Profiles";
import NotFound from "./page/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './page/Calculator'
import WorldQuest from './page/WorldQuest'
import TodoApp from './page/TodoApp'
import LangProvider from './page/langContext'
import ThemeProvider from "./page/ThemeContext";

export default function App() {
  return (

    <>    
    <LangProvider>    
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/world-flags" element={<WorldQuest />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes></ThemeProvider>
      </LangProvider>
    </>
  );
}

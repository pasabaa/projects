import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import PhpPage from "./pages/frameworks/PhpPage";
import JavaScriptPage from "./pages/frameworks/JavaScriptPage";
import WebPage from "./pages/web/WebPage";

export default function App() {
  return (
    <BrowserRouter>
    
        <Navbar/>

        <Routes>
            <Route path="projects/" element={<HomePage/>}/>
            <Route path="projects/web" element={<WebPage/>}></Route>
            <Route path="projects/frameworks/javascript" element={<JavaScriptPage/>}/>
            <Route path="projects/frameworks/php" element={<PhpPage/>}/>
        </Routes>

    </BrowserRouter>
  )
}


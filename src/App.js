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
            <Route path="/" element={<HomePage/>}/>
            <Route path="/web" element={<WebPage/>}></Route>
            <Route path="/frameworks/javascript" element={<JavaScriptPage/>}/>
            <Route path="/frameworks/php" element={<PhpPage/>}/>
        </Routes>

    </BrowserRouter>
  )
}


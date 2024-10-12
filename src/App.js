import "./App.css";
import './index.css'
import Brand from "../src/Component/brand/Brand";
import Navbar from "../src/Component/navbar/Navbar";
import CTA from "../src/Component/cta/CTA";
import Footer from "../src/Containers/footer/Footer";
import Header from "../src/Containers/header/Header";
import Possibility from "../src/Containers/possibility/Possibility";
import WhatGPT3 from "../src/Containers/whatGPT3/WhatGPT";
import Blog from "../src/Containers/blog/Blog";
import Features from "./Containers/Features/Features";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

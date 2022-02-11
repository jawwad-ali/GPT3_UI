import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      {/*<WhatGPT3 />
      <Possibility />
      <Cta />
      <Blog />
      <Footer /> */}
    </div>
  );
}

export default App;
// 1.37.28

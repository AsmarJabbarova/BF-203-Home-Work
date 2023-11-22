import { useState } from "react";

import "./App.css";
import Section1 from "./pages/section1/section1";
import Section2 from "./pages/section2/Section2";
import Section3 from "./pages/section3/Section3";
import Section4 from "./pages/section4/Section4";
import Section5 from "./pages/section5/Section5";
import Section6 from "./pages/section6/Section6";
import Section7 from "./pages/section7/Section7";
import Section8 from "./pages/section8/Section8";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}

export default App;

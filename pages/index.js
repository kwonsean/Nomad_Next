import { useState } from "react";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <NavBar />
      <NavBar2 />
      <h1>HELLO!! This is home page</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter((cur) => cur + 1)}>+</button>
    </>
  );
}

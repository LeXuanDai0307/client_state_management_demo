/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:4000/",
    });

    const token = localStorage.getItem("token");
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    instance
      .get("users/test")
      .then((response) => {
        console.log("Test request successful", response.data);
      })
      .catch((error) => {
        console.error("Test request error", error);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

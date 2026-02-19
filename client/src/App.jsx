import { useEffect, useState } from "react";
import React from "react";
import Header from './components/Header.jsx'

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Failed to reach backend"));
  }, []);

  return (
    <>
      <div>
        <Header/>
        </div>
        </>
  );
}
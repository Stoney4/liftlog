import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/health")
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Failed to reach backend"));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>LiftLog</h1>
      <p>{msg}</p>
    </div>
  );
}
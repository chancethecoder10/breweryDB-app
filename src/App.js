import React, { useEffect } from "react";
import "./App.css";

function App() {
  const callApi = async () => {
    await fetch("/.netlify/functions/api", {
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.ok) return res.json();
        return null;
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  };

  useEffect(() => {
    callApi();
  });

  return (
    <div className="App">
      <h1>hiii</h1>
    </div>
  );
}

export default App;

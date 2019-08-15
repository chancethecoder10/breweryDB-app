import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);

  const callApi = async () => {
    await fetch("/.netlify/functions/api", {
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        if (res.ok) return res.json();
        return null;
      })
      .then(res => {
        if (res) {
          setData(res.data);
          console.log(res.data);
        }
        return res;
      })
      .catch(err => {
        console.error(err);
        return err;
      });
  };

  useEffect(() => {
    // callApi();
  }, []);

  return <Navbar />;
}

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
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
    callApi();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        {!loading ? (
          Object.values(data).map(element => {
            return (
              <Card
                key={element.id}
                name={element.nameDisplay}
                itemData={element}
              />
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </Container>
    </div>
  );
}

export default App;

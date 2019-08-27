import React from "react";
import styled from "styled-components";
import Beer from "../images/beer.png";

const Wrapp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 15em;
  margin: 1em 0.5em;
  padding: 1em;
  background: rgb(255, 21, 21);
  background: radial-gradient(
    circle,
    rgba(255, 21, 21, 0.7035189075630253) 5%,
    rgba(119, 119, 119, 0.8491771708683473) 67%
  );
  border-radius: 0.3em;
`;

function Card(props) {
  return (
    <Wrapp>
      {props.itemData.hasOwnProperty("labels") ? (
        <img src={props.itemData.labels.medium} alt={props.name} />
      ) : (
        <img style={{ backgroundColor: "white" }} src={Beer} alt={props.name} />
      )}
      <h1>{props.name}</h1>
    </Wrapp>
  );
}

export default Card;

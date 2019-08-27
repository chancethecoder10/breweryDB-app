import React from "react";
import styled from "styled-components";
import Beer from "../images/beer.png";

const Wrapp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.7em;
  width: 15em;
  border: solid 1px black;
  border-radius: 1em;
  margin: 1em 0.5em;
`;

function Card(props) {
  return (
    <Wrapp>
      {props.itemData.hasOwnProperty("labels") ? (
        <img src={props.itemData.labels.medium} alt={props.name} />
      ) : (
        <img style={{ backgroundColor: "white" }} src={Beer} alt={props.name} />
      )}
      <h2>{props.name}</h2>
    </Wrapp>
  );
}

export default Card;

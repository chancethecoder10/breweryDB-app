import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import searchIcon from "../images/search.svg";

const Header = styled.header`
  display: flex;
  flex: 1;
  width: 100%;
  height: 4em;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em;
  background: rgb(224, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(224, 0, 0, 0.9332107843137255) 15%,
    rgba(255, 108, 50, 0.865983893557423) 61%,
    rgba(255, 50, 99, 1) 100%
  );
`;

const Logo = styled.div`
  background: url(${logo}) center bottom no-repeat;
  background-size: contain;
  width: 9em;
  height: 100%;
  border: none;
`;

const Search = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 2em;
`;

const SearchField = styled.input`
  width: 16em;
  height: 2.1em;
  padding-left: 0.8em;
  border: none;
  border-radius: 1em;
  color: white;
  background: rgb(212, 212, 212);
  background: linear-gradient(
    90deg,
    rgba(212, 212, 212, 1) 15%,
    rgba(131, 131, 131, 0.8939950980392157) 100%,
    rgba(139, 139, 139, 0.9332107843137255) 100%
  );
  opacity: 0.8;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0.5em;
  z-index: 1;
  background: url(${searchIcon}) center 0.2em no-repeat;
  width: 1.5em;
  height: 2.1em;
`;

function Navbar() {
  return (
    <Header>
      <Logo />
      <Search>
        <SearchIcon />
        <SearchField />
      </Search>
    </Header>
  );
}

export default Navbar;

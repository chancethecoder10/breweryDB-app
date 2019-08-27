import React from "react";
import styled from "styled-components";
import logo from "../images/cask.svg";
import searchIcon from "../images/search.svg";

const Header = styled.header`
  display: flex;
  flex: 1;
  height: 4em;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em;
  background: rgb(32, 32, 32);
  background: linear-gradient(
    90deg,
    rgba(32, 32, 32, 0.9023984593837535) 0%,
    rgba(15, 0, 0, 0.9220063025210083) 100%
  );
`;

const Logo = styled.a.attrs(() => ({
  href: "/"
}))`
  text-decoration: none;
  background: url(${logo}) 1em bottom no-repeat;
  background-size: contain;
  width: 17em;
  height: 100%;
  color: #fff;
  padding-bottom: 0.2 em;
  text-align: center;
  border: none;

  :hover {
    text-decoration: underline;
  }
`;

const Search = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 2em;
`;

const SearchField = styled.input.attrs(props => ({
  placeholder: "Search..."
}))`
  width: 16em;
  height: 2.1em;
  padding-left: 0.8em;
  border: none;
  border-radius: 1em;
  color: white;
  font-size: 1.1em;
  font-family: monospace;
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
      <Logo>
        <h3>Brewery App</h3>
      </Logo>
      <Search>
        <SearchIcon />
        <SearchField />
      </Search>
    </Header>
  );
}

export default Navbar;

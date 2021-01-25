import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

const Header = () => {
  const menu = [
    {
      name: "jogos",
      link: "games",
      icon: "",
    },
    {
      name: "grupos",
      link: "party",
      icon: "",
    },
    {
      name: "amigos",
      link: "friends",
      icon: "",
    },
    {
      name: "logout",
      icon: "",
      action: () => console.log("deslogar"),
    },
  ];

  return (
    <>
      <HeaderBar>
        <div>
          <Title>
            <Link to="/">Gaming Network - de Gamers paras Gamers</Link>
          </Title>
          <MenuItens>
            {menu.map((item, i) => (
              <Link to={item.link} key={i}>
                <div onClick={item.action}>{item.name}</div>
              </Link>
            ))}
          </MenuItens>
        </div>
      </HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.header`
  height: 8vh;
  background: url(${bg});
  display: flex;
  color: #fff;
  height: 8vh;
  font-family: monospace;

  > div {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  a {
    color: #fff;
    padding: 1em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      transform: scale(1.2);
    }
  }
`;
const Title = styled.div``;

const MenuItens = styled.div`
  justify-content: right;
  display: flex;
`;

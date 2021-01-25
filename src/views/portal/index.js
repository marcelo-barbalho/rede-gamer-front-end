import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";
import user1 from "../../assets/images/user1.PNG";
import user2 from "../../assets/images/user2.PNG";
import user3 from "../../assets/images/user3.PNG";
import magic from "../../assets/images/magic.jpg";

const Portal = () => {
  return (
    <>
      <PortalPage>
        <News>
          <h1>Novidades</h1>
          <Banner>
            <BannerContent>
              <h2>Playstation vs Xbox</h2>
              <span>Qual o console mais popular?</span>
            </BannerContent>
          </Banner>
        </News>
        <Friends>
          <h2>Amigos online</h2>
          <span>Clique para chamar no chat</span>
          <PartyContainer>
            <Friend>
              <figure>
                <img src={user1} alt="" />
                <figcaption>Fulana</figcaption>
              </figure>
            </Friend>
            <Friend>
              <figure>
                <img src={user2} alt="" />
                <figcaption>Beltrano</figcaption>
              </figure>
            </Friend>
            <Friend>
              <figure>
                <img src={user3} alt="" />
                <figcaption>Sicrano</figcaption>
              </figure>
            </Friend>
          </PartyContainer>
          <Link to="/friends">Ver mais amigos</Link>
        </Friends>
        <LatestGames>
          <h2>Jogos recentes</h2>
          <span>Clique para procurar uma party online</span>
          <GamesContainer>
            <Game>
              <figure>
                <img src={magic} alt="" />
                <figcaption>Magic</figcaption>
              </figure>
            </Game>
          </GamesContainer>
        </LatestGames>
      </PortalPage>
    </>
  );
};

export default Portal;

const PortalPage = styled.div`
  width: 90%;
  margin: auto;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  /* display:inline-block; */
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
const News = styled.div`
  width: 100%;
`;
const Banner = styled.div`
  background: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100%;
  cursor: pointer;
`;
const BannerContent = styled.div`
  height: 150px;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const Friends = styled.div`
  width: 30%;
`;
const LatestGames = styled.div`
  width: 30%;
`;
const PartyContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
const GamesContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
const Game = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  img {
    max-width: 100px;
  }
`;
const Friend = styled.li`
  list-style: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  img {
    max-width: 100px;
  }
`;

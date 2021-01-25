import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;

const Content = styled.div`
  min-height: 87vh;
  font-family: monospace;
  background-color: #242526;
  color: #fff;
  padding: 1em 0;
  box-sizing: border-box;
`;

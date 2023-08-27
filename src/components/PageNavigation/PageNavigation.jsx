import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink style={{ color: "#8422d4" }} to="/">
        Home
      </NavLink>
      /{title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;
  font-weight: 500;

  a {
    font-size: 2.2rem;
    font-weight: 500;
  }
`;

export default PageNavigation;

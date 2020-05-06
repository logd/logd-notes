import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { UserNav } from "../UserNav/UserNav";

const theme = `
    font-size: .9em;
    font-weight: 100;
    color: #c9d6df;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  ${theme};
`;

// const Smaller = styled.div`
//   font-size: smaller;
// `;

const Main = styled.div`
  flex: 1;
`;
export const AppHeader = () => {
  // const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Wrapper>
      <Main>{isHome ? <>logd</> : <Link to="/">logd</Link>}</Main>
      <UserNav />
    </Wrapper>
  );
};

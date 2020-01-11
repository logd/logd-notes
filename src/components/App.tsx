import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Routes } from "./Routes";
import { Auth } from "aws-amplify";

interface Props extends RouteComponentProps {

}

const App: React.FC<Props> = ({ location, history }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const {pathname} = location;

  useEffect(() => {
    const updateCurrentUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setCurrentUser(user);
      } catch {
        setCurrentUser(null);
      }
    }
    updateCurrentUser();
  }, [])

  async function handleLogout(e: any) {
    e.preventDefault();
    try {
      await Auth.signOut();
      setCurrentUser(null);
      history.push("/login");
      
    } catch (error) {
      console.error(`Logout: ${error}`);
    }
  }

  return (
    <div className="App container">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}><Link to="/">Logd</Link></div>
        <div style={{ flexBasis: '20%', alignContent: 'space-between' }}>
          {currentUser ?
            <button style={{
              // TODO: turn into LinkButton - https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              display: 'inline',
              margin: 0,
              padding: 0,
            }} 
            onClick={(e) => handleLogout(e)}>Sign out</button>
            :
            pathname === '/login' ?
            null
            :
            <Link to="/login">Login</Link>
          }
        </div>
      </div>
      <Routes appProps={{ currentUser, setCurrentUser }} />
    </div>
  );

}

export default withRouter(App);

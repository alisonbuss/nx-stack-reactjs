import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Welcome } from '@lib/react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #e1e1e6;
    color: #121214;
  }
  a, a:link, a:focus, a:active {
    text-decoration: none;
    color: #1890ff;
  }
  a:hover {
    text-decoration: underline;
    color: #1890ff;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1140px;
    }
  }
`;

const StyledApp = styled.div`
  .header {
    background-color: #13954c;
    padding: 15px 10px;
    margin-bottom: 15px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .header a {
    text-decoration: none;
    color: #212121;
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    padding: 12px;
    margin: 0px 4px;
    float: left;
    border-radius: 4px;
    transition: all 0.33s;
  }
  .header .logo {
    font-size: 25px;
    font-weight: bold;
    color: #212121;
    padding: 0px 12px;
  }
  .header a:hover,
  .header a.active {
    background-color: #212121;
    color: white;
  }
  .header-right {
    float: right;
  }
  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;

// Navigation component:
function NavBar() {
  return (
    <nav className="header" data-cy="header">
      <span className="logo">Application</span>
      <div className="header-right">
        <Link to="/home" data-cy="header-link-home">
          Home
        </Link>
        <Link to="/contact" data-cy="header-link-contact">
          Contact
        </Link>
        <Link to="/about" data-cy="header-link-about">
          About
        </Link>
      </div>
    </nav>
  );
}

export interface AppProps {}

export function App(props: AppProps) {
  // Error component:
  const Error = ({ message = '' }: { message: string }) => (
    <>
      <Link to="/home">Home</Link>
      <h2>{message}</h2>
    </>
  );

  // Main component of the application:
  const Application = () => (
    <>
      <GlobalStyle />
      <StyledApp>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/home" element={<Welcome message="Home" />} />
            <Route path="/contact" element={<h2>Contact</h2>} />
            <Route path="/about" element={<h2>About</h2>} />
            <Route path="error" element={<Error message="Server Error!" />} />
            <Route path="*" element={<Error message="Not Found!" />} />
          </Routes>
        </main>
      </StyledApp>
    </>
  );

  // Application rendering:
  return (
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </ConfigProvider>
  );
}
export default App;

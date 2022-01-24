import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Welcome } from '@lib/react';

const GlobalStyle = createGlobalStyle`
  // Global Style!
`;

const StyledCommon = styled.div`
  // Common Style!
`;

export interface AppProps {}

export function App(props: AppProps) {
  const message = 'Welcome to a ReactJS application \\O/';
  return (
    <>
      <GlobalStyle />
      <StyledCommon>
        <BrowserRouter>
          <ConfigProvider locale={ptBR}>
            <Welcome message={message} />
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/page01">Page 01</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/home" element={<h2>Home</h2>} />
                <Route path="/page01" element={<h2>Page 01</h2>} />
                <Route path="error" element={<h2>Server Error</h2>} />
                <Route path="*" element={<h2>Not Found</h2>} />
              </Routes>
            </main>
          </ConfigProvider>
        </BrowserRouter>
      </StyledCommon>
    </>
  );
}
export default App;

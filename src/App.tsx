import React from 'react';
import Layout from './components/Layout';
import StyleGlobal from './styles/StyleGlobal';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <StyleGlobal/>
      <Layout/>
    </ThemeProvider>
  );
}

export default App;

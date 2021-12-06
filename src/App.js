import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyLists from './containers/myLists';
import DiscoverPage from './containers/discover';
import { NavBar } from './components/navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='/' element={<DiscoverPage/>} />
            <Route path='/my-lists/' element={<MyLists/>} />
        </Routes>
        <NavBar/>
      </Router>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyLists from './containers/myLists';
import DiscoverPage from './containers/discover';
import ListPage from './containers/list';
import EntryPage from './containers/entryDetail';
import EntryFormPage from './containers/entryForm';
import ListFormPage from './containers/listForm';
import { NavBar } from './components/navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='/' element={<DiscoverPage/>} />
            <Route path='/my-lists' element={<MyLists/>} />
            <Route path='/list/:id' element={<ListPage/>} />
            <Route path='/list/:listid/:entryid' element={<EntryPage/>} />
            <Route path='/entry-form/' element={<EntryFormPage/>} />
            <Route path='/list-form/' element={<ListFormPage/>} />
        </Routes>
        <NavBar/>
      </Router>
    </ThemeProvider>
  );
}

export default App;


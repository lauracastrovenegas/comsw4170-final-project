import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyLists from './containers/myLists';
import DiscoverPage from './containers/discover';
import ListPage from './containers/list';
import EntryPage from './containers/entryDetail';
import EntryFormPage from './containers/entryForm';
import DiscoverListPage from './containers/discoverList';
import HomePage from './containers/home';
import ListFormPage1 from './containers/newListForm/listForm1';
import ListFormPage2 from './containers/newListForm/listForm2';
import ListFormPage3 from './containers/newListForm/listForm3';
import { NavBar } from './components/navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='/' element={<DiscoverPage/>} />
            <Route path='/discover/:catid/:listid' element={<DiscoverListPage/>} />
            <Route path='/home/' element={<HomePage/>} />
            <Route path='/my-lists' element={<MyLists/>} />
            <Route path='/list/:id' element={<ListPage/>} />
            <Route path='/list/:listid/:entryid' element={<EntryPage/>} />
            <Route path='/entry-form/' element={<EntryFormPage/>} />
            <Route path='/list-form/' element={<ListFormPage1 prop1={1}/>} />
            <Route path='/list-form/1' element={<ListFormPage2/>} />
            <Route path='/list-form/2' element={<ListFormPage3/>} />
        </Routes>
      </Router>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;


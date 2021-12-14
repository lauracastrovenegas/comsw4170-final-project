import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyLists from './containers/myLists';
import DiscoverPage from './containers/discover';
import ListPage from './containers/list';
import EntryPage from './containers/entryDetail';
import DiscoverListPage from './containers/discoverList';
import HomePage from './containers/home';
import ListFormPage1 from './containers/newListForm/listForm1';
import ListFormPage2 from './containers/newListForm/listForm2';
import ListFormPage3 from './containers/newListForm/listForm3';
import EntryFormPage1 from './containers/newEntryForm/entryForm1';
import EntryFormPage2 from './containers/newEntryForm/entryForm2';
import EntryFormPage3 from './containers/newEntryForm/entryForm3';
import { NavBar } from './components/navbar';

const App = () => {
  const [listImage, setListImage] = useState("")
  const [previousPage, setPreviousPage] = useState("")

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path='/' element={<DiscoverPage/>} />
            <Route path='/discover/:catid/:listid' element={<DiscoverListPage/>} />
            <Route path='/home/' element={<HomePage/>} />
            <Route path='/my-lists' element={<MyLists/>} />
            <Route path='/list/:id' element={<ListPage setPrev={setPreviousPage} setListImage={setListImage}/>} />
            <Route path='/list/:listid/:entryid' element={<EntryPage/>} />
            <Route path='/list-form/' element={<ListFormPage1 prop1={1}/>} />
            <Route path='/list-form/1' element={<ListFormPage2/>} />
            <Route path='/list-form/2' element={<ListFormPage3/>} />
            <Route path='/entry-form/' element={<EntryFormPage1 listTitle={previousPage} imageLink={listImage}/>} />
            <Route path='/entry-form/1' element={<EntryFormPage2 listTitle={previousPage} imageLink={listImage}/>} />
            <Route path='/entry-form/2' element={<EntryFormPage3 imageLink={listImage}/>} />
        </Routes>
      </Router>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import GetAllBook from './components/GetAllBook';
import AddBook from './components/AddBook';
import DetailsOfBook from './components/DetailsOfBook';
import EditBook from './components/EditBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Layout />} />
                <Route path='/books' element={<GetAllBook />} />
                <Route path='/books/:id' element={<DetailsOfBook />} />
                <Route path='/books/add' element={<AddBook />} />
                <Route path='/books/edit/:id' element={<EditBook />} />
            </Route>
        </Routes>
    </BrowserRouter>
);



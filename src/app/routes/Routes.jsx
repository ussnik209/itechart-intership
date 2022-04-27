import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AppBar from '../containers/AppBarContainer'
import Homepage from '../components/Homepage.jsx'
import BookPage from '../components/BookPage.jsx'
import UserPage from '../components/UserPage.jsx'
import AddingBook from '../components/AddingBook.jsx'
import Admin from '../components/Admin.jsx'
import Registration from '../components/Registration.jsx'
import Authorization from '../components/Authorization.jsx'

const Router = () => (
  <Routes>
    <Route path='' element={<AppBar />}>
      <Route index element={<Homepage />}/>
      <Route path='book' element={<BookPage />}/>
      <Route path='user' element={<UserPage />}/>
      <Route path='add-book' element={<AddingBook />}/>
      <Route path='admin' element={<Admin />}/>
      <Route path='sign-up' element={<Registration />}/>
      <Route path='sign-in' element={<Authorization />}/>      
    </Route>
  </Routes>
)

export default Router
import React from 'react'

import { Stack } from '@mui/material'

import BooksItem from './BooksItem.jsx'

const BooksList = () => (
  <Stack spacing={2}>
    <BooksItem></BooksItem>
    <BooksItem></BooksItem>
    <BooksItem></BooksItem>
  </Stack>
) 

export default BooksList
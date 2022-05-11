import React from 'react'

import { Stack } from '@mui/material'

import BooksItemShort from './BooksItemShort.jsx'

const FavoriteBooks = () => (
  <Stack spacing={2}>
    <BooksItemShort />
  </Stack>
)

export default FavoriteBooks
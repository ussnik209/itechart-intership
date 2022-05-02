import React from 'react'

import { Paper, Stack } from '@mui/material'

import BooksItem from '../booksList/BooksItem.jsx'

const Homepage = () => (
  <Paper>
    <Stack>
      <BooksItem></BooksItem>
    </Stack>
  </Paper>
)

export default Homepage
import React from 'react'

import { Paper, Stack, Box } from '@mui/material'

import ImageContainer from '../common/ImageContainer.jsx'
import BookContent from './BookContent.jsx'
import CommentsSection from '../commentsSection/CommentsSection.jsx'

const path = '../../../assets/img/book-covers/harry_potter_and_the_methods_of_rationality.bmp'

const BookPage = () => (
  <Paper sx={{
    borderRadius: "30px",
    padding: "15px"
  }}>
    <Stack spacing={10}>
      <Stack direction="row" spacing={2}>
        <ImageContainer src={path} height={400}></ImageContainer>
        <BookContent></BookContent>
      </Stack>
      <CommentsSection />
    </Stack>
    
  </Paper>
)

export default BookPage
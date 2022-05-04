import React from 'react'

import { Stack } from '@mui/material'

import CommentsInput from './CommentInput.jsx'
import CommentsList from './CommentsList.jsx'

const CommentsSection = () => (
  <Stack>
    <CommentsInput />
    <CommentsList />
  </Stack>
)

export default CommentsSection
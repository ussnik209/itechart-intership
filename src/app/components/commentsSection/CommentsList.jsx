import React from 'react'

import { Stack } from '@mui/material'

import Comment from './Comment.jsx'

const CommentsList = () => (
  <Stack spacing={4}>
    <Comment />
    <Comment />
    <Comment />
  </Stack>
)

export default CommentsList
import React from 'react'

import { Stack, Avatar } from '@mui/material'

const Comment = ({src}) => (
  <Stack>
    <Avatar 
        alt="avatar" 
        src={src}
        sx={{
          height: 80, 
          width: 80
        }} 
      />
  </Stack>
) 

export default Comment
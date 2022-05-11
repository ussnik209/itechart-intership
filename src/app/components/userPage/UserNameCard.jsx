import React from 'react'

import { Box, Stack } from '@mui/material'

import UserInput from '../common/UserInput.jsx'
import Card from '../common/Card.jsx'
import SubmitButton from '../common/SubmitButton.jsx'

const UserNameCard = () => (
  <Card>
    <Box 
      component="form"
    >
      <Stack 
        spacing={2}
        alignItems="center"
      >
        <UserInput label="name" defaultValue="Jonny"/>
        <UserInput label="surname" defaultValue="Joster"/>
        <SubmitButton>Change name</SubmitButton>
      </Stack>
    </Box>
  </Card>
)

export default UserNameCard
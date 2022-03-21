import React from 'react'

import { Divider } from '@mui/material'

import AlertMessage from './common/AlertMessage.jsx'
import TwoColDishes from './TwoColDishes.jsx'

const History = ({history}) => (
  <>
  {
    !history 
    ? <AlertMessage title='History is empty!'>
      Your order history is still empty!<br/>
      Make your order soon and it will appear here!
    </AlertMessage>
    : history.map((order, id) => {
      return (
        <div key={id}>
          <TwoColDishes dishList={order} />
          {
            id != history.length - 1 
              ? <Divider sx={{
                mt: 2,
                mb: 2
              }}/> 
              : null
          }
        </div>
      )         
      })
  }
  </>
)

export default History
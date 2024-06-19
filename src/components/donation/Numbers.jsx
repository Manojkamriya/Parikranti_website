import React from 'react'
import NumberCounter from './NumberCounter'
function Numbers() {
  return (
    <>
      <div className="numbers">
 
   <NumberCounter
  n='5000'
  title='Amount Received'
  />
  <NumberCounter
  n='1000'
  title='Amount Used'
  />
    <NumberCounter
  n='90'
  title='Receipts and accounts'
  />
   <NumberCounter
  n='100'
  title='Donations'
  />
   <NumberCounter
  n='100'
  title='Donations'
  />
  </div>
    </>
  )
}

export default Numbers

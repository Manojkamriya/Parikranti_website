import React from 'react'
import NumberCounter from './NumberCounter'
function Numbers() {
  return (
    <>
      <div className="numbers">
      <NumberCounter
  n='1000'
  title='Donars'
  />
   <NumberCounter
  n='500000'
  title='Amount Collected'
  />
  <NumberCounter
  n='400000'
  title='Amount Used'
  />
   <NumberCounter
  n='100000'
  title='Amount Remaining'
  />
    <NumberCounter
  n='900'
  title='Receipts and balance sheets'
  />
  
  
  </div>
    </>
  )
}

export default Numbers

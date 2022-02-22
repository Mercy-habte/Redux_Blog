import React from 'react'
import spinner from '../imgs/Spinner.gif'

function Loading() {
  return (
    <div><img src={spinner} alt='loading'/></div>
  )
}

export default Loading
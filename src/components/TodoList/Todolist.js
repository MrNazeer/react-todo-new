import React from 'react'
import "./Style.scss"
export  function TodoList(data) {
  const {value} = data
  return (
  <div className='list'>{value}</div>
  )
}

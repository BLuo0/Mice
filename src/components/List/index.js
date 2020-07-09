import React from 'react'

import './index.less'

const List = ({list=[]}) => {

  return (
    <ul className="list">
      {list.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default List
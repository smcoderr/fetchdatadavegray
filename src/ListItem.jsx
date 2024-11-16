import React from 'react'

const ListItem = ({item}) => {
    console.log(item);
  return (
    <li className=''>
       {JSON.stringify(item)}
    </li>
  )
}

export default ListItem
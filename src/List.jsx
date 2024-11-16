import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    <ul className='list-disc ml-5 py-16'>
        {items.map(item => {
            return (
                <ListItem key={item.id} item={item}/>
            )
        })}
    </ul>
  )
}

export default List
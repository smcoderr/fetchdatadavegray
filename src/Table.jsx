import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='py-14'>
        <table >
            <tbody className='border border-black'>
                {items.map(item => (
                    <Row key={item.id} item={item}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
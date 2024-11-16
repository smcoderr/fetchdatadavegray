import React from 'react'

const Cell = ({cellData}) => {
  return (
    <td className='border-2 border-gray-500 border-double p-2'>
        {cellData}
    </td>
  )
}

export default Cell
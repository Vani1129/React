import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const { userid } = useParams()
  return (
    <div className="flex justify-center items-center font-bold text-center bg-orange-200">
    User: {userid}
</div>

  )
}

export default user
import React from 'react'

function SummaryPreview({resumeInfo}) {
  return (
    <div className='text-xs'>
      <p>{resumeInfo?.summery}</p>
    </div>
  )
}

export default SummaryPreview

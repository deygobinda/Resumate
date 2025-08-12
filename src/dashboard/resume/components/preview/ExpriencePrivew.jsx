import React from 'react'

const ExpriencePrivew = ({ resumeInfo }) => {
  return (
    <div className='my-6'>
      <h2 className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}>Professional Experience</h2>
      <hr style={{
        borderColor: resumeInfo?.themeColor
      }} />

      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className='my-5'>
          <div className='flex justify-between'>
            <h2 className='text-sm font-bold'>{experience?.title}</h2>
            <span className='text-xs'>{experience.startDate} to  {experience?.currentlyWorking ? "Present" : experience?.endDate}</span>
          </div>
          <h2 className='text-xs flex justify-between'>
            {experience?.companyName},
            {experience?.city},
            {experience?.state},
          </h2>
          <p className='text-xs my-2'> {experience.workSummery}</p>
        </div>
      ))}
    </div>
  )
}

export default ExpriencePrivew

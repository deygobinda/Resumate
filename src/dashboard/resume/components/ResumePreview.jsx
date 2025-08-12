import { ResumeInfoContex } from '@/contex/ResumeInfoContex'
import React, { useContext } from 'react'
import PersonalDetailedPreview from './preview/PersonalDetailedPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExpriencePrivew from './preview/ExpriencePrivew'

const ResumePreview = () => {
  const {resumeInfo  , setResumeInfo} = useContext(ResumeInfoContex)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor: resumeInfo?.themeColor
    }}>
      <PersonalDetailedPreview resumInfo={resumeInfo}/>
      <SummaryPreview resumeInfo={resumeInfo}/>
      <ExpriencePrivew resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview

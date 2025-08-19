import {  ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailedPreview from './preview/PersonalDetailedPreview'
import SummaryPreview from './preview/SummaryPreview'
import ExpriencePrivew from './preview/ExpriencePrivew'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

const ResumePreview = () => {
  const {resumeInfo  , setResumeInfo} = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor: resumeInfo?.themeColor
    }}>
      <PersonalDetailedPreview resumInfo={resumeInfo}/>
      <SummaryPreview resumeInfo={resumeInfo}/>
      <ExpriencePrivew resumeInfo={resumeInfo}/>
      <EducationalPreview resumeInfo={resumeInfo}/>
      <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview

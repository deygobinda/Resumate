import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume}) => {
  return (
    <Link to={"/dashboard/resume/"+resume.documentId+"/edit"}>
      <div className='p-14 bg-secondary flex justify-center items-center h-[280px]
      border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        <Notebook/>
      </div>
      <h1 className='text-center mt-1'>{resume.title}</h1>
    </Link>
  )
}

export default ResumeCardItem

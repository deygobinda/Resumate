import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContex } from '@/contex/ResumeInfoContex';
import dummy from '@/data/dummy';

const EditResume = () => {
    const params = useParams();
    const [resumeInfo  , setResumeInfo] = useState();
    useEffect(() => {
        setResumeInfo(dummy)
    }, [])
    return (
        <ResumeInfoContex.Provider value={{resumeInfo,setResumeInfo}}>
            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                <FormSection />
                <ResumePreview />
            </div>
        </ResumeInfoContex.Provider>
    )
}

export default EditResume

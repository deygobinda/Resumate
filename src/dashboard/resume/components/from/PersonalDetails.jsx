import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContex } from '@/contex/ResumeInfoContex'
import React, { useContext } from 'react'

const PersonalDetails = ({enableNext}) => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContex);
    const handleInputChange = (e) => {
        enableNext(false)
        const {name , value} = e.target;
        setResumeInfo({
            ...resumeInfo,
            [name] : value
        })
    }
    const onSave = (e) => {
        e.preventDefault()
        console.log(resumeInfo)
        enableNext(true)
    }
    return (
        <div className='p-5 shadow-lg border-t-primary border-t-4 mt-10 rounded-lg'>
            <h2 className='font-bold text-lg'>Personal Details</h2>
            <h2>Get Started with the basic information</h2>
            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div >
                        <label className='text-sm'>First Name</label>
                        <Input name="firstName" required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Last Name</label>
                        <Input name="lastName" required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Job Title</label>
                        <Input name="jobTitle" required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <Input name="address" required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Phone</label>
                        <Input name="phone" required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Email</label>
                        <Input name="email" required onChange={handleInputChange} />
                    </div>
                </div>
                <div className='flex justify-end mt-3'>
                    <Button type="submit">Save</Button>
                </div>
            </form>

        </div>
    )
}

export default PersonalDetails

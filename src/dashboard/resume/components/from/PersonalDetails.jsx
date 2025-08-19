import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from '../../../../../services/GlobalApi';
import { Loader2 } from 'lucide-react';
import { toast } from "sonner"

const PersonalDetails = ({ enableNext }) => {

    const params = useParams();
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [fromData, setFormData] = useState();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setFormData({
            firstName: resumeInfo?.firstName,
            lastName: resumeInfo?.lastName,
            jobTitle: resumeInfo?.jobTitle,
            email: resumeInfo?.email,
            address: resumeInfo?.address,
            phone: resumeInfo?.phone

        })
    }, [])
    const handleInputChange = (e) => {
        enableNext(false)
        const { name, value } = e.target;
        setFormData({
            ...fromData,
            [name]: value
        })
        setResumeInfo({
            ...resumeInfo,
            [name]: value
        })
    }
    const onSave = (e) => {
        setLoading(true)
        e.preventDefault()
        const data = {
            data: fromData
        }
        GlobalApi.updateResumeDetail(params?.resumeId, data).then((res) => {
            enableNext(true)
            setLoading(false)
            toast("Details Updated", {
                style: {
                    '--normal-bg': 'var(--background)',
                    '--normal-text': 'light-dark(var(--color-purple-600), var(--color-purple-400))',
                    '--normal-border': 'light-dark(var(--color-purple-600), var(--color-purple-400))'
                }
            })
        }).catch(() => setLoading(false))

    }
    return (
        <div className='p-5 shadow-lg border-t-primary border-t-4 mt-10 rounded-lg'>
            <h2 className='font-bold text-lg'>Personal Details</h2>
            <h2>Get Started with the basic information</h2>
            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div >
                        <label className='text-sm'>First Name</label>
                        <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Last Name</label>
                        <Input name="lastName" defaultValue={resumeInfo?.lastName} required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Job Title</label>
                        <Input name="jobTitle" defaultValue={resumeInfo?.jobTitle} required onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <Input name="address" defaultValue={resumeInfo?.address} required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Phone</label>
                        <Input name="phone" defaultValue={resumeInfo?.phone} required onChange={handleInputChange} />
                    </div>
                    <div >
                        <label className='text-sm'>Email</label>
                        <Input name="email" defaultValue={resumeInfo?.email} required onChange={handleInputChange} />
                    </div>
                </div>
                <div className="flex justify-end mt-3">
                    <Button type="submit" size="sm" disabled={loading} className="relative w-20">
                        {loading ? (
                            <Loader2 className="animate-spin absolute left-1/2 -translate-x-1/2" />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default PersonalDetails

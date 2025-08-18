import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../../services/GlobalApi.js'  
import { useNavigate } from 'react-router-dom'

const AddResume = () => {
    const [resumeTitle, setResumetitle] = useState("")
    const { user } = useUser()
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = () => {
        setIsLoading(true)
        const uuid = uuidv4()
        const resumeData = {
            data: {
                title: resumeTitle,
                resumeId: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }
        GlobalApi.createNewResume(resumeData).then(res => {
            if (res) {
                setIsLoading(false)
                navigate('/dashboard/resume/'+res.data.data.documentId+'/edit')
            }
        }, (error) => {
            setIsLoading(false)
        })
    }
    return (
        <Dialog>

            <DialogTrigger asChild>
                <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105  transition-all hover:shadow-md cursor-pointer'>
                    <PlusSquare />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create New Resume</DialogTitle>
                    <DialogDescription>
                        Add Title for Your  New Resume
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Input id="title-1" name="title" placeholder="Add Title" onChange={(e) => setResumetitle(e.target.value)} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost">Cancel</Button>
                    </DialogClose>
                    <Button disabled={!resumeTitle || isLoading} onClick={handleSubmit}>
                        {isLoading? <Loader2 className='animate-spin'/> : "Create"}
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default AddResume

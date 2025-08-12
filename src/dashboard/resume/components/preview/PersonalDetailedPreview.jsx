import React from 'react'

function PersonalDetailedPreview({ resumInfo }) {
    return (
        <div>
            <h2 className='font-bold text-xl text-center' style={{
                color: resumInfo?.themeColor
            }}>{resumInfo?.firstName} {resumInfo?.lastName} </h2>
            <h2 className='text-center text-sm 
        font-medium'style={{
                    color: resumInfo?.themeColor
                }}
            >{resumInfo?.jobTitle}</h2>
            <h2 className='text-center font-normal text-xs'>{resumInfo?.address}</h2>
            <div className='flex justify-between'>
                <h2 className='text-center font-normal text-xs' style={{
                    color: resumInfo?.themeColor
                }}>{resumInfo?.phone}</h2>
                <h2 className='text-center font-normal text-xs' style={{
                    color: resumInfo?.themeColor
                }}>{resumInfo?.email}</h2>
            </div>
            <hr  className='border-[1.5px] my-2' style={{
                borderColor : resumInfo?.themeColor
            }}/>
        </div>

    )
}

export default PersonalDetailedPreview

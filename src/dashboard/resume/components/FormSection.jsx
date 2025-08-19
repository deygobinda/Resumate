import React, { useState } from 'react'
import PersonalDetails from './from/PersonalDetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGridIcon } from 'lucide-react'
import Summary from './from/Summary'
import Experience from './from/Experience'

const FormSection = () => {
  const [activeFormIndex , setActiveFormIndex] = useState(1);
  const [enableNext , setEnableNext] = useState(true);
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" className='flex gap-2' size='sm'><LayoutGridIcon/>  Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1 && <Button className='flex gap-2' size='sm'onClick={() => setActiveFormIndex((e) => e-1)} ><ArrowLeft/> Back</Button>}
          <Button className='flex gap-2' size="sm" onClick={() => setActiveFormIndex((e) => e+1)} disabled={!enableNext}>Next <ArrowRight/></Button>
        </div>
      </div>
      {activeFormIndex == 1 && <PersonalDetails enableNext={(v) => setEnableNext(v)}/> }
      {activeFormIndex == 2 && <Summary enabledNext={(v) => setEnableNext(v)}/> }
      {activeFormIndex == 3 && <Experience enabledNext={(v) => setEnableNext(v)}/> }
    </div>
  )
}

export default FormSection

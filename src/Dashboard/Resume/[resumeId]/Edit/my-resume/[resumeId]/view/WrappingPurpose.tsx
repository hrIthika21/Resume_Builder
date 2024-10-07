import React, { useState } from 'react';
import { ResumeInfoContext } from '../../../../../../../context/ResumeInfoContext';
import { ResumeData } from '../../../../../../data/dummyData';
import ViewResume from './ViewResume';



const WrappingPurpose: React.FC = () => {
    const [resumeInfo, setResumeInfo] = useState<ResumeData | null>(null); // Initialize state for resume info
    console.log("why?")

    return (
        // {Wrapping View resume and taking resumeId as prop}
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <ViewResume /> {/* Pass resumeId as prop */}
        </ResumeInfoContext.Provider>
    );
};

export default WrappingPurpose;


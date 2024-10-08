import React, { useEffect,useState } from 'react'
import { Button } from '../../../../../../../components/ui/button';
import { ResumeData } from '../../../../../../data/dummyData';
import { useParams } from 'react-router-dom';
import '../../../../../../../resume_builder.css';


const ViewResume: React.FC = () =>{

  
    const [resumeInfo, setResumeInfo] = useState<ResumeData | null>(null); // Initialize with an empty object
    const { resumeId } = useParams<{ resumeId: string }>();
    console.log("why")

    useEffect(() => {
        GetResumeInfo();
    }, [resumeId,resumeInfo]);

    const GetResumeInfo = () => {
        const storedData = localStorage.getItem(`resume_${resumeId}`); // Get the stored data
        if (storedData) {
            const parsedData = JSON.parse(storedData); // Parse the JSON data

            // Check if the resumeId matches the one from the URL
            if (parsedData && parsedData.resumeId === resumeId) {
                setResumeInfo(parsedData.data); // Set the resume data to state
                console.log('Resume Info:', parsedData.data);
            } else {
                console.error(`No resume found for resumeId: ${resumeId}`);
            }
        } else {
            console.error('No resume data found in localStorage');
        }
    };

    const HandleDownload=()=>{
        window.print();
    }


   switch(resumeId){
    case "1":
        return (            
                    <div className='my-10 mx-10 md:mx-20 lg:mx-30' id="no-print"> 
                        <h2 className='text-center text-xl font-semibold'> Your Resume is complete</h2>
                        <p className='text-center text-gray-400'>Do you wish to download it?</p>
                        <div className='flex justify-center lg:px-30 md:px-5  sm:px-30 my-10'>
                            <Button onClick={HandleDownload}>Download</Button>   
                        </div>
                    </div>
        )
    case "2":
        return (
            
                <div className='my-10 mx-10 md:mx-20 lg:mx-30'> 
                    <h2 className='text-center text-xl font-semibold'> Your Resume is complete</h2>
                    <p className='text-center text-gray-400'>Do you wish to download it?</p>
                    <div className='flex justify-center lg:px-30 md:px-5  sm:px-30 my-10'>
                            <Button onClick={HandleDownload}>Download</Button>
                                   
                        </div>
                </div>
            
        )
    case "3" :
        return (
        
                <div className='my-10 mx-10 md:mx-20 lg:mx-30'> 
                    <h2 className='text-center text-xl font-semibold'> Your Resume is complete</h2>
                    <p className='text-center text-gray-400'>Do you wish to download it?</p>
                    <div className='flex justify-center lg:px-30 md:px-5  sm:px-30 my-10'>
                            <Button onClick={HandleDownload}>Download</Button>
                            
                            
                        </div>
                </div>
        )
    
   }


    
}

export default ViewResume;
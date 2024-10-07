import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';

export interface EducationProp{
    resumeId : string
}

interface EducationField {
    id :number;
    year: number;
    degree: string;
    institute: string;
    cgpamarks: string;
}

const educationField : EducationField = {
    id : 0,
    year : 0,
    degree : '',
    institute : "",
    cgpamarks : "",
}


const Education : React.FC<EducationProp>= ({resumeId}) =>{

    const[education,setEducation] = useState<EducationField[]>([educationField])
    const {resumeInfo,setResumeInfo}= useContext(ResumeInfoContext)

    const handleEducationChange = (index : number, e : React.ChangeEvent<HTMLInputElement>)=>{
        const newEntries = education.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setEducation(newEntries)
    }


    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            education : education
        })
    },[education])

    useEffect(()=>{
        resumeInfo&&setEducation(resumeInfo?.education)
      },[])

    const AddNewEducation = ()=>{
        setEducation([...education,educationField])
    }

    const RemoveEducation = ()=>{
        setEducation(education=>education.slice(0,-1))

    }

    const onSave=(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const educationData={    
                  education: education.map(({ id, ...rest }) => rest)
              }
            const data = {
                ...parsedData, 
                ...educationData,       
            };  

            localStorage.setItem(`resume_${resumeId}`, JSON.stringify(data));
            console.log('Details updated!');
        } catch (error) {
            console.error('Failed to update details:', error);
        }
    }


    switch(resumeId){
        case "1":
            return (
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Education</h2>
                    <p className="font-thin text-md">Add your Educational details</p>
                    <div>
                        {education.map((item,index)=>(
                            <div>
                                <div className='grid grid-cols-2 gap-2 mt-4'>
                                    <div>
                                        <label className='text-xs'> YEAR OF STUDY</label>
                                        <Input name= "year" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                    </div>
                                    <div>
                                        <label className='text-xs'>DEGREE</label>
                                        <Input required name = "degree" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                    </div>
                                    <div>
                                        <label className='text-xs'>INSTITUTE</label>
                                        <Input required name="institute" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                    </div>
                                    <div>
                                        <label className='text-xs'>CGPA/MARKS</label>
                                        <Input required name="cgpamarks" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                    </div>
                                </div>
                                    <div className="flex justify-between col-span-2 mt-4">
                                        <div className="flex gap-2">
                                            <Button variant='outline' onClick={AddNewEducation}> + Add Education</Button>
                                            <Button variant='outline' onClick={RemoveEducation}> - Remove</Button>
                                        </div>
                                        <Button onClick={(e : React.FormEvent<HTMLFormElement>)=>onSave(e)}>Save</Button>
                                        
                                    </div>
                            </div>
                        ))}
                    
                    </div>
                </div>
              )
        case "2":
        return (
            <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                <h2 className="font-bold text-lg">Education</h2>
                <p className="font-thin text-md">Add your Educational details</p>
                <div>
                    {education.map((item,index)=>(
                        <div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <div>
                                    <label className='text-xs'> YEAR OF STUDY</label>
                                    <Input name= "year" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>DEGREE</label>
                                    <Input required name = "degree" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>INSTITUTE</label>
                                    <Input required name="institute" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>CGPA/MARKS</label>
                                    <Input required name="cgpamarks" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                            </div>
                                <div className="flex justify-between col-span-2 mt-4">
                                    <div className="flex gap-2">
                                        <Button variant='outline' onClick={AddNewEducation}> + Add Education</Button>
                                        <Button variant='outline' onClick={RemoveEducation}> - Remove</Button>
                                    </div>
                                    <Button onClick={()=>onSave()}>Save</Button>
                                    
                                </div>
                        </div>
                    ))}
                
                </div>
            </div>
            )
        case "3":
        return (
            <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                <h2 className="font-bold text-lg">Education</h2>
                <p className="font-thin text-md">Add your Educational details</p>
                <div>
                    {education.map((item,index)=>(
                        <div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <div>
                                    <label className='text-xs'> YEAR OF STUDY</label>
                                    <Input name= "year" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>DEGREE</label>
                                    <Input required name = "degree" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>INSTITUTE</label>
                                    <Input required name="institute" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                                <div>
                                    <label className='text-xs'>CGPA/MARKS</label>
                                    <Input required name="cgpamarks" onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEducationChange(index,e)}/>
                                </div>
                            </div>
                                <div className="flex justify-between col-span-2 mt-4">
                                    <div className="flex gap-2">
                                        <Button variant='outline' onClick={AddNewEducation}> + Add Education</Button>
                                        <Button variant='outline' onClick={RemoveEducation}> - Remove</Button>
                                    </div>
                                    <Button onClick={()=>onSave()}>Save</Button>
                                    
                                </div>
                        </div>
                    ))}
                
                </div>
            </div>
        )
    }

  
}

export default Education
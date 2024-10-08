import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../components/ui/input';
import RichTextEditor from "../RichTextEditor";
import { Button } from '../../../../components/ui/button';
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';



interface CourseWorkInformationProps{
    resumeId : string;
}

interface CourseWorkField {
    id? : number;
    title? : string;
    description? : string;
}

const courseworkField : CourseWorkField = {
    id : 0,
    title : "",
    description : ""
}

const CourseWorkInformation : React.FC<CourseWorkInformationProps> = ({resumeId}) => {

    const [coursework,setCourseWork] = useState<CourseWorkField[]>([courseworkField])
    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }

const { resumeInfo, setResumeInfo } = context;

    
    const handleCourseWorkChange = (index : number, e : React.ChangeEvent<HTMLInputElement>)=>{
        const newEntries = coursework.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setCourseWork(newEntries)
    }

    const handleRichTextEditor = (value: string, name: string, index: number) =>{
        const newEntries = coursework.slice();
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setCourseWork(newEntries)
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            coursework : coursework
        })
    },[coursework])

    useEffect(()=>{
        resumeInfo&&setCourseWork(resumeInfo?.coursework ?? [])
      },[])

    const AddNewExperience = ()=>{
        setCourseWork([...coursework,courseworkField])
    }

    const RemoveExperience = ()=>{
        setCourseWork(coursework=>coursework.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const courseWorkData={    
                coursework: coursework.map(({ id, ...rest }) => rest)
            }
            const data = {
                ...parsedData, 
                ...courseWorkData,       
            };  
            localStorage.setItem(`resume_${resumeId}`, JSON.stringify(data));  
            console.log('Details updated!');
        } catch (error) {
            console.error('Failed to update details:', error);
        }
    }

    switch(resumeId){
        case "1" :
            return (
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Course Work Information</h2>
                    <p className="font-thin text-md">Add your course-work details </p>
                    <form onSubmit={onSave}>
                        <div>
                            {coursework.map((item,index)=>(
                                <div key ={index}>
                                    <div className='grid grid-cols-2 gap-2 mt-4'>
                                        <div>
                                        <label className='text-xs'>COURSE TITLE</label>
                                                <Input name= "title" 
                                                required 
                                                onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleCourseWorkChange(index,e)}
                                                defaultValue={item?.title}/>
                                        </div>
                                        <div className="col-span-2">
                                                <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                <RichTextEditor
                                                    value={item?.description}
                                                    onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewExperience}> + Add More Course-Work</Button>
                                                    <Button variant='outline' onClick={RemoveExperience}> - Remove</Button>
                                                </div>
                                                    <Button>Save</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                    
                </div>
            )
            case "2" :
                return (
                    <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                        <h2 className="font-bold text-lg">Course Work Information</h2>
                        <p className="font-thin text-md">Add your course-work details </p>
                        <form onSubmit={onSave}>
                            <div>
                                {coursework.map((item,index)=>(
                                    <div key ={index}>
                                        <div className='grid grid-cols-2 gap-2 mt-4'>
                                            <div>
                                            <label className='text-xs'>COURSE TITLE</label>
                                                    <Input name= "title" 
                                                    required 
                                                    onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleCourseWorkChange(index,e)}
                                                    defaultValue={item?.title}/>
                                            </div>
                                            <div className="col-span-2">
                                                    <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                    <RichTextEditor
                                                        value={item?.description}
                                                        onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                    />
                                            </div>
                                            <div className="flex justify-between col-span-2">
                                                    <div className="flex gap-2">
                                                        <Button variant='outline' onClick={AddNewExperience}> + Add More Course-Work</Button>
                                                        <Button variant='outline' onClick={RemoveExperience}> - Remove</Button>
                                                    </div>
                                                        <Button>Save</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </form>
                        
                    </div>
                )
                case "3" :
                    return (
                        <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                            <h2 className="font-bold text-lg">Course Work Information</h2>
                            <p className="font-thin text-md">Add your course-work details </p>
                            <form onSubmit={onSave}>
                                <div>
                                    {coursework.map((item,index)=>(
                                        <div key ={index}>
                                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                                <div>
                                                <label className='text-xs'>COURSE TITLE</label>
                                                        <Input 
                                                        name= "title" 
                                                        required 
                                                        onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleCourseWorkChange(index,e)}
                                                        defaultValue={item?.title}/>
                                                </div>
                                                <div className="col-span-2">
                                                        <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                        <RichTextEditor
                                                            value={item?.description}
                                                            onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                        />
                                                </div>
                                                <div className="flex justify-between col-span-2">
                                                        <div className="flex gap-2">
                                                            <Button variant='outline' onClick={AddNewExperience}> + Add More Course-Work</Button>
                                                            <Button variant='outline' onClick={RemoveExperience}> - Remove</Button>
                                                        </div>
                                                            <Button>Save</Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </form>
                            
                        </div>
                    )
    }

  
}

export default CourseWorkInformation
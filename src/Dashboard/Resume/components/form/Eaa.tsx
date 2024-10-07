import React, { useState,useContext,useEffect } from 'react'
import { Input } from '../../../../components/ui/input';
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';
import { Button } from '../../../../components/ui/button';


interface EaaProp{
    resumeId : string;
}

interface EaaField {
    id : number;
    activity : string;
    description : string;
}

const eaaField: EaaField = {
    id : 0,
    activity : "",
    description : "",
};

const Eaa = ({resumeId} : EaaProp) => {

    const [eaa,setEaa]= useState<EaaField[]>([eaaField])
    const {resumeInfo,setResumeInfo} =useContext(ResumeInfoContext)

    const handleRichTextEditor = (value: string, name: string, index: number) => {
        const newEntries = eaa.slice(); 
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        };
        setEaa(newEntries); // Update the state with the new entries
    };

    const handleEaaChange = (index : number, e : React.ChangeEvent<HTMLInputElement>) =>{
        const newEntries =eaa.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setEaa(newEntries)
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            extraCurricularActivities : eaa
        })
    },[eaa])

    useEffect(()=>{
        resumeInfo&&setEaa(resumeInfo?.extraCurricularActivities)
      },[])

    const AddNewEaa = ()=>{
        setEaa([...eaa,eaaField])
    }

    const RemoveEaa = ()=>{
        setEaa(eaa=>eaa.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
          try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const eaaData={    
                eaa: eaa.map(({ id, ...rest }) => rest)
            }
            const data = {
                ...parsedData, 
                ...eaaData,       
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
                    <h2 className="font-bold text-lg">EXTRA CURRICULAR ACTIVITIES</h2>
                    <p className="font-thin text-md">WHAT ELSE WERE YOU ACTIVE IN</p>
                    <form onSubmit={onSave}>
                        <div>
                            {eaa.map((eaa,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs">ACTIVITY</label>
                                            <Input name='activity' required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEaaChange(index,e)}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewEaa}> + Add Extra Activity</Button>
                                                <Button variant='outline' onClick={RemoveEaa}> - Remove</Button>
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
            case "2":
                return (
                    <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                        <h2 className="font-bold text-lg">EXTRA CURRICULAR ACTIVITIES</h2>
                        <p className="font-thin text-md">WHAT ELSE WERE YOU ACTIVE IN</p>
                        <form onSubmit={onSave}>
                            <div>
                                {eaa.map((eaa,index)=>(
                                    <div key={index}>
                                        <div className="grid grid-cols-2 mt-5 gap-3">
                                            <div>
                                                <label className="text-xs">ACTIVITY</label>
                                                <Input name='activity' required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEaaChange(index,e)}/>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                <RichTextEditor
                                                    onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                />
                                            </div>
                                            <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewEaa}> + Add Extra Activity</Button>
                                                    <Button variant='outline' onClick={RemoveEaa}> - Remove</Button>
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
                case "3":
                    return (
                        <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                            <h2 className="font-bold text-lg">EXTRA CURRICULAR ACTIVITIES</h2>
                            <p className="font-thin text-md">WHAT ELSE WERE YOU ACTIVE IN</p>
                            <form onSubmit={onSave}>
                                <div>
                                    {eaa.map((eaa,index)=>(
                                        <div key={index}>
                                            <div className="grid grid-cols-2 mt-5 gap-3">
                                                <div>
                                                    <label className="text-xs">ACTIVITY</label>
                                                    <Input name='activity' required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleEaaChange(index,e)}/>
                                                </div>
                                                <div className="col-span-2">
                                                    <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                    <RichTextEditor
                                                        onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                    />
                                                </div>
                                                <div className="flex justify-between col-span-2">
                                                    <div className="flex gap-2">
                                                        <Button variant='outline' onClick={AddNewEaa}> + Add Extra Activity</Button>
                                                        <Button variant='outline' onClick={RemoveEaa}> - Remove</Button>
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

export default Eaa
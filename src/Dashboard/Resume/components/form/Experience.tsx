import { useContext, useEffect, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";

interface ExperienceProps {
    resumeId: string;
    enabledNext: (value: boolean) => void;
}

interface FormField {
    id : number;
    position: string;
    duration: string;
    company: string;
    description: string;
}

const formField: FormField = {
    id : 0,
    position: '',
    duration: '',
    company :'',
    description: '',
};

const Experience= ({ resumeId, enabledNext }: ExperienceProps) => {

    const[experience,setExperience] = useState<FormField[]>([formField])
    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext)

    const handleRichTextEditor = (value: string, name: string, index: number) => {
        const newEntries = experience.slice(); 
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        };
        setExperience(newEntries); // Update the state with the new entries
    };

    const handleChange = (index : number, e : React.ChangeEvent<HTMLInputElement>) =>{
        const newEntries = experience.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setExperience(newEntries)
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            experiences : experience
        })
    },[experience])

    useEffect(()=>{
        resumeInfo?.experiences.length>0&&setExperience(resumeInfo?.experiences)
        
    },[])
    

    const AddNewExperience = ()=>{
        setExperience([...experience,formField])
    }

    const RemoveExperience = ()=>{
        setExperience(experience=>experience.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const experienceData={    
                experience: experience.map(({ id, ...rest }) => rest)
            }
            const data = {
                ...parsedData, 
                ...experienceData,       
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
                    <h2 className="font-bold text-lg">EXPERIENCE</h2>
                    <p className="font-thin text-md">Add your previous experiences</p>
                    <form onSubmit={onSave}>
                        <div>
                            {experience.map((item,index)=>(
                                <div key = {index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">POSITION</label>
                                            <Input name='position'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-xs ">ORGANISATION</label>
                                            <Input name='company'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DURATION</label>
                                            <Input name='duration' placeholder="FOR EXAMPLE: June 2023 - August 2023" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewExperience}> + Add More Experience</Button>
                                                <Button variant='outline' onClick={RemoveExperience}> - Remove</Button>
                                            </div>
                                            <Button >Save</Button>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>

                );
        case "2":
            return ( 
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Experience</h2>
                    <p className="font-thin text-md">Add your previous experiences</p>
                    <form onSubmit={onSave}>
                        <div>
                            {experience.map((exp,index)=>(
                                <div key = {index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs">POSITION</label>
                                            <Input name='position'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-xs">DURATION</label>
                                            <Input name='duration' placeholder="FOR EXAMPLE: June 2023 - August 2023" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs col-span-2">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} // Pass the new value directly
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewExperience}> + Add More Experience</Button>
                                                <Button variant='outline' onClick={RemoveExperience}> - Remove</Button>
                                            </div>
                                            <Button >Save</Button>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            );
            case "3":
                return ( 
                    <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                        <h2 className="font-bold text-lg">EXPERIENCE</h2>
                        <p className="font-thin text-md">Add your previous experiences</p>
                        <form onSubmit={onSave}>
                            <div>
                                {experience.map((item,index)=>(
                                    <div key = {index}>
                                        <div className="grid grid-cols-2 mt-5 gap-3">
                                            <div>
                                                <label className="text-xs ">POSITION</label>
                                                <Input name='position'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                            </div>
                                            <div>
                                                <label className="text-xs ">ORGANISATION</label>
                                                <Input name='company'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="text-xs ">DURATION</label>
                                                <Input name='duration' placeholder="FOR EXAMPLE: June 2023 - August 2023" required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleChange(index,e)}/>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                                <RichTextEditor
                                                    onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                                />
                                            </div>
                                            <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewExperience}> + Add More Experience</Button>
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
 
export default Experience;
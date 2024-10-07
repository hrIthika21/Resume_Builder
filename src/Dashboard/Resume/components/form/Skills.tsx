import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';


interface SkillsProp{
    resumeId : string
}

interface SkillField {
    id :number;
    category : string;
    list : string;
}

const skillField: SkillField = {
    id : 0,
    category : '',
    list : ""
};

const Skills=({resumeId }: SkillsProp) => {


    const [skills,setSkills] = useState<SkillField[]>([skillField])
    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }
    
    const { resumeInfo, setResumeInfo } = context;


    const handleRichTextEditor = (value: string, name: string, index: number) => {
        const newEntries = skills.slice(); 
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        };
        setSkills(newEntries);
    }

    const handleSkillChange = (index : number, e : React.ChangeEvent<HTMLInputElement>) =>{
        const newEntries = skills.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setSkills(newEntries)
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            skills : skills
        })
    },[skills])

    useEffect(()=>{
        resumeInfo&&setSkills(resumeInfo?.skills)
      },[])

    const AddNewSkill = ()=>{
        setSkills([...skills,skillField])
    }

    const RemoveSkill = ()=>{
        setSkills(skills=>skills.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const skillsData={    
                  skills: skills.map(({ id, ...rest }) => rest)
              }
            const data = {
                ...parsedData, 
                ...skillsData,       
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
                    <h2 className="font-bold text-lg uppercase">Skills</h2>
                    <p className="font-thin text-md">Add your Skills</p>
                    <form onSubmit={onSave}>
                        <div>
                            {skills.map((skills,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">CATEGORY</label>
                                            <Input name='category'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleSkillChange(index,e)} defaultValue={skills?.category}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={skills?.list}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'list', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewSkill}> + Add Skill</Button>
                                                <Button variant='outline' onClick={RemoveSkill}> - Remove</Button>
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
            return(
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Skills</h2>
                    <p className="font-thin text-md">Add your Skills</p>
                    <form onSubmit={onSave}>
                        <div>
                            {skills.map((skills,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div className="col-span-2">
                                            <label className="text-xs ">LIST YOUR SKILLS</label>
                                            <RichTextEditor
                                                 value={skills?.list}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'list', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewSkill}> + Add Skill</Button>
                                                <Button variant='outline' onClick={RemoveSkill}> - Remove</Button>
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
                    <h2 className="font-bold text-lg uppercase">Skills</h2>
                    <p className="font-thin text-md">Add your Skills</p>
                    <form onSubmit={onSave}>
                        <div>
                            {skills.map((skills,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">CATEGORY</label>
                                            <Input name='category'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleSkillChange(index,e)} defaultValue={skills?.category}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={skills?.list}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'list', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewSkill}> + Add Skill</Button>
                                                <Button variant='outline' onClick={RemoveSkill}> - Remove</Button>
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

export default Skills
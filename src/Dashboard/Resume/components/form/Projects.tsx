import React, { useEffect } from 'react'
import { useState,useContext } from 'react';
import { Input } from '../../../../components/ui/input';
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Button } from '../../../../components/ui/button';



interface ProjectProp{
    resumeId : string;
}

interface ProjectField {
    id : number;
    projectName: string;
    duration: string;
    technologies: string;
    description: string;
}

const projectField: ProjectField = {
    id : 0,
    projectName: '',
    duration: '',
    technologies :'',
    description: '',
};

const Projects =({resumeId} : ProjectProp) => {

    const[projects,setProjects] = useState<ProjectField[]>([projectField])
    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }
    
    const { resumeInfo, setResumeInfo } = context;

    const handleRichTextEditor = (value: string, name: string, index: number)=>{
        const newEntries = projects.slice(); 
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        };
        setProjects(newEntries);
    }

    const handleProjectChange = (index : number, e : React.ChangeEvent<HTMLInputElement>)=>{
        const newEntries = projects.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setProjects(newEntries)
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            projects : projects
        })
    },[projects])

    useEffect(()=>{
        resumeInfo&&setProjects(resumeInfo?.projects)
    },[])

    const AddNewProject = ()=>{
        setProjects([...projects,projectField])
    }

    const RemoveProject= ()=>{
        setProjects(projects=>projects.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const projectsData={    
                  projects: projects.map(({ id, ...rest }) => rest)
              }
            const data = {
                ...parsedData, 
                ...projectsData,       
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
                    <h2 className="font-bold text-lg">PROJECTS</h2>
                    <p className="font-thin text-md">Add your recent projects</p>
                    <form onSubmit={onSave}>
                        <div>
                            {projects.map((projects,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">PROJECT NAME</label>
                                            <Input name='projectName'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.projectName}/>
                                        </div>
                                        <div>
                                            <label className="text-xs ">DURATION</label>
                                            <Input name='duration'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.duration}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">TECHNOLOGIES USED</label>
                                            <RichTextEditor
                                                value={projects?.technologies}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'technologies', index)} 
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={projects?.description}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewProject}> + Add Project</Button>
                                                    <Button variant='outline' onClick={RemoveProject}> - Remove</Button>
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
                    <h2 className="font-bold text-lg">PROJECTS</h2>
                    <p className="font-thin text-md">Add your recent projects</p>
                    <form onSubmit={onSave}>
                        <div>
                            {projects.map((projects,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">PROJECT NAME</label>
                                            <Input name='projectName'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.projectName}/>
                                        </div>
                                        <div>
                                            <label className="text-xs ">DURATION</label>
                                            <Input name='duration'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.duration}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">TECHNOLOGIES USED</label>
                                            <RichTextEditor
                                                value={projects?.technologies}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'technologies', index)} 
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={projects?.description}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewProject}> + Add Project</Button>
                                                    <Button variant='outline' onClick={RemoveProject}> - Remove</Button>
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
                    <h2 className="font-bold text-lg">PROJECTS</h2>
                    <p className="font-thin text-md">Add your recent projects</p>
                    <form onSubmit={onSave}>
                        <div>
                            {projects.map((projects,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs ">PROJECT NAME</label>
                                            <Input name='projectName'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.projectName}/>
                                        </div>
                                        <div>
                                            <label className="text-xs ">DURATION</label>
                                            <Input name='duration'required onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleProjectChange(index,e)} defaultValue={projects?.duration}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">TECHNOLOGIES USED</label>
                                            <RichTextEditor
                                                value={projects?.technologies}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'technologies', index)} 
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={projects?.description}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2">
                                                <div className="flex gap-2">
                                                    <Button variant='outline' onClick={AddNewProject}> + Add Project</Button>
                                                    <Button variant='outline' onClick={RemoveProject}> - Remove</Button>
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

export default Projects
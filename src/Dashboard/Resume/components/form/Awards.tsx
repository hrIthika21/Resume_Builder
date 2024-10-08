import React, { useContext, useState,useEffect } from 'react'
import { Input } from '../../../../components/ui/input';
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from '../../../../context/ResumeInfoContext';
import { Button } from '../../../../components/ui/button';


interface AwardProps {
    resumeId? : string
}

interface AwardsAndAchievementsField {
    id ?:number;
    title? : string;
    description? : string;
}

const awardsandachievementsField: AwardsAndAchievementsField  = {
    id : 0,
    title : "",
    description : "",
};


const Awards = ({resumeId} : AwardProps) => {

    const [awardsAndAchievements,setAwardsAndAchievements] = useState<AwardsAndAchievementsField []>([awardsandachievementsField])
    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }

const { resumeInfo, setResumeInfo } = context;
    const handleAwardsChange = (index : number, e : React.ChangeEvent<HTMLInputElement>) =>{
        const newEntries =awardsAndAchievements.slice();
        const {name,value}=e.target;
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        }
        setAwardsAndAchievements(newEntries)
    }

    const handleRichTextEditor = (value: string, name: string, index: number) => {
        const newEntries = awardsAndAchievements.slice(); 
        newEntries[index] = {
            ...newEntries[index], 
            [name]: value
        };
        setAwardsAndAchievements(newEntries); // Update the state with the new entries
    };

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            awardsAndAchievements : awardsAndAchievements
        })
    },[awardsAndAchievements])

    useEffect(()=>{
        resumeInfo&&setAwardsAndAchievements(resumeInfo?.awardsAndAchievements ?? [])
      },[])

    const AddNewAward = ()=>{
        setAwardsAndAchievements([...awardsAndAchievements,awardsandachievementsField])
    }

    const RemoveAward = ()=>{
        setAwardsAndAchievements(education=>education.slice(0,-1))
    }

    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
;        
        try {
        const existingData = localStorage.getItem(`resume_${resumeId}`);
        const parsedData = existingData ? JSON.parse(existingData) : {};
        const awardsData={    
            awardsAndAchievements: awardsAndAchievements.map(({ id, ...rest }) => rest)
        }
        const data = {
            ...parsedData, 
            ...awardsData,       
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
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4 mr-4">
                    <h2 className="font-bold text-lg">AWARDS AND ACHIEVENTS</h2>
                    <p className="font-thin text-md">Jot down what you have achieved over the years</p>
                    <form onSubmit={onSave}>
                        <div>
                            {awardsAndAchievements.map((awardsAndAchievements,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs">TITLE</label>
                                            <Input name='title' 
                                            required 
                                            onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleAwardsChange(index,e)}
                                            defaultValue={awardsAndAchievements?.title}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                                value={awardsAndAchievements?.description}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2 mt-4">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewAward}> + Add</Button>
                                                <Button variant='outline' onClick={RemoveAward}> - Remove</Button>
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
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4 mr-4">
                    <h2 className="font-bold text-lg">AWARDS AND ACHIEVENTS</h2>
                    <p className="font-thin text-md">Jot down what you have achieved over the years</p>
                    <form onSubmit={onSave}>
                        <div>
                        
                        {awardsAndAchievements.map((awardsAndAchievements,index)=>(
                            <div key={index}>
                                <div className="grid grid-cols-2 mt-5 gap-3">

                                    <div>
                                        <label className="text-xs">TITLE</label>
                                        <Input name='title' 
                                        required 
                                        onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleAwardsChange(index,e)}
                                        defaultValue={awardsAndAchievements?.title}/>
                                    </div>
                                </div>
                                <div className="flex justify-between col-span-2 mt-4">
                                        <div className="flex gap-2">
                                            <Button variant='outline' onClick={AddNewAward}> + Add</Button>
                                            <Button variant='outline' onClick={RemoveAward}> - Remove</Button>
                                        </div>
                                            <Button>Save</Button>
                                        
                                    </div>
                            </div>
                        ))}
                        </div>    
                    </form>
                </div>
            )
        case "3" :
            return (
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4 mr-4">
                    <h2 className="font-bold text-lg">AWARDS AND ACHIEVENTS</h2>
                    <p className="font-thin text-md">Jot down what you have achieved over the years</p>
                    <form onSubmit={onSave}>
                        <div>
                            {awardsAndAchievements.map((awardsAndAchievements,index)=>(
                                <div key={index}>
                                    <div className="grid grid-cols-2 mt-5 gap-3">
                                        <div>
                                            <label className="text-xs">TITLE</label>
                                            <Input name='title' 
                                            required 
                                            onChange={(e : React.ChangeEvent<HTMLInputElement>)=>handleAwardsChange(index,e)}
                                            defaultValue={awardsAndAchievements?.title}/>
                                        </div>
                                        <div className="col-span-2">
                                            <label className="text-xs ">DESCRIBE YOUR WORK</label>
                                            <RichTextEditor
                                            value={awardsAndAchievements?.description}
                                                onRichEditorChange={(value: string) => handleRichTextEditor(value, 'description', index)} 
                                            />
                                        </div>
                                        <div className="flex justify-between col-span-2 mt-4">
                                            <div className="flex gap-2">
                                                <Button variant='outline' onClick={AddNewAward}> + Add</Button>
                                                <Button variant='outline' onClick={RemoveAward}> - Remove</Button>
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

export default Awards
import { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";

export interface SummaryDetailProp{
    resumeId : string;
    enabledNext : (value : boolean) => void;
}

export interface SummaryProp{
    summary : string
}

const Summary : React.FC<SummaryDetailProp>= ({resumeId,enabledNext}) => {


    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }
    
    const { resumeInfo, setResumeInfo } = context;

    const [summary,setSummary] = useState<SummaryProp | null>(null)

    useEffect(()=>{
        summary&&setResumeInfo({
            ...resumeInfo,
            summary: resumeInfo?.summary
        })
    },[summary])

    const onSave = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        enabledNext(true)
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parsedData = existingData ? JSON.parse(existingData) : {};
            const summaryData={    
                  summary: summary
              }
            const data = {
                ...parsedData, 
                ...summaryData,       
            };  
            localStorage.setItem(`resume_${resumeId}`, JSON.stringify(data));  
            console.log('Details updated!');
        } catch (error) {
            console.error('Failed to update details:', error);
        }
    }

    switch(resumeId){
        case "1":
            return(
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Summary</h2>
                    <p className="font-thin text-md">Add Summary for your job title</p>
                    <form onSubmit={onSave}>
                        <div >
                            <Textarea 
                            required  value={summary? resumeInfo?.summary : ""}
                            defaultValue={resumeInfo?.summary}
                            onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>setSummary({summary: e.target.value})} 
                            name="summary"/>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>           
                </div>

            );
        case "2":
            return(
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Summary</h2>
                    <p className="font-thin text-md">Add Summary for your job title</p>
                    <form onSubmit={onSave}>
                        <div>
                            <Textarea required  value={summary? resumeInfo?.summary : ""}
                            defaultValue={resumeInfo?.summary}
                            onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>setSummary({summary: e.target.value})}  
                            name="summary"/>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                    
                </div>
    );
        case "3":
            return(
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg uppercase">Summary</h2>
                    <p className="font-thin text-md">Add Summary for your job title</p>
                    <form onSubmit={onSave}>
                        <div>
                            <Textarea required  value={summary? resumeInfo?.summary : ""}
                            defaultValue={resumeInfo?.summary}
                            onChange={(e : React.ChangeEvent<HTMLTextAreaElement>)=>setSummary({summary: e.target.value})} 
                            name="summary"/>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                    
                </div>
    );
        }
}
 
export default Summary;
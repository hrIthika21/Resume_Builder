import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import dummyData from "../../../data/dummyData";


interface RouteParams {
    [key: string]: string | undefined;
    resumeId? : string;
}

interface Education {
    id: number;
    year: number;
    degree: string;
    institute: string;
    cgpamarks: string;
  }
  
  interface Skill {
    category: string;
    list: string[];
  }
  
  interface Internship {
    id: number;
    position: string;
    company: string;
    duration: string;
    description: string;
  }
  
  interface Experience {
    id: number;
    position: string;
    organization: string;
    duration: string;
    description: string;
  }
  
  interface Responsibility {
    id: number;
    role: string;
    description: string;
  }
  
  interface Award {
    id: number;
    title: string;
    description: string;
  }
  
  interface ExtraCurricular {
    id: number;
    activity: string;
    description: string;
  }
  
  interface ResumeData {
    firstname: string;
    lastname: string;
    rollno: string;
    department: string;
    contact: string;
    email: string;
    summary: string;
    education: Education[];
    skills: Skill[];
    coursework: { id: number; title: string; description: string }[];
    internships: Internship[];
    experiences: Experience[];
    positionOfResponsibility: Responsibility[];
    awardsAndAchievements: Award[];
    extraCurricularActivities: ExtraCurricular[];
  }

const EditResume : React.FC = () => {
    const params=useParams<RouteParams>()

    const [resumeInfo, setResumeInfo] = useState<ResumeData>(dummyData);

    useEffect(()=>{
        if(params.resumeId){
        setResumeInfo(dummyData);
        }
    },[params.resumeId])

    return (  
        <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5" id="print-preview">

            {/*form*/}
            <div id="no-print">
               <FormSection />
            </div>

            {/*resume preview*/}
            <div className="mr-5" id="print-area">
                <ResumePreview/>
            </div>
        </div>
        </ResumeInfoContext.Provider>
    );
}
 
export default EditResume;
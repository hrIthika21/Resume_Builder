import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import PersonalDetail from "./form/PersonalDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Summary from "./form/Summary";
import Experience from "./form/Experience";
import Education from "./form/Education";
import CourseWorkInformation from "./form/CourseWorkInformation";
import Skills from "./form/Skills";
import Projects from "./form/Projects";
import Awards from "./form/Awards";
import Eaa from "./form/Eaa";
import ViewResume from "../[resumeId]/Edit/my-resume/[resumeId]/view/ViewResume";




const FormSection : React.FC = () => {

  const [activeFormIndex,setActiveFormIndex]= useState<number>(1)
  const [enableNext,setEnableNext] = useState<boolean>(false)
  const {resumeId} = useParams<{resumeId : any}>()
  
  
    return (
        <div >
          <div className="flex justify-end items-center mt-3 gap-2">
            {activeFormIndex>1&& <Button size='sm' onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
            <Button className="flex gap-2" size="sm" onClick={()=>setActiveFormIndex(activeFormIndex+1)} disabled={!enableNext}>NEXT <ArrowRight/></Button>
          </div>
          {/* {PERSONAL DETAILS} */}
            {activeFormIndex==1? <PersonalDetail resumeId={resumeId} enabledNext={(v:boolean)=>setEnableNext(v)}/> : null}
          {/* {EDUCATION} */}
            {activeFormIndex==2? <Education resumeId={resumeId}/> : null}
          {/* {COURSE WORK INFORMATION} */}
            {activeFormIndex==3? <CourseWorkInformation resumeId = {resumeId}/> : null}
          {/* {SUMMARY} */}
            {activeFormIndex==4? <Summary resumeId={resumeId} enabledNext={(v:boolean)=>setEnableNext(v)}/> : null}
          {/* {SKILLS} */}
            {activeFormIndex==5? <Skills resumeId={resumeId}/> : null}
          {/* {EXPERIENCE AND INTERSHIPS} */}
            {activeFormIndex==6? <Experience  resumeId={resumeId} enabledNext={(v:boolean)=>setEnableNext(v)}/> : null}
          {/* {PROJECTS} */}
            {activeFormIndex==7? <Projects resumeId = {resumeId}/> : null}
          {/* {AWARDS AND ACHIEVEMENTS} */}
            {activeFormIndex==8? <Awards resumeId = {resumeId}/> : null}
          {/* {EXTRA CURRICULAR ACTIVITIES} */}
            {activeFormIndex==9? <Eaa resumeId = {resumeId}/> : null}
          {/* {END OF FORM} */}
           {activeFormIndex==10?  <ViewResume/> : null }
        </div>
      );
}
 
export default FormSection;
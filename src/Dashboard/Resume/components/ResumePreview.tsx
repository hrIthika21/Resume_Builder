import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import PersonalDetails from "./preview/PersonalDetails";
import { useParams } from "react-router-dom";




const ResumePreview : React.FC = () => {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)
    const {resumeId} =useParams<{resumeId : string}>()
    
    return ( 
       
        <div className="shadow-lg p-7 h-full mt-5">
            <PersonalDetails resumeInfo={resumeInfo} resumeId={resumeId} /> 
        </div>
     );
}
 
export default ResumePreview;
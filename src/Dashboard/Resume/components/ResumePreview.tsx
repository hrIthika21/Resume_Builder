import { useContext } from "react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import PersonalDetails from "./preview/PersonalDetails";
import { useParams } from "react-router-dom";
import { ResumeData } from "../../data/dummyData";




const ResumePreview : React.FC = () => {

    const context = useContext(ResumeInfoContext);

    if (!context) {
        throw new Error('ResumeInfoContext must be used within a ResumeInfoProvider');
    }
    
    const { resumeInfo} = context;
    const {resumeId} =useParams<{resumeId : string}>()
    
    return ( 
       
        <div className="shadow-lg p-7 h-full mt-5">
            <PersonalDetails resumeInfo={resumeInfo as ResumeData} resumeId={resumeId} /> 
        </div>
     );
}
 
export default ResumePreview;
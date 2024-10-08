import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import dummyData from "../../../data/dummyData";
import { ResumeData } from "../../../data/dummyData";


interface RouteParams {
    [key: string]: string | undefined;
    resumeId : string;
}


const EditResume : React.FC = () => {
    const params=useParams<RouteParams>()

    const [resumeInfo, setResumeInfo] = useState<ResumeData | null>(dummyData);

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
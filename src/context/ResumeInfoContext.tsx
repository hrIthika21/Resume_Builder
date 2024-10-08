import { createContext,useContext } from "react";
import { ResumeData } from "../Dashboard/data/dummyData";



export interface ResumeInfoContextType {
    resumeInfo: ResumeData | null; 
    setResumeInfo: React.Dispatch<React.SetStateAction<ResumeData | null>>;
}

export const ResumeInfoContext = createContext<ResumeInfoContextType | undefined>(undefined);

export const useResumeInfo = () => {
    const context = useContext(ResumeInfoContext);
    if (!context) {
        throw new Error('useResumeInfo must be used within a ResumeInfoProvider');
    }
    return context;
};



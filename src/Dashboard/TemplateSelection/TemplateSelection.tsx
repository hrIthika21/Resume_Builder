import { PlusSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ResumeParams{
    resumeId? : string;
}

const TemplateSelection: React.FC = () => {

    const navigate=useNavigate();

    const createResume = ({resumeId}: ResumeParams) => {
        setTimeout(()=>{
            navigate(`/dashboard/resume/${resumeId}/Edit`)
        },500)
    }

    return ( 
        <div>
            <div className="p-4 text-xl font-sans tracking-wide">Choose a template to create an impressive CV</div>
                <div className="grid sm:grid-cols-3 grid-rows-3 justify-center mx-auto w-fit gap-12 transform translate-y-10 relative">

                    {/*Template1*/}
                    <div className="relative group sm:w-[27vw] h-[70vh] w-[80vw]" onClick={()=>createResume({resumeId:'1'})}>
                        <PlusSquare className="relative z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 
                        group-hover:opacity-100 transition-opacity"/>
                        <img className="absolute sm:w-[27vw] w-[80vw] h-[70vh] border-gray-500 border-2 top-0 group-hover:cursor-pointer" 
                        src="https://0.academia-photos.com/attachment_thumbnails/54210933/mini_magick20190117-25687-95fmgv.png?1547792742" alt="TEMPLATE-1" />
                        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    </div>

                    {/*Template2*/}
                    <div className="relative group sm:w-[27vw] w-[80vw] h-[70vh]" onClick={()=>createResume({resumeId:'2'})}>
                        <PlusSquare className="relative z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 
                        group-hover:opacity-100 transition-opacity"/>
                        <img className="absolute sm:w-[27vw] w-[80vw] h-[70vh] border-gray-500 border-2 top-0 group-hover:cursor-pointer"
                        src="https://www.getsetresumes.com/storage/resume-examples/November2022/WRdsa2ZLRndCLCWIRrKT.jpg" alt="TEMPLATE-2" />
                        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    </div>

                    {/*Template*/}
                    <div className="relative group sm:w-[27vw] w-[80vw] h-[70vh]" onClick={()=>createResume({resumeId:'3'})}>
                        <PlusSquare className="relative z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 
                        group-hover:opacity-100 transition-opacity"/>
                        <img className="absolute sm:w-[27vw] w-[80vw] h-[70vh] border-gray-500 border-2 top-0 group-hover:cursor-pointer" 
                        src="https://imgv2-1-f.scribdassets.com/img/document/358333746/original/264efc34cf/1723368956?v=1" alt="TEMPLATE-3" />
                        <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                <div/>
            </div>
        </div>
      );
}
 
export default TemplateSelection;

import { ResumeData } from "../../../data/dummyData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../../../resume_builder.css"


interface PersonalDetailsProps {
    resumeInfo : ResumeData
    resumeId? : string;
}

const PersonalDetails : React.FC<PersonalDetailsProps> = ({resumeInfo,resumeId}) => {
    switch(resumeId){
        case "1":
            return(
                <div>
                    {/* Details about the person*/}
                    <div className="grid grid-cols-[20%,60%,20%] items-center ">
                        <div>
                            <img className="sm:h-[10vh] sm:w-[5vw] h-24 w-24" src="https://logowik.com/content/uploads/images/iit-indian-institute-of-technology-kharagpur4613.jpg" alt="IIT KHARAGPUR"></img>
                        </div>
                        <div className="grid grid-cols-[55%,1px,39%] place-self-center gap-y-2 items-center gap-x-1">
                            <div className="inline text-center md:text-sm sm:text-lg lg:text-lg text-xs">{resumeInfo?.firstname} {resumeInfo?.lastname}</div>
                            <div className="h-5 w-[2px] content-none bg-black md:text-sm sm:text-lg lg:text-lg "> </div>
                            <div className="inline text-center md:text-sm sm:text-lg lg:text-lg text-xs"> {resumeInfo?.rollno}</div>
                            <div className="col-span-3 text-center  md:text-sm sm:text-lg lg:text-lg text-xs ">{resumeInfo?.department}</div>
                        </div>
                        <div className="flex justify-center items-center ">
                            <img className="sm:h-[10vh] sm:w-[5vw] h-24 w-24" src={resumeInfo.img} alt="photo" />
                        </div>
                    </div>
                    {/*Education */}
                    <div>
                        <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col" >
                            <div className="table-header-group border border-collapse border-black">
                                <div className="table-row">
                                    <div className="text-center">EDUCATION</div>
                                </div>
                            </div>
                        </div>
                        <div className="table w-full table-auto border border-collapse border-black">
                            <div className="table-header-group border border-collapse border-black">
                                <div className="table-row">
                                    <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">YEAR</div>
                                    <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">DEGREE/CERTIFICATE</div>
                                    <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">INSTITUTE</div>
                                    <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">CGPA/MARKS</div>
                                </div>
                            </div>
                            {resumeInfo.education?.map((education,index)=>(

                                <div className="table-row-group border border-collapse border-black">
                                <div className="table-row">
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.year}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.degree}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.institute}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.cgpamarks}</div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*Course-work Information */}
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center">COURSEWORK INFORMATION</div>
                            </div>
                        </div>
                    </div>
                        {resumeInfo.coursework?.map((coursework,index)=>
                        (
                            <div>
                                <ul className="list-disc">
                                    <li key={index} className="font-bold sm:text-lg text-sm mt-2 md:text-sm">{coursework?.title}</li>
                                </ul>
                                <div dangerouslySetInnerHTML={{__html:coursework?.description ?? ""}} className="sm:text-lg text-sm md:text-xs"/>           
                            </div>
                        ))}

                    {/* {SUMMARY} */}
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center ">SUMMARY</div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:text-lg text-sm md:text-xs">
                        {resumeInfo?.summary}
                    </div>

                
                    {/*Skills */}
                    
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center">SKILLS AND EXPERTISE</div>
                            </div>
                        </div>
                    </div>

                    {resumeInfo.skills?.map((skills,index) =>
                    (
                        <div className="">
                            <div key={index} className=" mt-2 inline font-bold sm:text-lg text-sm md:text-sm" >{skills?.category} : </div>
                            <div dangerouslySetInnerHTML={{__html:skills?.list ?? ""}} className="inline sm:text-lg text-sm md:text-xs"/>           
                        </div>
                    ))}
                        
                    {/*Intership */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center sm:text-lg text-sm">INTERNSHIPS AND EXPERIENCE</div>
                            </div>
                        </div>
                    </div>

                        {resumeInfo.experiences?.map((experiences,index)=>
                        (
                            <div key = {index}>
                                <div className="flex flex-col md:text-xs">
                                    <ul className="list-disc">
                                        <li className="font-bold sm:text-lg text-sm md:text-sm">{experiences?.position} in {experiences?.company}</li>
                                    </ul>
                                    <div className="font-bold sm:text-lg text-sm md:text-sm">{experiences?.duration}</div>
                                </div>
                                <div dangerouslySetInnerHTML={{__html:experiences?.description ?? ""}} className="md:text-xs"/>                            
                            </div>
                        ))}
                        
                    </div>
                    {/* Projects */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold  mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center ">PROJECTS</div>
                            </div>
                        </div>
                    </div>

                        {resumeInfo.projects?.map((projects,index)=>(
                            <div key ={index}>
                                <div className="flex flex-col md:text-sm">
                                    <ul className="list-disc">
                                        <li className="font-bold sm:text-lg text-sm mt-4 md:text-sm">{projects?.projectName}</li>
                                    </ul>
                                    <div  className="font-bold sm:text-lg text-sm md:text-sm">{projects?.duration}</div>
                                </div>
                                <div>
                                    <div className="font-bold sm:text-lg text-sm inline md:text-sm">Technologies Used : </div>
                                    <div dangerouslySetInnerHTML={{__html:projects?.technologies ?? ""}} className="inline sm:text-lg text-sm md:text-sm"/>  
                                </div>
                                <div>
                                    <div className="font-bold text-md inline md:text-sm">Description : </div>
                                    <div dangerouslySetInnerHTML={{__html:projects?.description ?? ""}} className="inline sm:text-lg text-sm md:text-sm"/>  
                                </div>
                                
                            </div>
                        ))}
                        
                    </div>
                    {/* AWards */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center">AWARDS AND ACHIEVEMENTS</div>
                            </div>
                        </div>
                    </div>

                        {resumeInfo.awardsAndAchievements?.map((awardsAndAchievements,index)=>(
                            <div key={index}>
                                <ul className="list-disc inline sm:text-lg text-sm">
                                <li  className="inline font-bold md:text-sm">{awardsAndAchievements?.title}</li>
                                </ul>
                                <div className="inline sm:text-lg text-sm md:text-sm">: {awardsAndAchievements?.description}</div>
                            </div>
                        ))}
                        
                    </div>
                    {/* EAA */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-slate-300 font-bold mb-4 mt-4 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="text-center">EXTRA CURRICULAR ACTIVITIES</div>
                            </div>
                        </div>
                    </div>

                        {resumeInfo.extraCurricularActivities?.map((extraCurricularActivities,index)=>
                        (
                        <div key={index} className="sm:text-lg text-sm md:text-sm">
                            <ul className="list-disc inline">
                            <li   className="inline font-bold">{extraCurricularActivities?.activity}</li>
                            </ul>
                            <div className="inline"> : {extraCurricularActivities?.description}</div>
                        </div>
                        ))}   
                    </div>
                </div>
            );
        case "2":
            return(
                <div>
                {/* {PERSONAL DETAILS} */}
                    <div className="flex flex-col text-center justify-center items-center">
                        <div className="block font-bold text-lg ">
                            {resumeInfo?.firstname} {resumeInfo?.lastname}
                        </div>
                        <div className="table text-sm mt-3">
                            <div className="table-header-group">
                                <div className="table-row ">
                                    <div className="">
                                        <div className="flex flex-row items-center justify-center mx-2">
                                            <FontAwesomeIcon icon={faPhone} className="mr-1"/>
                                            <div className=" color text-cyan-600 text-xs">: {resumeInfo.contact}</div>
                                        </div>  
                                    </div>
                                    <div className="  align-middle text-center">
                                        <div className="flex flex-row items-center justify-center  mx-2">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-1"/>
                                            <a className=" text-cyan-600 text-xs">: {resumeInfo.email}</a>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-row items-center mx-2">
                                            <FontAwesomeIcon icon={faLinkedin}/>
                                            <a href={resumeInfo.linkedln} className="ml-1 text-cyan-600 text-xs">: {resumeInfo.linkedln}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-row ">
                                    <div className="font-bold text-lg mt-4 tracking-widest text-sky-700 align-middle text-center">{resumeInfo.department}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {SUMMARY} */}
                    <div>
                        <div className="table w-full mt-4">
                            <div className="table-row border-b border-black">
                                <div className="table-cell relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest *:">
                                    <span className="underline underline-offset-8 decoration-dashed decoration-black">PROFILE SUMMARY</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">{resumeInfo.summary}</div>
                    </div>
                    {/* {CORE COMPETENSIES} */}
                    <div>
                    <div className="table w-full mt-4">
                            <div className="table-row">
                                <div className="table-cell relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest">
                                    <span className="underline underline-offset-8 decoration-dashed decoration-black">CORE COMPETENSIES</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-rows-3">
                            {resumeInfo.skills?.map((skills,index)=>(
                                <div key={index}>
                                    <ul className="list-disc">
                                        <li dangerouslySetInnerHTML={{__html:skills?.list ?? ""}} />  
                                    </ul>
                                </div>
                            ))}
                                
                        </div>
                    </div>
                    {/* {PROFESSIONAL EXPERIENCE} */}
                    <div>
                        <div className="relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest">
                        <span className="underline underline-offset-8 decoration-dashed decoration-black ">PROFESSIONAL EXPERIENCE</span>
                        </div>
                       
                            {resumeInfo.experiences?.map((experiences,index)=>(
                                <div>
                                    <div className="grid grid-cols-2 text-black bg-slate-100  p-1 tracking-widest font-bold ">
                                        <div key={index}>{experiences?.company}</div>
                                        <div className="place-self-end" key={index}>{experiences?.duration}</div>
                                        <div key={index} className="col-span-2 place-self-start mt-3 text-sky-400 font-bold">{experiences?.position}</div>
                                    </div>
                                    <div>
                                        <ul className="list-disc">
                                            <li key={index}>{experiences?.description}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* {Projects} */}
                    <div>
                        <div className="relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest">
                            <span className="underline underline-offset-8 decoration-dashed decoration-black ">PROJECTS</span>
                        </div>
                        {resumeInfo.projects?.map((projects,index)=>(
                            <div key ={index}>
                                <div className="grid grid-cols-4 items-center justify-center mt-4">
                                    <ul className="list-disc col-span-3 flex items-center justify-start">
                                    <li  className="font-bold text-lg  uppercase">{projects?.projectName}</li>
                                    </ul>
                                    <div  className="font-bold text-md col-span-1">{projects?.duration}</div>
                                </div>
                                <div>
                                    <div className="inline text-md font-bold">TECHNOLOGIES USED : </div><div dangerouslySetInnerHTML={{__html:projects?.technologies ?? ""}} className="inline"/>  
                                </div>
                                <div>
                                <div className="inline text-md font-bold">DESCRIPTION : </div><div dangerouslySetInnerHTML={{__html:projects?.description ?? ""}} className="inline"/>  
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    {/* {ACADAMIC CREDENTIALS} */}
                    <div>
                        <div className="relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest">
                            <span className="underline underline-offset-8 decoration-dashed decoration-black">ACADAMIC CREDENTIALS</span>
                        </div>

                        <div>
                            <div className="mb-4">
                                <div className="font-bold">EDUCATION : </div>{resumeInfo.education?.map((education,index)=>(
                                <div key={index} className="inline">
                                     {education?.degree} in {education?.institute}, {education?.year}, {education?.degree} ,  
                                </div>
                            ))}
                            </div>
                            <div className="mb-4">
                                <div className="font-bold">COMPUTER SKILLS : </div>{resumeInfo.skills?.map((skills,index)=>(
                                <div key={index} className="inline">
                                    {skills?.list} ,
                                </div>
                            ))}
                            </div>
                            
                            <div className="mb-4">
                                <div className="font-bold">COURSE WORK : </div>
                                
                                {resumeInfo.coursework?.map((coursework,index)=>
                                (
                                <div>
                                    <ul className="list-disc">
                                        <li key={index} className="font-bold text-lg mt-2">{coursework?.title}</li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{__html:coursework?.description ?? ""}}/>           
                                </div>
                                ))}
                            </div>
                        </div>
                        {/* {PERSONAL DOSSIER} */}
                        <div>
                            <div className="relative text-sky-500 bg-slate-100 font-bold mt-2 p-1 tracking-widest">
                                <span className="underline underline-offset-8 decoration-dashed decoration-black">ACADAMIC CREDENTIALS</span>
                            </div>
                            <div>
                                <div className="font-bold inline">AWARDS AND ACHIEVEMENTS :</div> {resumeInfo.awardsAndAchievements?.map((awardsAndAchiements,index)=>(
                                <div key={index} className="inline">
                                    {awardsAndAchiements?.title} , 
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    
                   

                </div>
            );
        case'3':
            return(
                <div>
                    {/* {PERSONAL DETAILS} */}
                    <div className="grid grid-rows-3 grid-cols-2 gap-x-12 items-center">
                        <div className="sm:text-3xl text-xl font-bold md:text-[20px]">{resumeInfo.firstname} {resumeInfo.lastname}</div>
                        <div className="sm:text-lg text-xs md:text-[16px]">Address : {resumeInfo.address}</div>
                        <div className="sm:text-lg text-xs md:text-[16px]">Date of Birth : {resumeInfo.dob}</div>
                        <div className="sm:text-lg text-xs md:text-[16px] whitespace-normal break-words">Email : {resumeInfo.email}</div>
                        <div className="sm:text-lg text-xs md:text-[16px]">{resumeInfo.department}</div>
                        <div className="sm:text-lg text-xs md:text-[16px]">Phone : {resumeInfo.contact}</div>
                    </div>
                    {/* {EDUCATION} */}
                    <div >
                        <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-4 flex-col" >
                                <div className="table-header-group border border-collapse border-black">
                                    <div className="table-row">
                                        <div className="sm:text-lg text-sm  mt-1 mb-1">EDUCATION</div>
                                    </div>
                                </div>
                        </div>
                            <div className="table w-full border border-collapse border-black">
                                <div className="table-header-group border border-collapse border-black">
                                    <div className="table-row">
                                        <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">YEAR</div>
                                        <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">DEGREE/CERTIFICATE</div>
                                        <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">INSTITUTE</div>
                                        <div className="table-cell font-bold border border-collapse border-black sm:text-lg text-xs md:text-xs">CGPA/MARKS</div>
                                    </div>
                                </div>
                            {resumeInfo.education?.map((education,index)=>(
                                <div className="table-row-group border border-collapse border-black ">
                                <div className="table-row">
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.year}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.degree}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.institute}</div>
                                    <div key={index} className="table-cell border border-collapse border-black sm:text-lg text-xs md:text-xs">{education?.cgpamarks}</div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*Skills */}
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-6 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="sm:text-lg text-sm mt-1 mb-2">SKILLS AND EXPERTISE</div>
                            </div>
                        </div>
                    </div>
                        {resumeInfo.skills?.map((skills,index) =>
                        (
                            <div className="">
                                <div key={index} className="mt-2 inline sm:text-lg text-sm md:text-sm">{skills?.category} : </div>
                                <div dangerouslySetInnerHTML={{__html:skills?.list ?? ""}} className="inline sm:text-lg text-xs md:text-sm"/>           
                            </div>
                        ))}
                    {/* {ACHIEVEMENTS} */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-6 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="sm:text-lg text-sm  mt-1 mb-2">ACHIEVEMENTS</div>
                            </div>
                        </div>
                    </div>
                        {resumeInfo.awardsAndAchievements?.map((awardsAndAchievements,index)=>(
                            <div key={index} className="sm:text-lg text-xs md:text-sm">
                                <ul className="list-disc">
                                    <li>{awardsAndAchievements?.title} : {awardsAndAchievements?.description}</li>
                                </ul>
                            </div>
                        ))}
                        
                    </div>
                    {/* {INTERSHIPS} */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-6 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="sm:text-lg text-sm  mt-1 mb-2 ">INTERNSHIPS</div>
                            </div>
                        </div>
                    </div>
                        {resumeInfo.experiences?.map((experiences,index)=>(
                            <div key={index} className="md:text-sm">
                                <ul className="list-disc">
                                    <div className="grid sm:grid-cols-[60vw_30vw] md:grid-cols-2">
                                        <div className="font-bold sm:text-lg text-xs">{experiences?.company}</div>
                                        <div className="font-bold place-self-end sm:text-lg text-xs">{experiences?.duration}</div>
                                    </div>
                                <li className="sm:text-lg text-xs">{experiences?.description}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* {PROJECTS} */}
                    <div>
                    <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-6 flex-col">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="sm:text-lg text-sm  mt-1 mb-2">PROJECTS</div>
                            </div>
                        </div>
                    </div>                        
                    {resumeInfo.projects?.map((projects,index)=>(
                            <div key={index} className="md:text-sm">
                                <div className="grid sm:grid-cols-[60vw_20vw] md:grid-cols-2">
                                    <div className="font-bold sm:text-lg text-sm">{projects?.projectName}</div>
                                    <div className="font-bold place-self-end ml-3 sm:text-lg text-xs">{projects?.duration}</div>
                                </div>                            
                                <ul className="list-disc sm:text-lg text-xs"><li>{projects?.description}</li></ul>
                            </div>
                        ))}
                    </div>
                    {/* {EAA} */}
                    <div>
                        <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mb-4 mt-6 flex-col">
                            <div className="table-header-group">
                                <div className="table-row">
                                    <div className="sm:text-lg text-sm  mt-1 mb-2">EXTRA CURRICULAR ACTIVITIES</div>
                                </div>
                            </div>
                        </div>                            
                        {resumeInfo.extraCurricularActivities?.map((eaa,index)=>(
                                <div key={index} className="md:text-sm">
                                    <div className="font-bold inline sm:text-lg text-sm">{eaa?.activity} : </div>
                                    <div className="inline sm:text-lg text-xs">{eaa?.description}</div>
                                </div>
                        ))}
                        
                    </div>
                    {/* {Course Work} */}
                        <div className="col-span-4 table w-full border-t border-b border-black justify-center bg-gray-300 font-bold mt-6 flex-col">
                            <div className="table-header-group">
                                <div className="table-row">
                                    <div className="sm:text-lg text-sm mt-1 mb-2">COURSE WORK INFORMATION</div>
                                </div>
                            </div>
                        </div>                        
                        {resumeInfo.coursework?.map((coursework,index)=>
                        (
                            <ul className="list-disc md:text-sm">
                                <li key={index} className="font-bold mt-2 sm:text-lg text-sm">{coursework?.title}</li>
                                <div dangerouslySetInnerHTML={{__html:coursework?.description ?? ""}} className="sm:text-lg text-xs"/>           
                            </ul>
                        ))}
                    </div>

            );


    }

}
 
export default PersonalDetails;
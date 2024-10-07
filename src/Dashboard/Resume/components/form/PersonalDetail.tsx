import { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { ResumeData } from "../../../data/dummyData";

export interface PersonalDetailProp{
    resumeId : string;
    enabledNext : (value : boolean) => void;
}





const PersonalDetail : React.FC<PersonalDetailProp> = ({resumeId,enabledNext}) => {


    const {resumeInfo,setResumeInfo} =useContext(ResumeInfoContext)
    const [formData,setFormData] = useState({
        firstname: '',
        lastname: '',
        department: '',
        rollno: '',
        img: "",
    })

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        enabledNext(false)
        const {name,value} =e.target;
        
        setFormData((formData)=>({
            ...formData,
            [name] :value
        }))
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
    }

    const handleImageUpload = (e : React.ChangeEvent<HTMLInputElement>)=>{
        enabledNext(false)
        const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setResumeInfo({
                  ...resumeInfo,
                  img: reader.result as string // Store the image data URL
                });
                setFormData((formData)=>({
                    ...formData,
                    img : reader.result as string 
                }))
              };
            reader.readAsDataURL(file); // Convert image to base64 or a file URL
        }
    }
    
    const onSave = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data ={
            data : formData,
            resumeId: `${resumeId}`,
        }
        console.log(data)
        enabledNext(true)
        try {
            const existingData = localStorage.getItem(`resume_${resumeId}`);
            const parseData = existingData ? JSON.parse(existingData) : {};

            const updatedData = {
                ...parseData,
                ...data
            }
            localStorage.setItem(`resume_${resumeId}`, JSON.stringify(updatedData));
            console.log(`Details updated for resume ${resumeId}!`);
        } catch (error) {
            console.error('Failed to update details:', error);
        }
    }



    switch(resumeId){
        case "1":
            return (
                <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
                    <h2 className="font-bold text-lg">Personal Details</h2>
                    <p className="font-thin text-md">Provide basic information</p>
                    <form onSubmit={onSave} >
                        <div className="grid grid-cols-2 mt-5 gap-3">
                            <div>
                                <label className="text-sm uppercase">First Name</label>
                                <Input name="firstname" onChange={handleInputChange} required/>
                            </div>
                            <div>
                                <label className="text-sm">Last Name</label>
                                <Input name="lastname" className="uppercase" onChange={handleInputChange} required/>
                            </div>
                            <div className="text-sm">
                                <label className="text-sm uppercase">Department</label>
                                <Input name="department" onChange={handleInputChange} required/>
                            </div>
                            <div className="text-sm">
                                <label className="text-sm">Roll no</label>
                                <Input name="rollno" onChange={handleInputChange} required/>
                            </div>
                            <div className="text-sm mt-2 col-span-2 flex flex-col">
                                    <label className="text-sm mb-3 uppercase" >Profile Image :</label>
                                    <input 
                                        name="img"
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleImageUpload} 
                                        required
                                    />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                </div>
              );

        case "2":
            return (
        <div className="p-5 shadow-lg rounded-lg border-t-4 border-teal-100 mt-10 ml-4">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p className="font-thin text-md">Provide basic information</p>
            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div>
                        <label className="text-sm  uppercase">First Name</label>
                        <Input name="firstname" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Last Name</label>
                        <Input name="lastname" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Department</label>
                        <Input name="department" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Contact Number</label>
                        <Input name="contact" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Email</label>
                        <Input name="email" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Linkeldin Link</label>
                        <Input name="linkedln" onChange={handleInputChange} required/>
                    </div>
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
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p className="font-thin text-md">Provide basic information</p>
            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div>
                        <label className="text-sm uppercase">First Name</label>
                        <Input name="firstname" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Last Name</label>
                        <Input name="lastname" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Department</label>
                        <Input name="department" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Date Of birth</label>
                        <Input name="dob" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Email</label>
                        <Input name="email" onChange={handleInputChange} required/>
                    </div>
                    <div>
                        <label className="text-sm uppercase">Contact Number</label>
                        <Input name="contact" onChange={handleInputChange} required/>
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm col-span-2 uppercase">Address</label>
                        <Input name="address" onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button type="submit">Save</Button>
                </div>
            </form>

        </div>
        );
              
      }
    
}
 
export default PersonalDetail;
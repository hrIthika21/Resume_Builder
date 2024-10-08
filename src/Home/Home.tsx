import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {

  const navigate = useNavigate();
  const buttonClick=()=>{
    setTimeout(()=>
    {
      navigate('/dashboard/TemplateSelection')
    },500)
    
  }

  return (
      <nav >
        <div>
          <h1 className="text-white 
          font-semi-bold
          text-xl 
          leading-loose 
          py-5 
          bg-black
          ps-10">RESUME BULDER</h1>
        </div>
        <div className="flex flex-col h-screen w-full sm:flex-row">
          <div className="sm:h-screen flex-1 sm:w-[45vw]  relative
           h-[50vh] w-[full] flex items-center justify-center">
            <span className="sm:h-[50vh] h-[30vh] w-[25vw] -ml-24 sm:ml-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute rounded-xl 
             sm:left-[5vw] origin-center -skew-y-[35deg] opacity-50 -z-10"></span>
            <span className="sm:h-[50vh] h-[30vh] w-[25vw] bg-custom-gradient absolute rounded-xl 
            sm:left-[15vw] ml-28 sm:ml-0 -skew-y-[35deg] opacity-100 -z-10 t-[30vh]"></span>
            <img className="h-[35vh] w-[41vw] sm:h-[60vh] sm:w-[25vw] md:h-[60vh] md:w-[25vw] md:mr-16 sm:mr-7" src="https://www.my-resume-templates.com/wp-content/uploads/2023/05/student-resume-example.jpg" alt="resume" />
          </div>
          <div className="sm:h-screen flex-1 sm:w-[55vw]
          h-full w-full flex justify-center items-center flex-col">
            <p className="font-semibold sm:-translate-y-32 -translate-y-3 sm:text-6xl mx-10 text-4xl">BEST RESUME BUILDER</p>
            <p className=" transform  mx-10 sm:text-xl tracking-wide sm:-translate-y-24 text-lg">Craft Your Path to Success and transform Your Experience into opportunity with our Resume Builder </p>
            <div className="grid justify-items-start w-full ml-20">
            <button className="px-6 py-4 text-white rounded-lg shadow-lg bg-gradient-to-r from-[#DD5E89] via-[#F7BB97] to-[#DD5E89] bg-[length:200%_auto] transition-all duration-500 hover:bg-right 
                    sm:px-10 sm:py-5 sm:text-lg sm:-translate-y-11 translate-y-9 active:scale-50 tracking-wide font-semibold" onClick={buttonClick}>
                CREATE MY RESUME
            </button>

          </div>
          </div>
        </div>
      </nav>
  );
}

export default Home
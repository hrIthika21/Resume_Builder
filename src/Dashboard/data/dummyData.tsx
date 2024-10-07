
export interface Education {
    id: number;
    year: number;
    degree: string;
    institute: string;
    cgpamarks: string;
  }

  
export interface Skill {
    id : number;
    category: string;
    list: string;
  }
  
  
export interface Experience {
    id : number;
    position: string;
    company: string;
    duration: string;
    description: string;
  }
  
export interface Responsibility {
    id: number;
    role: string;
    description: string;
  }

export interface Project {
    id : number;
    projectName: string;
    description:string;
    technologies: string;
    duration : string;
}
  
export interface Award {
    id: number;
    title: string;
    description: string;
  }
  
export interface ExtraCurricular {
    id: number;
    activity: string;
    description: string;
  }
  
export interface ResumeData {
    firstname: string;
    lastname: string;
    rollno: string;
    department: string;
    contact: string;
    email: string;
    linkedln : string;
    address : string;
    dob : string;
    jee : string;
    img : string;
    summary: string;
    languages : string[];
    education: Education[];
    skills: Skill[];
    coursework: { id: number; title: string; description: string }[];
    experiences: Experience[];
    positionOfResponsibility: Responsibility[];
    awardsAndAchievements: Award[];
    projects : Project[];
    extraCurricularActivities: ExtraCurricular[];
  }
  

const dummyData: ResumeData = {
    firstname: 'K S K',
    lastname: 'HRITHIKA',
    rollno: '23AE30010',
    department:'AEROSPACE ENGINEER',
    contact: '+91-9711398406',
    email: 'hrithika50021@gmail.com',
    linkedln:'https://www.linkedin.com/feed/',
    address : 'E-405, MT, IIT KHARAGPUR',
    dob : '21 November, 2005',
    jee : 'JEE 2020 AIR : 5568',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8-nD2lVRa78MfkMegyCXUwABoI9sCB1JjA&s',
    languages : ["English", "Telugu", "Hindi"],
    education:[
        {
            id:1,
            year:2018,
            degree : 'M.TECH',
            institute : 'IIT KHARAGPUR',
            cgpamarks : '8.1/10',
        },
        {
            id:2,
            year:2015,
            degree : 'POWER ENGINEERING',
            institute : 'JADAVPUR UNIVERSITY',
            cgpamarks : '8.58/10',
        },
        {
            id:3,
            year:2011,
            degree : 'Higher Secondary ',
            institute : 'West Bengal Board',
            cgpamarks : '90%',
        },
        {
            id:4,
            year:2009,
            degree : 'Secondary Education',
            institute : 'West Bengal Board',
            cgpamarks : '93.4%',
        },
    ],
    summary: "A highly motivated Aerospace Engineering student at IIT Kharagpur with a passion for aerodynamics and space exploration. Seeking opportunities to leverage my technical skills and academic knowledge to contribute to cutting-edge aerospace research and projects.",
    skills: [
        {
            id : 1,
            category : 'Software',
            list : 'Matlab,OpenFoam,ParaView,MS Office'
        },
        {
            id :2,
            category: 'Technical Skills',
            list: 'Fluid Dynamics,Aerodynamics,Structural Analysis',
        },
        {
             id :3,
            category: 'Tools/Libraries',
            list:'Codeblocks,VSCode,LtSpice, C++STL'
        },
        {
            id :4,
            category: 'Languages',
            list :'C,C++,Python,Javascript,Java',
        },
    ],
    coursework: [
        {
            id: 1,
            title: 'Advanced Fluid Mechanics',
            description: 'In-depth study of fluid dynamics, focusing on incompressible and compressible flows, boundary layers, and turbulence.',
        },
        {
            id: 2,
            title: 'Computational Fluid Dynamics',
            description: 'Focus on numerical methods for solving fluid flow problems using MATLAB and OpenFOAM.',
        },
        {
            id: 3,
            title: 'Spacecraft Dynamics and Control',
            description: 'Study of the motion of spacecraft, control strategies, and orbital mechanics.',
        },
        {
            id: 4,
            title: 'Finite Element Analysis',
            description: 'Introduction to FEA methods used for structural analysis and heat transfer problems.',
        },
    ],
    experiences: [
        {
            id : 1,
            position: 'Aerospace Engineering Intern',
            company: 'ISRO (Indian Space Research Organisation)',
            duration: 'June 2023 - August 2023',
            description: 'Assisted in the development and testing of fluid dynamic models for satellite launch vehicles. Gained hands-on experience with CFD tools like OpenFOAM and MATLAB for aerodynamics analysis.',
        },
        {
            id : 2,
            position: 'Research Intern',
            company: 'DRDO (Defence Research and Development Organisation)',
            duration: 'June 2022 - August 2022',
            description: 'Worked on thermal analysis and structural integrity of UAV components using finite element analysis. Developed simulation models for improving UAV performance under various flight conditions.',
        },  
    ],
    positionOfResponsibility: [
        {
            id: 1,
            role: 'General Secretary, Aerospace Engineering Department',
            description: 'Led the student body of the department, facilitated communication between students and faculty, and coordinated department activities and events.',
        },
        {
            id: 2,
            role: 'Head Coordinator, Technical Fest',
            description: 'Managed a team of 50+ volunteers for the annual technical fest, ensuring smooth execution of events and workshops, and collaborated with industry professionals for sponsorships and talks.',
        },
        {
            id: 3,
            role: 'Mentor, Freshers’ Orientation Program',
            description: 'Guided first-year students through the orientation program, helping them adapt to campus life and resolve academic and personal queries.',
        },
    ],
    awardsAndAchievements: [
        {
            id: 1,
            title: 'Best Student Research Paper Award',
            description: 'Received the award for presenting an innovative research paper on flow control techniques at the National Aerospace Conference 2023.',
        },
        {
            id: 2,
            title: 'ISRO Scholarship for Aerospace Excellence',
            description: 'Awarded the ISRO scholarship for outstanding academic performance and research contributions in the field of aerospace engineering.',
        },
    ],
    projects: [
        {
            id : 1,
            projectName: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills.",
            technologies: "HTML,CSS,JavaScript,React",
            duration : 'none',
            
        },
        {
            id : 2,
            projectName: "Task Management App",
            description: "A task management tool built using the MERN stack to help users track their daily activities.",
            technologies: "MongoDB,Express,React,Node.js",
            duration : 'none',
           
        },
        {    
            id: 3,
            projectName: 'Design and Analysis of a Supersonic Aircraft Wing',
            description: 'Led the design and computational fluid dynamics (CFD) analysis of a supersonic aircraft wing. Utilized software such as OpenFOAM and MATLAB to optimize the wing shape for reduced drag and improved fuel efficiency. Conducted wind tunnel simulations to validate the design under various Mach numbers, contributing to a significant performance improvement.',
            technologies: 'OpenFOAM,MATLAB,CFD,Wind Tunnel Simulation',
            duration : 'June 2018 - August 2018',
        },
      ],
    extraCurricularActivities: [
        {
            id: 1,
            activity: 'Captain, IIT Kharagpur Badminton Team',
            description: 'Led the institute badminton team to the finals in the Inter-IIT Sports Meet 2022.',
        },
        {
            id: 2,
            activity: 'Member, Dramatics Society',
            description: 'Participated in and directed multiple plays during college fests, enhancing teamwork, creativity, and public speaking skills.',
        },
        {
            id: 3,
            activity: 'Team Leader, Aerodynamics',
            description: 'Led a team of 10 students in designing and testing aerodynamic models for drones. Developed simulation models to optimize drag reduction and improve flight stability.',
        },
        {
            id: 4,
            activity: 'Student Researcher',
            description: 'Conducted research on flow control techniques to minimize turbulence in high-speed airflows. Published findings in a departmental technical paper and presented at the national conference on aerospace innovations.',
        },
        {
            id: 5,
            activity: 'Event Coordinator',
            description: 'Organized and managed multiple events during Spring Fest, including logistics and volunteer coordination. Enhanced communication and leadership skills while working in a fast-paced, team-oriented environment.',
        },
    ],
}

export default dummyData ;
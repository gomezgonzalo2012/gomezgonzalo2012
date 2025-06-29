import { SiSpringboot, SiSpringsecurity, SiTailwindcss  } from "react-icons/si";
import { FaJava, FaReact,FaGitAlt ,FaDocker } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
const Skills = () => {
    const Services = [
  {
    id: 1,
    technology: "Spring Boot",
    icon: SiSpringboot, // Guardamos la referencia al componente, no una string
    color: "green"
  },
  {
    id: 2,
    technology: "Java",
    icon: FaJava,
    color: "#C43533"
  },
  {
    id: 3,
    technology: "Spring Security",
    icon: SiSpringsecurity ,
    color: "green"
  },
  {
    id: 4,
    technology: "MYSQL",
    icon: GrMysql ,
    color: "orange"
  },
  {
    id: 5,
    technology: "SQL Server",
    icon: DiMsqlServer ,
    color: "#AA1C23"
  },
  {
    id: 6,
    technology: "Git",
    icon: FaGitAlt  ,
    color: "#F34F29"
  },
   {
    id: 7,
    technology: ".Net & C#",
    icon: AiOutlineDotNet ,
    color: "#512AD5"
  },
  {
    id: 8,
    technology: "Docker",
    icon: FaDocker ,
    color: "#1D63ED"
  },
   
  {
    id: 9,
    technology: "ReactJs",
    icon: FaReact ,
    color: "#61DBFB"
  },
  {
    id: 10,
    technology: "Tailwindcss",
    icon: SiTailwindcss ,
    color: "#00BCFF"
  }
];
    return (
        <div className="bg-gray-950 dark:bg-gray-950  text-white py-20" id="skills">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12"> My Skills</h2>
                {/* small 1 columna
                medium 2 columnas 
                large 3 columnas */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {Services.map((service) => {
                        const IconComponent = service.icon; // Extraemos la referencia del icono
                        return (
                            <div key={service.id} className=" bg-gray-900 p-4 rounded-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 ">
                                <IconComponent size={50} color={service.color} />
                                <p className="text-lg text-center">{service.technology}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;
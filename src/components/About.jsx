import { IoIosSchool } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
const About = () => {
    const education = [
        {id : 1, degree:"University Programming Technician" , intitution:"Universidad Tecnologica Nacional" , date: "2022 - present",certificate : ""},
        {id : 2, degree:"REST API Development with Java and SpringBoot" , intitution:"Todo Code Academy" , date: "2024 - completed", certificate:"https://todocodeacademy.com/certificate/dq4/"},
        {id : 3, degree:"First Certificate in English (FCE) / B2." , intitution:"Centro Universitario de Idiomas U.B.A." , date: "2023 - completed",certificate: "https://drive.google.com/file/d/107CLkXMOzajEzG7OPYHeml8rVnLn5WQ8/view?usp=drive_link" },
    ]
    return (
        <div className="bg-gray-950 dark:bg-gray-950  text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                {/* en small tp debajo de img en md al lado*/}
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <p className="text-lg mb-8 ">
                            I am a University Programming Technician student and a passionate Backend Developer. I thrive on learning and continuously expanding my skill set, including front-end technologies. I am highly motivated, responsible, and eager to take on new challenges. With a strong problem-solving mindset and a proactive attitude, I am always ready to contribute to a dynamic team and help drive meaningful projects forward.

                        </p>
                        <h3 className="text-3xl font-bold mb-4">Education</h3>
                        <div className="space-y-4"> {/*espacio vertical  */}
                            {education.map(educ=>(
                                <div key={educ.id} className="mb-4">
                                <h3 className="text-2xl font-bold mb-2">{educ.degree} </h3>
                                <p> <IoIosSchool className='inline-block text-violet-500 mr-2'/> <span className="text-gray-400 ">{educ.intitution}</span></p>
                                <p className="mb-1"><CiCalendar className="inline-block text-violet-500 mr-2"/><span className="text-gray-400 ">{educ.date}</span> </p>
                                {educ.certificate && <p className="mb-2"><FaLink className="inline-block text-violet-500 mr-2"/><a className="text-gray-400 font-semibold hover:underline" href={educ.certificate} target="_blank">certificate</a>  </p> }
                                
                                <hr />
                                </div>
                            ))}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About;
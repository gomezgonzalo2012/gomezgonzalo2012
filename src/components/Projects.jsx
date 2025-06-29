import forumImg from "../assets/projects/the_forum.webp"
import auctionImg from "../assets/projects/subasta_maestra.webp"
import bookingImg from "../assets/projects/hotel_booking.webp"
const Projects =()=>{
     const projects= [
        {
            id:1,
            name: "Hotel Booking & Management",
            image: bookingImg,
            tags: [{id:1, name:"Java"},
                {id:2, name:"Springboot"},
                {id:3, name:"Spring Security"}, 
                {id:4, name:"JPA Hibernate"}, 
                {id:5, name:"Mysql"},
                {id:6, name:"ReactJs"},
                {id:7, name:"JWT"},
                {id:8, name:"Cloudinary"}],
            github: "https://github.com/gomezgonzalo2012/SpringBoot-Security-ReactJs"

        },
        {
            id:2,
            name: "Auctions Web Site & Management",
            image: auctionImg,
            tags: [{id:1, name:"ASP .NET"},
                {id:2, name:"C#"},
                {id:3, name:"SQL Server"}, 
                {id:4, name:"Entity Framework"},
                {id:5, name:"Blazor MAUI Hybrid"},
                {id:6, name:"JWT"},
                {id:7, name:"Blazor"},
                {id:8, name:"Winforms"},
                {id:9, name:"Cloudinary"},
                {id:10, name:"Bootstrap"}
                ],
            github: "https://github.com/gomezgonzalo2012/SubastaMaestra"

        },
        {
            id:3,
            name: "Tech Forum",
            image: forumImg,
            tags: [{id:1, name:"PHP"},
                {id:2, name:"Mysql"},
                {id:3, name:"Laravel"}, 
                {id:4, name:"Laravel Breeze"},
                {id:5, name:"Blade"},
                {id:6, name:"Bootstrap"}
                ],
            github: "https://github.com/gomezgonzalo2012/forum_project"

        }
    ]
    return (
        <div className="bg-gray-950 dark:bg-gray-950  text-white py-20" id="projects">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map(project=>(
                        <div key={project.id} className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transform 
                        transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover" />
                            {/* bg-clip-text : hace solo se aplique el gradient a la letra sin incluir fondo */}
                            <h3 className="text-2xl font-bold mb-2"> {project.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-4" >
                                {project.tags?.map(tag=>(
                                 <span key={tag.id} className="bg-gray-800 dark:bg-gray-800  text-center text-gray-400 dark:text-gray-400 text-xs font-medium me-2 px-2 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{tag.name}</span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className=" inline-block bg-gradient-to-r from-blue-600 to-violet-600
                             py-2 px-4 text-white rounded-full">GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Projects;
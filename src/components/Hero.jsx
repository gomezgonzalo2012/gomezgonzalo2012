import HeroImage from "../assets/professionalPicture.webp"
const  Hero =()=>{
    return (
        <>
        <div className="bg-gray-950 dark:bg-gray-950  text-white text-center py-10 md:mt-4 lg:mt-4" id="hero">
            {/* objet-cover evita que la img se acomode al contenedor */}
            <img src={HeroImage} alt="My professional photo" 
            className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform
            duration-300 hover:scale-105" /> 
            <h1 className="text-4xl font-bold">
                I'm {" "}
                {/* gradient al texto */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r 
                from-blue-600 to-violet-600">Gonzalo Gómez</span>,
                Back-End Developer
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Specialized in building scalable REST APIs, implementing authentication & authorization security, and deploying applications in containerized environments.
            </p>
            {/* space-x-4 espacio entre elementos */}
            <div className="mt-8 space-x-4"> 
                <a className="bg-gradient-to-r from-blue-600 to-violet-600 text-white md:inline 
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" href="#contact">Contact With Me</a>
                 <a className="bg-gradient-to-r from-violet-600 to-orange-500 text-white md:inline 
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" 
                href="/files/CV_GonzaloGomez.pdf" target="_blank" >Resume</a>
                
            </div>
        </div>

        </>
    )
}

export default Hero;
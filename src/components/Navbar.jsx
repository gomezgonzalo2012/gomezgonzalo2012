
const Navbar = ()=>{
    return (
        <nav className="bg-gray-950 dark:bg-gray-950  text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50"> {/* small medium large*/}
            {/* para small j-c y para medium j-b 
            flex hace colocar inline */}
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">&#123; Gonzalo Gómez &#125;</div>
                <div className="space-x-6">
                    {/* hover:text-grey-400 cambia al hacer hover */}
                    <a href="#about" className="hover:text-orange-400">About Me</a>
                    <a href="#skills" className="hover:text-orange-400">Skills</a>
                    <a href="#projects" className="hover:text-orange-400">Projects</a>
                    <a href="#contact" className="hover:text-orange-400">Contact</a>
                </div>
                <a className="bg-gradient-to-r from-blue-700 to-violet-600 text-white hidden md:inline 
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" href="#contact">Contact me</a>
            </div>
        </nav>
    )
}
export default Navbar;
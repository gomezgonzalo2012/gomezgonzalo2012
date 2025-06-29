import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-gray-950 dark:bg-gray-950  text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Gonzalo Gomez . All rights reserved.
                    </p>
                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="https://www.linkedin.com/in/gonzalo-gomez12" className="text-gray-400 hover:text-white" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/gomezgonzalo2012" className="text-gray-400 hover:text-white" target='_blank' rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;
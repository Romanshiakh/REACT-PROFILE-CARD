
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function App()
{
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex justify-center items-center shadow-2xl">
                <div className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full">

                    <div className="flex justify-center">
                        <img src="./src/assets/image.png" alt="logoImg" className="border border-grey-800 rounded-full w-44 mb-3.5 shadow-2xl transition-transform transform hover:scale-110" />
                    </div>
                    <h2 className="text-3xl text-gray-900 mb-1 flex justify-center uppercase tracking-wide">Abdul Rahman</h2>
                    <p className=" flex justify-center text-gray-600 font-medium mb-4">React Developer</p>

                    <div>
                        <h4 className="font-medium text-gray-800 mb-2">About</h4>
                        <p className="text-gray-700 mb-6">As a dedicated React developer with a year of hands-on experience, I have gained a solid foundation in building dynamic and responsive web applications. My journey with React has allowed me to master the core concepts.</p>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
                        <h4 className="font-medium text-gray-800 mb-4">Contact</h4>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-gray-600 mr-2" />
                            <a href="mailto:abdul.rahman@example.com" className="text-gray-700 hover:underline">abdul.rahman@example.com</a>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-gray-600 mr-2" />
                            <a href="tel:+1234567890" className="text-gray-700 hover:underline">+1234567890</a>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h4 className="font-medium text-gray-800 mb-4">Connect</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://twitter.com" className="text-blue-500 text-3xl">
                                <FaTwitter />
                            </a>
                            <a href="https://facebook.com" className="text-blue-700 text-3xl">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" className="text-pink-500 text-3xl">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="text-blue-700 text-3xl">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;

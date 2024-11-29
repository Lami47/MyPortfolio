import '../Css/Navbar.css'
import ContactUs from './ContactUs'
import { useEffect,useState } from 'react';

export default function Navbar(){
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 1 second delay before opacity changes

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <div className='GridNav'>
                <div className={`NavGrid ${isVisible ? 'visible' : 'faded'}`}>
                    <div className='NavSection1'>
                        {/* Icon */}
                        <img className='NavIcon' src='https://i.postimg.cc/SN4ChRHv/Whats-App-Image-2024-11-19-at-10-35-07-f60543c5.jpg' alt='Loading..'/>
                    </div>
                    <div className='NavSection2'>
                        {/* banner */}
                        <div className="OverBackgroundImgText" >
                            <h1 className="welcomeText"><strong> Liam Rosenberg's Portfolio</strong></h1>
                        </div>
                    </div>
                    <div className='NavSection3'>
                        {/* list */}
                        <a href='#Languages'>
                            <button className='NavBtns'>
                                Languages
                            </button>
                        </a>
                        <a href='#PastProjects'>
                            <button className='NavBtns'>
                                Past Projects
                            </button>
                        </a>
                        <a>
                            <button className='NavBtns'>
                                Most Recent Project
                            </button>
                        </a>
                        <ContactUs/>
                    </div>
                </div>
            </div>
        </>
    )
}
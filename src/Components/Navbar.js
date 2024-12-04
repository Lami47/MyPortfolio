import '../Css/Navbar.css'
import ContactUs from './ContactUs'
import { useEffect,useState } from 'react';

export default function Navbar(){
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1060);
    const Items = [
        {id:'1',name: 'Languages', href: '#Languages'},
        {id:'2',name: 'Favourite Project', href: '#FavouriteProjects'},
        {id:'3',name: 'Most Recent Project', href: '#MostRecentProjects'},
        {id:'4',name: 'Past Projects', href: '#PastProjects'},
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000); // 1 second delay before opacity changes

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 1060);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextItems = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Items.length);
    };

    // Function to go to the previous 2 items
    const prevItems = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Items.length) % Items.length);
    };

    // Slice the array to display only the next 2 items
    const displayedItems = Items.slice(currentIndex, currentIndex + 1);

    return(
        <>
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
                    {isLargeScreen ? (
                        Items.map((item, index) => (
                        <div key={index}>
                            {/* Render each item, you can customize this */}
                            <a href={item.href}>
                                <button className='NavBtns'>
                                    {item.name}
                                </button>
                            </a>
                        </div>
                        ))
                    ) : (
                        // Display two empty buttons if the screen is smaller than 1060px
                        <div className='NavGrid2'>
                            <button onClick={prevItems} className='NavBtns'>
                                Back
                            </button>
                            <div className='NavGrid3'>
                                {displayedItems.map((item, index) => (
                                    <div key={index}>
                                        {/* Render each item */}
                                        <a href={item.href}>
                                            <button className="NavBtns">
                                                {item.name}
                                            </button>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <button onClick={nextItems} className='NavBtns'>
                                Next
                            </button>
                            <ContactUs/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
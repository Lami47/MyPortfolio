import '../Css/Language.css'
import { useState } from 'react';

export default function Languages(){
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const Language = [
        {language: 'HTML', src: 'https://i.postimg.cc/X7gFgxCs/html1.jpg',link:'', ID: 'Lang1',IDs: 'Langs1'},
        {language: 'CSS', src: 'https://i.postimg.cc/8cv8SjhC/OIP-1.jpg',link:'', ID: 'Lang2',IDs: 'Langs2'},
        {language: 'JavaScript', src: 'https://i.postimg.cc/9fXj7Xjx/JS.jpg',link:'https://i.postimg.cc/V6QNSGwf/JS-certificate.png', ID: 'Lang3',IDs: 'Langs3'},
        {language: 'Python', src: 'https://i.postimg.cc/XJpSs2qd/69-python-34cfd522d6.jpg',link:'https://i.postimg.cc/3Nnh899x/Python.png', ID: 'Lang4',IDs: 'Langs4'},
        {language: 'Java', src: 'https://i.postimg.cc/prhGF4Tc/java.jpg',link:'https://i.postimg.cc/wMSqd9fh/image-2024-11-27-165341965.png', ID: 'Lang5', IDs: 'Langs5'}
    ]

    const handleImageClick = (link) => {
        if (link) {
            setSelectedCertificate(link);  // Set the certificate link for the popup
        }
    };

    const closePopup = () => {
        setSelectedCertificate(null);  // Close the popup
    };

    return(
        <>
            <div className='LanguageContainer'>
                <h2 className='HeadingText'>
                    Click on the icons to see my Certificates
                </h2>
                <div className="LanguagesGrid0">
                    {Language.slice(0, 3).map((lang, index) => (
                        <div key={index} className="LangCard" id={lang.IDs}>
                            <div className="LangIconAround">
                                <img 
                                id={lang.ID}
                                src={lang.src} 
                                alt={lang.language} 
                                className="LangIcon" 
                                onClick={() => handleImageClick(lang.link)}
                                />
                            </div>
                            <h3 className="LangText">
                                {lang.language}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="LanguagesGrid1">
                    {Language.slice(3, 5).map((lang, index) => (
                        <div key={index} className="LangCard">
                            <div className="LangIconAround">
                                <img 
                                src={lang.src} 
                                alt={lang.language} 
                                className="LangIcon"
                                onClick={() => handleImageClick(lang.link)}
                                     />
                            </div>
                            <h3 className="LangText">
                                {lang.language}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            {selectedCertificate && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <img src={selectedCertificate} alt="Certificate" className="popup-image" />
                        <button className="close-popup" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}
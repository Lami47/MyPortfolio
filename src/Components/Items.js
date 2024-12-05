import React, { useState, useEffect } from "react";
import "../Css/Items.css";

const items = [
  {
    id: 1,
    imageSrc: [
      "https://i.postimg.cc/vHBdzDRV/Screenshot-2024-11-21-102404.png",
      "https://i.postimg.cc/hP5R3gg3/Screenshot-2024-11-21-130005.png",
      "https://i.postimg.cc/v8XsffKy/Screenshot-2024-11-21-130019.png",
      "https://i.postimg.cc/8cygGgvc/Screenshot-2024-11-21-130030.png",
      "https://i.postimg.cc/rwRCsHZj/Screenshot-2024-12-05-103058.png",
    ],
    title: "Study Sphere",
    text: "This project was focused around providing school kids, even those that cannot afford to go to school, a place to learn. We provide Tutoring session along with past papers and assistance with projects for school. I was tasked with creating the login pages as well as the Tutoring and Project sections. I really enjoyed creating this web application as this was my very 1st project, with just over 1 months experience in coding. I dont think I will change is as i will be using it as a reference to how much I've grown over the past few months",
    link:"https://study-sphere-spa.netlify.app/",
    alt: "",
  },
  {
    id: 2,
    imageSrc: [
      "https://i.postimg.cc/yx0ZxBB1/Screenshot-2024-11-21-151327.png",
      "https://i.postimg.cc/HWM5B0Mq/Screenshot-2024-11-21-151500.png",
      "https://i.postimg.cc/HsCMKJ4V/Screenshot-2024-11-21-151520.png",
      "https://i.postimg.cc/XYsypsMC/Screenshot-2024-11-21-151533.png",
      "https://i.postimg.cc/yYXRzVvn/Screenshot-2024-11-21-151546.png",
      "https://i.postimg.cc/RZSHSjYm/Screenshot-2024-11-21-151708.png",
    ],
    title: "Eco-Link",
    text: "This project is pretty scuffed, with less than 12 hours(because it takes 12 hours to settle on an idea in a big group) to create a project we managed to come up with this work of art. Our problem to solve was to aid small businesses in townships. We primarily focused on upskilling and providing a platform to advertise those that have completed a course through our partnering NGO's. This was also extended to all those in the townships that had skills to offer, be it accredited or not. On the coding side of things I was tasked with the personal information pages, there after i was resolving any issues my teammates were having from merging error to brainstorming and even assisting with the Js and css on various pages. All in all i enjoyed it, working through the night/morning from 2am till 1pm coding non-stop(i- we may have dozed off once or twice) we submitted the project you seeing above",
    link:"https://e-commerce-project-e24b8.web.app/",
    alt: "",
  },
];

const ItemList = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [theSelectedId, setSelectedId] = useState(null); 
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
    const [isItemVisible, setIsItemVisible] = useState(false);

    const handleButtonClick = (id) => {
        setSelectedId(id);
        setDropDownIsOpen(false);
        setIsItemVisible(true);
      };
    const handleClose = () => {
      setDropDownIsOpen(false); 
      setIsItemVisible(false); 
      setSelectedId(null); 
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].imageSrc.length); // Loop through the images
        }, 6000); // 6 seconds interval
    
        return () => clearInterval(interval);
    }, []);
    

    const selectedItem = items.find((item) => item.id === theSelectedId);

    const getImagesToDisplay = () => {
        const images = selectedItem ? selectedItem.imageSrc : [];
        const imagesToDisplay = [];
        for (let i = 0; i < 2; i++) {
          imagesToDisplay.push(images[(currentIndex + i) % images.length]);
        }
        return imagesToDisplay;
    };
    const imagesToDisplay = getImagesToDisplay();

  return (
    <>
      <div className="DropDown">
            <div className="dropdown">
              <div className="ItemsBtns">
                <div>
                  <button className="CloseItem1" onClick={() => setDropDownIsOpen(!dropDownIsOpen)}>
                      Select a project
                  </button>
                {dropDownIsOpen && (
                <div className="dropdown-menu">
                {items.map((item) => (
                    <div 
                      className="dropdown-menu-items" 
                      key={item.id} 
                      onClick={() => handleButtonClick(item.id)}
                      >
                    {item.title || `Project ${item.id}`}
                    </div>
                ))}
                </div>
            )}
                </div>
                <button className="CloseItem2" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
        </div>

        {selectedItem && isItemVisible && (
          <div className="ItemsGrid0">
            <div className="Cards">
                <div className="Grid-section-1">
                    <h2 className="item-title">{selectedItem.title}</h2>
                </div>
                    {imagesToDisplay.length > 0 ? (
                <div className="ItemCards">
                    {imagesToDisplay.map((image, index) => (
                    <div className="ItemCard" key={index}>
                        <div className="CardImg">
                          <a href={selectedItem.link} target="blank">
                            <img
                                className="item-image"
                                src={image}
                                alt={selectedItem.alt || `Image ${currentIndex + 1}`}
                            />
                          </a>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                        <div>No images to display</div>
                    )}
                    
            </div>
            <div className="Card1">
                <button 
                    className="CardBtns" 
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + items[0].imageSrc.length) % items[0].imageSrc.length)}
                >
                    Back
                </button>
                <button 
                    className="CardBtns" 
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % items[0].imageSrc.length)}
                >
                    Next
                </button>
            </div>
        </div>
        )}
        {selectedItem && (
        <div className="item-describtion">
            {/* <h1 className="item-describtion-heading">{selectedItem.title}</h1> */}
            <h3 className="itemDescribtionText">{selectedItem.text}</h3>
        </div>
        )}
    </>
  );
};

export default ItemList;

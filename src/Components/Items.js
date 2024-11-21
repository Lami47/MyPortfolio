import React, {useState, useEffect } from "react";
import '../Css/Items.css';

const items = [
    {id: 1, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: 'Past Projects', text: 'total of 3 projects',alt:''},
    {id: 2, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
    {id: 3, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
    {id: 4, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
    {id: 5, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
]

const dropDownData = [
    {id: 1, title: 'Hello', text: 'Outside'},
    {id: 2, title: 'From', text: ''},
    {id: 3, title: 'The', text: ''},
    {id: 4, title: 'outside', text: 'Outside'},
    {id: 5, title: 'i', text: 'Outside'}
]

const ItemList = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [theSelectedId, setSelectedId] = useState(null)
    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

    const handleButtonClick = (id) => {
        setSelectedId(id)
        setDropDownIsOpen(true);
    }
    //Buttons
    const goToNextItem = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }

    const goBackOneItem = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1) % items.length);
    }

    //slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); //cycls through the items by incrementing the index()
        }, 7000);

        return() => clearInterval(interval); //prevention
    }, []);

    const displayItems = [
        items[(currentIndex + 0) % items.length],
        items[(currentIndex + 1) % items.length],
        items[(currentIndex + 2) % items.length]
    ]

    return(
        <>
        {/* selector */}

        {/* title */}
        {/* img */}

        {/* text - overview of the project- problem, solution and what i contributed */}

            <div className="ItemsGrid0">
                <div className="Card1">
                    <button className="CardBtns" onClick={goBackOneItem}>Back</button>
                </div>
                <div className="Cards">
                    {displayItems.map(item => (
                        <div key={item.id} className="ItemCard">
                            <button className="CardItems" onClick={() => handleButtonClick(item.id)}>
                                <div className="CardImg">
                                    <img className="item-image" src={item.imageSrc} alt={item.alt}/>
                                    <p className="item-text">{item.text}</p>
                                </div>
                            </button>
                        </div>
                        ))}
                    <DropDownData 
                        theSelectedId={theSelectedId}
                        dropDownIsOpen={dropDownIsOpen}
                        setDropDownIsOpen={setDropDownIsOpen}
                    />
                </div>
                <div className="Card2">
                    <button className="CardBtns" onClick={goToNextItem}>Next</button>
                </div>
            </div>
        </>
    )
}
// NEEDS CSS

//popup for DisplayCards
function DropDownData ({ theSelectedId, dropDownIsOpen, setDropDownIsOpen }) {  
    const hideDropDown = () => {
      setDropDownIsOpen(false);
    };
  
    // for when nothing is displayed yet
    if (!dropDownIsOpen) return null;
  
    // incase theres a blank container
    const dropDown = dropDownData.find(pdata => pdata.id === theSelectedId);
  
    if (!dropDown) return null; 
  
    return(
      <>
        <div className={`DropDownWindow ${dropDownIsOpen ? 'show' : ''}`}>
          <button 
            className="Hide" 
            onClick={hideDropDown}>
            X
        </button>
          <div className="DropDownHeading">
            <h3>{dropDown.title}</h3>
          </div>
          <br/>
          <div className="DropDownText">
            <h4>{dropDown.text}</h4>
          </div>
        </div>
      </>
  )}

export default ItemList
import React, {useState, useEffect } from "react";
import '../Css/Items.css';

const items = [
    {id: 1, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: 'Past Projects', text: 'total of 3 projects',alt:''},
    {id: 2, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
    {id: 3, imageSrc: 'https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg', title: '', text: '',alt:''},
    {id: 4, imageSrc: 'https://i.postimg.cc/VLTgCMMg/OIP-3.jpg', title: '', text: '',alt:''},
    {id: 5, imageSrc: 'https://i.postimg.cc/VLTgCMMg/OIP-3.jpg', title: '', text: '',alt:''},
]

const ItemList = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
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
            <div className="ItemsGrid0">
                <button className="CardBtns" onClick={goBackOneItem}>Back</button>
                <div className="Cards">
                    {displayItems.map(item => (
                        <div key={item.id} className="ItemCard">
                            <div className="CardImg">
                                <img className="item-image" src={item.imageSrc} alt={item.alt}/>
                                <p className="item-text">{item.text}</p>
                            </div>
                        </div>
                        ))}
                </div>
                <button className="CardBtns" onClick={goToNextItem}>Next</button>
            </div>
        </>
    )
}

export default ItemList
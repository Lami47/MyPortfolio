import { useState } from "react";

//Overview of:
const QueCards = [
    { id:'1', text:'Total years of experience', handler:'onSubmit1'},
    { id:'2', text:'Projects completes', handler:'onSubmit2'},
    { id:'3', text:'Types of Components made', handler:'onSubmit3'},
]
//goals and aspirations
const popupData = [
  {id: '1',heading:'when', text: 'ashdjkahs', handler:'onSubmitWhen'},
  {id: '2',heading:'What', text: 'sjksfjkjs', handler:'onSubmitWhat'},
  {id: '3',heading:'why', text: 'cxvhxjkwe', handler:'onSubmitWhy'},
  {id: '4',heading:'how', text: '', handler:'onSubmithow'},
]

//buttons
function DisplayCards () {
  const [selectedId, setSelectedId] = useState(null)
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedId(id)
    setPopupOpen(true);
  }
  return (
    <>
      {QueCards.map(btn => (
      <button key={btn.id} className="cards" onClick={() => handleButtonClick(btn.id)}>
        {btn.text}
      </button>
      ))}
      <PopUpBtn 
        selectedId={selectedId}
        isPopupOpen={isPopupOpen}
        setPopupOpen={setPopupOpen}
      />
    </>
  );
}
//popup for DisplayCards
function PopUpBtn ({ selectedId, isPopupOpen, setPopupOpen }) {  
  const closePopup = () => {
    setPopupOpen(false);
  };

  // for when nothing is displayed yet
  if (!isPopupOpen) return null;

  // incase theres a blank container
  const popup = popupData.find(pdata => pdata.id === selectedId);

  if (!popup) return null; 

  return(
    <>
      <div className="PopUpWindow">
        <button className="CloseBtn" onClick={() => closePopup()}>X</button>
        <h3 className="PopUpHeading">{popup.heading}</h3>
        <p>{popup.text}</p>
      </div>
    </>
)}

export default DisplayCards
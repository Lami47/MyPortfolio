import { useState } from "react";

//Overview of:
const QueCards = [
    { id:'1', text:'Total years of experience', handler:'onSubmit1'},
    { id:'2', text:'Projects completes', handler:'onSubmit2'},
    { id:'3', text:'The projects that stood out', handler:'onSubmit3'},
]
//goals and aspirations
const popupData = [
  {id: '1',heading:'Experience', text: 'I have about 4 months experience within the Software Developing field', handler:''},
  {id: '2',heading:'Projects I have worked on', text: 'Thus far, i worked on multiple projects around web applications. A few examples are: e-commerce, task-management, e-learning platform', handler:'onSubmitWhat'},
  {id: '3',heading:'The projects that stood out', text: 'This is easily the most recent project I have completed at the AfricanBank Hackathon. We were tasked with creating a web application to empower the smaller businesses in the townships. because our group was so large, on the website, I only created a bunch of smaller function like: Comments section, linking each page and assisting other with their code especially with mapping and merging issue', handler:'onSubmitWhy'},
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
      <div className="Exp">
          <button key={btn.id} className="cards" onClick={() => handleButtonClick(btn.id)}>
            {btn.text}
          </button>
      </div>
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

  if (!isPopupOpen) return null;

  const popup = popupData.find(pdata => pdata.id === selectedId);

  if (!popup) return null; 

  return(
    <>
      <div className="PopUpWindow">
        <button className="CloseBtn" onClick={() => closePopup()}>X</button>
        <h3 className="PopUpHeading">{popup.heading}</h3>
        <p className="PopUpText">{popup.text}</p>
      </div>
    </>
)}

export default DisplayCards
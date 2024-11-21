import '../Css/ContactUs.css'
import { useState } from 'react';

export default function ContactUs(){
    const [isContactUsOpen, setContactUsOpen] = useState(true);

    const handleTheButtonClick = () => {
      setContactUsOpen(prevState => !prevState); // Toggle the form open/close state
    };

    return(
    <>
        <button className={`ContactUsToggleBtn ${isContactUsOpen? 'open' : ''}`} onClick={() => handleTheButtonClick()}>
            {isContactUsOpen? 'Close' : 'Open'}
        </button>
        {isContactUsOpen && <ContactForm setContactUsOpen={setContactUsOpen} />}
    </>
    )
}

function ContactForm({setContactUsOpen}){
    const closeContactUs = () => {
        setContactUsOpen(false);
      };

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');


    const handleContact = (event) => {
        event.preventDefault(); // Prevent page reload
    
        // Check if all fields are filled
        if (name && subject && comment) {
          setMessage('Your message has been successfully sent!');
          // Reset the form after successful submission
          setName('');
          setSubject('');
          setComment('');
        } else {
          setMessage('Please fill out all fields.');
        }
    };

    const handleTheButtonClick = () => {
        setContactUsOpen(prevState => !prevState); // Toggle the form open/close state
      };
  

    return(
    <>
        <div className='formMainBox'>
            <div className='formBox1'>
                <h2 className='form'> Contact Us </h2>
                <button className='closeForm' onClick={handleTheButtonClick}>X</button>
                <form onSubmit={handleContact}>
                    <div className='form'>
                        <label
                            className='form'
                            name="name"
                            >
                            Name:
                        </label>
                        <input
                            className='form'
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form'>
                        <label htmlFor="subject">Subject:</label>
                        <input
                            className='form'
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form'>
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form'>
                        <button className='form' type="submit" onClick={() => closeContactUs()}>Submit</button>
                    </div>
                </form>
                {message && <p className='form'>{message}</p>}
            </div>
        </div>
    </>
    )
}
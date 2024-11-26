import '../Css/ContactUs.css'
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactUs(){
    const [isContactUsOpen, setContactUsOpen] = useState(false);

    const handleTheButtonClick = () => {
      setContactUsOpen(prevState => !prevState); // Toggle the form open/close state
    };

    return(
    <>
        <button className={`ContactUsToggleBtn ${isContactUsOpen? 'open' : ''}`} onClick={() => handleTheButtonClick()}>
            {isContactUsOpen? 'Close Contact us' : 'Contact us'}
        </button>
        {isContactUsOpen && <ContactForm setContactUsOpen={setContactUsOpen} />}
    </>
    )
}

function ContactForm({setContactUsOpen}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');


    const handleContact = (event) => {
        event.preventDefault(); // Prevent page reload
    
        // Check if all fields are filled
        if (name && email && comment) {
          setMessage('Your message has been successfully sent!');
          // Reset the form after successful submission
          setName('');
          setEmail('');
          setComment('');
        } else {
          setMessage('Please fill out all fields.');
        }
    };

    const handleTheButtonClick = () => {
        setContactUsOpen(prevState => !prevState); // Toggle the form open/close state
    };

    const [state, handleSubmit] = useForm("xzzbjbll");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    };
    const handleSubmits = (event) => {
        event.preventDefault(); 

        handleContact(event);

        handleSubmit(event);
    };
    return(
    <>
        <div className='formMainBox'>
            <div className='formBox1'>
                <h2 className='formTitle'> Contact Us </h2>
                <button className='closeForm' onClick={handleTheButtonClick}>X</button>
                <form 
                onSubmit={handleSubmits}>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                    />
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                    />
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <ValidationError 
                        prefix="Comment" 
                        field="comment"
                    />
                    <div className='divBtn'>
                        <button 
                            className='formBtn'
                            type="submit" 
                            >
                            Submit
                        </button>
                    </div>
                </form>
                <br/>
                {message && <p className='form'>{message}</p>}
            </div>
        </div>
    </>
    )
}
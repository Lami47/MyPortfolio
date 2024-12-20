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
            {isContactUsOpen? 'Close Contact Liam' : 'Contact Liam'}
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
        return;
    };
    const handleSubmits = (event) => {
        event.preventDefault(); 
        // validates
        handleContact(event);
        // sends email via formspree
        handleSubmit(event);
    };
    return(
    <>
        <div className='formMainBox'>
            <div className='formBox1'>
                <h2 className='formTitle'> Contact Liam </h2>
                <button className='closeForm' onClick={handleTheButtonClick}>X</button>
                <form 
                className='formContainer'
                onSubmit={handleSubmits}>
                    <label className='FormLabel' htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text" 
                        name="name"
                        value={name}
                        placeholder='John Doe / Smitty'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                    />
                    <label className='FormLabel' htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                    />
                    <label className='FormLabel' htmlFor="Comment">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        type='text'
                        name="comment"
                        placeholder=''
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
                            disabled={state.submitting}
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
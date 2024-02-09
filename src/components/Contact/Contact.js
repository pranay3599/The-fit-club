import React,{useRef} from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser"
const Contact = () => {
    const form=useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm('service_fn3bf79', 'template_nslqgb9', form.current,
        'N1shxzfVjLLqrE-6f'
        )
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };
        return (
    <section className="contact" id="contact">
    <h2 className="heading">Contact<span className='stroke-text'>Me!</span></h2>

    <form ref={form} onSubmit={sendEmail}>
        <div className="input-box">
            <div className="input-field">
                <input type="text" name="name" placeholder="Full Name" required/>
                <span className="focus"></span>
            </div>
            <div className="input-field">
                <input type="text" name="email" placeholder="E-mail Address" required/>
                <span className="focus"></span>
            </div>
        </div>

            <div className="input-box">
                <div className="input-field">
                    <input type="number" name="number" placeholder="Mobile Number" required/>
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="text" name="subject" placeholder="E-mail Subject" required/>
                    <span className="focus"></span>
                </div>
            </div>

                <div className="textarea-field">
                    <textarea name="message" id="" cols="30" rows="10"  placeholder="Your Message" required></textarea>
                    <span className="focus"></span>
                </div>
                <input type="hidden" name="_captcha" value="false"/>
                <div className="btn-box btns">
                    <button type="submit" className="btn" >submit </button>
                </div>
    </form>
</section>
  )
}

export default Contact;

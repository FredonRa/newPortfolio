import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import toast, { Toaster } from 'react-hot-toast';

import { SocialsArray } from './SocialsArray'
import { Fade } from 'react-reveal';

import BeatLoader from "react-spinners/BeatLoader";

const _renderSocials = SocialsArray.map((social, index) => {
    if(social.name !== "CV") {
        return (  
            <a href={social.link} key={index}>{social.icon}</a>
        );
    }
})

const Contact = () => {
    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState("")
    const [ name, setName ] = useState("")
    const [ nameError, setNameError ] = useState("")
    const [ subject, setSubject ] = useState("") 
    const [ subjectError, setSubjectError ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ pendingSend, setPendingSend ] = useState(false)

    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

    const cleanInputs = () => {
        setEmail("")
        setName("")
        setSubject("")
        setMessage("")
    }

    function sendEmail(e) {
        e.preventDefault();
        setPendingSend(true)
        var valid = true
        if (!email) {
            valid = false
            setEmailError("Debe ingresar un email para continuar")
        } else if (!regex.test(email)) {
            valid = false
            setEmailError("Debe ingresar un email válido para continuar")
        } else {
            setEmailError("")
        }

        if (!name) {
            valid = false
            setNameError("Debe ingresar un nombre para continuar")
        } else {
            setNameError("")
        }

        if (!subject) {
            valid = false
            setSubjectError("Debe ingresar un motivo de mensaje para continuar")
        } else {
            setSubjectError("")
        }

        if (valid) {
            emailjs.sendForm('service_q6lpm7q', 'template_042mktc', e.target, 'user_dsmdyG23Hd0fbXji75FuS')
              .then((result) => {
                toast.success('Mensaje enviado con éxito!')
                setPendingSend(false)
                cleanInputs("")
              }, (error) => {
                toast.error('Ocurrió un error, por favor vuelva a intentarlo en unos momentos')
                setPendingSend(false)
              });
        }
    }

    return (  
        <section className="contact" id="contact">
            <h2>Contacto</h2>
            <article>
                <Fade>
                    <form onSubmit={sendEmail}>
                    <div className="input">
                        <input 
                        type="text" 
                        className="input-field" 
                        pattern="\S+" 
                        name="user_name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                        />
                        <label className="input-label">Nombre</label>
                    </div>
                    <p style={{color: "red"}}>{nameError}</p>
                    <div className="input">
                        <input 
                        type="text" 
                        className="input-field" 
                        pattern="\S+" 
                        name="user_email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        />
                        <label className="input-label">Email</label>
                    </div>
                    <p style={{color: "red"}}>{emailError}</p>
                    <div className="input">
                        <input 
                        type="text" 
                        className="input-field" 
                        pattern="\S+" 
                        value={subject} 
                        name="user_subject" 
                        onChange={(e) => setSubject(e.target.value)} 
                        required
                        />
                        <label className="input-label">Motivo del mensaje</label>
                    </div>
                    <p style={{color: "red"}}>{subjectError}</p>
                    <div className="input">
                        <textarea 
                        type="text" 
                        className="input-field" 
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)} 
                        required
                         />
                        <label className="input-label">Mensaje</label>
                    </div>
                    <button type="submit" disabled={pendingSend ? true : false} className="input-button">{ pendingSend ? <BeatLoader size={12} style={{fontWeight: "100"}} /> : "Enviar" }</button>
                </form>
                </Fade>
                <div className="other-contacts">
                    <Fade>
                        <p>O</p>
                        <div className="contacts">
                            {_renderSocials}
                        </div>
                    </Fade>
                </div>
            </article>
            <Toaster 
                position="bottom-center"
                duration={15000}
                toastOptions={{
                    success: {
                        duration: 15000,
                    },
                    error: {
                        duration: 15000,
                    },
                }}
            />
        </section>
    );
}
 
export default Contact;
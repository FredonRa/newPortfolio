import React from 'react';

import { Fade } from 'react-reveal';

const AboutMe = () => {
    return (  
        <section className="container about-me" id="aboutMe">
            <Fade top>
                <h2>Sobre mi</h2>
            </Fade>
                <article>
                    <Fade top>
                        <p>Me llamo Federico Leiva, tengo 21 años y soy de Buenos Aires, Argentina.</p>
                        <p>A lo largo de mi carrera di mi aporte en proyectos web y mobile como Front End, tanto en diseño, como en funcionalidad.</p>
                        <p>También realicé proyectos propios con el fin de practicar y adquirir nuevos conocimientos.</p>
                    </Fade>
                </article>
                <article>
                    <a href="/Curriculum Vitae.pdf" download>Descargá mi CV ;)</a>
                </article>
        </section>
    );
}
 
export default AboutMe;
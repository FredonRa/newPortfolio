import React, { useState } from 'react';
import Link from 'next/link'
import {BsFillEmojiSunglassesFill, BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { SocialsArray } from './SocialsArray';

const _renderSocials = SocialsArray.map((social, index) => {
    return(
        <a className="navigation__social" href={social.link} key={index}>{social.icon}</a>
    )
})

const Header = (props) => {
    const [ checked, setChecked ] = useState(false)
    return (  
        <header className="header">
            <p className="header-title">Portfolio</p>
            <nav className="nav-desktop">
                <ul>
                    <li>
                        <a href="#welcome">Inicio</a>
                    </li>
                    <li>
                        <a href="#aboutMe">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#habilities">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                    <li>
                        <button onClick={props.toggleTheme} className="change-theme">
                            {props.theme == 'light' ? (
                                <BsFillMoonStarsFill color="#2e2e2e" />
                            ) : (
                                < BsFillSunFill color="#ffff" />
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={checked}  onClick={() => setChecked(!checked)}/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a onClick={() => setChecked(false)} href="#welcome" className="navigation__link"><span>01</span>Inicio</a></li>
                        <li className="navigation__item"><a onClick={() => setChecked(false)} href="#aboutMe" className="navigation__link"><span>02</span>Sobre mi</a></li>
                        <li className="navigation__item"><a onClick={() => setChecked(false)} href="#habilities" className="navigation__link"><span>03</span>Habilidades</a></li>
                        <li className="navigation__item"><a onClick={() => setChecked(false)} href="#projects" className="navigation__link"><span>04</span>Proyectos</a></li>
                        <li className="navigation__item"><a onClick={() => setChecked(false)} href="#contact" className="navigation__link"><span>05</span>Contacto</a></li>
                        <li><hr /></li>
                        <li>
                            <button className="change-theme" onClick={props.toggleTheme}>
                                {props.theme == 'light' ? (
                                    <BsFillMoonStarsFill color="#2e2e2e" />
                                ) : (
                                    < BsFillSunFill color="#ffff" />
                                )}
                            </button>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;
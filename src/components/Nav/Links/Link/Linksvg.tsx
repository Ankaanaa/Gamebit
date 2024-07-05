import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faScroll, faDragon } from '@fortawesome/free-solid-svg-icons';
import { faDAndD } from '@fortawesome/free-brands-svg-icons';
import "./Link.scss";
import { NavLink } from "react-router-dom";
import React from 'react';
const LinkSvg = () => {
    return (
        <div className='link'>
            <div className="link__li">
                <NavLink className="links__svg-s links__svg__small" to="/home"><FontAwesomeIcon  icon={faFortAwesome} className="links__svg-s links__svg__small" /></NavLink>
            </div>
            <div className="link__li">
            <NavLink className="links__svg-s links__svg__small" to="/search"><FontAwesomeIcon icon={faDAndD} className="links__svg-s links__svg__small" /></NavLink>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faDragon} className="links__svg-s links__svg__small" />
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faScroll} className="links__svg-s links__svg-4 links__svg__small" />
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faTrophy} className="links__svg-s links__svg-5 links__svg__small   " />
            </div>
        </div>
    )
}

export default LinkSvg;
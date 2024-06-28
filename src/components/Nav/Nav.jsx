import Links from "./Links/Links";
import "./Nav.scss"
import {faDungeon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkSvg from "./Links/Link/Linksvg";
const Nav = (props) => {
    return (
        <div className={`sidebar ${props.isCollapse ? "sidebar__collapse" : ""}`}>
            <div className="sidebar__title">
                <div className={`sidebar__title__icon ${props.isCollapse ? "sidebar__collapse-title" : ""}`}>
                    <div className="sidebar__icon"><img className="sidebar__image" src="https://ltdfoto.ru/images/2024/06/27/LogoWhiteFon.png" alt="" /></div>
                    {props.isVisible && 
                    <div className="sidebar__text">
                        <div className="sidebar__name">Game<span className="sidebar__span">bit</span></div>
                    </div>}
                </div>
            </div>
            <div>
            </div>
            <button className="sidebar__btn" onClick={props.toggleVisibility}><FontAwesomeIcon icon={faDungeon} className="sidebar__svg-toggle" /></button>
            {props.isVisible && <Links NavLink={props.NavLink} />}
            {!props.isVisible && <LinkSvg />}
        </div>
    );
}







export default Nav;
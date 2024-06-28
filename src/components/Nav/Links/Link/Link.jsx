import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faScroll, faDragon } from '@fortawesome/free-solid-svg-icons';
import { faDAndD } from '@fortawesome/free-brands-svg-icons';
import "./Link.scss";
const Link = () => {
    return (
        <div className='link'>
            <div className="link__li">
                <FontAwesomeIcon icon={faFortAwesome} className="links__svg" /><span className='link__span'>Главная</span>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faDAndD} className="links__svg" /> <span className='link__span'>Новости</span>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faDragon} className="links__svg" /> <span className='link__span'>Обзоры</span>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faScroll} className="links__svg links__svg-4" /> <span className='link__span'>Руководства и советы</span>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faTrophy} className="links__svg links__svg-5" /> <span className='link__span'>Рейтинги и топы</span>
            </div>
        </div>
    )
}

export default Link;
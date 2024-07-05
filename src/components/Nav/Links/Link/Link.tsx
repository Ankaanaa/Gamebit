import { faDAndD, faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faDragon, faScroll, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, KeyboardEvent } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { useData } from '../../../../hook/useData'
import "./Link.scss"

const Link = (props: any) => {
    const { setConsumerValue, inputValue, setInputValue } = useData();
    const navigate = useNavigate();
    const handleKeyEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            // if (inputValue.length > 0) {
                setConsumerValue(inputValue)
                setInputValue("")
                navigate("/search")
            // }
        }
    }
    const OnChangeValue = (el:ChangeEvent<HTMLInputElement>) => {
        setInputValue(el.target.value)
    }
    return (
        <div className='link'>
            <div className="link__li">
                <FontAwesomeIcon icon={faFortAwesome} className="links__svg" /><span className='link__span'><NavLink className="NavLink__link" to="/home">Главная</NavLink></span>
            </div>
            <div className="link__li">
                <FontAwesomeIcon icon={faDAndD} className="links__svg" /> <span className='link__span'><NavLink className="NavLink__link" to="/search">Новости</NavLink> </span>
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
            <input onKeyDown={handleKeyEnter} value={inputValue} onChange={OnChangeValue} className='link__search' type="text" name="" id="" />
        </div>
    )
}

export default Link;
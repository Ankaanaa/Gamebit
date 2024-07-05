
import { faCalendarDay, faComment, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./NewsBlock.scss"
interface props {
    text: string,
    img: string,
    description: string,
    // id?: number,
    key: number,
}
const NewsBlock = (props:props) => {
    return (
        <article className="NewsBlock">
            <a href="#">
                <div className="NewsBlock__body">
                    <div className="NewsBlock__icon"><img className="NewsBlock__img" src={props.img} alt="" /></div>
                    <div className="NewsBlock__block">
                        <h4 className="NewsBlock__text">{props.text}</h4>
                        <h5 className="NewsBlock__description">{props.description}</h5>
                        <div className="NewsBlock__user">
                            <div className=""><FontAwesomeIcon className="svg-icon" icon={faUser} /> by <span className="autor-name">Andrey Xyu</span> |</div>
                            <div className="NewsBlock__margin"><FontAwesomeIcon className="svg-icon" icon={faCalendarDay} /> 30 Jule |</div>
                            <div className="NewsBlock__margin"><FontAwesomeIcon className="svg-icon" icon={faComment} /> 0 Comments</div>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}


export default NewsBlock
import "./Novelty.scss"

interface props {
    text: string,
    img: string ,
    key: number,
}
const Novelty = (props:props) => {
    return (
        <article className="novelty">
            <a href="#">
                <div className="novelty__block"><img className="novelty__img" src={props.img} alt="" /></div>
                <h4 className="novelty__text">{props.text}</h4>
            </a>
        </article>
    )
}

export default Novelty;
import "./Headline.scss"

interface props {
    Notes?:"Рекомендуем",
    NotesNews?: "Новости",

}

const Headline = (props:props) => {
    return (
        <div className="testing">
            <h3 className="text__recomend">{props.Notes || props.NotesNews}</h3>
        </div>
    )
}

export default Headline;
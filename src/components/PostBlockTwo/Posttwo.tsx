import { NewsColumnType, PostAndNewsBlockType } from '../../BLL/store'
import News from "../News/News"
import Posts from "../Posts/Posts"
import Headline from "./Headline/Headline"
import NewsColumn from "./NewsColumn/NewsColumn"
import "./PostTwo.scss"
interface props {
    Post: {
        Post: PostAndNewsBlockType[];
        News: PostAndNewsBlockType[];
        NewsColumn: NewsColumnType[];
        Notes: "Рекомендуем";
        NotesNews: "Новости";
    },
    isSize: boolean,
}
const Posttwo = (props:props) => {
    return (
        <div>
            <Posts Post={props.Post.Post} />
            <Headline Notes={props.Post.Notes} />
            <News News={props.Post.News} />
            <Headline NotesNews={props.Post.NotesNews} />
            <NewsColumn NewsColumn={props.Post.NewsColumn} />
        </div>
    )
}




export default Posttwo;
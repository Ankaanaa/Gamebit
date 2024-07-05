import { NewsColumnType } from '../../../BLL/store'
import NewsBlock from "./NewsBlock/NewsBlock"
import "./NewsColumn.scss"

interface props {
  NewsColumn: NewsColumnType[],
}

const NewsColumn = (props:props) => {
    const OneColumnPosts = props.NewsColumn.filter((el, index) => index === 0 || index === 1 || index === 2 || index === 3 || index === 4 )
    .map((el:NewsColumnType) => <NewsBlock text={el.text} description={el.description} img={el.img} key={el.id} />);
    return (
      <section className="newsColumn">
        {props.NewsColumn && OneColumnPosts}
      </section>  
    )
}

export default NewsColumn;
import { memo } from 'react'
import { NewsColumnType } from '../../../BLL/store'
import NewsBlock from './NewsBlock/NewsBlock'
import './NewsColumn.scss'
interface props {
	NewsColumn: NewsColumnType[]
}
interface BlogContent {
	articles: {
		author: string
		title: string
		description: string
		content: string
		publishedAt: string
		urlToImage: string
		url: string
	}[]
}

interface NewsColumnProps {
	Content: BlogContent | undefined
}
const NewsColumnNomemo = (props: NewsColumnProps) => {
	// const [BlogContent, setBlogContent] = useState<BlogContent>()
	// const [error, setError] = useState(null)

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=836af64713b54e1188b0513dccf80e8a'
	// 		)
	// 		.then(response => {
	// 			setBlogContent(response.data)
	// 		})
	// 		.catch(error => {
	// 			setError(error)
	// 		})
	// }, [])

	const ColumnPostApi = props.Content?.articles
		.filter(
			(el, index) =>
				index === 0 ||
				index === 1 ||
				index === 2 ||
				index === 3 ||
				index === 4 ||
				index === 5 ||
				index === 6
		)
		.map(el => (
			<NewsBlock
				text={el.title}
				description={el.description}
				img={el.urlToImage}
				author={el.author}
				key={el.title}
				pusblisdate={el.publishedAt}
			/>
		))

	// const OneColumnPosts = props.NewsColumn.filter((el, index) => index === 0 || index === 1 || index === 2 || index === 3 || index === 4 )
	// .map((el:NewsColumnType) => <NewsBlock text={el.text} description={el.description} img={el.img} key={el.id} />);

	// props.NewsColumn &&
	return <section className='newsColumn'>{ColumnPostApi}</section>
}
const NewsColumn = memo(NewsColumnNomemo)

export default NewsColumn

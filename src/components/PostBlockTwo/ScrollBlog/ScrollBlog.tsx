import { memo } from 'react'
import './ScrollBlog.scss'

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
const ScrollBlogK = (props: NewsColumnProps) => {
	return (
		<section className='ScrollBlog'>
			<h2>Recent Game Reviews</h2>
			<BlogNameBlock Content={props.Content} />
		</section>
	)
}
const ScrollBlog = memo(ScrollBlogK)
export default ScrollBlog

export const BlogNameBlock = (props: NewsColumnProps) => {
	const BlogAPIContent = props.Content?.articles
		.filter(
			(el, index: number) =>
				index === 7 ||
				index === 8 ||
				index === 9 ||
				index === 4 ||
				index === 3 ||
				index === 2 ||
				index === 1 ||
				index === 6 ||
				index === 5
		)
		.map(el => (
			<ContentBlogScroll title={el.title} key={el.url} img={el.urlToImage} />
		))

	return (
		<article className='ScrollBlog__blog'>
			<div className='ScrollBlog__body'>{BlogAPIContent}</div>
		</article>
	)
}

interface ContenBlog {
	title: string | undefined
	urlToImage: string | undefined
}

const ContentBlogScroll = (props: any) => {
	return (
		<div className={`ScrollBlog__column `}>
			<div className='ScrollBlog__icon'>
				<img className='ScrollBlog__img' src={props.img} alt='' />
			</div>
			<h4 className='ScrollBlog__text'>{props.title}</h4>
		</div>
	)
}

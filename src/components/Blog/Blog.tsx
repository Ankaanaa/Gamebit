import './Blog.scss'

export const Blog = (props: any) => {
	const ScrollUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	ScrollUp()
	return (
		<div className='Blog'>
			<h4 className='Blog__name'>{props.name}</h4>
			<h1>{props.text}</h1>
		</div>
	)
}

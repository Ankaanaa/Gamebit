import Link from './Link/Link'
import './Links.scss'

const Links = (props: any) => {
	return (
		<div className='links'>
			<div className='links__body'>
				<Link dispatch={props.dispatch} />
			</div>
		</div>
	)
}

export default Links

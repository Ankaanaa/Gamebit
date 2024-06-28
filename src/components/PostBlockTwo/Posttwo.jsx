import Posts from "../Posts/Posts";
import "./PostTwo.scss"

const Postwo = (props) => {
    return (
        <div className='blog__body'>
            <div className='blog__column'>
                <Posts Post={props.Post} />
            </div>
        </div>
    )
}




export default Postwo;
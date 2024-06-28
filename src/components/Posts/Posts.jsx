
import Post from "./Post/Post";
import "./Posts.scss"
const Posts = (props) => {
    const PostBlock = props.Post.map((el) => <Post text={el.text} key={el.id} img={el.img} lastBlockClass={el.class} />)
    return (
        <section className="section">
            <div className="section__wrap">
                {PostBlock}
            </div>
        </section>
    )
}



export default Posts;

import { useState } from "react";
import Homepost from "./Homepost/Homepost";
import Post from "./Post/Post";
import "./Posts.scss"
const Posts = (props) => {
    const [MyPost, SetMyPost] = useState(props.Post);
    console.log(MyPost)

    const PostBlock = props.Post.map((el) => <Post text={el.text} key={el.id} img={el.img} lastBlockClass={el.class} />)
    return (
        <section className="section">
            <div className="section__column">
                {MyPost.boolean && PostBlock}
            </div>
            <div className="section__column-2">
                <Homepost />
            </div>
            <div className="section__column">
                {PostBlock}
            </div>
        </section>
    )
}



export default Posts;
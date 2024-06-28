import "./HomePost.scss";

const Homepost = (props) => {
    return (
        <article className={`homePost `}>
            <a href="#" className="homePost__a">
                <div className="homePost__img"><img className="homePost__icn" src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png" alt="" /></div>
                <h3 className="homePost__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse et debitis blanditiis facere quia odit.</h3>
            </a>
        </article>
    )
}



export default Homepost;
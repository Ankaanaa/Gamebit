import React, { useState } from "react"
import Nav from "./Nav"

type props = {
    setSize: React.Dispatch<React.SetStateAction<boolean>>,
    isSize: boolean,

}

const NavContainer = (props:props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsCollapse(!isCollapse);
        props.setSize(!props.isSize)
    };

    return (
        <Nav   isVisible={isVisible} isCollapse={isCollapse} toggleVisibility={toggleVisibility}/>
    );
}







export default NavContainer;
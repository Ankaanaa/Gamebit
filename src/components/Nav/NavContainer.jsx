
import React, { useState } from "react";
import Nav from "./Nav";

const NavContainer = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsCollapse(!isCollapse);
    };

    return (
        <Nav isVisible={isVisible} isCollapse={isCollapse} toggleVisibility={toggleVisibility}/>
    );
}







export default NavContainer;
import Search from "./Search/Search";
import "./SearchPage.scss"
import React from 'react';
const SearchPage = (props:any) => {
    return (
        <div className="Search__wrapper">
            <div className="Search__container">
                <h2 className="Search__title">Search</h2>
                <Search />
            </div>
        </div>
    )
};


export default SearchPage;
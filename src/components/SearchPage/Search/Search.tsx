import { ChangeEvent } from 'react'
import { useData } from "../../../hook/useData"
import "./Search.scss"
const Search = (props:any)  => {
    const { setConsumerValue, consumerValue } = useData();
    const ChangeInputSearch = (el:ChangeEvent<HTMLInputElement>) => {
        setConsumerValue(el.target.value)
    }
    return (
        <div className="search">
            <input onChange={ChangeInputSearch}  value={consumerValue}  className="search__input" type="text" />
            <button className="search__btn">Search</button>
        </div>
    )
}


export default Search;
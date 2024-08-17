import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChangeEvent, useEffect, useState } from 'react'
import { useData } from '../../../hook/useData'
import './Search.scss'
import { SearchResult } from './SearchResult/SearchResult'
interface props {
	dispatch: React.Dispatch<string>
	activeBtn: HTMLElement | null | string
	activeRequestBtn: HTMLElement | null
	setActiveRequestBtn: React.Dispatch<React.SetStateAction<HTMLElement | null>>
	setActiveBtn: React.Dispatch<
		React.SetStateAction<HTMLElement | null | string>
	>
}
const Search = (props: props) => {
	const { setConsumerValue, consumerValue, TextAtlSearch } = useData()
	const [RequestData, setRequestData] = useState<any[]>([])
	const [isSearchResult, setIsSearchResult] = useState<boolean>(false)
	const ChangeInputSearch = (el: ChangeEvent<HTMLInputElement>) => {
		setConsumerValue(el.target.value)
		if (el.target.value.length < 0) {
			setIsSearchResult(false)
		}
		setIsSearchResult(true)
	}
	const addRequestData = (value: string) => {
		if (consumerValue.length > 0) {
			setRequestData(prevData => {
				const newData = [value, ...prevData]
				if (newData.length > 4) {
					newData.pop()
				}
				return newData
			})
		}
	}

	const ClearActiveBtnAndRequestBtnAndSearchResult = () => {
		if (isSearchResult) {
			setIsSearchResult(false)
		}
		if (props.activeRequestBtn) {
			props.setActiveRequestBtn(null)
		}
		if (props.activeBtn) {
			props.setActiveBtn(null)
		}
	}

	const SearchHandleEnter = (event: any) => {
		if (event.key === 'Enter') {
			ClearActiveBtnAndRequestBtnAndSearchResult()
			props.dispatch(consumerValue)
			addRequestData(consumerValue)
		}
	}
	const SearchHandleClick = () => {
		ClearActiveBtnAndRequestBtnAndSearchResult()
		props.dispatch(consumerValue)
		addRequestData(consumerValue)
	}

	return (
		<div className='search'>
			<div className='search__body'>
				<input
					ref={TextAtlSearch}
					onChange={ChangeInputSearch}
					onKeyDown={SearchHandleEnter}
					value={consumerValue}
					className='search__input'
					type='text'
				/>
				<button className='search__btn' onClick={SearchHandleClick}>
					Search
				</button>
			</div>
			{consumerValue.length > 0 && isSearchResult && (
				<SearchResult
					setIsSearchResult={setIsSearchResult}
					dispatch={props.dispatch}
					isSearchResult={isSearchResult}
				/>
			)}
			<Request
				isSearchResult={isSearchResult}
				setIsSearchResult={setIsSearchResult}
				dispatch={props.dispatch}
				RequestData={RequestData}
				setRequestData={setRequestData}
				setActiveRequestBtn={props.setActiveRequestBtn}
				activeRequestBtn={props.activeRequestBtn}
				activeBtn={props.activeBtn}
				setActiveBtn={props.setActiveBtn}
			/>
		</div>
	)
}

const Request = (props: any) => {
	const { setConsumerValue } = useData()
	const [requestData, setRequestData] = useState(props.RequestData)
	useEffect(() => {
		setRequestData(props.RequestData)
	}, [props.RequestData])

	const RequestClick = (el: any) => {
		if (props.isSearchResult) {
			props.setIsSearchResult(false)
		}
		props.setActiveRequestBtn(el)
		if (props.activeBtn) {
			props.setActiveBtn(null)
		}
		props.dispatch(el)
		setConsumerValue(el)
		return () => {
			props.dispatch(el)
			setConsumerValue(el)
		}
	}
	const FilterRequest = requestData.map((el: any, index: number) => (
		<div
			onClick={() => RequestClick(el)}
			className={`Request ${props.activeRequestBtn === el ? 'activebar' : ''}`}
			key={index}
		>
			{el}
		</div>
	))
	const DeleteRequest = () => {
		setRequestData([])
		props.setRequestData([])
	}
	return (
		<>
			{FilterRequest.length > 0 ? FilterRequest : null}{' '}
			{FilterRequest.length > 0 ? (
				<div onClick={DeleteRequest} className='deleteRequest'>
					<FontAwesomeIcon icon={faRotateRight} />
					<span className='deleteRequest_text'>clear</span>
				</div>
			) : null}
		</>
	)
}

export default Search

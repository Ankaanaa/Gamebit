import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import './App.css'
import NavContainer from './components/Nav/NavContainer'
import Posttwo from './components/PostBlockTwo/Posttwo'
import SearchPage from './components/SearchPage/SearchPage'
function App(props:any) {
  const [isSize, setSize] = useState<boolean>(true)
  return (
    <div className="app-wrapper">
      <div className='img-fon'><img className='img-fon-1' alt="" src='https://cdnb.artstation.com/p/assets/images/images/063/372/461/large/it-s-thor-map-bnw.jpg?1685388459' /></div>
      <NavContainer  setSize={setSize}    isSize={isSize} />
      <main className='page-content'>
        <div  className={`blog__body ${isSize ? "blog__resize" : ""}`}>
          <Routes>
            <Route path='/home' element={<Posttwo Post={props.data.getState().PageContent} isSize={isSize} />} />
            <Route path='/search' element={<SearchPage   />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;

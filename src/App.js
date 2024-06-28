import './App.css';
import { Route, Routes } from "react-router-dom";
import NavContainer from './components/Nav/NavContainer';
import Postwo from './components/PostBlockTwo/Posttwo';

function App(props) {
  return (
    <div className="app-wrapper">
      <NavContainer />
      <main className='page-content'>
        <Postwo Post={props.data.getState().PageContent.Post} />
      </main>
    </div>
  );
}

export default App;

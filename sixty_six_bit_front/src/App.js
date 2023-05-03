import {Routes, Route} from 'react-router-dom';
import AddFootballer from "./pages/addFootballerPage";
import ShowFootballer from "./pages/showFootballerPage";
import ChangeFootballer from "./pages/changeFootballerPage";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<AddFootballer/>}/>
          <Route path="showFootballer" element={<ShowFootballer/>}/>
          <Route path="changeFootballer" element={<ChangeFootballer/>}/>
        </Routes>
      </>
  )
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
* */

export default App;

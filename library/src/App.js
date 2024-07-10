import logo from "./logo.svg";
import "./App.css";
import Books from "./Books";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Books
          id="1"
          title="مقدمة ابن خلدون "
          author="ابن خلدون "
          isbn="1289499030"
        />
        <Books
          id="2"
          title="الحاوي في الطب "
          author="ابو بكر الرازي "
          isbn="893847239479"
        />
      </header>
    </div>
  );
}

export default App;

import logo from './assets/logo.svg';
import './App.css';

import { Provider } from './components/ui/provider';
import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    </Provider>
  )
}

export default App;

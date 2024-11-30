import logo from '../../assets/logo.svg';
import './styles.css';

import { Provider } from '../../components/ui/provider';
import Navbar from '../../components/navbar/NavBar';
import { useEffect } from 'react';

function Home() {
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
            aaaaaaaaaaaaaaa
          </a>
        </header>
      </div>
    </Provider>
  )
}

export default Home;

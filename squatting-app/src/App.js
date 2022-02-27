import { useEffect } from "react";

import Web3ContextProvider from "./context/Web3Context";
import PopupContextProvider from "./context/PopupContext";

import Main from "./pages/Main/Main";
import Popups from "./components/Popups/Popups";

import { ToastContainer } from 'react-toastify';

import renderer from './utils/renderer'


const App = () => {
  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <Web3ContextProvider>
      <PopupContextProvider>
        <div style={{overflow: 'hidden'}} className="App">
          <Main/>
          <Popups/>
          <ToastContainer/>
        </div>
      </PopupContextProvider>
    </Web3ContextProvider>
  );
}

export default App;

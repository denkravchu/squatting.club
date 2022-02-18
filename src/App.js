import { useEffect } from "react";

import Web3ContextProvider from "./context/Web3Context";

import Main from "./pages/Main/Main";

import renderer from './utils/renderer'


const App = () => {
  useEffect(() => {
    renderer.render()
    renderer.useMouseEvent()
  }, [])

  return (
    <Web3ContextProvider>
      <div style={{overflow: 'hidden'}} className="App">
        <Main/>
      </div>
    </Web3ContextProvider>
  );
}

export default App;

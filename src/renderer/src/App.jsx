import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <div className=""></div>
  )
}

export default App


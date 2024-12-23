import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ServerOn from './pages/ServerOn';


function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/StartServer' element={<ServerOn /> } />
      </Routes>
    </Router>
  )
}

export default App


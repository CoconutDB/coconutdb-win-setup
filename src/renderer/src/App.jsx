import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Dev from './pages/Dev';


function App() {
  const ipcHandle = () => window.Electron.ipcRenderer.send('ping')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dev" element={<Dev /> } />
      </Routes>
    </Router>
  )
}

export default App


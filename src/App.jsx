
import { files } from './data';
import './App.css'
import Folder from './Folder'

function App() {
  

  return (
    <div className='App'>
      <h1>Folder Structure</h1>
      <Folder files={files}/>
      
    </div>
  )
}

export default App

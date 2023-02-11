import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <div>
                <img src="/knight.png" className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>Knight UI</h1>
        </div>
    )
}

export default App

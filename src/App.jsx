import './App.css'
import { useState } from 'react'

function App() {
  
    const [name, setName] = useState("Sofia")
    
    const changeName = (newName) => {
        setName(name = newName)
    }
    
    return (
        <div>
            <h2>Teacher Name : {name}</h2>
            
            <ul>
                <li onClick={changeName("Data")}>Data</li>
                <li onClick={changeName("Reyes")}>Reyes</li>
                <li onClick={changeName("Yolanda")}>Yolanda</li>
            </ul>
        </div>
    )
      
}

export default App

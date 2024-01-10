import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InputControlForm from './components/InputControlForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <InputControlForm />
      </div>
    </>
  )
}

export default App

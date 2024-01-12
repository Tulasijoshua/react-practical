import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InputControlForm from './components/InputControlForm'
import LazyComponent from './components/LazyComponent'

function App() {

  return (
    <>
      <div>
        {/* <InputControlForm /> */}
        <LazyComponent />
      </div>
    </>
  )
}

export default App

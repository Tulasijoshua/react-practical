import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InputControlForm from './components/InputControlForm'
import LazyComponent from './components/LazyComponent'
import LazyLoad from './components/LazyLoad'

function App() {

  return (
    <>
      <div>
        {/* <InputControlForm /> */}
        <LazyLoad />
      </div>
    </>
  )
}

export default App

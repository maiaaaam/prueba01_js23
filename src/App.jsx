import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [txt, setTxt] = useState("Barcelona");
  const element = <FontAwesomeIcon icon={faEnvelope} />

  return(
    <>
      {element}
      <hr/>
      <input value={txt} onInput={(e) => setTxt(e.target.value)}/>
      <hr/>
      <Banner texte={txt.toUpperCase()}/>
    </>
  )
}

export default App

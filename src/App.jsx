import { useFirebaseValues } from './hooks/useFirebaseValues'
import {addFirebaseItem} from './services/firebaseService.js'
import { objectToArray } from './utils/arrayUtils.js'
import MessageList from './components/MessageList.jsx'
import { useState } from 'react'

function App() {
  const [messagesData, loadingMessages] = useFirebaseValues("messages", {})
  const [texte, setTexte ] = useState("");
  return <>
    {loadingMessages ? <p>Chargement...</p> : <MessageList messages={objectToArray(messagesData)} />}
    <input value={texte} onChange={((e)=>setTexte(e.target.value))}></input>
    <button onClick={() => {
      addFirebaseItem("messages", { content: texte, sentAt: new Date().toISOString() });
      setTexte("")
    }}>envoyer</button>
  </>
}

export default App

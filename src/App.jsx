import { useFirebaseValues } from './hooks/useFirebaseValues'
import {addFirebaseItem} from './services/firebaseService.js'
import { objectToArray } from './utils/arrayUtils.js'
import MessageList from './components/MessageList.jsx'
import { useState } from 'react'

function App() {
  const [messagesData, loadingMessages] = useFirebaseValues("messages", {})
  const [texte, setTexte ] = useState("");
  const [users, loadingUsers] = useFirebaseValues("Utilisateur", {})
  const [selectedUser, setSelectedUser] = useState(null) ;

  return <>
    <select onChange={(e) => setSelectedUser(e.target.value)}>
      <option value="">-- Choisir --</option>
      {objectToArray(users).map((user) => (
        <option key={user._id} value={user._id}>{user.Nom}</option>
      ))}
    </select>
    {!selectedUser ? <p>Sélectionnez un utilisateur</p> : 
      loadingMessages ? <p>Chargement...</p> : <MessageList messages={objectToArray(messagesData)} users={users} selectedUser={selectedUser} />
    }
    <input value={texte} onChange={((e)=>setTexte(e.target.value))}></input>
    <button onClick={() => {
      addFirebaseItem("messages", { content: texte, sentAt: new Date().toISOString(), senderId: selectedUser });
      setTexte("")
    }}>envoyer</button>
  </>
}

export default App

import { useFirebaseValues } from './hooks/useFirebaseValues'
import { addFirebaseItem, signInWithGoogle, signOutUser } from './services/firebaseService.js'
import { objectToArray } from './utils/arrayUtils.js'
import MessageList from './components/MessageList.jsx'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './main.jsx'

function App() {
  const [messagesData, loadingMessages] = useFirebaseValues("messages", {})
  const [texte, setTexte] = useState("");
  const [users] = useFirebaseValues("Utilisateur", {})
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  if (!currentUser) {
    return <button onClick={signInWithGoogle}>Se connecter avec Google</button>
  }

  return <>
    <p>Connecté : {currentUser.displayName}</p>
    <button onClick={signOutUser}>Se déconnecter</button>
    {loadingMessages ? <p>Chargement...</p> : <MessageList messages={objectToArray(messagesData)} users={users} currentUser={currentUser} />}
    <input value={texte} onChange={(e) => setTexte(e.target.value)}></input>
    <button onClick={() => {
      addFirebaseItem("messages", { content: texte, sentAt: new Date().toISOString(), senderId: currentUser.uid });
      setTexte("")
    }}>envoyer</button>
  </>
}

export default App

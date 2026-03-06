import { useFirebaseValues } from './hooks/useFirebaseValues'
import {updateFirebaseValue} from './services/firebaseService.js'

function App() {
  const [compteur, loading] = useFirebaseValues("compteur")

  return (
    <>
      <h1>Compteur</h1>
      {loading ? <p>Chargement...</p> : <p>Valeur : {compteur}</p>}
      <button onClick={() => updateFirebaseValue("compteur",compteur+1)}>+1</button>
    </>
  )
}

export default App

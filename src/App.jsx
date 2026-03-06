import { useFirebaseValues } from './hooks/useFirebaseValues'
import {updateFirebaseValue} from './services/firebaseService.js'

function App() {
  const [compteur, loading] = useFirebaseValues("compteur")

  const [utilisateur, loadingBis] = useFirebaseValues("utilisateur", {})

  return (
    <>
      <h1>Compteur</h1>
      {loading ? <p>Chargement...</p> : <p>Valeur : {compteur}</p>}
      <button onClick={() => updateFirebaseValue("compteur",compteur+1)}>+1</button>
      {loadingBis ? <p>Chargement...</p> : <div>
        <label>Nom : </label>
        <input value={utilisateur.nom} onChange={(change) => updateFirebaseValue("utilisateur/nom",change.target.value)}/>
        <label>Prénom : </label>
        <input onChange={(change) => updateFirebaseValue("utilisateur/prenom",change.target.value)} value={utilisateur.prenom}/>
        <label>Âge : </label>
        <input type="number" onChange={(change) => updateFirebaseValue("utilisateur/age",change.target.value)} value={utilisateur.age}/>
      </div>}
    </>
  )
}

export default App

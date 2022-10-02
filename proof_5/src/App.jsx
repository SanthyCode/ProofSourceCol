import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Characters from './components/Characters'

function App() {

  const [ids, setIds] = useState()
  
  
  useEffect(()=>{
    
      let URL = `https://rickandmortyapi.com/api/character/`

      axios.get(URL)
        .then(res => setIds(res.data))
        .catch(err => console.log(err))

  },[])


  return (
    <div className="App">
      {
        ids?.results.map(character =>(
          <Characters 
          key={character.id}
          character={character}
          />
        ))
      }
    </div>
  )
}

export default App

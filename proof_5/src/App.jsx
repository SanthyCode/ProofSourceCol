import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Characters from './components/Characters'
import Header from './components/Header'
import Pagination from './components/Pagination'

function App() {

  const [ids, setIds] = useState()
  
  
  useEffect(()=>{
    
      let URL = `https://rickandmortyapi.com/api/character/`

      axios.get(URL)
        .then(res => setIds(res.data))
        .catch(err => console.log(err))

  },[])
  // console.log(ids)


  return (
    <div className="App">
      <Header />
      <section className='container'>
      {
        ids?.results.map(character =>(
          <Characters 
          key={character.id}
          character={character}
          />
        ))
      }

      </section>
      <section>
      {
          <Pagination 
          setIds={setIds}
          ids={ids}
          />
      }

      </section>
    </div>
  )
}

export default App

import React, { useState,useEffect} from 'react'
import Search from './components/search';
import Character from './components/characters'
import Data from './services/data'
const App=()=>{
    const [search,setSearch]=useState('')
    const [characters,setCharacters]=useState([])

    useEffect(() => {
        console.log('effect')
        Data
          .getAll()
          .then(response => {
            //console.log('promise fulfilled')
            setCharacters(response)
          })
      }, [])

    const handlesearchchange=(event)=>{
        setSearch(event.target.value);
    }
return(
    <div>
        <h1> All About Marvel</h1>
        <Search searchval={search} searchchange={handlesearchchange}/>
        <Character search={search} characters={characters} setCharacters={setCharacters} />
    </div>
)
}
export default App;
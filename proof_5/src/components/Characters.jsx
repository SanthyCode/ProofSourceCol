import React from 'react'

const Characters = ({character}) => {
console.log(character)
  return (
      <div>
      <ul className='container_list'>
        <img src={character.image} alt="photo of character" />
        <li>{character.name}</li>
        <li>{character.gender}</li>
        <li>{character.species}</li>
        <li>{character.status}</li>
        <li>{character.origin.name}</li>
      </ul>
    <hr />
      </div>
      )
}

export default Characters
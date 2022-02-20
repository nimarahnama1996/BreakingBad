import React from 'react'


import Spinner from '../ui/Spinner'
import CharacterItem from './CharactersItem'


const CharactersGrid = ({items,isLoading}) => {
    return isLoading ? (
        <Spinner/>
      ) : (
        <section className='cards'>
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item}/>
          ))}
        </section>
      )
}

export default CharactersGrid
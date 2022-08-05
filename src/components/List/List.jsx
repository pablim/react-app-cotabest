import React from "react";
import './list.scss'

const List = (props) => {
    
    const {
        characterList
    } = props

    return (
        <div className='d-flex flex-wrap gap-2 justify-content-center mt-5'>
            {characterList?.length > 0 ? 
              
              characterList?.map((character) => (
                <div 
                  role="card-list-item-showed"
                  key={character.id} 
                  className='d-flex rounded'
                  style={{
                    backgroundColor: 'white', 
                    width: '400px'
                  }}
                >
                  <div className='m-2 '>
                    <img alt="Avatar" className='rounded' src={character.image} width="100"/>
                  </div>
                  <div className='d-flex flex-column m-2'>
                    <div className='fs-5 fw-bold text-nowrap'>{character.name}</div>
                    <div>Gender: {character.gender}</div>
                    <div>Status: {character.status}</div>
                    <div>Species: {character.species}</div>
                  </div>
                </div>
              ))
              : (
                <div 
                  className="empty-list"
                  role="empty-list"
                >
                  Nothing here
                </div>
              )
            }
          </div>
    )
}

export default List